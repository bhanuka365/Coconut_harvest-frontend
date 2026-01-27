"use client";

import Link from "next/link";
import {
  FiCheckCircle,
  FiClipboard,
  FiEye,
  FiHome,
  FiLogOut,
  FiMapPin,
  FiPhoneCall,
  FiPlus,
  FiSearch,
} from "react-icons/fi";
import Image from "next/image";
import { LuClipboardPen } from "react-icons/lu";
import { useEffect, useState } from "react";
import {
  AvatarSkeleton,
  EmptyState,
  NameSkeleton,
  WorkerCardSkeleton,
} from "@/components/Components";
import usersjson from "@/json/users.json";
import userjson from "@/json/user.json";
import { handleLogout } from "@/utils/others";
import { getUserByUserName, getUsersByRoleName } from "@/api/user";
import { getAllMyBookingsForFieldOwner } from "@/api/booking";


const Home = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [users, setUsers] = useState(usersjson);
  const [user, setUser] = useState(userjson);
  const [loadingPage, setLoadingPage] = useState(true);
  const [allJobCounts, setAllJobCounts] = useState("");
  const [completeJobCounts, setCompleteJobCounts] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const userName = localStorage.getItem("userName");

      const result = await getUsersByRoleName("Harvester",token)
      // const result = await axios.get(
      //   `http://localhost:8085/api/v1/by-role/Harvester`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   },
      // );

      setUsers(result.data.dataBundle);

      const result1 = await getUserByUserName(userName,token)

      // const result1 = await axios.get(
      //   `http://localhost:8085/api/v1/user/${userName}`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   },
      // );

      setUser(result1.data.dataBundle);

      const result2 = await getAllMyBookingsForFieldOwner(token)

      // const result2 = await axios.get(
      //   `http://localhost:8085/api/v1/bookings/my`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   },
      // );
      setAllJobCounts(result2.data.dataBundle.length);
      setCompleteJobCounts(
        result2.data.dataBundle.filter((e: any) => {
          return e.status === "COMPLETED";
        }).length,
      );
    } catch (error) {
    } finally {
      setLoadingPage(false);
    }
  };

  return (
    <div className="flex min-h-screen h-dvh bg-white font-sans text-green-900 text-sm md:flex-row flex-col">
      <div className="bg-green-400 md:w-15 w-full text-white flex md:flex-col flex-row md:justify-start justify-evenly  items-center p-2 gap-2">
        <Link
          href="/field-owner/home"
          className="relative group flex items-center bg-black/40 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
        >
          <FiHome size={20} />
          <span className="absolute left-full ml-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Home
          </span>
        </Link>
        <Link
          href="/field-owner/my-bookings"
          className="relative group flex items-center hover:bg-black/20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
        >
          <FiClipboard size={20} />
          <span className="absolute left-full ml-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            My Bookings
          </span>
        </Link>
        <div
          className="relative group flex items-center hover:bg-black/20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
          onClick={async () => {
            handleLogout("/field-owner/login");
          }}
        >
          <FiLogOut size={20} />
          <span className="absolute left-full ml-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Logout
          </span>
        </div>
      </div>
      <div className="bg-green-100 w-full flex flex-col pt-5 pl-5 pr-5 gap-5">
        <div className="bg-white p-2 rounded-full flex flex-row justify-between items-center">
          <div className="font-bold text-2xl flex flex-row gap-2 justify-start items-center">
            <Image src="/logo2.png" alt="image" width={50} height={50} />
            CocoHarvest
          </div>
          <Link
            className="relative group cursor-pointer"
            href={{
              pathname: "/field-owner/profile",
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
          <div className="bg-gradient-to-r from-purple-400 to-purple-900 p-5 rounded-lg lg:w-1/3 w-full flex flex-col text-white gap-2">
            <div className="flex flex-row items-center gap-2">
              <LuClipboardPen className="text-2xl" />
              <label className="font-bold text-2xl">Jobs Posted</label>
            </div>
            <label>{allJobCounts ? allJobCounts : "..."}</label>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-blue-900 p-5 rounded-lg lg:w-1/3 w-full flex flex-col text-white gap-2">
            <div className="flex flex-row items-center gap-2">
              <FiCheckCircle className="text-2xl" />
              <label className="font-bold text-2xl">Completed Jobs</label>
            </div>
            <label>{completeJobCounts ? completeJobCounts : "..."}</label>
          </div>
        </div>
        <h1 className="text-2xl font-bold">Find Workers</h1>
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
          <Link
            href="/field-owner/harvester-booking"
            className="flex flex-row gap-2 p-2 justify-center items-center rounded-lg sm:w-fit w-full font-bold bg-gradient-to-r from-blue-400 to-blue-700 text-white cursor-pointer transition duration-300 ease-in-out hover:from-blue-500 hover:to-blue-800"
          >
            <FiPlus />
            <span>Need Harvesting Today?</span>
          </Link>
        </div>
        {loadingPage ? (
          <WorkerCardSkeleton />
        ) : users.length === 0 ? (
          <EmptyState message="No workers found." />
        ) : (
          <div className="flex flex-col gap-5 overflow-y-auto max-h-[40vh] sm:max-h-[60vh] lg:max-h-[75vh] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
            {users
              .filter((e) => {
                return e.Address.toLowerCase().includes(
                  searchTxt.toLowerCase(),
                );
              })
              .map((e, index) => {
                return (
                  <div
                    className="shadow-lg rounded-xl bg-white w-full flex flex-row gap-2 p-5 "
                    key={index}
                  >
                    <Image
                      width={50}
                      height={50}
                      src={`data:image/jpeg;base64,${e.userImage}`}
                      alt=""
                      className="rounded-full h-20 w-20"
                    />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-2xl font-bold">
                        {e.userFirstName} {e.userLastName}
                      </h1>
                      <div className="flex items-center gap-2 text-red-500 font-bold">
                        <FiMapPin />
                        <span>{e.Address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-500 font-bold">
                        <FiPhoneCall />
                        <span>{e.Telephone}</span>
                      </div>
                      <Link
                        href={{
                          pathname: "/field-owner/harvester-profile",
                          query: { username: e.userName },
                        }}
                        className="flex items-center gap-2 pl-2 pr-2 rounded-sm font-bold
      bg-gradient-to-r from-blue-400 to-blue-700 text-white w-fit
      cursor-pointer transition duration-300 hover:from-blue-500 hover:to-blue-800"
                      >
                        <FiEye />
                        <span>view</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
