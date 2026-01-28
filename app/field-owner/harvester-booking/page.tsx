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
  FiUser,
} from "react-icons/fi";
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { checkEmpty } from "@/utils/validation";
import { useSearchParams } from "next/navigation";
import { addBooking } from "@/api/booking";

const Booking = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [pricePerTree, setPricePerTree] = useState("");
  const [treeCount, setTreeCount] = useState("");
  const [workerCount, setWorkerCount] = useState("");
  const [landSize, setLandSize] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [navButtonLoading, setNavButtonLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const [titleError, setTitleError] = useState(true);
  const [descriptionError, setDescriptionError] = useState(true);
  const [pricePerTreeError, setPricePerTreeError] = useState(true);
  const [treeCountError, setTreeCountError] = useState(true);
  const [workerCountError, setWorkerCountError] = useState(true);
  const [landSizeError, setLandSizeError] = useState(true);
  const [dueDateError, setDueDateError] = useState(true);
  const searchParams = useSearchParams();
  const username = searchParams.get("username");

  const bookingSubmit = async () => {
    try {
      setLoading(true);

      setTitleError(checkEmpty(title));
      setDescriptionError(checkEmpty(description));
      setPricePerTreeError(checkEmpty(pricePerTree));
      setTreeCountError(checkEmpty(treeCount));
      setLandSizeError(checkEmpty(landSize));
      setDueDateError(checkEmpty(dueDate));
      setWorkerCountError(checkEmpty(workerCount));

      if (
        checkEmpty(title) &&
        checkEmpty(description) &&
        checkEmpty(pricePerTree) &&
        checkEmpty(treeCount) &&
        checkEmpty(landSize) &&
        checkEmpty(dueDate) &&
        (checkEmpty(address) || (checkEmpty(longitude) && checkEmpty(latitude)))
      ) {
        if (username === null && !checkEmpty(workerCount)) {
          toast.error("Booking submit failed please check the details");
          setLoading(false);
          return;
        }
        const token = localStorage.getItem("jwtToken");

        const jsonData = {
          landSize: landSize,
          treeCount: treeCount,
          pricePerTree: pricePerTree,
          longitude: longitude,
          latitude: latitude,
          address: address,
          title: title,
          description: description,
          duedate: dueDate,
          jobType: username === null ? "Job_Post" : "Direct",
          rate: false,
          count: workerCount,
          harvesterName: username,
        };

        await addBooking(jsonData, token);

        // await axios.post(
        //   "http://localhost:8085/api/v1/bookings/add",
        //   {
        //     landSize: landSize,
        //     treeCount: treeCount,
        //     pricePerTree: pricePerTree,
        //     longitude: longitude,
        //     latitude: latitude,
        //     address: address,
        //     title: title,
        //     description: description,
        //     duedate: dueDate,
        //     jobType: username === null ? "Job_Post" : "Direct",
        //     rate: false,
        //     count: workerCount,
        //     harvesterName: username, // re check this api
        //   },
        //   {
        //     headers: {
        //       Authorization: `Bearer ${token}`,
        //     },
        //   },
        // );
        toast.success("Booking submited");
      } else {
        toast.error("Booking submit failed please check the details");
      }
    } catch (err: any) {
      if (err.response) {
        toast.error("Booking failed");
      } else if (err.request) {
        toast.error("Server not reachable");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
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

        setLatitude(latitude.toString());
        setLongitude(longitude.toString());

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
      <div className="flex flex-col justify-center items-center lg:w-2/3 w-full gap-5 bg-white/40 p-5 rounded-xl">
        <h1 className="font-bold w-full text-left text-2xl flex items-center gap-2">
          <Link href="/field-owner/home" className="cursor-pointer">
            <BiArrowBack />
          </Link>
          Harvester Booking
        </h1>
        {username !== null ? (
          <div className="w-full">
            <label className="block mb-1 text-sm font-bold">
              Harvester Name
            </label>
            <h1 className="flex gap-2 items-center bg-white cursor-not-allowed p-2 rounded-sm w-full">
              <FiUser />
              {username}
            </h1>
          </div>
        ) : (
          ""
        )}
        <div className="w-full relative">
          <label className="block mb-1 text-sm font-bold">Booking Title</label>
          <div className="flex gap-2 items-center bg-white p-2 rounded-sm w-full">
            <FiEdit3 />
            <input
              type="text"
              className="w-full focus:outline-none border-none"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <span
            className={`absolute left-0 top-full text-red-400 text-xs ${titleError ? "invisible" : "visible"}`}
          >
            cannot be empty
          </span>
        </div>

        <div className="w-full relative">
          <label className="block mb-1 text-sm font-bold">
            Work Description
          </label>
          <div className="flex gap-2 items-start bg-white p-2 rounded-sm w-full">
            <FiFileText />
            <textarea
              className="w-full focus:outline-none border-none"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <span
            className={`absolute left-0 top-full text-red-400 text-xs ${descriptionError ? "invisible" : "visible"}`}
          >
            cannot be empty
          </span>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="text-sm font-bold">Field Location</label>
          <div className="flex items-center gap-3 bg-white p-3 rounded-md">
            <FiMapPin className="text-gray-500" />
            <input
              type="text"
              className="w-full focus:outline-none"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={getCurrentLocation}
            className="flex items-center justify-center gap-2 text-sm text-green-700 bg-green-100 p-2 rounded-md hover:bg-green-200 transition"
          >
            <FiNavigation />
            {navButtonLoading ? "Getting location..." : "Use Current Location"}
          </button>

          <p className="text-xs">
            You can enter the address manually or use your current location.
          </p>
        </div>

        <div className="w-full relative">
          <label className="block mb-1 text-sm font-bold">Due Date</label>
          <div className="flex gap-2 items-center bg-white p-2 rounded-sm w-full">
            <FiCalendar />
            <input
              type="date"
              className="w-full focus:outline-none border-none"
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <span
            className={`absolute left-0 top-full text-red-400 text-xs ${dueDateError ? "invisible" : "visible"}`}
          >
            cannot be empty
          </span>
        </div>

        <div className="w-full relative">
          <label className="block mb-1 text-sm font-bold">
            Field Size (Acres)
          </label>
          <div className="flex gap-2 items-center bg-white p-2 rounded-sm w-full">
            <FiMaximize2 />
            <input
              type="number"
              min={0}
              className="w-full focus:outline-none border-none"
              onChange={(e) => setLandSize(e.target.value)}
            />
          </div>
          <span
            className={`absolute left-0 top-full text-red-400 text-xs ${landSizeError ? "invisible" : "visible"}`}
          >
            cannot be empty
          </span>
        </div>

        <div className="w-full relative">
          <label className="block mb-1 text-sm font-bold">
            Number of Trees
          </label>
          <div className="flex gap-2 items-center bg-white p-2 rounded-sm w-full">
            <FiHash />
            <input
              type="number"
              min={0}
              className="w-full focus:outline-none border-none"
              onChange={(e) => setTreeCount(e.target.value)}
            />
          </div>
          <span
            className={`absolute left-0 top-full text-red-400 text-xs ${treeCountError ? "invisible" : "visible"}`}
          >
            cannot be empty
          </span>
        </div>

        {username === null && (
          <div className="w-full relative">
            <label className="block mb-1 text-sm font-bold">Worker Count</label>
            <div className="flex gap-2 items-center bg-white p-2 rounded-sm w-full">
              <FiHash />
              <input
                type="number"
                min={0}
                className="w-full focus:outline-none border-none"
                onChange={(e) => setWorkerCount(e.target.value)}
              />
            </div>
            <span
              className={`absolute left-0 top-full text-red-400 text-xs ${workerCountError ? "invisible" : "visible"}`}
            >
              cannot be empty
            </span>
          </div>
        )}

        <div className="w-full relative">
          <label className="block mb-1 text-sm font-bold">Price Per Tree</label>
          <div className="flex gap-2 items-center bg-white p-2 rounded-sm w-full">
            <FiDollarSign />
            <input
              type="number"
              min={0}
              className="w-full focus:outline-none border-none"
              onChange={(e) => setPricePerTree(e.target.value)}
            />
          </div>
          <span
            className={`absolute left-0 top-full text-red-400 text-xs ${pricePerTreeError ? "invisible" : "visible"}`}
          >
            cannot be empty
          </span>
        </div>

        <button
          onClick={bookingSubmit}
          className="bg-gradient-to-r from-green-400 to-green-700 text-white p-2 rounded-sm w-full transition hover:from-green-500 hover:to-green-800"
        >
          {loading ? "booking confirming..." : "booking confirm"}
        </button>
      </div>

      <label className="w-full text-center">@2026 CocoHarvest Inc.</label>
      <ToastContainer />
    </div>
  );
};

export default Booking;
