import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import style from "./style.module.css";

function CustomSliderPrev({ onClick }) {
  return (
    <div onClick={onClick}>
      <div onClick={onClick} className={style["imageSlider-slider-prev"]}>
        <AiOutlineLeft fill={"rgba(0, 219, 177)"} />
      </div>
    </div>
  );
}

export default CustomSliderPrev;
