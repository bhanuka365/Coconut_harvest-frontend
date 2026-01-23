"use client";

import Link from "next/link";
import {
  FiCalendar,
  FiCheck,
  FiCheckCircle,
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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AvatarSkeleton, Dialog, NameSkeleton } from "@/components/Components";
import userjson from "@/json/user.json";
import axios from "axios";

const MySwal = withReactContent(Swal);

const bookingData = [
  {
    tittle: "Coconut Harvest Karannoo",
    description:
      " Harvest coconuts safely from the given field within thescheduled date.",
    field_owner: "Mr. Silva",
    location: "Matara,Sri Lanka",
    Date: "2026/05/07",
    field_size: 10,
    tree_count: 4,
    per_tree: 50,
    status: "PENDING",
    job_type: "DIRECT",
  },
  {
    tittle: "Coconut Harvest Karannoo",
    description:
      " Harvest coconuts safely from the given field within thescheduled date.",
    field_owner: "Mr. Silva",
    location: "Matara,Sri Lanka",
    Date: "2026/05/07",
    field_size: 10,
    tree_count: 4,
    per_tree: 50,
    status: "PENDING",
    job_type: "JOB_POST",
  },
  {
    tittle: "Coconut Harvest Karannoo",
    description:
      " Harvest coconuts safely from the given field within thescheduled date.",
    field_owner: "Mr. Silva",
    location: "Matara,Sri Lanka",
    Date: "2026/05/07",
    field_size: 10,
    tree_count: 4,
    per_tree: 50,
    status: "PENDING",
    job_type: "DIRECT",
  },
  {
    tittle: "Coconut Harvest Karannoo",
    description:
      " Harvest coconuts safely from the given field within thescheduled date.",
    field_owner: "Mr. Silva",
    location: "Matara,Sri Lanka",
    Date: "2026/05/07",
    field_size: 10,
    tree_count: 4,
    per_tree: 50,
    status: "PENDING",
    job_type: "DIRECT",
  },
  {
    tittle: "Coconut Harvest Karannoo",
    description:
      " Harvest coconuts safely from the given field within thescheduled date.",
    field_owner: "Mr. Silva",
    location: "Matara,Sri Lanka",
    Date: "2026/05/07",
    field_size: 10,
    tree_count: 4,
    per_tree: 50,
    status: "PENDING",
    job_type: "JOB_POST",
  },
  {
    tittle: "Coconut Harvest Karannoo",
    description:
      " Harvest coconuts safely from the given field within thescheduled date.",
    field_owner: "Mr. Silva",
    location: "Matara,Sri Lanka",
    Date: "2026/05/07",
    field_size: 10,
    tree_count: 4,
    per_tree: 50,
    status: "PENDING",
    job_type: "DIRECT",
  },
  {
    tittle: "Coconut Harvest Karannoo",
    description:
      " Harvest coconuts safely from the given field within thescheduled date.",
    field_owner: "Mr. Silva",
    location: "Matara,Sri Lanka",
    Date: "2026/05/07",
    field_size: 10,
    tree_count: 4,
    per_tree: 50,
    status: "PENDING",
    job_type: "JOB_POST",
  },
];

const Home = () => {
  const [searchTxt, setSearchTxt] = useState("");
   const [user, setUser] = useState(userjson);
  const [loadingPage, setLoadingPage] = useState(true);
   useEffect(() => {
      loadData();
    }, []);

    const loadData = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const userName = localStorage.getItem("userName");
     
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
          href="/harvester/home"
          className="relative group flex items-center bg-black/40 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
        >
          <FiHome size={25} />
          <span className="absolute left-full ml-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Home
          </span>
        </Link>
        <Link
          href="/harvester/my-jobs"
          className="relative group flex items-center hover:bg-black/20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out"
        >
          <FiClipboard size={25} />
          <span className="absolute left-full ml-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            My Jobs
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
        <div className="flex flex-row gap-5">
          <div className="bg-gradient-to-r from-orange-400 to-orange-900 p-5 rounded-lg w-1/3 flex flex-col text-white gap-2">
            <div className="flex flex-row items-center gap-2">
              <FiCheckCircle className="text-2xl" />
              <label className="font-bold text-2xl">Complete jobs</label>
            </div>
            <label>30</label>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-green-900 p-5 rounded-lg w-1/3 flex flex-col text-white gap-2">
            <div className="flex flex-row items-center gap-2">
              <FiDollarSign className="text-2xl" />
              <label className="font-bold text-2xl">Total earn</label>
            </div>
            <label>LKR 100,000</label>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-blue-900 p-5 rounded-lg w-1/3 flex flex-col text-white gap-2">
            <div className="flex flex-row items-center gap-2">
              <LuClipboardPen className="text-2xl" />
              <label className="font-bold text-2xl">Progress jobs</label>
            </div>
            <label>2</label>
          </div>
        </div>
        <h1 className="text-2xl font-bold">New Job Requests</h1>
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
        </div>
        <div className="flex flex-col gap-5 overflow-y-auto h-dvh [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
          {bookingData
            .filter((e) => {
              return e.location.toLowerCase().includes(searchTxt.toLowerCase());
            })
            .map((e, index) => {
              return (
                <div
                  className="shadow-lg rounded-xl bg-white w-full flex flex-col gap-2 p-5 "
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
                    <FiMaximize2 className="text-red-600" />
                    <span className="font-medium">Field size (in acres)</span>
                    <span>{e.field_size}</span>
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
                    {e.job_type === "DIRECT" ? (
                      <div className="flex flex-row gap-2">
                        <div
                          className="flex items-center gap-2 p-2 rounded-lg font-bold
      bg-gradient-to-r from-blue-400 to-blue-700 text-white w-fit
      cursor-pointer transition duration-300 hover:from-blue-500 hover:to-blue-800"
                        >
                          <FiCheck />
                          <span>Confirm</span>
                        </div>
                        <div
                          className="flex items-center gap-2 p-2 rounded-lg font-bold
      bg-gradient-to-r from-red-400 to-red-700 text-white w-fit
      cursor-pointer transition duration-300 hover:from-red-500 hover:to-red-800"
                        >
                          <FiX />
                          <span>Cancel</span>
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={async () => {
                          const result = await Dialog(
                            "Confirm Accept Job",
                            "Are you sure you want to accept this job?",
                            "warning",
                            "#5871ef",
                            "#43ce76"
                          );
                        }}
                        className="flex items-center gap-2 p-2 rounded-lg font-bold
      bg-gradient-to-r from-blue-400 to-blue-700 text-white w-fit
      cursor-pointer transition duration-300 hover:from-blue-500 hover:to-blue-800"
                      >
                        <MdWork />
                        <span>Accept Job</span>
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
      </div>
    </div>
  );
};

export default Home;
