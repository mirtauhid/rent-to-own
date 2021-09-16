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
    touchMove:true,
    swipeToSlide:true,
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
    <div className="mx-5 md:mx-20 lg:mx-28 mt-10 h-80">
      <div>
        <Slider {...settings}>
          {data.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <div style={{ width: "250px", marginRight: "12px" }}>
                  <SingleImageCard name={item.name} />
                </div>
              );
            } else {
              return (
                <div style={{ width: "350px" }}>
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
