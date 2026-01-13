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

const UpdateBooking = () => {
  return (
    <div className="flex min-h-screen gap-5 flex-col items-center justify-between bg-gradient-to-br from-green-100 to-green-600 font-sans text-green-900 text-sm p-5">
      <div className="font-bold w-full text-2xl flex flex-row gap-2 justify-start items-center">
        <Image src="/logo2.png" alt="image" width={50} height={50} />
        CocoHarvest
      </div>
      <div className="flex flex-col justify-center items-center w-2/3 gap-5 bg-white/40 p-5 rounded-xl">
        <h1 className="font-bold w-full text-left text-2xl flex flex-row items-center gap-2">
          <Link href="/field-owner/my-bookings" className="cursor-pointer">
            <BiArrowBack />
          </Link>
          Update the Booking
        </h1>
        <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full">
          <FiEdit3 />
          <input
            type="text"
            placeholder="Booking title (e.g. Coconut Harvest – Block A)"
            className="w-full focus:outline-none focus:ring-0 border-none"
          />
        </div>
        <div className="flex flex-row gap-2 justify-start items-start bg-white p-2 rounded-sm w-full">
          <FiFileText />
          <textarea
            placeholder="Brief description of the work"
            className="w-full focus:outline-none focus:ring-0 border-none"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-3 bg-white p-3 rounded-md">
            <FiMapPin className="text-gray-500" />
            <input
              type="text"
              placeholder="Enter field location manually"
              className="w-full focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="flex items-center justify-center gap-2 text-sm text-green-700 bg-green-100 p-2 rounded-md hover:bg-green-200 transition cursor-pointer"
          >
            <FiNavigation />
            Use Current Location
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
          />
        </div>
        <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full">
          <FiMaximize2 />
          <input
            type="number"
            placeholder="Field size (in acres)"
            className="w-full focus:outline-none focus:ring-0 border-none"
          />
        </div>
        <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full">
          <FiHash />
          <input
            type="number"
            placeholder="Number of trees in the field"
            className="w-full focus:outline-none focus:ring-0 border-none"
          />
        </div>
        <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full">
          <FiDollarSign />
          <input
            type="number"
            placeholder="Price per tree"
            className="w-full focus:outline-none focus:ring-0 border-none"
          />
        </div>
        <button className="bg-gradient-to-r from-green-400 to-green-700 text-white p-2 rounded-sm w-full text-center cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-800">
          SAVE CHANGES
        </button>
      </div>
      <label className="w-full text-center">@2026 CocoHarvest Inc.</label>
    </div>
  );
};

export default UpdateBooking;
