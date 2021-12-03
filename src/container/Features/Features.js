import React from "react";
import FeatureItem from "./FeatureItem";
import center from "../../static/center.png";
import { FiSettings } from "react-icons/fi";
import { HiOutlineLockClosed } from "react-icons/hi";
import { BsChatRightText } from "react-icons/bs";
import { IoShareSocialOutline, IoCopyOutline } from "react-icons/io5";
import { IoMdAlarm } from "react-icons/io";

function Features() {
  return (
    <div>
      <div className="features flex flex-col justify-center items-center pt-8 pb-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="flex flex-col justify-center items-center p-5 text-center">
          <p className="section-title-font-size font-semibold p-5">
            Awesome Features
          </p>
          <p className="font-medium section-detail-small text-gray-500">
            Sed laoreet diam sagittis tempus convallis. Interdum et malesuada
            <br />
            fames ac ante ipsum primis in faucibus.
          </p>
        </div>
        <div className="header-buttons flex flex-col items-center justify-center mt-6 px-5 md:flex-row">
          <div className=" h-full md:w-4/12 lg:w-3/12 flex flex-col justify-evenly">
            <FeatureItem
              icon={FiSettings}
              title="Custom Shortcuts"
              detail="Semper a augue suscipit, luctus neque purus ipsum neque
                    dolor primis libero tempus velna culpa expedita."
              left
            />
            <FeatureItem
              icon={HiOutlineLockClosed}
              title="Secure Integrations"
              detail="Semper a augue suscipit, luctus neque purus ipsum neque
                    dolor primis libero tempus velna culpa expedita."
              left
            />
            <FeatureItem
              icon={BsChatRightText}
              title="Free Live Chat"
              detail="Semper a augue suscipit, luctus neque purus ipsum neque
                    dolor primis libero tempus velna culpa expedita."
              left
            />
          </div>

          <div className="hidden md:block md:w-4/12 md:mx-6 lg:w-3/12">
            <img src={center} alt="feature-phone" />
          </div>

          <div className=" h-full md:w-4/12 lg:w-3/12 flex flex-col justify-evenly">
            <FeatureItem
              icon={IoShareSocialOutline}
              title="Social Share"
              detail="Semper a augue suscipit, luctus neque purus ipsum neque
                    dolor primis libero tempus velna culpa expedita."
            />
            <FeatureItem
              icon={IoCopyOutline}
              title="Merge Files"
              detail="Semper a augue suscipit, luctus neque purus ipsum neque
                    dolor primis libero tempus velna culpa expedita."
            />
            <FeatureItem
              icon={IoMdAlarm}
              title="Action Reminder"
              detail="Semper a augue suscipit, luctus neque purus ipsum neque
                    dolor primis libero tempus velna culpa expedita."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
