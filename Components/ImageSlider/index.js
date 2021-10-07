import React from "react";
import Slider from "react-slick";
import { FindSpace } from "../../Components";
import CustomSliderNext from "./CustomSliderNext";
import CustomSliderPrev from "./CustomSliderPrev";
import style from "./style.module.css";


const BestPlaceSlider = ({className,title,cardContent}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomSliderNext />,
    prevArrow: <CustomSliderPrev />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={`mt-4 ${className}`}>
      {cardContent && <h1 className="text-base md:text-2xl mb-4 font-primary">{title}</h1>}
      <Slider {...settings}>
        {cardContent?.map(({ ...item }, index) => {
          return (
            <FindSpace
              key={index}
              {...item}
              className={`h-60 md:mr-4`}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default BestPlaceSlider;
