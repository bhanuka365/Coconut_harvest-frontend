"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import Image from "next/image";
import { BiArrowBack, BiPencil } from "react-icons/bi";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { checkEmpty } from "@/validation/validation";
import { ProfileCardSkeleton } from "@/components/Components";
import { FaEdit } from "react-icons/fa";

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

const Profile = () => {
  const [textVisual, setTextVisual] = useState(false);
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
  const [updateUserFirstName, setUpdateUserFirstName] = useState("");
  const [updateUserLastName, setUpdateUserLastName] = useState("");
  const [updateUserAddress, setUpdateUserAddress] = useState("");
  const [updateUserPhoneNumber, setUpdateUserPhoneNumber] = useState("");
  const [updateUserDescription, setUpdateUserDescription] = useState("");

  const searchParams = useSearchParams();
  const username = searchParams.get("username");

  const [editPencil1, setEditPencil1] = useState(true);
  const [editPencil2, setEditPencil2] = useState(true);
  const [editPencil3, setEditPencil3] = useState(true);
  const [editPencil4, setEditPencil4] = useState(true);
  const [editPencil5, setEditPencil5] = useState(true);

  const [loading, setLoading] = useState(false);
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
      setUpdateUserFirstName(result.data.dataBundle.userFirstName);
      setUpdateUserLastName(result.data.dataBundle.userLastName);
      setUpdateUserAddress(result.data.dataBundle.Address);
      setUpdateUserDescription(result.data.dataBundle.Description);
      setUpdateUserPhoneNumber(result.data.dataBundle.Telephone);
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

        await axios.put(
          "http://localhost:8085/api/v1/user-update",
          {
            Address: updateUserAddress,
            Description: updateUserDescription,
            Telephone: updateUserPhoneNumber,
            userFirstName: updateUserFirstName,
            userLastName: updateUserLastName,
            userName: username,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
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
          <Link href="/field-owner/home" className="cursor-pointer">
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
            <FaEdit/>
            {loading ? "Editing..." : "EDIT"}
          </button>
        </div>
      )}
      <label className="w-full text-center">@2026 CocoHarvest Inc.</label>
      <ToastContainer />
    </div>
  );
};

export default Profile;
