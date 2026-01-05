"use client";

import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

import Link from "next/link";
import { FiAnchor, FiCopy, FiMail } from "react-icons/fi";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-green-900 p-5 gap-10 text-sm">
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
        className="flex flex-row w-full justify-center items-center"
        id="home"
      >
        <div className="flex flex-col w-1/2 gap-5">
          <Typewriter
            options={{
              strings: [
                '<span class="inline-block bg-gradient-to-r from-gray-900 via-green-400 to-green-700 text-transparent bg-clip-text text-5xl lg:text-7xl font-bold">Welcome to</span>',
                '<span class="inline-block bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text text-5xl lg:text-7xl font-bold">CocoHarvest</span>',
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
              className="p-2 rounded-full border-2 border-green-500 text-green-500"
            >
              continue as field owner
            </Link>
          </div>
        </div>
        <Image
          src="/image1.jpg"
          alt="image"
          width={300}
          height={300}
          className="w-1/2 h-full"
        />
      </div>
      <div
        className="flex flex-col gap-5 justify-center items-center"
        id="benifits"
      >
        <h1 className="font-bold text-4xl text-left w-full">Benifits</h1>
        <div className="flex flex-row gap-5 w-full">
          <div className="flex flex-col gap-5 w-1/4 border-2 border-green-500 p-5 rounded-lg">
            <div className="flex flex-row items-center ju  stify-start gap-2 text-green-500 font-bold text-2xl">
              <FiAnchor />
              Benifits1
            </div>
            <p className="text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              minima, veniam facilis numquam possimus ex magnam? Aliquam, ipsum!
              Dolor, est. Est et sunt doloremque, sed iusto nobis maiores magnam
              sint.
            </p>
          </div>
          <div className="flex flex-col gap-5 w-1/4 border-2 border-green-500 p-5 rounded-lg">
            <div className="flex flex-row items-center justify-start gap-2 text-green-500 font-bold text-2xl">
              <FiAnchor />
              Benifits1
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              pariatur quod accusantium accusamus quaerat beatae aspernatur
              eveniet saepe, alias repellat itaque, hic iure, laudantium
              deleniti? Porro quis similique accusantium quibusdam.
            </p>
          </div>
          <div className="flex flex-col gap-5 w-1/4 border-2 border-green-500 p-5 rounded-lg">
            <div className="flex flex-row items-center justify-start gap-2 text-green-500 font-bold text-2xl">
              <FiAnchor />
              Benifits1
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sit,
              quaerat, modi quisquam voluptate in deleniti saepe recusandae
              ducimus odit omnis dolores accusamus facere doloremque quibusdam
              exercitationem itaque aliquam cumque.
            </p>
          </div>
          <div className="flex flex-col gap-5 w-1/4 border-2 border-green-500 p-5 rounded-lg">
            <div className="flex flex-row items-center justify-start gap-2 text-green-500 font-bold text-2xl">
              <FiAnchor />
              Benifits1
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              iste. Voluptates sapiente sed ipsam provident ratione corrupti vel
              quos vero dolores ullam consectetur amet quas voluptate quis
              dolore, consequatur aut?
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col gap-5 justify-center items-center"
        id="about"
      >
        <h1 className="font-bold text-4xl text-left w-full">About us</h1>
        <div className="flex flex-row w-full justify-center items-start gap-5">
          <Image
            src="/image3.jpg"
            alt="image"
            width={500}
            height={500}
            className="w-1/2 h-full"
          />
          <div className="flex flex-col w-1/2 gap-5">
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              ipsum saepe tempore sapiente voluptatum, ullam neque at odit sequi
              quaerat minima inventore blanditiis ut aut quibusdam obcaecati
              aliquam accusamus esse. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Delectus labore rerum qui molestiae quo enim
              perspiciatis voluptatem aut. Officiis amet quia saepe facere eos
              accusamus est, ad cumque eius at. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Delectus eaque alias officia
              nesciunt modi, nostrum repudiandae fugiat aut animi magnam.
              Cupiditate harum sit non eaque, reiciendis dolore quod mollitia
              ut? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus aspernatur vitae totam! Vero et alias, iusto, ratione
              harum repellat accusantium adipisci at quam, blanditiis
              dignissimos beatae quos vitae nemo voluptatum. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Repellendus numquam modi
              error dolorem quod dolor alias incidunt voluptatibus odio officia
              ea enim, iste aliquid dolores soluta cupiditate facere veritatis
              ratione!
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-green-300/40 w-full rounded-lg p-5 flex flex-col gap-5 justify-center items-center"
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
              <div className="p-2 rounded-full border-2 border-dashed border-green-500 flex flex-row justify-center items-center gap-2 text-green-500 cursor-pointer">
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
        <hr className="w-full text-green-500"></hr>
        <label>@2026 CocoHarvest Inc.</label>
      </div>
    </div>
  );
}
