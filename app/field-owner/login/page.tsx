"use client";

import Link from "next/link";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";
import Image from "next/image";

const Login = () => {
  const [textVisual, setTextVisual] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-br from-green-100 to-green-600 font-sans text-green-900 text-sm p-5">
      <div className="font-bold w-full text-2xl flex flex-row gap-2 justify-start items-center">
        <Image src="/logo1.png" alt="image" width={50} height={50} />
        CocoHarvest
      </div>
      <div className="flex flex-col justify-center items-center w-1/4 gap-5 bg-white/40 p-5 rounded-xl">
        <h1 className="font-bold w-full text-left text-2xl">
          Sign in to your account
        </h1>
        <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full">
          <FiMail />
          <input
            placeholder="Enter the email"
            type="email"
            className="w-full focus:outline-none focus:ring-0 border-none"
          />
        </div>
        <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full">
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
        <button className="bg-gradient-to-r from-green-400 to-green-700 text-white p-2 rounded-sm w-full text-center cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-800" onClick={()=>{
          window.location.href = "/field-owner/home"
        }}>
          SIGN IN
        </button>
        <label className="w-full flex flex-row gap-1 justify-center items-center">
          New to Coconut?
          <Link
            href="/field-owner/register"
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
  );
};

export default Login;
