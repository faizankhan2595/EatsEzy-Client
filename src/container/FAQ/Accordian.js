import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function Accordian(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b flex-grow border-gray-300 py-6">
      <div
        className={`accordian-header cursor-pointer flex flex-row items-center justify-between flex-nowrap hover:text-card-red ${
          open ? "text-card-red" : "text-gray-900"
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="accordian-header-text font-semibold text-lg">
          {props.title}
        </div>
        <div
          className={`accordian-header-text px-4 transition-transform transform duration-200 ${
            open ? `rotate-180` : `rotate-0`
          }`}
        >
          <FiChevronDown />
        </div>
      </div>
      <div
        className={`accordion-content text-sm text-gray-500`}
        aria-expanded={!open}
      >
        {props.details}
      </div>
    </div>
  );
}

export default Accordian;
