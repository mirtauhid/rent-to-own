import React from "react";
import Slider from "react-slick";
import Images from "./Images";
import CustomSliderNext from "./CustomSliderNext";
import CustomSliderPrev from "./CustomSliderPrev";
import style from "./style.module.css";



const ImageSlider = ({data,height="h-96",width="w-full"}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomSliderNext />,
    prevArrow: <CustomSliderPrev />,
  };
  return (
    <div className={`${width} mx-auto`}>
      <Slider {...settings}>
        {data.map((item) => {
          return <Images src={item.img} height={height}/>;
        })}
      </Slider>
    </div>
  );
};

export default ImageSlider;
