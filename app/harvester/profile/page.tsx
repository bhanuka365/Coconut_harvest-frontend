"use client";

import Link from "next/link";
import { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import Image from "next/image";
import { BiArrowBack, BiPencil } from "react-icons/bi";

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
  {
    name: "Nadeesha",
    location: "Matara,Sri Lanka",
    phone_number: "0711764232",
  },
];

const Profile = () => {
  const [textVisual, setTextVisual] = useState(false);

  return (
    <div className="flex min-h-screen gap-5 flex-col items-center justify-between bg-gradient-to-br from-green-100 to-green-600 font-sans text-green-900 text-sm p-5">
      <div className="font-bold w-full text-2xl flex flex-row gap-2 justify-start items-center">
        <Image src="/logo2.png" alt="image" width={50} height={50} />
        CocoHarvest
      </div>
      <div className="flex flex-col items-start w-2/3 gap-5 bg-white/40 p-5 rounded-xl">
        <Link href="/field-owner/home" className="cursor-pointer">
          <BiArrowBack size={30} />
        </Link>
        <div className="flex flex-row justify-left items-center gap-2 w-full">
          <Image
            width={50}
            height={50}
            src="/profile.jpg"
            alt=""
            className="rounded-full h-30 w-30"
          />
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-4xl">Nadeesha Ruwandima</h1>
            <span>@nadee</span>
            <div className="flex flex-row gap-2">
              <Link
                href={"/field-owner/home"}
                className="text-white bg-gradient-to-r from-blue-400 to-blue-700 p-1 w-fit rounded-sm cursor-pointer transition duration-300 ease-in-out hover:from-blue-500 hover:to-blue-800"
              >
                Booking the harvester
              </Link>
              <span className="flex flex-row items-center gap-1 font-bold text-xl">
                <BsFillStarFill className="text-yellow-500" />
                4.5
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full bg-white/40 p-2 rounded-lg">
          <span className="font-bold">Bio</span>
          <div className="flex flex-row gap-2">
            <textarea
              value={"lhduu u fgurrrrrrrrrrrrrrrrrrrrrrg"}
              className="w-full bg-white rounded-lg p-2"
            />
            <BiPencil />
          </div>
        </div>
        <div className="flex flex-row w-full gap-5">
          <div className="flex flex-col gap-1 w-full bg-white/40 p-2 rounded-lg">
            <span className="font-bold">First name</span>
            <div className="flex flex-row gap-2">
              <input
                value={"lhduu u fgurrrrrrrrrrrrrrrrrrrrrrg"}
                className="w-full bg-white rounded-lg p-2"
              />
              <BiPencil />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full bg-white/40 p-2 rounded-lg">
            <span className="font-bold">Last name</span>
            <div className="flex flex-row gap-2">
              <input
                value={"lhduu u fgurrrrrrrrrrrrrrrrrrrrrrg"}
                className="w-full bg-white rounded-lg p-2"
              />
              <BiPencil />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full gap-5">
          <div className="flex flex-col gap-1 w-full bg-white/40 p-2 rounded-lg">
            <span className="font-bold">Address</span>
            <div className="flex flex-row gap-2">
              <input
                value={"lhduu u fgurrrrrrrrrrrrrrrrrrrrrrg"}
                className="w-full bg-white rounded-lg p-2"
              />
              <BiPencil />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full bg-white/40 p-2 rounded-lg">
            <span className="font-bold">Phone number</span>
            <div className="flex flex-row gap-2">
              <input
                value={"lhduu u fgurrrrrrrrrrrrrrrrrrrrrrg"}
                className="w-full bg-white rounded-lg p-2"
              />
              <BiPencil />
            </div>
          </div>
        </div>
        <button className="text-white bg-gradient-to-r from-green-400 to-green-700 p-2 w-full rounded-sm cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-800">
          EDIT
        </button>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-2xl">Rating and Reviews</h1>
          <div className="flex flex-col gap-2 overflow-y-auto h-50 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
            {userData.map((e, index) => {
              return (
                <div
                  className="shadow-lg rounded-xl bg-white w-full flex flex-row gap-2 p-5 "
                  key={index}
                >
                  <Image
                    width={20}
                    height={20}
                    src={`/profile.jpg`}
                    alt=""
                    className="rounded-full h-10 w-10"
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="font-bold">Naeesha Ruwandima</h1>
                    <div className="flex flex-row gap-1">
                      <BsFillStarFill className="text-yellow-500" />{" "}
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odit voluptatem quisquam sunt delectus molestiae possimus
                      animi porro, impedit obcaecati minus quasi ipsam vel
                      ratione voluptatum ad ipsum doloribus necessitatibus
                      veritatis. lo
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <label className="w-full text-center">@2026 CocoHarvest Inc.</label>
    </div>
  );
};

export default Profile;
