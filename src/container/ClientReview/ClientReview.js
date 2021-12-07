import React from "react";
import Review from "./Review";

function ClientReview() {
  return (
    <div
      id="review"
      className="review-section flex flex-col justify-evenly items-center mx-10 mb-10 mt-5 py-5"
    >
      <div className="card-section-header max-w-xl flex flex-col justify-center items-center ">
        <h1 className="section-title-font-size font-semibold py-3 text-center">
          Client Review
        </h1>
        <div className="section-detail-small text-gray-500 text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo justo. Nullam dictum felis eu pede mollis pretium.
        </div>
      </div>
      <div className="mt-12 w-full">
        <Review />
      </div>
    </div>
  );
}

export default ClientReview;
