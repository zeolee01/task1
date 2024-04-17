import React from "react"
import img2_1 from "../assets/img2.1.png"
import img2_2 from "../assets/img2.2.png"
import { Link } from "react-router-dom"

export const Page2 = () => {
  return (
    <div className=" w-70 flex justify-center h-screen pt-1">
      <div className="min-h-screen flex flex-col justify-between p-2">
        {/* Added a div with flex justify-end classes to move "skip" text to the right */}
        <div className="flex justify-end">
          <div className="text-blue-400 underline text-lg">
            <Link to="/page3">Skip</Link>
          </div>
        </div>

        {/* Added img tag with src and alt attributes */}
        <img src={img2_1} alt="img1" className="pb-9 pt-9 mx-auto" />

        {/* Added h1 and p tags for heading and paragraph */}
        <div>
          <h1 className="text-3xl pb-2">Get Burn</h1>
          <p className="text-sm text-gray-500 pl-1">
            Let’s keep burning to achieve your goals, it hurts only temporarily,
            if you give up now you will be in pain forever
          </p>
        </div>

        {/* Added img2 and positioned it to the right bottom */}
        <div className="flex justify-end">
          <Link to="/page3">
            <img src={img2_2} alt="circle img" className="pt-5 pb-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}
