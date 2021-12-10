import React from "react";
import Accordian from "./Accordian";

function FAQ() {
  return (
    <div
      id="support"
      className="question-section max-w-screen-md flex flex-col items-center mx-auto py-6 px-8 lg:py-10"
    >
      <div className=" py-2 lg:py-6">
        <h1 className="section-title-font-size font-semibold py-3 text-center">
          Frequently Asked Questions
        </h1>
        {/* <div className="card-section-small text-gray-500 text-center">
          Cras fringilla, lectus sed ullamcorper fringilla. Massa ex accumsan
          odio, quis iaculis justo magna quis tortor.
        </div> */}
      </div>
      <div className="flex flex-col w-full ">
        <Accordian
          title="Can I pay monthly?"
          details="Yes we provide a flexible and tailored solution as per your business needs"
        />
        <Accordian
          title="Is there a maximum cap on the number of bookings I can take on the app?"
          details="No. There is no cap. In fact, we want your bookings to grow every day and we will help you do everything possible for that.
"
        />
        <Accordian
          title="What if I want to move out in future?"
          details="Sure. We guarantee that you will not want to move out but if you ever feel so we will help you with a smooth exit. We are customer first company.  "
        />
        <Accordian
          title="Is there local support if I am not sure how to use the app?"
          details="We are a local company. Founded by the restaurant owner. We understand the complexities of using a new system within the team and we will provide on-demand support for free."
        />
        <Accordian
          title="Can i try it for free?"
          details="Sure. Reach out to us for a 14 day free trial plan."
        />
      </div>
      <div className="py-5 text-sm font-semibold">
        Still have Question?{" "}
        <span className="text-card-red cursor-pointer ">
          Ask your question here
        </span>
      </div>
    </div>
  );
}

export default FAQ;
