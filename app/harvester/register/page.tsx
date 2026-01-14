"use client";

import Link from "next/link";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import {
  FiCamera,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
  FiPhoneCall,
  FiUser,
} from "react-icons/fi";
import Image from "next/image";

const Register = () => {
  const [textVisual1, setTextVisual1] = useState(false);
  const [textVisual2, setTextVisual2] = useState(false);
  return (
       <div className="min-h-screen bg-[url('/coconut-still-life1.jpg')] w-full bg-cover bg-center fixed top-0 right-0 left-0 bottom-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]  font-sans text-white text-sm">
       <div className="flex flex-col p-5 gap-10 justify-between items-center bg-black/60 min-h-screen">
      <div className="font-bold w-full text-2xl flex flex-row gap-2 justify-start items-center">
        <Image src="/logo2.png" alt="image" width={50} height={50} />
        CocoHarvest
      </div>
      <div className="flex flex-col justify-center items-center w-1/4 gap-5 bg-black/40 backdrop-blur-md p-5 rounded-xl">
        <h1 className="font-bold w-full text-left text-2xl">
          Sign up to your account
        </h1>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white p-5 rounded-full text-gray-900">
            <FiCamera />
          </div>
          Add profile
        </div>
        <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full text-gray-900">
          <FiUser />
          <input
            type="text"
            placeholder="Enter the username"
            className="w-full focus:outline-none focus:ring-0 border-none"
          />
        </div>
        <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full text-gray-900">
          <FiPhoneCall />
          <input
            type="tel"
            placeholder="Enter the phone number"
            className="w-full focus:outline-none focus:ring-0 border-none"
          />
        </div>
        <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full text-gray-900">
          <FiMail />
          <input
            type="email"
            placeholder="Enter the email"
            className="w-full focus:outline-none focus:ring-0 border-none"
          />
        </div>
        <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full text-gray-900">
          <FiLock />
          <input
            placeholder="Enter the new password"
            type={textVisual1 ? "text" : "password"}
            className="w-full focus:outline-none focus:ring-0 border-none"
          />
          {textVisual1 ? (
            <FiEye
              onClick={() => {
                setTextVisual1(false);
              }}
            />
          ) : (
            <FiEyeOff
              onClick={() => {
                setTextVisual1(true);
              }}
            />
          )}
        </div>
        <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full text-gray-900">
          <FiLock />
          <input
            placeholder="Enter the confirm password"
            type={textVisual2 ? "text" : "password"}
            className="w-full focus:outline-none focus:ring-0 border-none"
          />
          {textVisual2 ? (
            <FiEye
              onClick={() => {
                setTextVisual2(false);
              }}
            />
          ) : (
            <FiEyeOff
              onClick={() => {
                setTextVisual2(true);
              }}
            />
          )}
        </div>
        <button className="bg-gradient-to-r from-green-400 to-green-700 text-white p-2 rounded-sm w-full text-center cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-800">
          SIGN UP
        </button>
        <Link
          href="/harvester/login"
          className="w-full flex flex-row justify-center items-center gap-2 text-green-700 hover:underline transition duration-300 ease-in-out"
        >
          <BsArrowLeft /> Back to login
        </Link>
      </div>
      <label className="w-full text-center">@2026 CocoHarvest Inc.</label>
      </div>
    </div>
  );
};

export default Register;
