import React from "react";
import FeatureItem from "./FeatureItem";
import floorImg from "../../static/features_image.png";
import { FiSettings } from "react-icons/fi";
import { HiOutlineLockClosed } from "react-icons/hi";
import { BsChatRightText } from "react-icons/bs";
import { IoShareSocialOutline, IoCopyOutline } from "react-icons/io5";
import { IoMdAlarm } from "react-icons/io";

function Features() {
  return (
    <div className="features flex flex-col justify-center items-center pt-8 pb-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="flex flex-col justify-center items-center p-5 text-center">
        <p className="section-title-font-size font-semibold p-5">
          Awesome Features
        </p>
        <p className=" section-detail-small max-w-screen-sm text-gray-500">
          Explore the list of simple yet great value adds features on our
          platform to provide you the most Easiest booking management
          experience.
        </p>
      </div>
      <div className="header-buttons max-w-screen-xl flex flex-col items-center justify-center mt-6 px-5 md:flex-row">
        <div className=" h-full md:w-4/12 lg:ml-8 lg:mr-2 flex flex-col justify-evenly">
          <FeatureItem
            icon={FiSettings}
            title="Digital Floor Plan"
            detail="Get your complete restaurant floor plan right on your handphone/table, with real-time live updates on your table status, booked or available."
            left
          />
          <FeatureItem
            icon={HiOutlineLockClosed}
            title="Web integration module"
            detail="Get a unique URL to manage your booking via the web. Integrate it on the website, share it on WhatsApp or even integrate it to Facebook messenger. "
            left
          />
          <FeatureItem
            icon={BsChatRightText}
            title="Free Live Chat"
            detail="Interact with your guest. Get their confirmation before they arrive. Chat in-app without switching between different platforms to interact."
            left
          />
        </div>

        <div className="hidden md:block md:w-4/12 md:mx-2">
          <img src={floorImg} alt="feature-phone" />
        </div>

        <div className=" h-full md:w-4/12 lg:mr-8 lg:ml-2 flex flex-col justify-evenly">
          <FeatureItem
            icon={IoCopyOutline}
            title="Guest Preferences in-app"
            detail="Want to know your diner better? Get their dietary preference, preferred location to dine, infant or elder accompanied with them, etc."
          />
          <FeatureItem
            icon={IoShareSocialOutline}
            title="Hault timeings"
            detail="We let you decide how long would you prefer your guest to occupy a table at your restaurant when booking for 1 or a for 2 or even a table for 6. "
          />
          <FeatureItem
            icon={IoMdAlarm}
            title="Paid Bookings"
            detail="Worrying about false bookings and no-shows? Don’t worry, we can help you get pre deposits with every booking request to reduce no-shows."
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
