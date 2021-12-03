import React, { useState } from "react";

const reviews = [
  {
    name: "Subhajit",
    org: "Sprite",
    review:
      "Donec purus est, tincidunt eu sodales quis, vehicula quis enim. Morbi dapibus, tellus a gravida faucibus, elit ipsum.",
  },
  {
    name: "Subhajit",
    org: "Sprite",
    review:
      "Donec purus est, tincidunt eu sodales quis, vehicula quis enim. Morbi dapibus, tellus a gravida faucibus, elit ipsum.",
  },
  {
    name: "Subhajit",
    org: "Sprite",
    review:
      "Donec purus est, tincidunt eu sodales quis, vehicula quis enim. Morbi dapibus, tellus a gravida faucibus, elit ipsum.",
  },
  {
    name: "Subhajit",
    org: "Sprite",
    review:
      "Donec purus est, tincidunt eu sodales quis, vehicula quis enim. Morbi dapibus, tellus a gravida faucibus, elit ipsum.",
  },
  {
    name: "Subhajit",
    org: "Sprite",
    review:
      "Donec purus est, tincidunt eu sodales quis, vehicula quis enim. Morbi dapibus, tellus a gravida faucibus, elit ipsum.",
  },
  {
    name: "Subhajit",
    org: "Sprite",
    review:
      "Donec purus est, tincidunt eu sodales quis, vehicula quis enim. Morbi dapibus, tellus a gravida faucibus, elit ipsum.",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

function Review(props) {
  const [currentReview, setCurrentReview] = useState({});

  const handleChangeAfter = (value) => {};

  return (
    <div className=" my-16 md:max-w-screen-sm text-center">
      {/* <div className="quotes text-gray-600 font-medium">
        Donec purus est, tincidunt eu sodales quis, vehicula quis enim. Morbi
        dapibus, tellus a gravida faucibus, elit ipsum.
      </div> */}
    </div>
  );
}

export default Review;
