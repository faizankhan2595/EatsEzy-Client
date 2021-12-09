import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { reviews } from "./reviewlist";

const leng = reviews.length;

const getSlides = () => {
  const width = window.innerWidth;
  if (width <= 480) {
    return 0;
  } else if (width <= 968) {
    return 1;
  } else {
    return 2;
  }
};

function Review() {
  const [center, setCenter] = useState(getSlides);
  const [slides, setSlides] = useState(getSlides);
  const slider = useRef();
  const currentReview = reviews.at(center);

  const updateSize = () => {
    const width = window.innerWidth;
    if (width <= 480 && slides !== 0) {
      setSlides(0);
    } else if (width <= 968 && slides !== 1) {
      setSlides(1);
    } else if (slides !== 2) {
      setSlides(2);
    }
  };

  useEffect(
    () => (window.onresize = updateSize),
    // eslint-disable-next-line
    []
  );

  const afterChange = (idx) => {
    setCenter((idx + slides) % leng);
  };

  var settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    initial: 0,
    lazyLoad: "progressive",
    afterChange: afterChange,
    responsive: [
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

  return (
    <>
      <div className="max-w-screen-sm mx-auto">
        <div className="quotes text-center text-gray-500 md:mx-10 font-medium">
          {currentReview.review}
        </div>
        <div className="mt-6 block max-w-min">
          <Slider {...settings} ref={slider}>
            {reviews.map((review, index) => (
              <div key={index} className="my-6 px-3">
                <div
                  className={`relative mx-auto rounded-full overflow-hidden transition duration-200 transform ${
                    index === center
                      ? "w-28 h-28 ring-offset-4 ring-2"
                      : " w-24 h-24 "
                  }`}
                >
                  <img
                    src={review.imgsrc}
                    className="absolute inset-0"
                    alt="profile"
                  />
                  {index !== center && (
                    <div className="absolute inset-0 bg-black bg-opacity-60" />
                  )}
                </div>
              </div>
            ))}
          </Slider>
          <div className="w-28 mx-auto my-2 text-center">
            <p className="font-semibold">{currentReview.name}</p>
            <p className="text-gray-500"> from{" " + currentReview.org}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
