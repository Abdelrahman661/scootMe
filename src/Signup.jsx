import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import mu from "../public/mu.svg"
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <div className="flex flex-col items-center justify-center pt-8 pb-4">
        <img
          src={mu}
          alt="University Logo"
          className="h-24 w-auto"
        />
      </div>

      <div className="flex flex-col items-center justify-start flex-grow w-full  mx-auto px-4 space-y-6">
        <div className="w-[70%]">
          <label className="block mb-1 font-semibold text-gray-700">
            Enter your name<span className="text-red-500 ml-1">*</span>
          </label>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        <div className="w-[70%]">
          <label className="block mb-1 font-semibold text-gray-700">
            Enter your email<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="w-[70%]">
          <label className="block mb-1 font-semibold text-gray-700">
            Enter your password<span className="text-red-500 ml-1">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>

        <div className="w-[70%]">
          <label className="block mb-1 font-semibold text-gray-700">
            Confirm password<span className="text-red-500 ml-1">*</span>
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter the password again"
              className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-orange-500"
          />
          <span className="ml-2 text-gray-700">
            I understand and agree to the
            <Link to="/terms" className="text-orange-500 ml-1">
              Studing Terms of Service
            </Link>
          </span>
        </div>
      </div>

      <div className="bg-orange-500 py-3 text-center mx-auto w-[75%] rounded-full mb-3">
        <button className="text-white font-semibold text-lg w-full">
          Create account
        </button>
      </div>

      <div className="text-center mb-4">
        <span className="text-gray-700">Already have an account?</span>{" "}
        <Link to="/login" className="text-orange-500">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
