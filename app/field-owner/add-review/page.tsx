"use client";

import Link from "next/link";
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useState } from "react";
import { FiFileText, FiSend } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import { checkEmpty } from "@/utils/validation";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { addReview } from "@/api/review";
import { updateBookingById } from "@/api/booking";

const Booking = () => {
  const [reviewRate, setReviewRate] = useState(0);
  const [reviewMessage, setReviewMessage] = useState("");
  const [reviewMessageError, setReviewMessageError] = useState(true);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const bookingid = searchParams.get("bookingid");

  const handleReview = async () => {
    try {
      setLoading(true);

      const isMessageValid = checkEmpty(reviewMessage);
      setReviewMessageError(isMessageValid);

      if (isMessageValid && reviewRate > 0) {
        const token = localStorage.getItem("jwtToken");

        const jsonData = {
          reviewMessage,
          reviewRate,
          bookingId: Number(bookingid),
        };

        await addReview(jsonData, token);

        const jsonData1 = {
          bookingId: Number(bookingid),
          rate: true,
        };

        await updateBookingById(token, jsonData1);

        toast.success("Review submitted successfully");
        setReviewMessage("");
        setReviewRate(0);
      } else {
        toast.error("Please enter review and select rating");
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error("Review submission failed");
      } else {
        toast.error("Server not reachable");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen gap-5 flex-col items-center justify-between bg-gradient-to-br from-green-100 to-green-600 font-sans text-green-900 text-sm p-5">
      <div className="font-bold w-full text-2xl flex flex-row gap-2 items-center">
        <Image src="/logo2.png" alt="logo" width={50} height={50} />
        CocoHarvest
      </div>

      <div className="flex flex-col w-2/3 gap-5 bg-white/40 p-5 rounded-xl">
        <h1 className="font-bold text-2xl flex items-center gap-2">
          <Link href="/field-owner/my-bookings">
            <BiArrowBack />
          </Link>
          Write a Review
        </h1>

        <div className="flex flex-col gap-2">
          <label className="font-bold text-sm">Select your rating</label>
          <div className="flex gap-2 text-3xl cursor-pointer">
            {[1, 2, 3, 4, 5].map((star) =>
              star <= reviewRate ? (
                <BsStarFill
                  key={star}
                  className="text-yellow-400"
                  onClick={() => setReviewRate(star)}
                />
              ) : (
                <BsStar key={star} onClick={() => setReviewRate(star)} />
              ),
            )}
          </div>
        </div>

        <div className="w-full relative">
          <label className="block mb-1 text-sm font-bold">Your Review</label>
          <div className="flex gap-2 bg-white p-2 rounded-sm">
            <FiFileText />
            <textarea
              className="w-full focus:outline-none border-none"
              rows={4}
              value={reviewMessage}
              onChange={(e) => setReviewMessage(e.target.value)}
            />
          </div>
          <span
            className={`absolute left-0 top-full text-red-400 text-xs ${
              reviewMessageError ? "invisible" : "visible"
            }`}
          >
            cannot be empty
          </span>
        </div>

        <button
          onClick={handleReview}
          disabled={loading}
          className="bg-gradient-to-r from-green-400 to-green-700 text-white p-2 rounded-sm w-full flex justify-center items-center gap-2 hover:from-green-500 hover:to-green-800 transition disabled:opacity-50"
        >
          <FiSend />
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>

      <ToastContainer />
      <label className="w-full text-center">@2026 CocoHarvest Inc.</label>
    </div>
  );
};

export default Booking;
