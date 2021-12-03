import React from "react";

function FeatureItem(props) {
  return (
    <div
      className={`flex my-5 flex-row flex-nowrap ${
        props.left && "md:text-right"
      }`}
    >
      <div className={`text-red-400 ${props.left && "md:hidden"}`}>
        <props.icon size={41} />
      </div>
      <div className="px-4">
        <p className="text-2xl font-semibold pb-3">{props.title}</p>
        <p className="feature-detail text-gray-500"> {props.detail}</p>
      </div>
      {props.left && (
        <div className="text-red-400 hidden md:block ">
          <props.icon size={41} />
        </div>
      )}
    </div>
  );
}

export default FeatureItem;
