"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import axios from "axios";
import { BsArrowLeft } from "react-icons/bs";
import {
  FiCamera,
  FiEye,
  FiEyeOff,
  FiFileText,
  FiLock,
  FiMapPin,
  FiPhoneCall,
  FiUser,
} from "react-icons/fi";
import {
  validateAddress,
  validatematchPasswords,
  validateName,
  validatePassword,
  validatePhoneNumber,
  validateUsername,
} from "@/validation/validation";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [textVisual1, setTextVisual1] = useState(false);
  const [textVisual2, setTextVisual2] = useState(false);

  const [form, setForm] = useState({
    userName: "",
    Telephone: "",
    userFirstName: "",
    userLastName: "",
    Address: "",
    Description: "",
    userPassword: "",
    userRole: "field_owner",
  });

  const [conpassword, setConpassword] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [userImage, setUserImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  const [phoneNumberError, setPhoneNumberError] = useState(true);
  const [usernameError, setUsernameError] = useState(true);
  const [fnameError, setFnameError] = useState(true);
  const [lnameError, setLnameError] = useState(true);
  const [addressError, setAddressErrorr] = useState(true);
  const [newpasswordError, setNewpasswordError] = useState(true);
  const [confirmpasswordError, setConfirmpasswordError] = useState(true);
  const [descriptionError, setDescriptionError] = useState(true);
  const [matchPasswords, setMatchPasswords] = useState(true);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUserImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setLoading(true);

    setPhoneNumberError(validatePhoneNumber(form.Telephone));
    setAddressErrorr(validateAddress(form.Address));
    setFnameError(validateName(form.userFirstName));
    setLnameError(validateName(form.userLastName));
    setNewpasswordError(validatePassword(form.userPassword));
    setUsernameError(validateUsername(form.userName));
    setDescriptionError(validateAddress(form.Description));
    setConfirmpasswordError(validatePassword(conpassword));
    setMatchPasswords(validatematchPasswords(form.userPassword, conpassword));

    if (
      validatePhoneNumber(form.Telephone) &&
      validateAddress(form.Address) &&
      validateName(form.userFirstName) &&
      validateName(form.userLastName) &&
      validatePassword(form.userPassword) &&
      validateUsername(form.userName) &&
      validateAddress(form.Description) &&
      validatePassword(conpassword) &&
      validatematchPasswords(form.userPassword, conpassword) &&
      userImage
    ) {
      try {
        const formData = new FormData();
        formData.append("user", JSON.stringify(form));
        if (userImage) formData.append("image", userImage);

        await axios.post(
          "http://localhost:8085/api/v1/registeruser",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          },
        );

        toast.success("Registration successful");
      } catch (err: any) {
        if (err.response) {
          toast.error("Registration failed");
        } else if (err.request) {
          toast.error("Server not reachable");
        } else {
          toast.error("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Registration failed please check the details");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[url('/coconut-still-life1.jpg')] w-full bg-cover bg-center fixed inset-0 overflow-y-auto font-sans text-white text-sm">
      <div className="flex flex-col p-5 gap-10 justify-between items-center bg-black/60 min-h-screen">
        <div className="font-bold w-full text-2xl flex gap-2 items-center">
          <Image src="/logo2.png" alt="logo" width={50} height={50} />
          CocoHarvest
        </div>

        <div className="flex flex-col items-center w-1/4 gap-5 bg-black/40 backdrop-blur-md p-5 rounded-xl">
          <h1 className="font-bold w-full text-left text-2xl">
            Sign up to your account
          </h1>

          <div className="flex flex-col items-center">
            <div
              className="w-24 h-24 bg-white rounded-full flex items-center justify-center cursor-pointer overflow-hidden"
              onClick={handleImageClick}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FiCamera size={28} className="text-gray-700" />
              )}
            </div>
            <span className="text-xs">Add profile</span>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
          <div className="w-full relative">
            <div className="flex gap-2 items-center bg-white p-2 w-full text-gray-900 rounded-sm">
              <FiUser />
              <input
                name="userName"
                placeholder="Enter the username"
                className="w-full outline-none"
                onChange={handleChange}
              />
            </div>

            <span
              className={`absolute left-0 top-full text-red-400 text-xs ${
                usernameError ? "invisible" : "visible"
              }`}
            >
              Username must be at least 3 characters
            </span>
          </div>

          <div className="w-full relative">
            <div className="flex gap-2 items-center bg-white p-2 w-full text-gray-900 rounded-sm">
              <FiUser />
              <input
                name="userFirstName"
                placeholder="Enter the first name"
                className="w-full outline-none"
                onChange={handleChange}
              />
            </div>
            <span
              className={`absolute left-0 top-full text-red-400 text-xs ${
                fnameError ? "invisible" : "visible"
              }`}
            >
              cannot be empty or must contain only letters
            </span>
          </div>
          <div className="w-full relative">
            <div className="flex gap-2 items-center bg-white p-2 w-full text-gray-900 rounded-sm">
              <FiUser />
              <input
                name="userLastName"
                placeholder="Enter the last name"
                className="w-full outline-none"
                onChange={handleChange}
              />
            </div>
            <span
              className={`absolute left-0 top-full text-red-400 text-xs ${
                lnameError ? "invisible" : "visible"
              }`}
            >
              cannot be empty or must contain only letters
            </span>
          </div>
          <div className="w-full relative">
            <div className="flex gap-2 items-center bg-white p-2 w-full text-gray-900 rounded-sm">
              <FiPhoneCall />
              <input
                name="Telephone"
                placeholder="Enter the phone number"
                className="w-full outline-none"
                onChange={handleChange}
              />
            </div>
            <span
              className={`absolute left-0 top-full text-red-400 text-xs ${
                phoneNumberError ? "invisible" : "visible"
              }`}
            >
              cannot be empty or invalid phone number
            </span>
          </div>
          <div className="w-full relative">
            <div className="flex gap-2 items-center bg-white p-2 w-full text-gray-900 rounded-sm">
              <FiMapPin />
              <input
                name="Address"
                placeholder="Enter the laddress with location"
                className="w-full outline-none"
                onChange={handleChange}
              />
            </div>
            <span
              className={`absolute left-0 top-full text-red-400 text-xs ${
                addressError ? "invisible" : "visible"
              }`}
            >
              cannot be empty
            </span>
          </div>
          <div className="w-full relative">
            <div className="flex gap-2 items-start bg-white p-2 w-full text-gray-900 rounded-sm">
              <FiFileText />
              <textarea
                name="Description"
                placeholder="Enter the description about you"
                className="w-full outline-none"
                onChange={handleChange}
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
          <div className="w-full relative">
            <div className="flex gap-2 items-center bg-white p-2 w-full text-gray-900 rounded-sm">
              <FiLock />
              <input
                name="userPassword"
                placeholder="Enter the new password"
                type={textVisual1 ? "text" : "password"}
                className="w-full outline-none"
                onChange={handleChange}
              />
              {textVisual1 ? (
                <FiEye onClick={() => setTextVisual1(false)} />
              ) : (
                <FiEyeOff onClick={() => setTextVisual1(true)} />
              )}
            </div>
            <span
              className={`absolute left-0 top-full text-red-400 text-xs ${
                newpasswordError ? "invisible" : "visible"
              }`}
            >
              password must be 8+ chars with letters & numbers
            </span>
          </div>
          <div className="w-full relative">
            <div className="flex gap-2 items-center bg-white p-2 w-full text-gray-900 rounded-sm">
              <FiLock />
              <input
                placeholder="Confirm password"
                type={textVisual2 ? "text" : "password"}
                className="w-full outline-none"
                onChange={(e) => {
                  setConpassword(e.target.value);
                }}
              />
              {textVisual2 ? (
                <FiEye onClick={() => setTextVisual2(false)} />
              ) : (
                <FiEyeOff onClick={() => setTextVisual2(true)} />
              )}
            </div>
            {matchPasswords ? (
              <span
                className={`absolute left-0 top-full text-red-400 text-xs ${
                  confirmpasswordError ? "invisible" : "visible"
                }`}
              >
                password must be 8+ chars with letters & numbers
              </span>
            ) : (
              <span className="absolute left-0 top-full mt-1 text-red-400 text-xs">missmatch passwords</span>
            )}
          </div>
          <button
            onClick={handleRegister}
            disabled={loading}
            className="bg-gradient-to-r from-green-400 to-green-700 p-2 w-full rounded-sm cursor-pointer transition duration-300 ease-in-out hover:from-green-500 hover:to-green-800"
          >
            {loading ? "Signing up..." : "SIGN UP"}
          </button>

          <Link
            href="/field-owner/login"
            className="flex gap-2 text-green-700 hover:underline items-center"
          >
            <BsArrowLeft /> Back to login
          </Link>
        </div>

        <label>@2026 CocoHarvest Inc.</label>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
