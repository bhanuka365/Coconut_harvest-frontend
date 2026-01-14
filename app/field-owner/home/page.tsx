"use client";

import Link from "next/link";
import {
  FiCheckCircle,
  FiClipboard,
  FiDollarSign,
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
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Dialog } from "@/components/Dialog";

const MySwal = withReactContent(Swal);

const userData = [
  {
    name: "Nadeesha",
    location: "Matara,Sri Lanka",
    phone_number: "0711764232",
  },
  {
    name: "Nadeesha",
    location: "Matara,Sri Lanka",
    phone_number: "0711764232",
  },
  {
    name: "Nadeesha",
    location: "Matara,Sri Lanka",
    phone_number: "0711764232",
  },
  {
    name: "Nadeesha",
    location: "Matara,Sri Lanka",
    phone_number: "0711764232",
  },
  {
    name: "Nadeesha",
    location: "Matara,Sri Lanka",
    phone_number: "0711764232",
  },
  {
    name: "Nadeesha",
    location: "Matara,Sri Lanka",
    phone_number: "0711764232",
  },
  {
    name: "Nadeesha",
    location: "Matara,Sri Lanka",
    phone_number: "0711764232",
  },
];

const Home = () => {
  const [searchTxt, setSearchTxt] = useState("");
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
              "#ef4444"
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
            href="/field-owner/profile"
          >
            <Image
              width={50}
              height={50}
              src="/profile.jpg"
              alt=""
              className="rounded-full"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="absolute top-full mt-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Profile
            </span>
          </Link>
        </div>
        <h1 className="text-6xl font-bold">
          Hi, <span className="text-green-400">Amal</span>
        </h1>
        <div className="flex flex-row gap-5">
          {/* <div className="bg-gradient-to-r from-green-400 to-green-900 p-5 rounded-lg w-1/3 flex flex-col text-white gap-2">
            <div className="flex flex-row items-center gap-2">
              <FiDollarSign className="text-2xl" />
              <label className="font-bold text-2xl">Total Spent</label>
            </div>
            <label>LKR 100,000</label>
          </div> */}
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
          {/* <div className="flex flex-row gap-2 p-2 justify-center items-center rounded-lg w-fit font-bold bg-gradient-to-r from-green-400 to-green-700 text-white cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-800">
            <FiMapPin />
            <span>Search Nearby</span>
          </div> */}
          <Link
            href="/field-owner/harvester-booking"
            className="flex flex-row gap-2 p-2 justify-center items-center rounded-lg w-fit font-bold bg-gradient-to-r from-blue-400 to-blue-700 text-white cursor-pointer transition duration-300 ease-in-out hover:from-blue-500 hover:to-blue-800"
          >
            <FiPlus />
            <span>Need Harvesting Today?</span>
          </Link>
        </div>
        <div className="flex flex-col gap-5 overflow-y-auto h-dvh [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
          {userData
            .filter((e) => {
              return e.location.toLowerCase().includes(searchTxt.toLowerCase());
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
                    src="/profile.jpg"
                    alt=""
                    className="rounded-full h-20 w-20"
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-lg text-2xl font-bold">{e.name}</h1>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="text-red-500" />
                      <span className="font-medium text-red-500">
                        Location:
                      </span>
                      <span>{e.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiPhoneCall className="text-blue-500" />
                      <span className="font-medium text-blue-500">
                        Phone Number:
                      </span>
                      <span>{e.phone_number}</span>
                    </div>
                    <Link
                      href="/field-owner/harvester-profile"
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
      </div>
    </div>
  );
};

export default Home;
