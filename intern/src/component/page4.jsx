import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"
import { Link } from "react-router-dom"

export const Page4 = () => {
  const [showPassword, setShowPassword] = useState(false)

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="p-4 min-h-screen flex w-full">
      <div className=" w-full md:w-auto lg:max-w-full mx-auto bg-white rounded-lg overflow-hidden">
        {/* div 1 */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Welcome Back </h1>
          <div className="space-y-3 lg:space-y-4">
            {/* Email Input Field */}
            <input
              type="email"
              id="email" // Unique ID for email input
              className="border w-full text-base px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              style={{ background: "#F1F1F1" }}
            />
            {/* Password Input Field */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password" // Unique ID for password input
                className="border w-full text-base px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                style={{ background: "#F1F1F1" }}
              />
              {/* Icon to toggle password visibility */}
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  className="text-gray-400"
                />
              </span>
            </div>
            {/* Terms and Conditions Checkbox */}
            <div className="flex items-center">
              <label
                htmlFor="agree"
                className=" text-xs lg:text-sm text-gray-500 underline	"
              >
                Forgot your password?
              </label>
            </div>
          </div>
        </div>

        {/* div 2 */}
        <div className="pt-20">
          {/* Create Account Button */}
          <Link to="/page5">
            <button
              className="mt-6 w-full text-white font-semibold py-2 rounded-md transition duration-300"
              style={{
                background: "linear-gradient(270deg, #7B91FF 0%, #95BEFF 100%)",
              }}
            >
              <Link to="/page5">Sign In</Link>
            </button>
          </Link>

          {/* Or Text */}
          <div className="pt-4 pb-4">
            <p className="flex justify-center text-base">Or</p>
          </div>
          <div className="flex justify-evenly">
            <img
              src={google}
              alt=""
              className="size-9 md:size-11 border-2 border-black rounded-md p-2 md:p-3"
              style={{ border: "1px solid #7F7F7F" }}
            />

            <img
              src={facebook}
              alt=""
              className="h-9 md:h-11 border-2 border-black rounded-md p-2 md:p-3 pl-2.5 pr-2.5 md:pl-4 md:pr-4"
              style={{ border: "1px solid #7F7F7F" }}
            />
          </div>
          <p className="flex justify-center pt-2 sm:pt-2 text-xs">
            Don’t have an account yet?&nbsp;{" "}
            <span style={{ color: "#93A9FF", textDecoration: "underline" }}>
              <Link to="/page3">Create an account</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
