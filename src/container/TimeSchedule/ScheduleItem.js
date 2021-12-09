import React from "react";
import { FiCheck } from "react-icons/fi";

function ScheduleItem(props) {
  return (
    <div className="flex flex-row py-0.5 text-lg text-gray-600">
      <div className=" pr-2 text-card-red">
        <FiCheck size={28} />
      </div>
      <div className="">{props.detail}</div>
    </div>
  );
}

export default ScheduleItem;
