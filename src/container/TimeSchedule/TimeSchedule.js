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
        <div className=" my-10 mx-auto flex flex-col max-w-screen-sm item-start justify-center lg:mr-auto md:self-stretch md:w-7/12">
          <div className="time-header mb-3 section-title-font-size font-semibold text-center md:text-left">
            Grow your restaurant with us
          </div>
          <div className=" section-detail-small mb-5 lg:mr-10 text-center text-gray-500 md:text-left">
            Experience more and recurring guests, control the flow of guests,
            occupy more tables and build loyalty with great hospitality. We help
            you manage your bookings because we want you to spread love on the
            floor. Available on Desktop, iPad, iPhone and Android
          </div>
          <div className="time-list flex flex-col gap-y-4 mt-3 items-stretch justify-center">
            <ListItem
              icon={FiCompass}
              title=" More Efficiency"
              detail="Integrations available to multiple channels in one app"
            />
            <ListItem
              icon={FiCompass}
              title="Customer Loyalty"
              detail=" A great experience for your customers to come again."
            />
            <ListItem
              icon={FiCompass}
              title="Increased Revenue "
              detail="Yield more with better management systems. Reduce no shows"
            />
          </div>
        </div>
      </div>
      {/* Track Time from anywhere */}

      {/* Built For Your Daily Schedule */}
      <div className="flex flex-col md:flex-row justify-center md:mt-10 lg:mt-20">
        <div className=" my-10 flex flex-col max-w-screen-sm item-start justify-center md:self-stretch md:w-7/12">
          <div className=" section-title-font-size mb-3 font-semibold text-center md:text-left">
            Small or large we have covered it all
          </div>
          <div className="section-detail-small text-center mb-5 text-gray-500 md:text-left">
            Benefit from the wide range of features available with the EatsEzy
            restaurant app.{" "}
            <span className="text-primary-red font-medium">
              Focus on the guest and forget the rest.
            </span>
          </div>
          <div className="time-list flex flex-col gap-y-4 mt-3 items-center justify-center">
            <ScheduleItem detail=" Fill seats faster by getting notices. All are partner restaurants get priority listing on the EatsEzy guest app. " />
            <ScheduleItem detail="Pre-booking or Walkings the app supports all types of reservations. Set your guest preference and serve them better" />
            <ScheduleItem detail="Experience the new standards of online reservation with an AI-driven platform to avoid double-booking and reduced no shows" />
            <ScheduleItem detail="Interact with guests with chat inbuild in app, initiate a quick call, and make them feel special, know if they are celebrating, all in one app. We send them reminders on behalf of you :)." />
            <ScheduleItem detail="Digital floor plan to monitor your continuous guest influx digitally where ever you are. Get full visibility on what’s happening in your restaurant even when you are not there." />
            <ScheduleItem detail="Most important, cheapest solutions of all competitors. Made for exclusive restaurants to provide an exclusive feel." />
          </div>
          <div className="mt-5 flex justify-center md:justify-start ">
            <button className="rounded cursor-pointer max-w-max  text-white py-4 px-6 leading-tight transition-colors duration-300 focus:outline-none bg-card-red transform hover:bg-button-hvr text-lg font-medium ">
              Learn More
            </button>
          </div>
        </div>
        <div className="time-img md:px-8 lg:px-12 flex justify-center items-center md:w-5/12">
          <img src={phone} alt="phone" />
        </div>
      </div>
    </div>
  );
}

export default TimeSchedule;
