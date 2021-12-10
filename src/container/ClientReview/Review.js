import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";

import { reviews } from "./reviewlist";

const leng = reviews.length;

const getSlides = () => {
  const width = window.innerWidth;
  if (width <= 480) {
    return 0;
  } else {
    return 1;
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
    } else {
      setSlides(1);
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
    autoplaySpeed: 3000,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
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
            <p className="text-gray-500"> {currentReview.org}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;

// function Review() {
//   const [current, setCurrent] = useState(0);
//   const handleClick = (idx) => {
//     setCurrent(idx);
//   };

//   return (
//     <>
//       <div className="max-w-screen-sm mx-auto mt-8">
//         <div className="text-center text-gray-500">
//           <div className="quotes md:mx-10 font-medium">
//             {reviews[current].review}
//           </div>
//           <div className="mt-4 md:hidden">
//             <p className="font-bold text-primary-red">
//               {reviews[current].name}
//             </p>
//             <p className="text-sm font-bold">{reviews[current].org}</p>
//           </div>
//         </div>
//         <div className="mt-8">
//           <div className="w-full">
//             <div className="flex flex-col justify-center items-stretch md:flex-row">
//               <div className="my-3 w-1/2 md:w-5/6 flex-grow flex flex-col justify-evenly">
//                 <div className="max-w-max mx-auto ring-offset-4 ring-4 ring-opacity-60 ring-primary-red rounded-full overflow-hidden">
//                   <img
//                     src={reviews[current].imgsrc}
//                     alt="profile"
//                     width={250}
//                     height={250}
//                   />
//                 </div>
//                 <div className="mt-4 hidden md:block text-center">
//                   <p className="font-bold text-primary-red">
//                     {reviews[current].name}
//                   </p>
//                   <p className="text-sm font-bold">{reviews[current].org}</p>
//                 </div>
//               </div>
//               <div className="flex justify-around items-center md:flex-col">
//                 {reviews.map((review, index) => {
//                   if (index === current) {
//                     return null;
//                   }
//                   return (
//                     <div
//                       key={index}
//                       className="m-3 md:w-1/2 lg:w-1/3 rounded-full overflow-hidden"
//                       onClick={() => handleClick(index)}
//                     >
//                       <img src={review.imgsrc} alt="profile" />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//             {/* <div className="hidden flex-row justify-around items-center md:flex">
//               {reviews.map((review, index) => (
//                 <div
//                   key={index}
//                   className={`m-5 ring-offset-4 ring-4 ring-opacity-60 ring-primary-red mx-auto rounded-full overflow-hidden`}
//                   onClick={() => handleClick(index)}
//                 >
//                   <img src={review.imgsrc} alt="profile" />
//                 </div>
//               ))}
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
