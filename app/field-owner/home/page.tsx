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
  Dialog,
  EmptyState,
  NameSkeleton,
  WorkerCardSkeleton,
} from "@/components/Components";
import axios from "axios";
import usersjson from "@/json/users.json";
import userjson from "@/json/user.json";

const Home = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [users, setUsers] = useState(usersjson);
  const [user, setUser] = useState(userjson);
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const userName = localStorage.getItem("userName");
      const result = await axios.get(
        `http://localhost:8085/api/v1/by-role/Harvester`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setUsers(result.data.dataBundle);

      const result1 = await axios.get(
        `http://localhost:8085/api/v1/user/${userName}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setUser(result1.data.dataBundle);
    } catch (error) {
    } finally {
      setLoadingPage(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen h-dvh bg-white font-sans text-green-900 text-sm flex-row">
      <div className="bg-green-400 w-20 text-white flex flex-col items-center p-5 gap-5">
        <Link
          href="/field-owner/home"
          className="relative group flex items-center bg-black/40 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
        >
          <FiHome size={25} />
          <span className="absolute left-full ml-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Home
          </span>
        </Link>
        <Link
          href="/field-owner/my-bookings"
          className="relative group flex items-center hover:bg-black/20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
        >
          <FiClipboard size={25} />
          <span className="absolute left-full ml-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            My Bookings
          </span>
        </Link>
        <div
          className="relative group flex items-center hover:bg-black/20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
          onClick={async () => {
            const result = await Dialog(
              "Confirm Logout",
              "Are you sure you want to logout?",
              "warning",
              "#43ce76",
              "#ef4444",
            );
            result ? (window.location.href = "/field-owner/login") : "";
          }}
        >
          <FiLogOut size={25} />
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
                className="rounded-full h-15 w-15"
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
        <div className="flex flex-row gap-5">
          <div className="bg-gradient-to-r from-purple-400 to-purple-900 p-5 rounded-lg w-1/3 flex flex-col text-white gap-2">
            <div className="flex flex-row items-center gap-2">
              <LuClipboardPen className="text-2xl" />
              <label className="font-bold text-2xl">Jobs Posted</label>
            </div>
            <label>30</label>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-blue-900 p-5 rounded-lg w-1/3 flex flex-col text-white gap-2">
            <div className="flex flex-row items-center gap-2">
              <FiCheckCircle className="text-2xl" />
              <label className="font-bold text-2xl">Completed Jobs</label>
            </div>
            <label>2</label>
          </div>
        </div>
        <h1 className="text-2xl font-bold">Find Workers</h1>
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-2 p-2 rounded-full bg-white w-1/2">
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
            className="flex flex-row gap-2 p-2 justify-center items-center rounded-lg w-fit font-bold bg-gradient-to-r from-blue-400 to-blue-700 text-white cursor-pointer transition duration-300 ease-in-out hover:from-blue-500 hover:to-blue-800"
          >
            <FiPlus />
            <span>Need Harvesting Today?</span>
          </Link>
        </div>
        {loadingPage ? (
          <WorkerCardSkeleton />
        ) : users.length === 0 ? (
          <EmptyState message="No workers found."/>
        ) : (
          <div className="flex flex-col gap-5 overflow-y-auto h-dvh [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
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
                      <div className="flex items-center gap-2 text-red-500">
                        <FiMapPin />
                        <span>{e.Address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-500">
                        <FiPhoneCall />
                        <span>{e.Telephone}</span>
                      </div>
                      <Link
                        href={{
                          pathname: "/field-owner/harvester-profile",
                          query: { username: e.userName },
                        }}
                        className="flex items-center gap-2 p-2 rounded-lg font-bold
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
