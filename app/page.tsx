"use client";

import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

import Link from "next/link";
import { FiAnchor, FiCopy, FiMail } from "react-icons/fi";
import Image from "next/image";

// JOB TYPE - DIRECT/ JOB_POST
// STATUS - PENDING/ PROGRESS/ CANCELLED_OWNER/ CANCELLED_WORKER/ COMPLETED

export default function Home() {
  return (
    <div
  className="min-h-screen w-full bg-cover bg-center bg-no-repeat
             overflow-y-auto font-sans text-white text-sm"
  style={{ backgroundImage: "url('/coconut-still-life.jpg')" }}
>
       <div className="flex flex-col p-5 gap-10 bg-black/60">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="font-bold text-2xl flex flex-row gap-2 justify-start items-center">
          <Image src="/logo2.png" alt="image" width={50} height={50} />
          CocoHarvest
        </div>
        <div className="flex flex-row items-center gap-5">
          <Link
            href="/"
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
            className="bg-gradient-to-r from-green-400 to-green-700 p-2 rounded-lg text-white cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-800"
          >
            Contact
          </Link>
        </div>
      </div>
      <div
        className="flex flex-row w-full justify-left items-center min-h-screen"
        id="home"
      >
        <div className="flex flex-col w-1/2 gap-5">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum
            saepe tempore sapiente voluptatum, ullam neque at odit sequi quaerat
            minima inventore blanditiis ut aut quibusdam obcaecati aliquam
            accusamus esse. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Facere, exercitationem iste expedita quam, esse veniam
            doloribus temporibus corrupti sed ipsum magni quod delectus ullam
            incidunt pariatur eos a ad recusandae.
          </p>
          <div className="flex flex-row gap-5">
            <Link
              href="/harvester/login"
              className="p-2 rounded-full bg-gradient-to-r from-green-400 to-green-700 text-white cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-800"
            >
              continue as harvester
            </Link>
            <Link
              href="/field-owner/login"
              className="p-2 rounded-full border-2 border-white "
            >
              continue as field owner
            </Link>
          </div>
        </div>
        {/* <div   className="w-1/2 h-full"></div> */}
        {/* <Image
          src="/image1.jpg"
          alt="image"
          width={300}
          height={300}
          className="w-1/2 h-full"
        /> */}
      </div>
      <div className="flex flex-col gap-5 " id="benifits">
        <h1 className="font-bold text-4xl text-left w-full">Benifits</h1>
        <div className="flex flex-row gap-5 w-full">
          <div className="flex flex-col gap-5 w-1/4 p-5 rounded-lg bg-black/40 backdrop-blur-md">
            <div className="flex flex-row items-center ju  stify-start gap-2 font-bold text-2xl">
              <FiAnchor />
              Benifits1
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              minima, veniam facilis numquam possimus ex magnam? Aliquam, ipsum!
              Dolor, est. Est et sunt doloremque, sed iusto nobis maiores magnam
              sint.
            </p>
          </div>
          <div className="flex flex-col gap-5 w-1/4 p-5 rounded-lg bg-black/40 backdrop-blur-md">
            <div className="flex flex-row items-center ju  stify-start gap-2 font-bold text-2xl">
              <FiAnchor />
              Benifits1
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              minima, veniam facilis numquam possimus ex magnam? Aliquam, ipsum!
              Dolor, est. Est et sunt doloremque, sed iusto nobis maiores magnam
              sint.
            </p>
          </div>
          <div className="flex flex-col gap-5 w-1/4 p-5 rounded-lg bg-black/40 backdrop-blur-md">
            <div className="flex flex-row items-center ju  stify-start gap-2 font-bold text-2xl">
              <FiAnchor />
              Benifits1
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              minima, veniam facilis numquam possimus ex magnam? Aliquam, ipsum!
              Dolor, est. Est et sunt doloremque, sed iusto nobis maiores magnam
              sint.
            </p>
          </div>{" "}
          <div className="flex flex-col gap-5 w-1/4 p-5 rounded-lg bg-black/40 backdrop-blur-md">
            <div className="flex flex-row items-center ju  stify-start gap-2 font-bold text-2xl">
              <FiAnchor />
              Benifits1
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              minima, veniam facilis numquam possimus ex magnam? Aliquam, ipsum!
              Dolor, est. Est et sunt doloremque, sed iusto nobis maiores magnam
              sint.
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col gap-5 justify-center items-center"
        id="about"
      >
        <h1 className="font-bold text-4xl text-left w-full">About Us</h1>

        <div className="flex flex-row w-full gap-5">
          <div className="flex flex-col w-1/2 gap-5">
            <p className="text-justify">
              Our Coconut Harvest platform connects field owners with skilled
              workers, simplifying harvest management and improving
              productivity. We empower newcomers, support local farmers, and
              ensure efficient task completion through a trusted digital
              ecosystem. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Porro ratione facilis tempora officiis autem, nisi harum
              dolores neque cumque nam, dignissimos exercitationem eos? Dolorum
              enim labore molestias animi maxime earum. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Id, amet officiis magni
              repudiandae ipsa ut commodi, corporis non repellat, saepe labore
              eius voluptatem sunt aliquid ea rerum at? Non, similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iste culpa repellat recusandae perspiciatis dolore nesciunt a accusantium saepe voluptates, quam non sunt odit necessitatibus! Impedit sunt amet modi maxime.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laboriosam fugit ipsum pariatur tenetur omnis minus at facilis quidem incidunt, laudantium velit possimus, officia similique eveniet in ea alias quos!
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row gap-5">
          <div className="flex flex-col items-center justify-center p-5 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition w-50">
            <h2 className="text-3xl font-bold text-green-700">950+</h2>
            <p className="text-gray-600 text-sm mt-1 text-center">
              Field Owners
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-5 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition w-50">
            <h2 className="text-3xl font-bold text-green-700">150+</h2>
            <p className="text-gray-600 text-sm mt-1 text-center">Workers</p>
          </div>
          <div className="flex flex-col items-center justify-center p-5 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition w-50">
            <h2 className="text-3xl font-bold text-green-700">950+</h2>
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
        <div className="flex flex-row justify-between">
          <div className="w-1/2 flex flex-col gap-5">
            <div className="font-bold text-5xl flex flex-row gap-2 justify-start items-center">
              <Image src="/logo2.png" alt="image" width={100} height={100} />
              CocoHarvest
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              enim laudantium libero explicabo vitae nam perferendis ab, natus
              vero temporibus at, quisquam deserunt in incidunt quae ea
              molestiae magnam necessitatibus? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Perferendis, incidunt, suscipit
              maiores numquam autem molestiae esse ratione pariatur dolore et
              doloribus veniam laudantium accusamus placeat iste minus nihil
              corrupti optio.
            </p>
            <div className="flex flex-row gap-5">
              <div className="p-2 rounded-full border-2 border-dashed border-white flex flex-row justify-center items-center gap-2 cursor-pointer">
                <FiCopy />
                +94 72 567 6789
              </div>
              <div className="p-2 rounded-full flex flex-row justify-center items-center gap-2 text-white bg-gradient-to-r from-green-400 to-green-700 cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-80">
                <FiMail />
                contact with email
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 font-bold">
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
      </div></div>
    </div>
  );
}
