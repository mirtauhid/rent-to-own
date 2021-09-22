import React from "react"
import {AiOutlineRight} from "react-icons/ai";
import style from "./style.module.css";

const CustomSliderNext=(props)=> {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={style["bestPlace-slider-next"]}>
      <AiOutlineRight fill={"#07c7a2"}/>
    </div>
  );
}

export default CustomSliderNext