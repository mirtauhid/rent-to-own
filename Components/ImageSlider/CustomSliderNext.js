import React from "react"
import {AiOutlineRight} from "react-icons/ai";

const CustomSliderNext=(props)=> {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="bestPlace-slider-next ">
      <AiOutlineRight className="text-sliderNavBtn"/>
    </div>
  );
}

export default CustomSliderNext