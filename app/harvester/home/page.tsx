"use client";

import Link from "next/link";
import {
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiChevronRight,
  FiClipboard,
  FiDollarSign,
  FiHome,
  FiLogOut,
  FiMapPin,
  FiMaximize2,
  FiSearch,
  FiUser,
  FiX,
} from "react-icons/fi";
import Image from "next/image";
import { LuClipboardPen } from "react-icons/lu";
import { GiTreeBranch } from "react-icons/gi";
import { useEffect, useState } from "react";
import { MdWork } from "react-icons/md";
import {
  AvatarSkeleton,
  BookingCardSkeleton,
  Dialog,
  EmptyState,
  NameSkeleton,
} from "@/components/Components";
import userjson from "@/json/user.json";
import axios from "axios";
import bookingJson from "@/json/bookings.json";
import { toast, ToastContainer } from "react-toastify";
import { setFormatAmout } from "@/utils/formatters";
import { handleLogout } from "@/utils/others";
import {
  getAllBookingsByHarvesterName,
  getAllPendingBookingsForHarvester,
  updateBookingById,
} from "@/api/booking";
import { getUserByUserName } from "@/api/user";
import { BsDot } from "react-icons/bs";

const Home = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [user, setUser] = useState(userjson);
  const [bookings, setBookings] = useState(bookingJson);
  const [loadingPage, setLoadingPage] = useState(true);
  const [acceptBtnloading, setAcceptBtnLoading] = useState(false);
  const [confirmBtnloading, setConfirmBtnLoading] = useState(false);
  const [cancelBtnloading, setCancelBtnLoading] = useState(false);
  const [searchNearbyBtnloading, setSearchNearbyBtnLoading] = useState(false);
  const [progressJobCounts, setProgressJobCounts] = useState("");
  const [completeJobCounts, setCompleteJobCounts] = useState("");
  const [allTotalAmount, setAllTotalAmount] = useState("");

  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [nearbyOnly, setNearbyOnly] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const userName = localStorage.getItem("userName");

      const result = await getAllPendingBookingsForHarvester(token);

      // const result = await axios.get(
      //   `http://localhost:8085/api/v1/bookings/my/pending`,
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

      const result2 = await getAllBookingsByHarvesterName(token, userName);

      // const result2 = await axios.get(
      //   `http://localhost:8085/api/v1/bookings/harvester/${userName}`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   },
      // );

      setCompleteJobCounts(
        result2.data.dataBundle.filter((e: any) => {
          return e.status === "COMPLETED";
        }).length,
      );

      setProgressJobCounts(
        result2.data.dataBundle.filter((e: any) => {
          return e.status === "PROGRESS";
        }).length,
      );

      console.log(
        result2.data.dataBundle.filter((e: any) => {
          return e.status === "PROGRESS";
        }).length,
      );

      setAllTotalAmount(
        result2.data.dataBundle.reduce((sum: number, e: any) => {
          const amount = parseFloat(e.totalAmount) || 0;
          return sum + amount;
        }, 0),
      );
    } catch (error) {
    } finally {
      setLoadingPage(false);
    }
  };

  const handleAcceptJob = async (id: number | string) => {
    setAcceptBtnLoading(true);
    const result = await Dialog(
      "Confirm Accept Job",
      "Are you sure you want to accept this job?",
      "warning",
      "#5871ef",
      "#43ce76",
    );

    if (!result) return;

    const token = localStorage.getItem("jwtToken");
    if (!token) {
      toast.error("Authentication required");
      return;
    }

    try {
      const jsonData = {
        bookingId: Number(id),
        status: "PROGRESS",
        rate: false,
      };

      await updateBookingById(token, jsonData);
      // await axios.put(
      //   "http://localhost:8085/api/v1/bookings/update",
      //   {
      //     bookingId: Number(id),
      //     status: "PROGRESS",
      //     rate: false,
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   },
      // );

      toast.success("Job accepted");
    } catch (err: any) {
      if (err.response) {
        toast.error("Job accept failed");
      } else if (err.request) {
        toast.error("Server not reachable");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setAcceptBtnLoading(false);
      loadData();
    }
  };

  const handleConfrimJob = async (id: number | string) => {
    setConfirmBtnLoading(true);

    const token = localStorage.getItem("jwtToken");
    const userName = localStorage.getItem("userName");
    if (!token) {
      toast.error("Authentication required");
      return;
    }

    try {
      const jsonData = {
        bookingId: Number(id),
        status: "PROGRESS",
        harvesterName: userName,
        rate: false,
      };

      await updateBookingById(token, jsonData);
      // await axios.put(
      //   "http://localhost:8085/api/v1/bookings/update",
      //   {
      //     bookingId: Number(id),
      //     status: "PROGRESS",
      //     harvesterName: userName,
      //     rate: false,
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   },
      // );

      toast.success("Job accepted");
    } catch (err: any) {
      if (err.response) {
        toast.error("Job accept failed");
      } else if (err.request) {
        toast.error("Server not reachable");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setConfirmBtnLoading(false);
      loadData();
    }
  };

  const handleCancelJob = async (id: number | string) => {
    setCancelBtnLoading(true);

    const token = localStorage.getItem("jwtToken");
    const userName = localStorage.getItem("userName");

    if (!token) {
      toast.error("Authentication required");
      return;
    }

    try {
      const jsonData = {
        bookingId: Number(id),
        status: "CANCELLED",
        harvesterName: userName,
        rate: false,
      };

      await updateBookingById(token, jsonData);
      // await axios.put(
      //   "http://localhost:8085/api/v1/bookings/update",
      //   {
      //     bookingId: Number(id),
      //     status: "CANCELLED",
      //     harvesterName: userName,
      //     rate: false,
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   },
      // );

      toast.success("Job canceled");
    } catch (err: any) {
      if (err.response) {
        toast.error("Job cancel failed");
      } else if (err.request) {
        toast.error("Server not reachable");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setCancelBtnLoading(false);
      loadData();
    }
  };

  const getDistanceInKm = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ) => {
    const R = 6371; // Earth radius in KM
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const getLocation = () => {
    setSearchNearbyBtnLoading(true);
    if (!navigator.geolocation) {
      toast.error("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setNearbyOnly(true);
        toast.success("Showing nearby jobs");
      },
      () => {
        toast.error("Location access denied");
      },
    );

    setSearchNearbyBtnLoading(false);
  };

  return (
    // <div className="flex min-h-screen h-dvh bg-white font-sans text-green-900 text-sm md:flex-row flex-col">
    <div className="flex min-h-screen bg-white font-sans text-green-900 text-sm md:flex-row flex-col">
      {/* <div className="bg-green-400 md:w-15 w-full text-white flex md:flex-col flex-row md:justify-start justify-evenly  items-center p-2 gap-2 fixed left-0 bottom-0 top-0"> */}
      <div
        className="bg-green-400 w-full md:w-15 text-white flex md:flex-col flex-row md:justify-start justify-evenly items-center p-2 gap-2
            md:fixed md:left-0 md:top-0 md:bottom-0"
      >
        <Link
          href="/harvester/home"
          className="relative group flex items-center bg-black/40 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
        >
          <FiHome size={20} />
          <span className="absolute left-full ml-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Home
          </span>
        </Link>
        <Link
          href="/harvester/my-jobs"
          className="relative group flex items-center hover:bg-black/20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
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
      {/* <div className="bg-green-100 w-full flex flex-col pt-5 pl-5 pr-5 gap-5"> */}
      <div className="bg-green-100 w-full flex flex-col pt-5 pr-5 pl-5 md:pl-20 gap-5 flex-1 overflow-y-auto">
        <div className="bg-white p-2 rounded-full flex flex-row justify-between items-center">
          <div className="font-bold text-2xl flex flex-row gap-2 justify-start items-center">
            <Image src="/logo2.png" alt="image" width={50} height={50} />
            CocoHarvest
          </div>
          <Link
            className="relative group cursor-pointer"
            href={{
              pathname: "/harvester/profile",
              query: { username: user.userName },
            }}
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
        <h1 className="text-6xl font-bold">
          Hi,{" "}
          {loadingPage ? (
            <NameSkeleton />
          ) : (
            <span className="text-green-400">{user.userFirstName}</span>
          )}
        </h1>
        <div className="flex sm:flex-row flex-col gap-5">
          <div className="bg-gradient-to-r from-orange-400 to-orange-900 p-5 rounded-lg sm:w-1/3 w-full flex flex-col text-white gap-2">
            <div className="flex flex-row items-center gap-2">
              <FiCheckCircle className="text-2xl" />
              <label className="font-bold text-2xl">Complete jobs</label>
            </div>
            <label>{completeJobCounts}</label>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-green-900 p-5 rounded-lg sm:w-1/3 w-full flex flex-col text-white gap-2">
            <div className="flex flex-row items-center gap-2">
              <FiDollarSign className="text-2xl" />
              <label className="font-bold text-2xl">Total earn</label>
            </div>
            <label>
              {allTotalAmount ? `LKR ${setFormatAmout(allTotalAmount)}` : ""}
            </label>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-blue-900 p-5 rounded-lg sm:w-1/3 w-full flex flex-col text-white gap-2">
            <div className="flex flex-row items-center gap-2">
              <LuClipboardPen className="text-2xl" />
              <label className="font-bold text-2xl">Progress jobs</label>
            </div>
            <label>{progressJobCounts}</label>
          </div>
        </div>
        <h1 className="text-2xl font-bold">New Job Requests</h1>
        <div className="flex sm:flex-row flex-col gap-2">
          <div className="flex flex-row gap-2 p-2 rounded-full bg-white sm:w-1/2 w-full">
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
          <div
            className="flex flex-row gap-2 p-2 justify-center items-center rounded-lg sm:w-fit w-full font-bold bg-gradient-to-r from-green-400 to-green-700 text-white cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-800"
            onClick={() => {
              getLocation();
            }}
          >
            <FiMapPin />
            <span>
              {searchNearbyBtnloading ? "Searching..." : "Search Nearby"}
            </span>
          </div>
          <button
            onClick={() => setNearbyOnly(false)}
            className="flex flex-row gap-2 p-2 justify-center items-center rounded-lg sm:w-fit w-full font-bold bg-gradient-to-r from-red-400 to-red-700 text-white cursor-pointer transition duration-300 ease-in-out hover:from-red-500 hover:to-red-800"
          >
            <FiX />
            Clear Nearby Filter
          </button>
        </div>
        {loadingPage ? (
          <BookingCardSkeleton />
        ) : bookings.length === 0 ? (
          <EmptyState message="No jobs found." />
        ) : (
          <div className="flex flex-col gap-5 overflow-y-auto max-h-dvh [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
            {bookings
              .filter((e) => {
                const matchesText = e.address
                  .toLowerCase()
                  .includes(searchTxt.toLowerCase());

                if (!nearbyOnly || !userLocation) return matchesText;

                // onst distance = getDistanceInKm(
                console.log(userLocation.lat);
                console.log(userLocation.lng);
                console.log(Number(e.latitude));
                console.log(Number(e.longitude));

                // Nearby filter (within 10km)
                const distance = getDistanceInKm(
                  userLocation.lat,
                  userLocation.lng,
                  Number(e.latitude),
                  Number(e.longitude),
                );

                return matchesText && distance <= 10;
              })
              .map((e, index) => {
                return (
                  <div
                    className="shadow-lg rounded-xl bg-white w-full flex flex-col gap-2 p-5 "
                    key={index}
                  >
                    <h1 className="text-lg font-bold flex items-center gap-2 text-2xl">
                      {e.title}
                    </h1>
                    <p className="text-gray-600">{e.description}</p>
                    <div className="flex flex-row flex-wrap gap-2 items-center">
                      <div className="flex items-center gap-2">
                        <FiUser className="text-blue-600" />
                        <span className="font-medium text-blue-600">
                          Field Owner:
                        </span>
                        <span>
                          {e.user.userFirstName} {e.user.userLastName}
                        </span>
                      </div>
                      <BsDot className="text-gray-400 hidden sm:inline" />
                      <div className="flex items-center gap-2">
                        <FiMapPin className="text-red-500" />
                        <span className="font-medium text-red-500">
                          Location:
                        </span>
                        <span>{e.address}</span>
                      </div>
                      <BsDot className="text-gray-400 hidden sm:inline" />
                      <div className="flex items-center gap-2">
                        <FiCalendar className="text-purple-600" />
                        <span className="font-medium text-purple-600">
                          Date:
                        </span>
                        <span>{e.duedate.split("T")[0]}</span>
                      </div>
                      <BsDot className="text-gray-400 hidden sm:inline" />
                      <div className="flex items-center gap-2">
                        <FiMaximize2 className="text-red-600" />
                        <span className="font-medium text-red-600">
                          Field size (in acres)
                        </span>
                        <span>{e.landSize}</span>
                      </div>
                      <BsDot className="text-gray-400 hidden sm:inline" />
                      {e.jobType !== "Direct" ? (
                        <>
                          <div className="flex items-center gap-2">
                            <FiUser className="text-blue-700" />
                            <span className="font-medium text-blue-700">
                              Worker Count:
                            </span>
                            <span>{e.count}</span>
                          </div>
                          <BsDot className="text-gray-400 hidden sm:inline" />
                        </>
                      ) : (
                        ""
                      )}

                      <div className="flex items-center gap-2">
                        <GiTreeBranch className="text-green-700" />
                        <span className="font-medium text-green-700">
                          Tree Count:
                        </span>
                        <span>{e.treeCount}</span>
                      </div>
                      <BsDot className="text-gray-400 hidden sm:inline" />
                      <div className="flex items-center gap-2">
                        <FiDollarSign className="text-yellow-600" />
                        <span className="font-medium text-yellow-600">
                          Per Tree:
                        </span>
                        <span>LKR {setFormatAmout(e.pricePerTree)}</span>
                      </div>
                      <BsDot className="text-gray-400 hidden sm:inline" />
                      <div className="flex items-center gap-2 font-bold">
                        <FiDollarSign className="text-green-600" />
                        <span className="text-green-600">Total Price:</span>
                        <span>LKR {setFormatAmout(e.totalAmount)}</span>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2">
                      {e.jobType === "Direct" ? (
                        <div className="flex flex-row gap-2">
                          <div
                            onClick={() => {
                              handleConfrimJob(e.bookingId);
                            }}
                            className="flex items-center gap-2 p-2 rounded-lg font-bold
      bg-gradient-to-r from-blue-400 to-blue-700 text-white w-fit
      cursor-pointer transition duration-300 hover:from-blue-500 hover:to-blue-800"
                          >
                            <FiCheck />
                            <span>
                              {confirmBtnloading ? "Condirming" : "Confirm"}
                            </span>
                          </div>
                          <div
                            onClick={() => {
                              handleCancelJob(e.bookingId);
                            }}
                            className="flex items-center gap-2 p-2 rounded-lg font-bold
      bg-gradient-to-r from-red-400 to-red-700 text-white w-fit
      cursor-pointer transition duration-300 hover:from-red-500 hover:to-red-800"
                          >
                            <FiX />
                            <span>
                              {cancelBtnloading ? "Canceling" : "Cancel"}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div
                          onClick={async () => {
                            handleAcceptJob(e.bookingId);
                          }}
                          className="flex items-center gap-2 p-2 rounded-lg font-bold
      bg-gradient-to-r from-blue-400 to-blue-700 text-white w-fit
      cursor-pointer transition duration-300 hover:from-blue-500 hover:to-blue-800"
                        >
                          <MdWork />
                          <span>
                            {acceptBtnloading ? "accepting..." : "Accept Job"}
                          </span>
                        </div>
                      )}
                      <label className="text-yellow-600 bg-yellow-100 p-2 rounded-lg font-bold">
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

export default Home;
