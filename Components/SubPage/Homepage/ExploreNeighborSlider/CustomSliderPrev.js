import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import style from "./style.module.css";

function CustomSliderPrev({ onClick }) {
  return (
    <div onClick={onClick}>
      <div onClick={onClick} className={style["bestPlace-slider-prev"]}>
        <AiOutlineLeft fill={"gray"}/>
      </div>
    </div>
  );
}

export default CustomSliderPrev;
