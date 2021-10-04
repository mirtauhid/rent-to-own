import React from 'react'
import {AiFillStar} from "react-icons/ai";
import style from "./style.module.css";

const Review = ({name,review}) => {
    return (
      <div className={`${style["userReview-review-wrapper"]}`}>
        <div
          className="flex gap-1 text-xl mb-2"
          style={{ width: "fit-content" }}
        >
          <p className="text-xl font-bold mr-1">Great service</p>
          <AiFillStar fill={"#07c7a2"} className="mt-1" />
          <AiFillStar fill={"#07c7a2"} className="mt-1" />
          <AiFillStar fill={"#07c7a2"} className="mt-1" />
          <AiFillStar fill={"#07c7a2"} className="mt-1" />
          <AiFillStar fill={"#07c7a2"} className="mt-1" />
        </div>

        <div className="">
          <p className="text-base">{review}</p>
          <p className="mt-5 mb-5 text-base">{name}</p>
        </div>
      </div>
    );
}

export default Review
