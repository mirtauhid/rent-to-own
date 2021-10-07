import React from "react";
import { AiOutlineLeft } from "react-icons/ai";

function CustomSliderPrev({ onClick }) {
  return (
    <div onClick={onClick}>
      <div onClick={onClick} className="bestPlace-slider-prev ">
        <AiOutlineLeft className="text-sliderNavBtn" />
      </div>
    </div>
  );
}

export default CustomSliderPrev;
