import React, {useEffect} from "react";
import Slider from "react-slick";

const Carousel = ({images}) => {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    useEffect(() => {}, [images])
    return (
      <div className="w-full">
        <Slider {...settings}>

          {
            images?.map((item, index)=>{
              return (
                <div className="w-full h-80" key={index}>
                  <img
                    className="w-full h-full object-cover"
                    src={item?.src.secure_url}
                  />
                </div>
              );
            })
          }
        </Slider>
      </div>
    );
}

export default Carousel;