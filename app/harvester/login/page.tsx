"use client";

import Link from "next/link";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";
import Image from "next/image";

const Login = () => {
  const [textVisual, setTextVisual] = useState(false);

  return (
       <div className="min-h-screen bg-[url('/coconut-still-life1.jpg')] w-full bg-cover bg-center fixed top-0 right-0 left-0 bottom-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]  font-sans text-white text-sm">
       <div className="flex flex-col p-5 gap-10 justify-between items-center bg-black/60 min-h-screen">
      <div className="font-bold w-full text-2xl flex flex-row gap-2 justify-start items-center">
        <Image src="/logo2.png" alt="image" width={50} height={50} />
        CocoHarvest
      </div>
      <div className="flex flex-col justify-center items-center w-1/4 gap-5 bg-black/40 backdrop-blur-md p-5 rounded-xl">
        <h1 className="font-bold w-full text-left text-2xl">
          Sign in to your account
        </h1>
        <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full text-gray-900">
          <FiMail />
          <input
            placeholder="Enter the email"
            type="email"
            className="w-full focus:outline-none focus:ring-0 border-none"
          />
        </div>
        <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full text-gray-900">
          <FiLock />
          <input
            placeholder="Enter the password"
            type={textVisual ? "text" : "password"}
            className="w-full focus:outline-none focus:ring-0 border-none"
          />
          {textVisual ? (
            <FiEye
              onClick={() => {
                setTextVisual(false);
              }}
            />
          ) : (
            <FiEyeOff
              onClick={() => {
                setTextVisual(true);
              }}
            />
          )}
        </div>
        <Link
          href="/forgot-password"
          className="w-full text-right hover:underline transition duration-300 ease-in-out"
        >
          Forgot password?
        </Link>
        <button
          className="bg-gradient-to-r from-green-400 to-green-700 text-white p-2 rounded-sm w-full text-center cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-800"
          onClick={() => {
            window.location.href = "/harvester/home";
          }}
        >
          SIGN IN
        </button>
        <label className="w-full flex flex-row gap-1 justify-center items-center">
          New to CocoHarvest?
          <Link
            href="/harvester/register"
            className="text-green-700 font-bold hover:underline transition duration-300 ease-in-out"
          >
            Register
          </Link>
        </label>
        <Link
          href="/"
          className="w-full flex flex-row justify-center items-center gap-2 text-green-700 hover:underline transition duration-300 ease-in-out"
        >
          <BsArrowLeft /> Back to main
        </Link>
      </div>
      <label className="w-full text-center">@2026 CocoHarvest Inc.</label>
      </div>
    </div>
  );
};

export default Login;
