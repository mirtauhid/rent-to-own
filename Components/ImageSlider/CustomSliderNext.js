import React from "react"
import {AiOutlineRight} from "react-icons/ai";
import style from "./style.module.css";

const CustomSliderNext=(props)=> {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={style["imageSlider-slider-next"]}>
      <AiOutlineRight fill={"rgba(0, 219, 177)"} />
    </div>
  );
}

export default CustomSliderNext