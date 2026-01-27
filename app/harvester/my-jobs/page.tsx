"use client";

import Link from "next/link";
import {
  FiAward,
  FiCalendar,
  FiCheck,
  FiClipboard,
  FiDollarSign,
  FiHome,
  FiLogOut,
  FiMapPin,
  FiMaximize2,
  FiSearch,
  FiUser,
} from "react-icons/fi";
import Image from "next/image";
import { GiTreeBranch } from "react-icons/gi";
import { useEffect, useState } from "react";
import {
  AvatarSkeleton,
  BookingCardSkeleton,
  EmptyState,
} from "@/components/Components";
import userjson from "@/json/user.json";
import axios from "axios";
import bookingsJson from "@/json/bookings.json";
import { toast, ToastContainer } from "react-toastify";
import { setFormatAmout } from "@/utils/formatters";
import { handleLogout } from "@/utils/others";
import { getUserByUserName } from "@/api/user";
import {
  getAllBookingsByHarvesterName,
  updateBookingById,
} from "@/api/booking";

const MyTasks = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [categoryBtn0, setCategoryBtn0] = useState(true);
  const [categoryBtn1, setCategoryBtn1] = useState(false);
  const [categoryBtn2, setCategoryBtn2] = useState(false);
  const [categoryTxt, setCategoryTxt] = useState("all");
  const [user, setUser] = useState(userjson);
  const [bookings, setBookings] = useState(bookingsJson);
  const [loadingPage, setLoadingPage] = useState(true);
  const [completeBtnLoading, setCompleteBtnLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const userName = localStorage.getItem("userName");

      const result = await getAllBookingsByHarvesterName(token, userName);

      // const result = await axios.get(
      //   `http://localhost:8085/api/v1/bookings/harvester/${userName}`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   },
      // );

      setBookings(result.data.dataBundle);

      const result1 = await getUserByUserName(userName, token);

      // const result1 = await axios.get(
      //   `http://localhost:8085/api/v1/user/${userName}`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   },
      // );

      setUser(result1.data.dataBundle);
    } catch (error) {
    } finally {
      setLoadingPage(false);
    }
  };

  const handleComplete = async (id: number | string) => {
    setCompleteBtnLoading(true);

    const token = localStorage.getItem("jwtToken");

    if (!token) {
      toast.error("Authentication required");
      return;
    }

    try {
      const jsonData = {
        bookingId: Number(id),
        status: "COMPLETED",
        rate: false,
      };

      await updateBookingById(token, jsonData);
      // await axios.put(
      //   "http://localhost:8085/api/v1/bookings/update",
      //   {
      //     bookingId: Number(id),
      //     status: "COMPLETED",
      //     rate: false,
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   },
      // );

      toast.success("Job completed");
    } catch (err: any) {
      if (err.response) {
        toast.error("Job complete failed");
      } else if (err.request) {
        toast.error("Server not reachable");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setCompleteBtnLoading(false);
      loadData();
    }
  };

  return (
    <div className="flex min-h-screen h-dvh bg-white font-sans text-green-900 text-sm md:flex-row flex-col">
      <div className="bg-green-400 md:w-15 w-full text-white flex md:flex-col flex-row md:justify-start justify-evenly  items-center p-2 gap-2">
        <Link
          href="/harvester/home"
          className="relative group flex items-center hover:bg-black/20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
        >
          <FiHome size={20} />
          <span className="absolute left-full ml-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Home
          </span>
        </Link>
        <Link
          href="/harvester/my-jobs"
          className="relative group flex items-center bg-black/40 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
        >
          <FiClipboard size={20} />
          <span className="absolute left-full ml-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            My Jobs
          </span>
        </Link>
        <div
          className="relative group flex items-center hover:bg-black/20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
          onClick={async () => {
            handleLogout("/harvester/login");
          }}
        >
          <FiLogOut size={20} />
          <span className="absolute left-full ml-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Logout
          </span>
        </div>
      </div>
      <div className="bg-green-100 w-full flex flex-col pt-5 pl-5 pr-5 gap-5">
        <div className=" bg-white p-2 rounded-full flex flex-row justify-between items-center">
          <div className="font-bold text-2xl flex flex-row gap-2 justify-start items-center">
            <Image src="/logo2.png" alt="image" width={50} height={50} />
            CocoHarvest
          </div>
          <Link
            className="relative group cursor-pointer"
            href="/harvester/profile"
          >
            {loadingPage ? (
              <AvatarSkeleton />
            ) : (
              <Image
                width={0}
                height={0}
                src={`data:image/jpeg;base64,${user.userImage}`}
                alt=""
                className="rounded-full h-12 w-12"
              />
            )}
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="absolute top-full mt-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Profile
            </span>
          </Link>
        </div>
        <h1 className="text-2xl font-bold">My tasks</h1>
        <div className="flex md:flex-row flex-col gap-2">
          <div className="flex flex-row gap-2 p-2 rounded-full bg-white md:w-1/2 w-full">
            <FiSearch size={20} />
            <input
              value={searchTxt}
              placeholder="search by location"
              className="w-full focus:outline-none"
              onChange={(e) => {
                setSearchTxt(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-row gap-1 w-fit">
            <div
              className={`flex flex-row gap-2 p-2 justify-center items-center rounded-lg w-fit font-bold ${
                categoryBtn0
                  ? "bg-gradient-to-r from-blue-400 to-blue-700 text-white"
                  : "border-2 border-blue-400 text-blue-400"
              } cursor-pointer transition duration-300 ease-in-out hover:from-blue-500 hover:to-blue-800`}
              onClick={() => {
                setCategoryTxt("all");
                setCategoryBtn0(true);
                setCategoryBtn1(false);
                setCategoryBtn2(false);
              }}
            >
              <span>All</span>
            </div>
            <div
              className={`flex flex-row gap-2 p-2 justify-center items-center rounded-lg w-fit font-bold ${
                categoryBtn1
                  ? "bg-gradient-to-r from-blue-400 to-blue-700 text-white"
                  : "border-2 border-blue-400 text-blue-400"
              } cursor-pointer transition duration-300 ease-in-out hover:from-blue-500 hover:to-blue-800`}
              onClick={() => {
                setCategoryTxt("PROGRESS");
                setCategoryBtn0(false);
                setCategoryBtn1(true);
                setCategoryBtn2(false);
              }}
            >
              <span>progress</span>
            </div>
            <div
              className={`flex flex-row gap-2 p-2 justify-center items-center rounded-lg w-fit font-bold ${
                categoryBtn2
                  ? "bg-gradient-to-r from-blue-400 to-blue-700 text-white"
                  : "border-2 border-blue-400 text-blue-400"
              } cursor-pointer transition duration-300 ease-in-out hover:from-blue-500 hover:to-blue-800`}
              onClick={() => {
                setCategoryTxt("COMPLETED");
                setCategoryBtn0(false);
                setCategoryBtn1(false);
                setCategoryBtn2(true);
              }}
            >
              <span>complete</span>
            </div>
          </div>
        </div>
        {loadingPage ? (
          <BookingCardSkeleton />
        ) : bookings.length === 0 ? (
          <EmptyState message="No tasks found." />
        ) : (
          <div className="flex flex-col gap-5 overflow-y-auto h-dvh [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
            {bookings
              .filter((e) => {
                const matchesSearch = e.address
                  ?.toLowerCase()
                  .includes(searchTxt.toLowerCase());

                const matchesCategory =
                  categoryTxt === "all" || e.status === categoryTxt;

                return matchesSearch && matchesCategory;
              })

              .map((e, index) => {
                return (
                  <div
                    className={`rounded-xl shadow-lg ${
                      e.status === "PROGRESS" ? "bg-blue-200" : "bg-green-200"
                    } w-full flex flex-col gap-2 p-5`}
                    key={index}
                  >
                    <h1 className="text-lg font-bold flex items-center gap-2 text-2xl">
                      {e.title}
                    </h1>
                    <p className="text-gray-600">{e.description}</p>
                    <div className="flex items-center gap-2">
                      <FiUser className="text-blue-600" />
                      <span className="font-medium">Field Owner:</span>
                      <span>
                        {e.user.userFirstName} {e.user.userLastName}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="text-red-500" />
                      <span className="font-medium">Location:</span>
                      <span>{e.address}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-purple-600" />
                      <span className="font-medium">Date:</span>
                      <span>{e.duedate.split("T")[0]}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FiMaximize2 className="text-red-600" />
                      <span className="font-medium">Field size (in acres)</span>
                      <span>{e.landSize}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <GiTreeBranch className="text-green-700" />
                      <span className="font-medium">Tree Count:</span>
                      <span>{e.treeCount}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FiDollarSign className="text-yellow-600" />
                      <span className="font-medium">Per Tree:</span>
                      <span>Rs. {setFormatAmout(e.pricePerTree)}</span>
                    </div>

                    <div className="flex items-center gap-2 font-bold">
                      <FiDollarSign className="text-green-600" />
                      <span>Total Price:</span>
                      <span>Rs. {setFormatAmout(e.totalAmount)}</span>
                    </div>
                    <div className="flex flex-row gap-2">
                      {e.status === "PROGRESS" ? (
                        <div
                          onClick={() => {
                            handleComplete(e.bookingId);
                          }}
                          className="flex items-center gap-2 p-2 rounded-lg font-bold
      bg-gradient-to-r from-blue-400 to-blue-700 text-white w-fit
      cursor-pointer transition duration-300 hover:from-blue-500 hover:to-blue-800"
                        >
                          <FiCheck />
                          <span>
                            {completeBtnLoading
                              ? "Completing..."
                              : "Mark as Complete"}
                          </span>
                        </div>
                      ) : (
                        <div
                          className="flex items-center gap-2 p-2 rounded-lg font-bold
      bg-gradient-to-r from-gray-300 to-gray-400 text-white w-fit cursor-not-allowed"
                        >
                          <FiAward />
                          <span>Done</span>
                        </div>
                      )}
                      <label
                        className={`${
                          e.status === "PROGRESS"
                            ? "text-blue-600 bg-blue-100"
                            : "text-green-600 bg-green-100"
                        } p-2 rounded-lg font-bold`}
                      >
                        {e.status}
                      </label>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyTasks;
