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
            <div className="w-full">
              <img className="w-full h-72" src={images[0]?.src.secure_url} />
            </div>
            <div className="w-full">
              <img className="w-full h-72" src={images[1]?.src.secure_url} />
            </div>
            {images[2]?.src.secure_url ? (
              <div className="w-full">
                <img className="w-full h-72" src={images[2]?.src.secure_url} />
              </div>
            ) : null}
            {images[3]?.src.secure_url ? (
              <div className="w-full">
                <img className="w-full h-72" src={images[3]?.src.secure_url} />
              </div>
            ) : null}
            {images[4]?.src.secure_url ? (
              <div className="w-full">
                <img className="w-full h-72" src={images[4]?.src.secure_url} />
              </div>
            ) : null}
            {images[5]?.src.secure_url ? (
              <div className="w-full">
                <img className="w-full h-72" src={images[5]?.src.secure_url} />
              </div>
            ) : null}
            {images[6]?.src.secure_url ? (
              <div className="w-full">
                <img className="w-full h-72" src={images[6]?.src.secure_url} />
              </div>
            ) : null}
        </Slider>
      </div>
    );
}

export default Carousel;