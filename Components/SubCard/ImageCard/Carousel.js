import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="w-full">
        <Slider {...settings}>
          <div className="w-full">
            <img className="w-full h-72" src={"https://res.cloudinary.com/dev-algosolver2021/image/upload/v1633257600/renttoown/properties/1633257600134_cfipwn.png"} />
          </div>
          <div>
            <img className="w-full h-72" src={"https://picsum.photos/200/300"} />
          </div>
          <div>
            <img className="w-full h-72" src={"https://picsum.photos/200/300"} />
          </div>
          <div>
            <img className="w-full h-72" src={"https://picsum.photos/200/300"} />
          </div>
        </Slider>
      </div>
    );
  }
}