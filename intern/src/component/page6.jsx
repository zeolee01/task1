import React, { useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import cha from "../assets/ChartFull.png"
import { FiAlertTriangle } from "react-icons/fi"
import img7_1 from "../assets/7.1.png"
import img7_2 from "../assets/7.2.png"
import img7_3 from "../assets/7.3.png"
import { Link } from "react-router-dom"

export const Page6 = () => {
  const [isOn1, setIsOn1] = useState(false)
  const [isOn2, setIsOn2] = useState(false)

  const handleToggle = (id) => {
    if (id === "button1") {
      setIsOn1(!isOn1)
    } else if (id === "button2") {
      setIsOn2(!isOn2)
    }
  }

  return (
    <div className=" w-70 flex justify-center h-screen pt-1">
      <div className="min-w-32 p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <Link to="/page5">
              <IoIosArrowBack className="text-xl bg-slate-100 rounded" />
            </Link>
          </div>
          <h1 className="text-2xl font-bold flex-1 text-center">
            Workout Tracker
          </h1>
        </div>

        <div className="mb-4 pt-4">
          <img src={cha} alt="chart" className="w-full rounded-lg pb-3" />
          {/* alert sign box div */}
          <div
            className="flex items-center mt-2 p-2 sm:p-3 rounded-xl "
            style={{
              background:
                "linear-gradient(90.07deg, rgba(129, 157, 255, 0.28) 5.94%, rgba(16, 16, 16, 0) 76.45%)",
            }}
          >
            <div className="mr-2">
              <FiAlertTriangle
                className="text-lg"
                style={{ color: "#7E96FF" }}
              />
            </div>
            <p className="text-sm text-gray-700 leading-4	">
              You've burned fewer calories than yesterday. Time to get moving!
            </p>
          </div>
        </div>

        {/* upcoming sec---- */}
        <div className="mb-4 pt-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-lg font-semibold">Upcoming Workout</p>
            <p className="text-sm text-blue-500 cursor-pointer">See more</p>
          </div>
          <div
            className="flex items-center mb-2 p-3 rounded-xl"
            style={{ boxShadow: "-4px 8px 25px -8px rgba(0, 0, 0, 0.15)" }}
          >
            <img src={img7_1} alt="" className="w-16 h-16 rounded-lg mr-2" />
            <div>
              <h3 className="text-base sm:text-lg ">Full Body Workout</h3>
              <p className="text-sm font-extralight text-gray-600">Today 3pm</p>
            </div>
            <button
              id="button1"
              className={`ml-auto pl-1 w-8 h-5 sm:w-12 sm:h-7 flex items-center justify-start sm:pl-1 sm:pr-1 rounded-xl focus:outline-none relative ${
                isOn1 ? "bg-blue-500" : "bg-gray-200"
              }`}
              onClick={() => handleToggle("button1")}
            >
              <div
                className={`absolute w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-white border-2 border-gray-300 transform transition-transform ${
                  isOn1 ? "translate-x-full bg-blue-500 border-blue-500" : ""
                }`}
              ></div>
            </button>
          </div>
          {/* ---------------------------- */}

          <div
            className="flex items-center mb-2 p-3 rounded-xl"
            style={{ boxShadow: "-4px 8px 25px -8px rgba(0, 0, 0, 0.15)" }}
          >
            <img src={img7_2} alt="" className="w-16 h-16 rounded-lg mr-2" />
            <div>
              <h3 className="text-base sm:text-lg">Upper Body Workout</h3>
              <p className="text-sm font-extralight text-gray-600">
                4 Feb, 3:30 pm
              </p>
            </div>
            <button
              id="button2"
              className={`ml-auto pl-1 w-8 h-5 sm:w-12 sm:h-7 flex items-center justify-start sm:pl-1 sm:pr-1 rounded-xl focus:outline-none relative ${
                isOn2 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => handleToggle("button2")}
            >
              <div
                className={`absolute  w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-white border-2 border-gray-300 transform transition-transform ${
                  isOn2 ? "translate-x-full bg-blue-500 border-blue-500" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-2">
            What Do You Want to Train
          </h1>
          <div
            className="flex items-center justify-between p-2 sm:p-3 rounded-xl"
            style={{ backgroundColor: "#8CB1FF99" }} // Corrected color code
          >
            <div className="mr-4">
              <h2 className="text-base sm:text-lg mb-1">Full Body Workout</h2>
              <p className="text-sm text-gray-600 mb-1 leading-4">Arms</p>
              <p className="text-sm text-gray-600 leading-4">Chest</p>
            </div>
            <img src={img7_3} alt="" className="w-24 h-24 rounded-lg ml-auto" />
          </div>
        </div>
        {/* navbar */}
      </div>
    </div>
  )
}
