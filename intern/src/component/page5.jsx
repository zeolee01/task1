import React from "react"
import { Link } from "react-router-dom"

export const Page5 = () => {
  return (
    <div className="p-4 min-h-screen flex w-full">
      <div className=" w-full md:w-auto lg:max-w-full mx-auto bg-white rounded-lg overflow-hidden">
        {/* div 1 */}
        <div>
          <h1 className="text-2xl font-bold mb-4">What are your goals?</h1>
          <div className="space-y-3 lg:space-y-4 w-full">
            <div
              className="flex items-center justify-between p-3 rounded-xl"
              style={{ background: "#F1F1F1" }}
            >
              <label className="text-base">Weight Loss</label>
              <input
                type="checkbox"
                id="agree"
                className="h-5 w-5 rounded focus:ring-blue-500"
              />
            </div>

            <div
              className="flex items-center justify-between p-3 rounded-xl"
              style={{ background: "#F1F1F1" }}
            >
              <label className="text-base">Muscle Gain</label>
              <input
                type="checkbox"
                id="agree"
                className="h-5 w-5 rounded focus:ring-blue-500"
              />
            </div>

            <div
              className="flex items-center justify-between p-3 rounded-xl"
              style={{ background: "#F1F1F1" }}
            >
              <label className="text-base">Flexibility and Mobility</label>
              <input
                type="checkbox"
                id="agree"
                className="h-5 w-5 rounded focus:ring-blue-500"
              />
            </div>

            <div
              className="flex items-center justify-between p-3 rounded-xl"
              style={{ background: "#F1F1F1" }}
            >
              <label className="text-base">General Fitness</label>
              <input
                type="checkbox"
                id="agree"
                className="h-5 w-5 rounded focus:ring-blue-500"
              />
            </div>

            <div
              className="flex items-center justify-between p-3 rounded-xl"
              style={{ background: "#F1F1F1" }}
            >
              <label className="text-base">Event - specific training</label>
              <input
                type="checkbox"
                id="agree"
                className="h-5 w-5 rounded focus:ring-blue-500"
              />
            </div>

            <div
              className="flex items-center justify-between p-3 rounded-xl"
              style={{ background: "#F1F1F1" }}
            >
              <label className="text-base">Mindfulness and Mental Health</label>
              <input
                type="checkbox"
                id="agree"
                className="h-5 w-5 rounded focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="pt-7">
          <Link to="/page6">
            <button
              className="mt-6 w-full text-white font-semibold py-2 rounded-md transition duration-300"
              style={{
                background: "linear-gradient(270deg, #7B91FF 0%, #95BEFF 100%)",
              }}
            >
              Confirm
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
