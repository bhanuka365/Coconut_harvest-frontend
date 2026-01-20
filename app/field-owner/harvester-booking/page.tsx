"use client";

import Link from "next/link";
import {
  FiCalendar,
  FiDollarSign,
  FiEdit3,
  FiFileText,
  FiHash,
  FiMapPin,
  FiMaximize2,
  FiNavigation,
} from "react-icons/fi";
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Booking = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [pricePerTree, setPricePerTree] = useState("");
  const [treeCount, setTreeCount] = useState("");
  const [landSize, setLandSize] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [navButtonLoading, setNavButtonLoading] = useState(false);


  const bookingSubmit = async () => {


   const token = localStorage.getItem("jwtToken");
console.log(token)

await axios.post(
  "http://localhost:8085/api/v1/bookings/add",
  {
  "landSize": 2.5,
  "treeCount": 120,
  "pricePerTree": 150.00,
  "longitude": "80.7718",
  "latitude": "7.8731",
  "address": "Kurunegala",
  "title": "Coconut Harvesting Job",
  "description": "Experienced workers required",
  "duedate": "2026-02-10",
  "jobType": "Job_Post",
  "rate": true
},
  {
    headers: {
      Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX2ZpZWxkX293bmVyIl0sInN1YiI6Ik5hZGVlIiwiaWF0IjoxNzY4ODg0MTU1LCJleHAiOjE3Njg5MDIxNTV9.VO7plY0hWY7PFr6d-Nv0NYKfGvmWqqWUAAd580bCeDiXqrD0GBDeczJsDS7MSD4cnsUdVXlIciIxc6bNQt5DGQ"}`, // ✅ correct
    },
  }
)
.then((res) => console.log("Booking created:", res.data))
.catch((err) => console.error("Error creating booking:", err));

    toast.info(
      title +
        description +
        address +
        latitude +
        longitude +
        pricePerTree +
        treeCount +
        landSize +
        dueDate,
    );
  };

  const getCurrentLocation = () => {
    setNavButtonLoading(true);
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);

        toast.success("Location added successfully");
      },
      () => {
        toast.error("Location access denied");
      },
    );
    setNavButtonLoading(false);
  };
  return (
    <div className="flex min-h-screen gap-5 flex-col items-center justify-between bg-gradient-to-br from-green-100 to-green-600 font-sans text-green-900 text-sm p-5">
      <div className="font-bold w-full text-2xl flex flex-row gap-2 justify-start items-center">
        <Image src="/logo2.png" alt="image" width={50} height={50} />
        CocoHarvest
      </div>
      <div className="flex flex-col justify-center items-center w-2/3 gap-5 bg-white/40 p-5 rounded-xl">
        <h1 className="font-bold w-full text-left text-2xl flex flex-row items-center gap-2">
          <Link href="/field-owner/home" className="cursor-pointer">
            <BiArrowBack />
          </Link>
          Harvester Booking
        </h1>
        <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full">
          <FiEdit3 />
          <input
            type="text"
            placeholder="Booking title (e.g. Coconut Harvest – Block A)"
            className="w-full focus:outline-none focus:ring-0 border-none"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row gap-2 justify-start items-start bg-white p-2 rounded-sm w-full">
          <FiFileText />
          <textarea
            placeholder="Brief description of the work"
            className="w-full focus:outline-none focus:ring-0 border-none"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-3 bg-white p-3 rounded-md">
            <FiMapPin className="text-gray-500" />
            <input
              type="text"
              placeholder="Enter field location manually"
              className="w-full focus:outline-none"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <button
            onClick={() => {
              getCurrentLocation();
            }}
            type="button"
            className="flex items-center justify-center gap-2 text-sm text-green-700 bg-green-100 p-2 rounded-md hover:bg-green-200 transition cursor-pointer"
          >
            <FiNavigation />
            {navButtonLoading ? "Getting location..." : "Use Current Location"}
          </button>
          <p className="text-xs">
            You can enter the address manually or use your current location.
          </p>
        </div>
        <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full">
          <FiCalendar />
          <input
            type="date"
            className="w-full focus:outline-none focus:ring-0 border-none"
            onChange={(e) => {
              setDueDate(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full">
          <FiMaximize2 />
          <input
            type="number"
            min={0}
            placeholder="Field size (in acres)"
            className="w-full focus:outline-none focus:ring-0 border-none"
            onChange={(e) => {
              setLandSize(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full">
          <FiHash />
          <input
            type="number"
            min={0}
            placeholder="Number of trees in the field"
            className="w-full focus:outline-none focus:ring-0 border-none"
            onChange={(e) => {
              setTreeCount(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full">
          <FiDollarSign />
          <input
            type="number"
            min={0}
            placeholder="Price per tree"
            className="w-full focus:outline-none focus:ring-0 border-none"
            onChange={(e) => {
              setPricePerTree(e.target.value);
            }}
          />
        </div>
        <button
          className="bg-gradient-to-r from-green-400 to-green-700 text-white p-2 rounded-sm w-full text-center cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-800"
          onClick={() => {
            bookingSubmit();
          }}
        >
          CONFIRM BOOKING
        </button>
      </div>
      <label className="w-full text-center">@2026 CocoHarvest Inc.</label>
      <ToastContainer />
    </div>
  );
};

export default Booking;
