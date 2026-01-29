"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BiArrowBack, BiPencil } from "react-icons/bi";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { checkEmpty } from "@/utils/validation";
import { EmptyState, ProfileCardSkeleton } from "@/components/Components";
import { FaEdit } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import reviewsjson from "@/json/reviews.json";
import userjson from "@/json/user.json";
import { getUserByUserName, updateUserByUserName } from "@/api/user";
import { getReviewsByHarvesterName } from "@/api/review";

const Profile = () => {
  const [user, setUser] = useState(userjson);
  const [updateUserFirstName, setUpdateUserFirstName] = useState("");
  const [updateUserLastName, setUpdateUserLastName] = useState("");
  const [updateUserAddress, setUpdateUserAddress] = useState("");
  const [updateUserPhoneNumber, setUpdateUserPhoneNumber] = useState("");
  const [updateUserDescription, setUpdateUserDescription] = useState("");

  const [editPencil1, setEditPencil1] = useState(true);
  const [editPencil2, setEditPencil2] = useState(true);
  const [editPencil3, setEditPencil3] = useState(true);
  const [editPencil4, setEditPencil4] = useState(true);
  const [editPencil5, setEditPencil5] = useState(true);

  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);
  const [averageRate, setAverageRate] = useState("");
  const [reviews, setReviews] = useState(reviewsjson);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      window.location.href = "/";
    } else {
      loadData();
    }
  }, []);

  const loadData = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const username = localStorage.getItem("userName");

      const result = await getUserByUserName(username, token);

      setUser(result.data.dataBundle);
      setUpdateUserFirstName(result.data.dataBundle.userFirstName);
      setUpdateUserLastName(result.data.dataBundle.userLastName);
      setUpdateUserAddress(result.data.dataBundle.Address);
      setUpdateUserDescription(result.data.dataBundle.Description);
      setUpdateUserPhoneNumber(result.data.dataBundle.Telephone);

      const result1 = await getReviewsByHarvesterName(username, token);

      const fetchedReviews = result1.data.dataBundle;
      console.log(result1.data.dataBundle);
      setReviews(fetchedReviews);

      const averageRating =
        fetchedReviews.length > 0
          ? (
              fetchedReviews.reduce(
                (sum: number, r: { reviewRate: any }) =>
                  sum + Number(r.reviewRate),
                0,
              ) / fetchedReviews.length
            ).toFixed(1)
          : "0.0";

      setAverageRate(averageRating);
    } catch (error) {
    } finally {
      setLoadingPage(false);
    }
  };

  const updateProfile = async () => {
    setLoading(true);

    if (
      checkEmpty(updateUserFirstName) &&
      checkEmpty(updateUserLastName) &&
      checkEmpty(updateUserDescription) &&
      checkEmpty(updateUserPhoneNumber) &&
      checkEmpty(updateUserAddress)
    ) {
      try {
        const token = localStorage.getItem("jwtToken");
        const username = localStorage.getItem("userName");

        const jsonData = {
          Address: updateUserAddress,
          Description: updateUserDescription,
          Telephone: updateUserPhoneNumber,
          userFirstName: updateUserFirstName,
          userLastName: updateUserLastName,
          userName: username,
        };

        await updateUserByUserName(jsonData, token);

        toast.success("Profile updated");
      } catch (err: any) {
        if (err.response) {
          toast.error("Profile updating failed");
        } else if (err.request) {
          toast.error("Server not reachable");
        } else {
          toast.error("Something went wrong");
        }
      } finally {
        setLoading(false);
        loadData();
      }
    } else {
      toast.error("Profile updating failed please check the details");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen gap-5 flex-col items-center justify-between bg-gradient-to-br from-green-100 to-green-600 font-sans text-green-900 text-sm p-5">
      <div className="font-bold w-full text-2xl flex flex-row gap-2 justify-start items-center">
        <Image src="/logo2.png" alt="image" width={50} height={50} />
        CocoHarvest
      </div>
      {loadingPage ? (
        <ProfileCardSkeleton />
      ) : (
        <div className="flex flex-col items-start w-full lg:w-2/3 gap-5 bg-white/40 p-5 rounded-xl">
          <Link href="/harvester/home" className="cursor-pointer">
            <BiArrowBack size={30} />
          </Link>
          <div className="flex flex-row justify-left items-center gap-2 w-full">
            <Image
              width={50}
              height={50}
              src={`data:image/jpeg;base64,${user.userImage}`}
              alt=""
              className="rounded-full lg:h-30 lg:w-30 h-20 w-20"
            />
            <div className="flex flex-col gap-1 min-w-0">
              <h1 className="font-bold text-4xl truncate">
                {user.userFirstName}
                {user.userLastName}
              </h1>
              <span>@{user.userName}</span>
              <span className="flex flex-row items-center gap-1 font-bold text-xl">
                <BsFillStarFill className="text-yellow-500" />
                {averageRate}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full bg-white/40 p-2 rounded-lg">
            <span className="font-bold">Bio</span>
            <div className="flex flex-row gap-2">
              <textarea
                disabled={editPencil1}
                value={updateUserDescription}
                className={`w-full ${editPencil1 ? "bg-white/40 cursor-not-allowed" : "bg-white"} rounded-lg p-2 focus:outline-none focus:ring-0 border-none`}
                onChange={(e) => {
                  setUpdateUserDescription(e.target.value);
                }}
              />
              <BiPencil
                className="cursor-pointer"
                onClick={() => {
                  setEditPencil1(!editPencil1);
                }}
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col w-full gap-5">
            <div className="flex flex-col gap-1 w-full bg-white/40 p-2 rounded-lg">
              <span className="font-bold">First name</span>
              <div className="flex flex-row gap-2">
                <input
                  disabled={editPencil2}
                  value={updateUserFirstName}
                  className={`w-full ${editPencil2 ? "bg-white/40 cursor-not-allowed" : "bg-white"} rounded-lg p-2 focus:outline-none focus:ring-0 border-none`}
                  onChange={(e) => {
                    setUpdateUserFirstName(e.target.value);
                  }}
                />
                <BiPencil
                  className="cursor-pointer"
                  onClick={() => {
                    setEditPencil2(!editPencil2);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full bg-white/40 p-2 rounded-lg">
              <span className="font-bold">Last name</span>
              <div className="flex flex-row gap-2">
                <input
                  disabled={editPencil3}
                  value={updateUserLastName}
                  className={`w-full ${editPencil3 ? "bg-white/40 cursor-not-allowed" : "bg-white"} rounded-lg p-2 focus:outline-none focus:ring-0 border-none`}
                  onChange={(e) => {
                    setUpdateUserLastName(e.target.value);
                  }}
                />
                <BiPencil
                  className="cursor-pointer"
                  onClick={() => {
                    setEditPencil3(!editPencil3);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col w-full gap-5">
            <div className="flex flex-col gap-1 w-full bg-white/40 p-2 rounded-lg">
              <span className="font-bold">Address</span>
              <div className="flex flex-row gap-2">
                <input
                  disabled={editPencil4}
                  value={updateUserAddress}
                  className={`w-full ${editPencil4 ? "bg-white/40 cursor-not-allowed" : "bg-white"} rounded-lg p-2 focus:outline-none focus:ring-0 border-none`}
                  onChange={(e) => {
                    setUpdateUserAddress(e.target.value);
                  }}
                />
                <BiPencil
                  className="cursor-pointer"
                  onClick={() => {
                    setEditPencil4(!editPencil4);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full bg-white/40 p-2 rounded-lg">
              <span className="font-bold">Phone number</span>
              <div className="flex flex-row gap-2">
                <input
                  disabled={editPencil5}
                  value={updateUserPhoneNumber}
                  className={`w-full ${editPencil5 ? "bg-white/40 cursor-not-allowed" : "bg-white"} rounded-lg p-2 focus:outline-none focus:ring-0 border-none`}
                  onChange={(e) => {
                    setUpdateUserPhoneNumber(e.target.value);
                  }}
                />
                <BiPencil
                  className="cursor-pointer"
                  onClick={() => {
                    setEditPencil5(!editPencil5);
                  }}
                />
              </div>
            </div>
          </div>
          <button
            className="text-white bg-gradient-to-r from-green-400 to-green-700 p-2 w-full rounded-sm cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-800 flex flex-row gap-2 items-center justify-center"
            onClick={() => {
              updateProfile();
            }}
          >
            <FaEdit />
            {loading ? "editing..." : "edit"}
          </button>
          <div className="flex flex-col gap-5 w-full">
            <h1 className="font-bold text-2xl text-left w-full">
              Rating and Reviews
            </h1>
            {reviews.length === 0 ? (
              <EmptyState message="No reviews found." />
            ) : (
              <div className="flex flex-col gap-2 overflow-y-auto max-h-[40vh] sm:max-h-[60vh] lg:max-h-[75vh] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
                {reviews.map((e, index) => {
                  return (
                    <div
                      className="shadow-lg rounded-xl bg-white flex flex-row gap-2 p-5 "
                      key={index}
                    >
                      <Image
                        width={20}
                        height={20}
                        src={`data:image/jpeg;base64,${e.user.userImage}`}
                        alt=""
                        className="rounded-full h-10 w-10"
                      />
                      <div className="flex flex-col gap-1">
                        <h1 className="font-bold">
                          {e.user.userFirstName} {e.user.userLastName}
                        </h1>
                        <div className="flex flex-row gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <BsFillStarFill
                              key={star}
                              className={
                                star <= Number(e.reviewRate)
                                  ? "text-yellow-500"
                                  : ""
                              }
                            />
                          ))}
                        </div>
                        <p className="text-xs">{e.reviewMessage}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
      <label className="w-full text-center">@2026 CocoHarvest Inc.</label>
      <ToastContainer />
    </div>
  );
};

export default Profile;
