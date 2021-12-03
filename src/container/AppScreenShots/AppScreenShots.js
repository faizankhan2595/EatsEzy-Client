import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ss1 from "../../static/ss1.jpg";
import ss2 from "../../static/ss2.jpg";
import ss3 from "../../static/ss3.jpg";
import ss4 from "../../static/ss4.jpg";
import ss5 from "../../static/ss5.jpg";
import ss6 from "../../static/ss6.jpg";
import ss7 from "../../static/ss7.jpg";
import ss8 from "../../static/ss8.jpg";

const images = [ss1, ss2, ss3, ss4, ss5, ss6, ss7, ss8];

var settings = {
  dots: true,
  infinite: true,
  //   autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 968,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function AppScreenShots() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto py-10">
        <div className="py-4 max-w-screen-sm mx-auto">
          <h1 className="section-title-font-size font-semibold py-3 text-center">
            App Screenshots
          </h1>
          <div className="screenshot-small text-gray-500 text-center">
            Morbi velit leo, sodales in purus eu, pretium accumsan nunc.
            Praesent eu diam ut ante consequat euismod.
          </div>
        </div>
        <div className="p-6 pb-10 mx-4 lg:mx-16">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className=" rounded-lg p-5 ">
                <img src={image} alt="screenshot" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default AppScreenShots;
