"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import { FiMapPin, FiPhoneCall } from "react-icons/fi";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { WorkerProfile } from "@/components/Components";

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

const HarvesterProfile = () => {
  const [user, setUser] = useState({
    Address: "",
    Description: "",
    Telephone: 0,
    role: {
      roleDescription: "",
      roleName: "",
    },
    userFirstName: "",
    userImage: "",
    userLastName: "",
    userName: "",
    userPassword: "",
  });
  const searchParams = useSearchParams();
  const username = searchParams.get("username");
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const result = await axios.get(
        `http://localhost:8085/api/v1/user/${username}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setUser(result.data.dataBundle);
    } catch (error) {
    } finally {
      setLoadingPage(false);
    }
  };

  return (
    <div className="flex min-h-screen gap-5 flex-col items-center justify-between bg-gradient-to-br from-green-100 to-green-600 font-sans text-green-900 text-sm p-5">
      <div className="font-bold w-full text-2xl flex flex-row gap-2 justify-start items-center">
        <Image src="/logo2.png" alt="image" width={50} height={50} />
        CocoHarvest
      </div>
      {loadingPage ? (
        <WorkerProfile />
      ) : (
        <div className="flex flex-col items-start lg:w-2/3 w-full gap-5 bg-white/40 p-5 rounded-xl">
          <Link href="/field-owner/home" className="cursor-pointer">
            <BiArrowBack size={30} />
          </Link>
          <div className="flex flex-row justify-left items-center gap-2 w-full">
            <Image
              width={0}
              height={0}
              src={`data:image/jpeg;base64,${user.userImage}`}
              alt=""
              className="rounded-full lg:h-30 lg:w-30 h-20 w-20"
            />
            <div className="flex flex-col gap-1 min-w-0">
              <h1 className="font-bold text-4xl truncate">
                {user.userFirstName} {user.userLastName}
              </h1>
              <span>@{user.userName}</span>
              <div className="flex flex-row gap-2">
                <Link
                  href={"/field-owner/home"}
                  className="flex flex-row gap-2 items-center text-white bg-gradient-to-r from-blue-400 to-blue-700 p-1 w-fit rounded-sm cursor-pointer transition duration-300 ease-in-out hover:from-blue-500 hover:to-blue-800 min-w-0"
                >
                  <FiPhoneCall /> <span className="truncate">Booking the harvester</span>
                </Link>
                <span className="flex flex-row items-center gap-1 font-bold text-xl">
                  <BsFillStarFill className="text-yellow-500" />
                  4.5
                </span>
              </div>
            </div>
          </div>
          <p>{user.Description}</p>
          <div className="flex flex-row gap-5 font-bold">
            <div className="flex flex-row w-fit items-center gap-2 text-red-500">
              <FiMapPin />
              <label>{user.Address}</label>
            </div>
            <div className="flex flex-row w-fit items-center gap-2 text-blue-500">
              <FiPhoneCall />
              <label>{user.Telephone}</label>
            </div>
          </div>
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
                        Odit voluptatem quisquam sunt delectus molestiae
                        possimus animi porro, impedit obcaecati minus quasi
                        ipsam vel ratione voluptatum ad ipsum doloribus
                        necessitatibus veritatis. lo
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <label className="w-full text-center">@2026 CocoHarvest Inc.</label>
    </div>
  );
};

export default HarvesterProfile;
