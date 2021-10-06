import { useState, useEffect } from "react";
import Slider from "react-slick";
import SingleImageCard from "./SingleImageCard";
import MultipleImageCard from "./MultipleImageCard";
import CustomSliderNext from "./CustomSliderNext";
import CustomSliderPrev from "./CustomSliderPrev";
import { data } from "../../../../Assets/exploreNeighborhoodData";
import axios from "axios";
import baseUrl from "../../../../Helpers/httpRequest";

const ExploreNeighborSlider = () => {
  const [sliderData, setSliderData] = useState();

  useEffect(() => {
    axios.get(`${baseUrl}/v2/provinces`).then((res) => {
      
      setSliderData(formatData(res.data.data.provinces)); 
    });
  }, []);

  

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
        <p className="text-xl md:text-2xl lg:text-3xl font-bold capitalize">
          Explore our neighborhoods
        </p>
      </div>
      <div className="h-80">
        <Slider {...settings} className="explore-slider">
          {sliderData?.map((item, index) => {
            
            if (index % 2 === 0) {
              console.log(item)
              return (
                <div
                  style={{ width: "250px", marginRight: "12px" }}
                  key={index}
                >
                  <SingleImageCard
                    name={item.name}
                    img={JSON.parse(item.description).url}
                    id={item.id}
                  />
                </div>
              );
            } else {
              return (
                <div style={{ width: "350px" }} key={index}>
                  <MultipleImageCard data={item} />
                </div>
              );
            }
          })}
        </Slider>
      </div>
    </div>
  );
};

const formatData = (apiData) => {
  const dataAfterFormat = [];
  let miniArray = [];
  let count = 0;

  apiData.map((item, index) => {
    if (index!==0 && index%5!==0 && count<4) {
      miniArray.push(item);
      count++;
    }
    if (index === 0 || index % 5 === 0) {
      dataAfterFormat.push(item);
    }

    if(count === 4){
      dataAfterFormat.push([...miniArray]);
      miniArray=[];
      count =0;
    }
  });

  return dataAfterFormat;
};

export default ExploreNeighborSlider;
