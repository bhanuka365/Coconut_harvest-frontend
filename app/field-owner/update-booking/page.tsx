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
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import bookingJson from "@/json/booking.json";
import { toast, ToastContainer } from "react-toastify";
import { checkEmpty } from "@/validation/validation";
import { BookingSkeleton } from "@/components/Components";

const UpdateBooking = () => {
  const searchParams = useSearchParams();
  const bookingid = searchParams.get("bookingid");
  // const [booking,setBooking] = useState(bookingJson)
  const [updateTittle, setUpdateTittle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [updateAddress, setUpdateAddress] = useState("");
  const [updatelatitude, setUpadateLatitude] = useState("");
  const [updatelongitude, setUpdateLongitude] = useState("");
  const [updatePricePerTree, setUpdatePricePerTree] = useState("");
  const [updateTreeCount, setUpdateTreeCount] = useState("");
  const [updateWorkerCount, setUpdateWorkerCount] = useState("");
  const [updatelandSize, setUpdateLandSize] = useState("");
  const [updateDueDate, setUpdateDueDate] = useState("");
  const [jobType, setJobType] = useState("");
  const [navButtonLoading, setNavButtonLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);

  const [titleError, setTitleError] = useState(true);
  const [descriptionError, setDescriptionError] = useState(true);
  const [pricePerTreeError, setPricePerTreeError] = useState(true);
  const [treeCountError, setTreeCountError] = useState(true);
  const [workerCountError, setWorkerCountError] = useState(true);
  const [landSizeError, setLandSizeError] = useState(true);
  const [dueDateError, setDueDateError] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const result = await axios.get(
        `http://localhost:8085/api/v1/bookings/14`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      // setBooking(result.data.dataBundle);
      setUpdateTittle(result.data.dataBundle.title);
      setUpdateDescription(result.data.dataBundle.description);
      const formattedDate = result.data.dataBundle.duedate.split("T")[0];
      setUpdateDueDate(formattedDate);
      setUpdateAddress(result.data.dataBundle.address);
      setUpdateLandSize(result.data.dataBundle.landSize);
      setUpadateLatitude(result.data.dataBundle.latitude);
      setUpdateLongitude(result.data.dataBundle.longitude);
      setUpdatePricePerTree(result.data.dataBundle.pricePerTree);
      setUpdateTreeCount(result.data.dataBundle.treeCount);
      setUpdateWorkerCount(result.data.dataBundle.Count);
      setJobType(result.data.dataBundle.jobType);
    } catch (error) {
    } finally {
      setLoadingPage(false);
    }
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);

      setTitleError(checkEmpty(updateTittle));
      setDescriptionError(checkEmpty(updateDescription));
      setPricePerTreeError(checkEmpty(updatePricePerTree));
      setTreeCountError(checkEmpty(updateTreeCount));
      setLandSizeError(checkEmpty(updatelandSize));
      setDueDateError(checkEmpty(updateDueDate));
      setWorkerCountError(checkEmpty(updateWorkerCount));

      if (
        checkEmpty(updateTittle) &&
        checkEmpty(updateDescription) &&
        checkEmpty(updatePricePerTree) &&
        checkEmpty(updateTreeCount) &&
        checkEmpty(updateDueDate) &&
        (checkEmpty(updateAddress)
         ||
          (checkEmpty(updatelatitude) && checkEmpty(updatelongitude))
        )
      ) {
        if (jobType !== "Direct" && !checkEmpty(updateWorkerCount)) {
          toast.error("Booking update failed please check the details");
          setLoading(false);
          return;
        }
        const token = localStorage.getItem("jwtToken");

        await axios.put(
          "http://localhost:8085/api/v1/bookings/update",
          {
            bookingId: 14,
            landSize: updatelandSize,
            treeCount: updateTreeCount,
            pricePerTree: updatePricePerTree,
            longitude: updatelongitude,
            latitude: updatelatitude,
            address: updateAddress,
            title: updateTittle,
            description: updateDescription,
            duedate: updateDueDate,
            jobType: jobType,
            rate: false,
            count: jobType !== "Direct" ? updateWorkerCount : null,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        toast.success("Booking updated");
      } else {
        toast.error("Booking update failed please check the details");
      }
    } catch (err: any) {
      if (err.response) {
        toast.error("Booking update failed");
      } else if (err.request) {
        toast.error("Server not reachable");
      } else {
        console.error("FULL ERROR:", err);
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

        setUpadateLatitude(latitude.toString());
        setUpdateLongitude(longitude.toString());

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
      {loadingPage ? (
        <BookingSkeleton />
      ) : (
        <div className="flex flex-col justify-center items-center lg:w-2/3 w-full gap-5 bg-white/40 p-5 gap-5 rounded-xl">
          <h1 className="font-bold w-full text-left text-2xl flex flex-row items-center gap-2">
            <Link href="/field-owner/my-bookings" className="cursor-pointer">
              <BiArrowBack />
            </Link>
            Update the Booking
          </h1>
          <div className="w-full relative">
            <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full">
              <FiEdit3 />
              <input
                type="text"
                placeholder="Booking title (e.g. Coconut Harvest – Block A)"
                className="w-full focus:outline-none focus:ring-0 border-none"
                value={updateTittle}
                onChange={(e) => {
                  setUpdateTittle(e.target.value);
                }}
              />
            </div>
            <span
              className={`absolute left-0 top-full text-red-400 text-xs ${
                titleError ? "invisible" : "visible"
              }`}
            >
              cannot be empty
            </span>
          </div>
          <div className="w-full relative">
            <div className="flex flex-row gap-2 justify-start items-start bg-white p-2 rounded-sm w-full">
              <FiFileText />
              <textarea
                placeholder="Brief description of the work"
                className="w-full focus:outline-none focus:ring-0 border-none"
                value={updateDescription}
                onChange={(e) => {
                  setUpdateDescription(e.target.value);
                }}
              />
            </div>
            <span
              className={`absolute left-0 top-full text-red-400 text-xs ${
                descriptionError ? "invisible" : "visible"
              }`}
            >
              cannot be empty
            </span>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center gap-3 bg-white p-3 rounded-md">
              <FiMapPin className="text-gray-500" />
              <input
                type="text"
                placeholder="Enter field location manually"
                className="w-full focus:outline-none"
                value={updateAddress}
                onChange={(e) => {
                  setUpdateAddress(e.target.value);
                }}
              />
            </div>
            <button
              type="button"
              onClick={() => {
                getCurrentLocation();
              }}
              className="flex items-center justify-center gap-2 text-sm text-green-700 bg-green-100 p-2 rounded-md hover:bg-green-200 transition cursor-pointer"
            >
              <FiNavigation />
              Use Current Location
            </button>
            <p className="text-xs">
              You can enter the address manually or use your current location.
            </p>
          </div>
          <div className="w-full relative">
            <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full">
              <FiCalendar />
              <input
                type="date"
                className="w-full focus:outline-none focus:ring-0 border-none"
                value={updateDueDate}
                onChange={(e) => {
                  setUpdateDueDate(e.target.value);
                }}
              />
            </div>
            <span
              className={`absolute left-0 top-full text-red-400 text-xs ${
                dueDateError ? "invisible" : "visible"
              }`}
            >
              cannot be empty
            </span>
          </div>
          <div className="w-full relative">
            <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full">
              <FiMaximize2 />
              <input
                type="number"
                placeholder="Field size (in acres)"
                className="w-full focus:outline-none focus:ring-0 border-none"
                value={updatelandSize}
                onChange={(e) => {
                  setUpdateLandSize(e.target.value);
                }}
              />
            </div>
            <span
              className={`absolute left-0 top-full text-red-400 text-xs ${
                landSizeError ? "invisible" : "visible"
              }`}
            >
              cannot be empty
            </span>
          </div>
          <div className="w-full relative">
            <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full">
              <FiHash />
              <input
                type="number"
                placeholder="Number of trees in the field"
                className="w-full focus:outline-none focus:ring-0 border-none"
                value={updateTreeCount}
                onChange={(e) => {
                  setUpdateTreeCount(e.target.value);
                }}
              />
            </div>
            <span
              className={`absolute left-0 top-full text-red-400 text-xs ${
                treeCountError ? "invisible" : "visible"
              }`}
            >
              cannot be empty
            </span>
          </div>
          {jobType !== "Direct" ? (
            <div className="w-full relative">
              <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full">
                <FiHash />
                <input
                  type="number"
                  min={0}
                  placeholder="Number of worker count"
                  className="w-full focus:outline-none focus:ring-0 border-none"
                  onChange={(e) => {
                    setUpdateWorkerCount(e.target.value);
                  }}
                />
              </div>
              <span
                className={`absolute left-0 top-full text-red-400 text-xs ${
                  workerCountError ? "invisible" : "visible"
                }`}
              >
                cannot be empty
              </span>
            </div>
          ) : (
            ""
          )}
          <div className="w-full relative">
            <div className="flex flex-row gap-2 justify-start items-center bg-white p-2 rounded-sm w-full">
              <FiDollarSign />
              <input
                type="number"
                placeholder="Price per tree"
                className="w-full focus:outline-none focus:ring-0 border-none"
                value={updatePricePerTree}
                onChange={(e) => {
                  setUpdatePricePerTree(e.target.value);
                }}
              />
            </div>
            <span
              className={`absolute left-0 top-full text-red-400 text-xs ${
                pricePerTreeError ? "invisible" : "visible"
              }`}
            >
              cannot be empty
            </span>
          </div>
          <button
            className="bg-gradient-to-r from-green-400 to-green-700 text-white p-2 rounded-sm w-full text-center cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-800"
            onClick={() => {
              handleUpdate();
            }}
          >
            {loading ? "save changing" : "save changes"}
          </button>
        </div>
      )}
      <label className="w-full text-center">@2026 CocoHarvest Inc.</label>
      <ToastContainer />
    </div>
  );
};

export default UpdateBooking;
