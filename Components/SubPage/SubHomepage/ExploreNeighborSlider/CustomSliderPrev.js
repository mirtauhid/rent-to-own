import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import style from "./style.module.css";

function CustomSliderPrev({ onClick }) {
  return (
    <div onClick={onClick}>
      <div onClick={onClick} className={style["bestPlace-slider-prev"]}>
        <AiOutlineLeft fill={"#07c7a2"} />
      </div>
    </div>
  );
}

export default CustomSliderPrev;
