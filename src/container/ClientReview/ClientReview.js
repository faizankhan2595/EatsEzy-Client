import React from "react";
import Review from "./Review";

function ClientReview() {
  return (
    <div id="review" className="bg-gradient-to-t from-gray-100">
      <div className="review-section mx-10 mb-10 mt-5 py-5 md:py-12">
        <div className="card-section-header max-w-screen-sm mx-auto flex flex-col justify-center items-center ">
          <h1 className="section-title-font-size font-semibold py-3 text-center">
            Client Review
          </h1>
          {/* <div className="section-detail-small text-gray-500 text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo justo. Nullam dictum felis eu pede mollis pretium.
          </div> */}
        </div>
        <Review />
      </div>
    </div>
  );
}

export default ClientReview;
