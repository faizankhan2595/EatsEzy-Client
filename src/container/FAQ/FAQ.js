import React from "react";
import Accordian from "./Accordian";

function FAQ() {
  return (
    <div
      id="support"
      className="question-section max-w-screen-md flex flex-col items-center mx-auto py-10 px-8"
    >
      <div className=" py-6">
        <h1 className="section-title-font-size font-semibold py-3 text-center">
          Frequently Asked Questions
        </h1>
        <div className="card-section-small text-gray-500 text-center">
          Cras fringilla, lectus sed ullamcorper fringilla. Massa ex accumsan
          odio, quis iaculis justo magna quis tortor.
        </div>
      </div>
      <div className="flex flex-col w-full ">
        <Accordian
          title="Can I see Naxos in action before purchasing it?"
          details="Nam erat orci, dictum eu iaculis a, scelerisque commodo risus. Mauris eu egestas ipsum. In hac habitasse platea dictumst. Duis in consequat est. Sed feugiat, ante in finibus ullamcorper, felis sem porta orci, sed pretium nibh nunc a tellus."
        />
        <Accordian
          title="I’ve got older Mac. Is Naxos compatible with it?"
          details="Nam erat orci, dictum eu iaculis a, scelerisque commodo risus. Mauris eu egestas ipsum. In hac habitasse platea dictumst. Duis in consequat est. Sed feugiat, ante in finibus ullamcorper, felis sem porta orci, sed pretium nibh nunc a tellus."
        />
        <Accordian
          title="What are the requirements for using Naxos?"
          details="Nam erat orci, dictum eu iaculis a, scelerisque commodo risus. Mauris eu egestas ipsum. In hac habitasse platea dictumst. Duis in consequat est. Sed feugiat, ante in finibus ullamcorper, felis sem porta orci, sed pretium nibh nunc a tellus."
        />
        <Accordian
          title="How does Naxos handle my privacy?"
          details="Nam erat orci, dictum eu iaculis a, scelerisque commodo risus. Mauris eu egestas ipsum. In hac habitasse platea dictumst. Duis in consequat est. Sed feugiat, ante in finibus ullamcorper, felis sem porta orci, sed pretium nibh nunc a tellus."
        />
        <Accordian
          title="What is Naxos privacy policy?"
          details="Nam erat orci, dictum eu iaculis a, scelerisque commodo risus. Mauris eu egestas ipsum. In hac habitasse platea dictumst. Duis in consequat est. Sed feugiat, ante in finibus ullamcorper, felis sem porta orci, sed pretium nibh nunc a tellus."
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
