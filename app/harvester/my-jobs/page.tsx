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
} from "react-icons/fi";
import Image from "next/image";
import { GiTreeBranch } from "react-icons/gi";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

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
    job_type: "DIRECT",
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
    job_type: "DIRECT",
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
  },
];

const MyTasks = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [categoryBtn0, setCategoryBtn0] = useState(true);
  const [categoryBtn1, setCategoryBtn1] = useState(false);
  const [categoryBtn2, setCategoryBtn2] = useState(false);
  const [categoryTxt, setCategoryTxt] = useState("all");
  return (
    <div className="flex flex-col min-h-screen h-dvh bg-white font-sans text-green-900 text-sm flex-row">
      <div className="bg-green-400 w-20 text-white flex flex-col items-center p-5 gap-5">
        <Link
          href="/harvester/home"
          className="relative group flex items-center hover:bg-black/20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
        >
          <FiHome size={25} />
          <span className="absolute left-full ml-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Home
          </span>
        </Link>
        <Link
          href="/harvester/my-jobs"
          className="relative group flex items-center bg-black/40 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
        >
          <FiClipboard size={25} />
          <span className="absolute left-full ml-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            My Jobs
          </span>
        </Link>
        <div className="relative group flex items-center hover:bg-black/20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out" onClick={async ()=>{
          
            const result = await MySwal.fire({
              title: "Confirm Logout",
              text: "Are you sure you want to logout?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "Yes",
              cancelButtonText: "No",
              confirmButtonColor: "#22c55e",
              cancelButtonColor: "#ef4444",
              customClass: {
                popup: "rounded-lg p-5 text-center",
                title: "text-xl font-bold",
                confirmButton:
                  "px-5 py-2 rounded bg-green-500 hover:bg-green-600 text-white",
                cancelButton:
                  "px-5 py-2 rounded bg-red-500 hover:bg-red-600 text-white",
              },
            });
            result.isConfirmed
              ? (window.location.href = "/field-owner/login")
              : "";
        }}>
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
          <Link className="relative group cursor-pointer" href="/harvester/profile">
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
        <h1 className="text-2xl font-bold">My tasks</h1>
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
          <div className="flex flex-row gap-2 p-2 justify-center items-center rounded-lg w-fit font-bold bg-gradient-to-r from-green-400 to-green-700 text-white cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-800">
            <FiMapPin />
            <span>Search Nearby</span>
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
              setCategoryTxt("IN_PROGRESS");
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
                    e.status === "IN_PROGRESS" ? "bg-blue-200" : "bg-green-200"
                  } w-full flex flex-col gap-2 p-5`}
                  key={index}
                >
                  <h1 className="text-lg font-bold flex items-center gap-2 text-2xl">
                    {e.tittle}
                  </h1>
                  <p className="text-gray-600">{e.description}</p>
                  <div className="flex items-center gap-2">
                    <FiUser className="text-blue-600" />
                    <span className="font-medium">Field Owner:</span>
                    <span>{e.field_owner}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-red-500" />
                    <span className="font-medium">Location:</span>
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
                  <div className="flex flex-row gap-2">
                    {e.status === "IN_PROGRESS" ? (
                      <div
                        className="flex items-center gap-2 p-2 rounded-lg font-bold
      bg-gradient-to-r from-blue-400 to-blue-700 text-white w-fit
      cursor-pointer transition duration-300 hover:from-blue-500 hover:to-blue-800"
                      >
                        <FiCheck />
                        <span>Mark as Complete</span>
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
                        e.status === "IN_PROGRESS"
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
      </div>
    </div>
  );
};

export default MyTasks;
