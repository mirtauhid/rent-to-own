import React from "react";
import Slider from "react-slick";
import SingleImageCard from "./SingleImageCard";
import MultipleImageCard from "./MultipleImageCard";
import CustomSliderNext from "./CustomSliderNext";
import CustomSliderPrev from "./CustomSliderPrev";
import { data } from "../../../../Assets/exploreNeighborhoodData";

const ExploreNeighborSlider = () => {
  const settings = {
    arrows: true,
    nextArrow: <CustomSliderNext />,
    prevArrow: <CustomSliderPrev />,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    touchMove: true,
    swipeToSlide: true,
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
    <div className="mx-5 md:mx-20 lg:mx-28 mt-12 md:mt-24">
      <div className="mx-auto mb-5 md:mb-10" style={{ width: "fit-content" }}>
        <div className="w-24 h-1 bg-primary mx-auto mb-3"></div>
        <p className="text-xl md:text-2xl lg:text-3xl font-bold">
          Explore our neighborhoods
        </p>
      </div>
      <div className="h-80">
        <Slider {...settings} className="explore-slider">
          {data.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <div
                  style={{ width: "250px", marginRight: "12px" }}
                  key={index}
                >
                  <SingleImageCard name={item.name} img={item.img}/>
                </div>
              );
            } else {
              return (
                <div style={{ width: "350px" }} key={index}>
                  <MultipleImageCard data={item}/>
                </div>
              );
            }
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ExploreNeighborSlider;
