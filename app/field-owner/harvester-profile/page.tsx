"use client";

import Link from "next/link";
import {
  FiCalendar
} from "react-icons/fi";
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";

const HarvesterProfile = () => {
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
          Saman Kumara
        </h1>
       <Link href="/field-owner/harvester-booking" className="flex flex-row gap-2 p-2 justify-center items-center rounded-lg w-fit font-bold bg-gradient-to-r from-blue-400 to-blue-700 text-white cursor-pointer transition duration-300 ease-in-out hover:from-blue-500 hover:to-blue-800">
             <FiCalendar />
            <span>Booking</span>
          </Link>
      </div>
      <label className="w-full text-center">@2026 CocoHarvest Inc.</label>
    </div>
  );
};

export default HarvesterProfile;
