"use client";

import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

import Link from "next/link";
import {
  FiClock,
  FiCopy,
  FiDollarSign,
  FiMail,
  FiMenu,
  FiShield,
  FiUsers,
  FiX,
} from "react-icons/fi";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Counter } from "@/components/Components";

// JOB TYPE - DIRECT/ JOB_POST
// STATUS - PENDING/ PROGRESS/ CANCELLED/ COMPLETED

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [runKey, setRunKey] = useState(0);

  const [stats, setStats] = useState({
    owners: 0,
    workers: 0,
    tasks: 0,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const result = await axios.get(
          `http://localhost:8085/api/v1/bookings/my`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setStats({
          owners: result.data.dataBundle.length,
          workers: result.data.dataBundle.length,
          tasks: result.data.dataBundle.length,
        });
      } catch (error) {}
    };
    loadData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          setRunKey((prev) => prev + 1);
        } else {
          setStartCount(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  const itemCopy = (val: any) => {
    navigator.clipboard
      .writeText(val)
      .then(() => toast.success("Phone number copied"))
      .catch(() => toast.error("Phone number copying failed"));
  };

  return (
    <div
      className="min-h-screen w-full bg-[url('/coconut-still-life.jpg')] 
             bg-cover bg-center bg-fixed font-sans text-white text-sm"
    >
      <div className="flex flex-col p-5 gap-10 bg-black/60">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="font-bold text-2xl flex flex-row gap-2 justify-start items-center">
            <Image src="/logo2.png" alt="image" width={50} height={50} />
            CocoHarvest
          </div>
          <div className="sm:flex flex-row items-center gap-5 hidden">
            <Link
              href="/"
              className="hover:underline transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="#benefits"
              className="hover:underline transition duration-300 ease-in-out"
            >
              Benefits
            </Link>
            <Link
              href="#about"
              className="hover:underline transition duration-300 ease-in-out"
            >
              About us
            </Link>
            <Link
              href="#contact"
              className="bg-gradient-to-r from-green-400 to-green-700 p-2 rounded-lg text-white cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-800"
            >
              Contact
            </Link>
          </div>
          <FiMenu
            className="flex sm:hidden"
            size={30}
            onClick={() => {
              setShowMobileMenu(true);
            }}
          />
        </div>
        <div
          className="flex flex-row w-full justify-left items-center min-h-screen"
          id="home"
        >
          <div className="flex flex-col md:w-1/2 w-full gap-5">
            <Typewriter
              options={{
                strings: [
                  '<span class="inline-block bg-gradient-to-r from-gray-400 via-green-600 to-white text-transparent bg-clip-text text-5xl lg:text-7xl font-bold">Welcome to</span>',
                  '<span class="inline-block bg-gradient-to-r from-white to-green-600 text-transparent bg-clip-text text-5xl lg:text-7xl font-bold">CocoHarvest</span>',
                ],
                autoStart: true,
                loop: true,
              }}
            />
            <p>
              CocoHarvest modernizes coconut harvesting by digitally connecting
              field owners with trusted harvesters. Our platform streamlines
              hiring, scheduling, and payments delivering a faster, safer, and
              more transparent harvesting experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/harvester/login"
                className="flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-green-400 to-green-700 text-white cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-800"
              >
                continue as harvester
              </Link>
              <Link
                href="/field-owner/login"
                className="flex items-center justify-center p-2 rounded-full border-2 border-white "
              >
                continue as field owner
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5" id="benefits">
          <h1 className="font-bold text-4xl lg:text-left text-center w-full">
            Benefits
          </h1>
          <div className="flex lg:flex-row flex-col gap-5 w-full">
            <div className="flex flex-col gap-5 lg:w-1/4 w-full p-5 rounded-lg bg-black/40 backdrop-blur-md hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out">
              <div className="flex flex-row items-start justify-start gap-2 font-bold text-2xl">
                <FiUsers />
                Verified Workers
              </div>
              <p>
                Access trusted, skilled coconut harvesters who are carefully
                verified to ensure safety, reliability, and quality work.
              </p>
            </div>

            <div className="flex flex-col gap-5 lg:w-1/4 w-full  p-5 rounded-lg bg-black/40 backdrop-blur-md hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out">
              <div className="flex flex-row items-start justify-start gap-2 font-bold text-2xl">
                <FiClock />
                Fast Scheduling
              </div>
              <p>
                Post harvesting jobs and get matched with available workers
                quickly, reducing delays during peak harvest seasons.
              </p>
            </div>

            <div className="flex flex-col gap-5 lg:w-1/4 w-full  p-5 rounded-lg bg-black/40 backdrop-blur-md hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out">
              <div className="flex flex-row items-start justify-start gap-2 font-bold text-2xl">
                <FiShield />
                Secure Platform
              </div>
              <p>
                Enjoy secure job tracking, transparent communication, and
                protected transactions from start to finish.
              </p>
            </div>

            <div className="flex flex-col gap-5 lg:w-1/4 w-full p-5 rounded-lg bg-black/40 backdrop-blur-md hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out">
              <div className="flex flex-row items-start justify-start gap-2 font-bold text-2xl">
                <FiDollarSign />
                Fair Pricing
              </div>
              <p>
                Benefit from clear, upfront pricing with no hidden fees for
                field owners or harvesters.
              </p>
            </div>
          </div>
        </div>
        <div
          ref={sectionRef}
          className="flex flex-col gap-5 justify-center items-center"
          id="about"
        >
          <h1 className="font-bold text-4xl lg:text-left text-center w-full">
            About Us
          </h1>

          <div className="flex flex-row w-full gap-5">
            <div className="flex flex-col w-full lg:w-1/2 gap-5">
              <p className="lg:text-justify text-center">
                CocoHarvest was built to modernize traditional coconut
                harvesting by bridging the gap between field owners and skilled
                harvesters through a secure digital platform. We help field
                owners quickly find reliable, verified labor while providing
                workers with consistent job opportunities and fair earnings.
                <br />
                <br />
                Our platform simplifies the entire harvesting process from job
                posting and scheduling to communication and secure payments
                reducing delays, uncertainty, and manual coordination. By
                leveraging technology, CocoHarvest improves productivity,
                transparency, and trust across the agricultural workforce.
                <br />
                <br />
                Our goal is to empower rural communities through accessible
                technology while preserving long-standing agricultural
                traditions. We are committed to supporting local farmers,
                creating sustainable livelihoods for workers, and building a
                dependable ecosystem that strengthens the future of coconut
                farming.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-5">
            <div className="flex flex-col items-center justify-center p-5 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition sm:w-50 w-full">
              <h2 className="text-3xl font-bold text-green-700">
                <Counter key={`owners-${runKey}`} target={stats.owners} start={startCount} />
              </h2>
              <p className="text-gray-600 text-sm mt-1 text-center">
                Field Owners
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-5 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition sm:w-50 w-full">
              <h2 className="text-3xl font-bold text-green-700">
                <Counter key={`workers-${runKey}`} target={stats.workers} start={startCount} />
              </h2>
              <p className="text-gray-600 text-sm mt-1 text-center">Workers</p>
            </div>

            <div className="flex flex-col items-center justify-center p-5 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition sm:w-50 w-full">
              <h2 className="text-3xl font-bold text-green-700">
                <Counter key={`tasks-${runKey}`} target={stats.tasks} start={startCount} />
              </h2>
              <p className="text-gray-600 text-sm mt-1 text-center">
                Tasks Completed
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-black/40 backdrop-blur-md w-full rounded-lg p-5 flex flex-col gap-5 justify-center items-center"
          id="contact"
        >
          <div className="flex flex-col lg:flex-row justify-between w-full gap-5">
            <div className="w-full lg:w-1/2 flex flex-col gap-5">
              <div className="font-bold lg:text-5xl text-4xl flex sm:flex-row flex-col gap-2 justify-start items-center">
                <Image src="/logo2.png" alt="image" width={100} height={100} />
                CocoHarvest
              </div>
              <p>
                Need help or want to partner with us? Reach out anytime. Our
                dedicated support team is always ready to assist field owners
                and workers with onboarding, job management, secure payments,
                and technical issues. We are committed to making coconut
                harvesting simpler, faster, and more reliable for everyone.
              </p>
              <div className="flex sm:flex-row flex-col gap-5">
                <div
                  className="p-2 rounded-full border-2 border-dashed border-white flex flex-row justify-center items-center gap-2 cursor-pointer"
                  onClick={() => {
                    itemCopy("+94 71 145 64545");
                  }}
                >
                  <FiCopy />
                  +94 72 567 6789
                </div>
                <a
                  href="mailto:example@gmail.com"
                  className="p-2 rounded-full flex flex-row justify-center items-center gap-2 text-white bg-gradient-to-r from-green-400 to-green-700 cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-80"
                >
                  <FiMail />
                  contact with email
                </a>
              </div>
            </div>
            <div className="flex flex-row lg:flex-col items-center gap-5 font-bold bg-green-400/40 rounded-md lg:bg-transparent justify-center lg:justify-start">
              <Link
                href="#home"
                className="hover:underline transition duration-300 ease-in-out"
              >
                Home
              </Link>
              <Link
                href="#benifits"
                className="hover:underline transition duration-300 ease-in-out"
              >
                Benifits
              </Link>
              <Link
                href="#about"
                className="hover:underline transition duration-300 ease-in-out"
              >
                About us
              </Link>
              <Link
                href="#contact"
                className="hover:underline transition duration-300 ease-in-out"
              >
                Contact
              </Link>
            </div>
          </div>
          <hr className="w-full"></hr>
          <label>@2026 CocoHarvest Inc.</label>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-50 bg-white text-gray-900
        flex flex-col items-center justify-evenly text-xl
        transform transition-all duration-500 ease-in-out
        ${
          showMobileMenu
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <FiX
          onClick={() => {
            setShowMobileMenu(false);
          }}
        />
        <Link
          href="/"
          className="hover:underline transition duration-300 ease-in-out"
          onClick={() => {
            setShowMobileMenu(false);
          }}
        >
          Home
        </Link>
        <Link
          href="#benefits"
          className="hover:underline transition duration-300 ease-in-out"
          onClick={() => {
            setShowMobileMenu(false);
          }}
        >
          Benefits
        </Link>
        <Link
          href="#about"
          className="hover:underline transition duration-300 ease-in-out"
          onClick={() => {
            setShowMobileMenu(false);
          }}
        >
          About us
        </Link>
        <Link
          href="#contact"
          className="bg-gradient-to-r from-green-400 to-green-700 p-2 rounded-lg text-white cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-800"
          onClick={() => {
            setShowMobileMenu(false);
          }}
        >
          Contact
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
}
