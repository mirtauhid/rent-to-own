import React from 'react'
import {AiFillStar} from "react-icons/ai";

const Review = ({name,review}) => {
    return (
      <div className="w-full h-full py-3">
        <div
          className="flex gap-1 text-3xl mx-auto"
          style={{ width: "fit-content" }}
        >
          <AiFillStar fill={"#07c7a2"} />
          <AiFillStar fill={"#07c7a2"} />
          <AiFillStar fill={"#07c7a2"} />
          <AiFillStar fill={"#07c7a2"} />
          <AiFillStar fill={"#07c7a2"} />
        </div>

        <div className="text-center md:w-1/2 mx-auto px-10 md:px-1 mt-5">
          <p className="text-xl font-bold mb-5">Great service</p>
          <p className="text-lg">
           {review}
          </p>
          <p className="mt-5 mb-5 text-lg">{name}</p>
          
        </div>
      </div>
    );
}

export default Review
