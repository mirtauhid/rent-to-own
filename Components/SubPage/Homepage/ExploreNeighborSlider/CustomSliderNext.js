import React from "react"
import {AiOutlineRight} from "react-icons/ai";
import style from "./style.module.css";

const CustomSliderNext=(props)=> {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={style["bestPlace-slider-next"]}>
      <AiOutlineRight fill={"gray"} />
    </div>
  );
}

export default CustomSliderNext