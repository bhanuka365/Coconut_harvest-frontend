"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import { FiBookmark, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { useSearchParams } from "next/navigation";
import { EmptyState, WorkerProfile } from "@/components/Components";
import userjson from "@/json/user.json";
import reviewsjson from "@/json/reviews.json";
import { getUserByUserName } from "@/api/user";
import { getReviewsByUserName } from "@/api/review";

const HarvesterProfile = () => {
  const [user, setUser] = useState(userjson);
  const [reviews, setReviews] = useState(reviewsjson);
  const searchParams = useSearchParams();
  const username = searchParams.get("username");
  const [loadingPage, setLoadingPage] = useState(true);
  const [averageRate, setAverageRate] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const token = localStorage.getItem("jwtToken");

      // const result = await axios.get(
      //   `http://localhost:8085/api/v1/user/${username}`,
      //   {
      //     headers: { Authorization: `Bearer ${token}` },
      //   },
      // );

      const result = await getUserByUserName(username,token)

      setUser(result.data.dataBundle);

      const result1 = await getReviewsByUserName(username,token)

      // const result1 = await axios.get(
      //   `http://localhost:8085/api/v1/review/${username}`,
      //   {
      //     headers: { Authorization: `Bearer ${token}` },
      //   },
      // );

      const fetchedReviews = result1.data.dataBundle;
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
      console.error(error);
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
                  href={{
                    pathname: "/field-owner/harvester-booking",
                    query: { username: user.userName },
                  }}
                  className="flex flex-row gap-2 items-center text-white bg-gradient-to-r from-blue-400 to-blue-700 p-1 w-fit rounded-sm cursor-pointer transition duration-300 ease-in-out hover:from-blue-500 hover:to-blue-800 min-w-0"
                >
                  <FiBookmark />
                  <span className="truncate">Booking the harvester</span>
                </Link>
                <span className="flex flex-row items-center gap-1 font-bold text-xl">
                  <BsFillStarFill className="text-yellow-500" />
                  {averageRate}
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
          <div className="flex flex-col gap-5 w-full">
            <h1 className="font-bold text-2xl">Rating and Reviews</h1>
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
    </div>
  );
};

export default HarvesterProfile;
