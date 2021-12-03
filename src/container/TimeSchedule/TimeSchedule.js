import React from "react";
import phone from "../../static/phone.png";
import dualphone from "../../static/dualphone.png";
import { FiCompass } from "react-icons/fi";
import ScheduleItem from "./ScheduleItem";
import ListItem from "./ListItem";

function TimeSchedule() {
  return (
    <div className=" p-10 bg-gray-50 md:py-16">
      <div className="flex flex-col justify-evenly mx-auto md:flex-row">
        <div className="time-img md:px-6 lg:px-6 flex justify-center items-center md:w-5/12">
          <img src={dualphone} alt="dual-phone" />
        </div>
        <div className=" my-10 flex flex-col max-w-screen-sm item-start justify-center md:self-stretch md:w-7/12">
          <div className="time-header mb-3 section-title-font-size font-semibold text-center md:text-left">
            Track Time From Anywhere
          </div>
          <div className=" section-detail-small mb-5 text-center text-gray-500 md:text-left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </div>
          <div className="time-list flex flex-col gap-y-4 mt-3 items-center justify-center">
            <ListItem
              icon={FiCompass}
              title="Easy to Use"
              detail="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"
            />
            <ListItem
              icon={FiCompass}
              title="Easy to Use"
              detail="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"
            />
            <ListItem
              icon={FiCompass}
              title="Easy to Use"
              detail="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"
            />
          </div>
        </div>
      </div>
      {/* Track Time from anywhere */}

      {/* Built For Your Daily Schedule */}
      <div className="flex flex-col md:flex-row justify-center md:mt-10 lg:mt-20">
        <div className=" my-10 flex flex-col max-w-screen-sm item-start justify-center md:self-stretch md:w-7/12">
          <div className=" section-title-font-size mb-3 font-semibold text-center md:text-left">
            Built For Your Daily Schedule
          </div>
          <div className="section-detail-small text-center mb-5 text-gray-500 md:text-left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </div>
          <div className="time-list flex flex-col gap-y-4 mt-3 items-center justify-center">
            <ScheduleItem detail="Ut fringilla est at nunc suscipit dictum. Nulla facilisi. Phasellus dignissim nibh eget imperdiet venenatis." />
            <ScheduleItem detail="Nullam egestas tincidunt lectus, sagittis eros vestibulum in. Vestibulum finibus iaculis sagittis. Suspendisse viverra luctus." />
            <ScheduleItem detail="Suspendisse at volutpat magna, vitae mattis metus. Integer posuere eu erat at pharetra. Aliquam ut pharetra diam." />
            <ScheduleItem detail="Donec luctus, sem vel molestie efficitur, metus libero mollis neque, sed scelerisque arcu nisl eu lectus." />
            <ScheduleItem detail="Fusce neque magna, fringilla ac vulputate at, venenatis a eros. Donec accumsan commodo tortor sed fringilla." />
          </div>
          <div className="mt-5 flex justify-center md:justify-start ">
            <button className="rounded cursor-pointer max-w-max  text-white py-4 px-6 leading-tight transition-colors duration-300 focus:outline-none bg-card-red transform hover:bg-button-hvr text-lg font-medium ">
              Learn More
            </button>
          </div>
        </div>
        <div className="time-img  md:px-8 lg:px-20 flex justify-center items-center md:w-5/12">
          <img src={phone} alt="phone" />
        </div>
      </div>
    </div>
  );
}

export default TimeSchedule;
