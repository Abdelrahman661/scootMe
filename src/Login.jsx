import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import mu from "../public/mu.svg";
import scan from "../public/scan.svg";
function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="mb-8">
        <img src={mu} alt="University Logo" className="h-24 w-auto" />
      </div>

      <div className="w-full max-w-xl space-y-6">
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Enter your ID<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            placeholder="Student ID"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
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

        <div className="flex items-center justify-between">
          <label className="inline-flex items-center text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-orange-500"
            />
            <span className="ml-2">Remember me</span>
          </label>
          <Link to="/forget-password" className="text-sm text-orange-500">
            Forgot your password?
          </Link>
        </div>

        <div className="text-center my-6">
          <p className="font-semibold text-gray-700 mb-2">
            Login by scanning your university card
          </p>
          <div className="flex justify-center">
            <img src={scan} alt="Card Scan Icon" className="h-12 w-12" />
          </div>
        </div>

        <button className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold text-lg">
          Login
        </button>

        <div className="text-center mt-4">
          <span className="text-gray-700">Don’t have an account?</span>{" "}
          <Link to="/signup" className="text-orange-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
