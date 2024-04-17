import React from "react"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import { Link } from "react-router-dom"
import { Page3 } from "./page3"
import { Page2 } from "./page2"

export const Page1 = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between p-2">
      {/* Added a div with flex justify-end classes to move "skip" text to the right */}
      <div className="flex justify-end">
        <div className="text-blue-400 underline text-lg">
          <Link to="/page3">Skip</Link>
        </div>
      </div>

      {/* Added img tag with src and alt attributes */}
      <img src={img1} alt="img1" className="pb-9 pt-9 mx-auto " />

      {/* Added h1 and p tags for heading and paragraph */}
      <div>
        <h1 className="text-3xl pb-2">Track Your Goal</h1>
        <p className="text-sm text-gray-500 pl-1">
          Don't worry if you have trouble determining your goals, We can help
          you determine your goals and track your goals
        </p>
      </div>
      <div className="flex justify-end">
        <Link to="/page2">
          <img src={img2} alt="circle img" className="pt-5" />
        </Link>
      </div>
    </div>
  )
}
