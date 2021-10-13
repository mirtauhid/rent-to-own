import React from 'react'
import {AiFillStar} from "react-icons/ai";
import style from "./style.module.css";

const Review = ({name,review,title}) => {
    return (
      <div className={`${style["userReview-review-wrapper"]}`}>
        <div
          className="flex justify-between text-xl mb-2"
        >
          <p className="text-xl font-bold mr-1">{title}</p>
          <div className="flex">
            <AiFillStar fill={"#07c7a2"} className="mt-1" />
            <AiFillStar fill={"#07c7a2"} className="mt-1" />
            <AiFillStar fill={"#07c7a2"} className="mt-1" />
            <AiFillStar fill={"#07c7a2"} className="mt-1" />
            <AiFillStar fill={"#07c7a2"} className="mt-1" />
          </div>
        </div>

        <div className="">
          <p className="text-base">{review}</p>
          <p className="mt-5 mb-5 text-base">{name}</p>
        </div>
      </div>
    );
}

export default Review
