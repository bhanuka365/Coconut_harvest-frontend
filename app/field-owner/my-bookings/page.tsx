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
  FiSearch,
  FiUser,
  FiX,
} from "react-icons/fi";
import Image from "next/image";
import { GiTreeBranch } from "react-icons/gi";
import { useState } from "react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { CgCross } from "react-icons/cg";

const bookingData = [
  {
    tittle: "Coconut Harvest Karannoo",
    description:
      " Harvest coconuts safely from the given field within thescheduled date.",
    field_owner: "Mr. Silva",
    location: "Matara,Sri Lanka",
    Date: "2026/05/07",
    tree_count: 4,
    per_tree: 50,
    status: "IN_PROGRESS",
    job_type: "DIRECT",
    rate: false,
  },
  {
    tittle: "Coconut Harvest Karannoo",
    description:
      " Harvest coconuts safely from the given field within thescheduled date.",
    field_owner: "Mr. Silva",
    location: "Matara,Sri Lanka",
    Date: "2026/05/07",
    tree_count: 4,
    per_tree: 50,
    status: "PENDING",
    job_type: "JOB_POST",
    rate: false,
  },
  {
    tittle: "Coconut Harvest Karannoo",
    description:
      " Harvest coconuts safely from the given field within thescheduled date.",
    field_owner: "Mr. Silva",
    location: "Matara,Sri Lanka",
    Date: "2026/05/07",
    tree_count: 4,
    per_tree: 50,
    status: "CANCELLED",
    job_type: "DIRECT",
    rate: false,
  },
  {
    tittle: "Coconut Harvest Karannoo",
    description:
      " Harvest coconuts safely from the given field within thescheduled date.",
    field_owner: "Mr. Silva",
    location: "Matara,Sri Lanka",
    Date: "2026/05/07",
    tree_count: 4,
    per_tree: 50,
    status: "COMPLETED",
    job_type: "DIRECT",
    rate: false,
  },
  {
    tittle: "Coconut Harvest Karannoo",
    description:
      " Harvest coconuts safely from the given field within thescheduled date.",
    field_owner: "Mr. Silva",
    location: "Matara,Sri Lanka",
    Date: "2026/05/07",
    tree_count: 4,
    per_tree: 50,
    status: "IN_PROGRESS",
    job_type: "JOB_POST",
    rate: false,
  },
  {
    tittle: "Coconut Harvest Karannoo",
    description:
      " Harvest coconuts safely from the given field within thescheduled date.",
    field_owner: "Mr. Silva",
    location: "Matara,Sri Lanka",
    Date: "2026/05/07",
    tree_count: 4,
    per_tree: 50,
    status: "COMPLETED",
    job_type: "DIRECT",
    rate: true,
  },
  {
    tittle: "Coconut Harvest Karannoo",
    description:
      " Harvest coconuts safely from the given field within thescheduled date.",
    field_owner: "Mr. Silva",
    location: "Matara,Sri Lanka",
    Date: "2026/05/07",
    tree_count: 4,
    per_tree: 50,
    status: "COMPLETED",
    job_type: "JOB_POST",
    rate: false,
  },
];

const MyBooking = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [categoryBtn0, setCategoryBtn0] = useState(true);
  const [categoryBtn1, setCategoryBtn1] = useState(false);
  const [categoryBtn2, setCategoryBtn2] = useState(false);
  const [categoryBtn3, setCategoryBtn3] = useState(false);
  const [categoryBtn4, setCategoryBtn4] = useState(false);
  const [categoryTxt, setCategoryTxt] = useState("all");
  return (
    <div className="flex flex-col min-h-screen h-dvh bg-white font-sans text-green-900 text-sm flex-row">
      <div className="bg-green-400 w-20 text-white flex flex-col items-center p-5 gap-5">
        <Link
          href="/field-owner/home"
          className="relative group flex items-center hover:bg-black/20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
        >
          <FiHome size={25} />
          <span className="absolute left-full ml-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Home
          </span>
        </Link>
        <Link
          href="/field-owner/my-jobs"
          className="relative group flex items-center bg-black/40 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
        >
          <FiClipboard size={25} />
          <span className="absolute left-full ml-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            My Booking
          </span>
        </Link>
        <div className="relative group flex items-center hover:bg-black/20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out">
          <FiLogOut size={25} />
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
        <h1 className="text-2xl font-bold">My Booking</h1>
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-2 p-2 rounded-full bg-white w-1/2">
            <FiSearch size={20} />
            <input
              value={searchTxt}
              placeholder="search by field location"
              className="w-full focus:outline-none"
              onChange={(e) => {
                setSearchTxt(e.target.value);
              }}
            />
          </div>
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
              setCategoryBtn3(false);
              setCategoryBtn4(false);
            }}
          >
            <span>All</span>
          </div>
          <div
            className={`flex flex-row gap-2 p-2 justify-center items-center rounded-lg w-fit font-bold ${
              categoryBtn3
                ? "bg-gradient-to-r from-blue-400 to-blue-700 text-white"
                : "border-2 border-blue-400 text-blue-400"
            } cursor-pointer transition duration-300 ease-in-out hover:from-blue-500 hover:to-blue-800`}
            onClick={() => {
              setCategoryTxt("PENDING");
              setCategoryBtn0(false);
              setCategoryBtn3(true);
              setCategoryBtn1(false);
              setCategoryBtn2(false);
              setCategoryBtn4(false);
            }}
          >
            <span>pending</span>
          </div>
          <div
            className={`flex flex-row gap-2 p-2 justify-center items-center rounded-lg w-fit font-bold ${
              categoryBtn4
                ? "bg-gradient-to-r from-blue-400 to-blue-700 text-white"
                : "border-2 border-blue-400 text-blue-400"
            } cursor-pointer transition duration-300 ease-in-out hover:from-blue-500 hover:to-blue-800`}
            onClick={() => {
              setCategoryTxt("CANCELLED");
              setCategoryBtn0(false);
              setCategoryBtn4(true);
              setCategoryBtn2(false);
              setCategoryBtn1(false);
              setCategoryBtn3(false);
            }}
          >
            <span>cancel</span>
          </div>
          <div
            className={`flex flex-row gap-2 p-2 justify-center items-center rounded-lg w-fit font-bold ${
              categoryBtn1
                ? "bg-gradient-to-r from-blue-400 to-blue-700 text-white"
                : "border-2 border-blue-400 text-blue-400"
            } cursor-pointer transition duration-300 ease-in-out hover:from-blue-500 hover:to-blue-800`}
            onClick={() => {
              setCategoryTxt("IN_PROGRESS");
              setCategoryBtn0(false);
              setCategoryBtn1(true);
              setCategoryBtn2(false);
              setCategoryBtn3(false);
              setCategoryBtn4(false);
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
              setCategoryBtn3(false);
              setCategoryBtn4(false);
            }}
          >
            <span>complete</span>
          </div>
        </div>
        <div className="flex flex-col gap-5 overflow-y-auto h-dvh [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
          {bookingData
            .filter((e) => {
              const matchesSearch = e.location
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
                    e.status === "IN_PROGRESS"
                      ? "bg-yellow-200"
                      : e.status === "COMPLETED"
                      ? "bg-green-200"
                      : e.status === "CANCELLED"
                      ? "bg-red-200"
                      : "bg-gray-200"
                  } w-full flex flex-col gap-2 p-5`}
                  key={index}
                >
                  <h1 className="text-lg font-bold flex items-center gap-2 text-2xl">
                    {e.tittle}
                  </h1>
                  <p className="text-gray-600">{e.description}</p>
                  {e.status !== "PENDING" || e.job_type === "DIRECT" ? (
                    <div className="flex items-center gap-2">
                      <FiUser className="text-blue-600" />
                      <span className="font-medium">Harvester:</span>
                      <span>{e.field_owner}</span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-red-500" />
                    <span className="font-medium">Field Location:</span>
                    <span>{e.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-purple-600" />
                    <span className="font-medium">Date:</span>
                    <span>{e.Date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <GiTreeBranch className="text-green-700" />
                    <span className="font-medium">Tree Count:</span>
                    <span>{e.tree_count}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FiDollarSign className="text-yellow-600" />
                    <span className="font-medium">Per Tree:</span>
                    <span>Rs. {e.per_tree}</span>
                  </div>

                  <div className="flex items-center gap-2 font-bold">
                    <FiDollarSign className="text-green-600" />
                    <span>Total Price:</span>
                    <span>Rs. {e.per_tree * e.tree_count}</span>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-2 items-center">
                      {e.rate === false && e.status === "COMPLETED" ? (
                        <div
                          className="flex items-center gap-2 p-2 rounded-lg font-bold
      bg-gradient-to-r from-blue-400 to-blue-700 text-white w-fit
      cursor-pointer transition duration-300 hover:from-blue-500 hover:to-blue-800"
                        >
                          <FiAward />
                          <span>Rate</span>
                        </div>
                      ) : (
                        <div
                          className="flex items-center gap-2 p-2 rounded-lg font-bold
      bg-gradient-to-r from-gray-300 to-gray-400 text-white w-fit cursor-not-allowed"
                        >
                          <FiAward />
                          <span>
                            {e.rate === true && e.status === "COMPLETED"
                              ? "Rated"
                              : "Rate"}
                          </span>
                        </div>
                      )}
                      {e.status === "PENDING" || e.status === "IN_PROGRESS" ? (
                        <div
                          className="flex items-center gap-2 p-2 rounded-lg font-bold
      bg-gradient-to-r from-red-400 to-red-700 text-white w-fit
      cursor-pointer transition duration-300 hover:from-red-500 hover:to-red-800"
                        >
                          <FiX />
                          <span>cancel</span>
                        </div>
                      ) : (
                        ""
                      )}
                      <label
                        className={`${
                          e.status === "IN_PROGRESS"
                            ? "bg-yellow-100 text-yellow-600"
                            : e.status === "COMPLETED"
                            ? "text-green-600 bg-green-100"
                            : e.status === "CANCELLED"
                            ? "text-red-600 bg-red-100"
                            : "text-gray-600 bg-gray-100"
                        } p-2 rounded-lg font-bold`}
                      >
                        {e.status}
                      </label>
                    </div>
                    <div className="flex flex-row gap-2 items-center cursor-pointer">
                      <CiTrash className="text-red-600" size={20} />
                      <CiEdit className="text-green-600" size={20} />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
