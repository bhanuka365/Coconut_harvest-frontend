import Link from "next/link";
import {
  FiCalendar,
  FiCheckCircle,
  FiClipboard,
  FiDollarSign,
  FiHome,
  FiLogOut,
  FiMapPin,
  FiSearch,
  FiUser,
} from "react-icons/fi";
import Image from "next/image";
import { LuClipboardPen } from "react-icons/lu";
import { CgAssign } from "react-icons/cg";
import { GiTreeBranch } from "react-icons/gi";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-green-900 text-sm flex-row">
      <div className="bg-green-400 w-20 text-white flex flex-col items-center p-5 gap-5">
        <Link
          href="/harvester/home"
          className="relative group flex items-center"
        >
          <FiHome
            size={25}
            className="hover:text-green-900 cursor-pointer transition duration-300 ease-in-out"
          />
          <span className="absolute left-full ml-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Home
          </span>
        </Link>
        <Link
          href="/harvester/home"
          className="relative group flex items-center"
        >
          <FiClipboard
            size={25}
            className="hover:text-green-900 cursor-pointer transition duration-300 ease-in-out"
          />{" "}
          <span className="absolute left-full ml-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            My tasks
          </span>
        </Link>
        <div className="relative group flex items-center">
          <FiLogOut
            size={25}
            className="hover:text-green-900 cursor-pointer transition duration-300 ease-in-out"
          />{" "}
          <span className="absolute left-full ml-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-700 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Logout
          </span>
        </div>
      </div>
      <div className="bg-green-100 w-full flex flex-col pt-5 pl-5 pr-5 gap-5">
        <div className="bg-white p-5 rounded-full flex flex-row justify-between items-center">
          <h1 className="text-4xl font-bold">
            Hi, <span className="text-green-400">Nadeesha</span>
          </h1>
          <div className="relative cursor-pointer">
            <Image
              width={50}
              height={50}
              src="/profile.jpg"
              alt=""
              className="rounded-full"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="bg-gradient-to-r from-green-400 to-green-900 p-5 rounded-lg w-1/3 flex flex-col text-white gap-2">
            <div className="flex flex-row items-center gap-2">
              <FiDollarSign className="text-2xl" />
              <label className="font-bold text-2xl">Total earn</label>
            </div>
            <label>LKR 100,000</label>
          </div>
          <div className="bg-gradient-to-r from-orange-400 to-orange-900 p-5 rounded-lg w-1/3 flex flex-col text-white gap-2">
            <div className="flex flex-row items-center gap-2">
              <FiCheckCircle className="text-2xl" />
              <label className="font-bold text-2xl">Complete tasks</label>
            </div>
            <label>30</label>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-blue-900 p-5 rounded-lg w-1/3 flex flex-col text-white gap-2">
            <div className="flex flex-row items-center gap-2">
              <LuClipboardPen className="text-2xl" />
              <label className="font-bold text-2xl">Active tasks</label>
            </div>
            <label>2</label>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Find the new tasks</h1>
          <div className="flex flex-row gap-2">
            <div className="flex flex-row gap-2 p-2 rounded-full bg-white w-1/2">
              <FiSearch size={20} />
              <input
                placeholder="search by location"
                className="w-full focus:outline-none"
              />
            </div>
            <div className="flex flex-row gap-2 p-2 justify-center items-center rounded-lg w-fit font-bold bg-gradient-to-r from-green-400 to-green-700 text-white cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-800">
              <FiMapPin />
              <span>Search Nearby</span>
            </div>
          </div>
          <div className="flex flex-col gap-5 overflow-y-auto">
            <div className="rounded-xl bg-white w-full flex flex-col gap-2 p-5 ">
              <h1 className="text-lg font-bold flex items-center gap-2 text-2xl">
                Coconut Harvest Karannoo
              </h1>
              <p className="text-gray-600">
                Harvest coconuts safely from the given field within the
                scheduled date.
              </p>
              <div className="flex items-center gap-2">
                <FiUser className="text-blue-600" />
                <span className="font-medium">Field Owner:</span>
                <span>Mr. Silva</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-red-500" />
                <span className="font-medium">Location:</span>
                <span>Manual location ygygyg</span>
              </div>

              <div className="flex items-center gap-2">
                <FiCalendar className="text-purple-600" />
                <span className="font-medium">Date:</span>
                <span>2026 / 05 / 07</span>
              </div>

              <div className="flex items-center gap-2">
                <GiTreeBranch className="text-green-700" />
                <span className="font-medium">Tree Count:</span>
                <span>10</span>
              </div>

              <div className="flex items-center gap-2">
                <FiDollarSign className="text-yellow-600" />
                <span className="font-medium">Per Tree:</span>
                <span>Rs. 50</span>
              </div>

              <div className="flex items-center gap-2 font-bold">
                <FiDollarSign className="text-green-600" />
                <span>Total Price:</span>
                <span>Rs. 500</span>
              </div>
              <div className="flex flex-row gap-2">
                <div
                  className="flex items-center gap-2 p-2 rounded-lg font-bold
      bg-gradient-to-r from-blue-400 to-blue-700 text-white w-fit
      cursor-pointer transition duration-300 hover:from-blue-500 hover:to-blue-800"
                >
                  <CgAssign />
                  <span>Assign Task</span>
                </div>
                <label className="text-yellow-600 bg-yellow-100 p-2 rounded-lg font-bold">
                  active
                </label>
              </div>
            </div>
            <div className="rounded-xl bg-white w-full flex flex-col gap-2 p-5 ">
              <h1 className="text-lg font-bold flex items-center gap-2 text-2xl">
                Coconut Harvest Karannoo
              </h1>
              <p className="text-gray-600">
                Harvest coconuts safely from the given field within the
                scheduled date.
              </p>
              <div className="flex items-center gap-2">
                <FiUser className="text-blue-600" />
                <span className="font-medium">Field Owner:</span>
                <span>Mr. Silva</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-red-500" />
                <span className="font-medium">Location:</span>
                <span>Manual location ygygyg</span>
              </div>

              <div className="flex items-center gap-2">
                <FiCalendar className="text-purple-600" />
                <span className="font-medium">Date:</span>
                <span>2026 / 05 / 07</span>
              </div>

              <div className="flex items-center gap-2">
                <GiTreeBranch className="text-green-700" />
                <span className="font-medium">Tree Count:</span>
                <span>10</span>
              </div>

              <div className="flex items-center gap-2">
                <FiDollarSign className="text-yellow-600" />
                <span className="font-medium">Per Tree:</span>
                <span>Rs. 50</span>
              </div>

              <div className="flex items-center gap-2 font-bold">
                <FiDollarSign className="text-green-600" />
                <span>Total Price:</span>
                <span>Rs. 500</span>
              </div>
              <div className="flex flex-row gap-2">
                <div
                  className="flex items-center gap-2 p-2 rounded-lg font-bold
      bg-gradient-to-r from-blue-400 to-blue-700 text-white w-fit
      cursor-pointer transition duration-300 hover:from-blue-500 hover:to-blue-800"
                >
                  <CgAssign />
                  <span>Assign Task</span>
                </div>
                <label className="text-yellow-600 bg-yellow-100 p-2 rounded-lg font-bold">
                  active
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
