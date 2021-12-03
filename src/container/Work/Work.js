import React from "react";
import Card from "./Card";
import { FiDatabase } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { RiPenNibLine } from "react-icons/ri";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Work() {
  return (
    <div className="card-section flex flex-col justify-evenly items-center m-10 py-5">
      <div className="card-section-header max-w-2xl flex flex-col justify-center items-center ">
        <h1 className="section-title-font-size font-semibold py-3 text-center">
          How it Works?
        </h1>
        <div className="section-detail-small text-gray-500 text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo justo. Nullam dictum felis eu pede mollis pretium.
        </div>
      </div>
      <div className="card-list my-12 max-w-6xl gap-10 flex flex-col justify-evenly items-center md:flex-row">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <Card
            icon={FiDatabase}
            title="Your Data in Cloud"
            detail="Lorem ipsum dolor sit amet, conseda adipiscing elit. Aenean commodo ligula eget dolor massa."
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          delay={300}
          animateOnce={true}
          animateIn="animate__fadeInUp"
        >
          <Card
            icon={BiSupport}
            title="24/7 Support"
            detail="Lorem ipsum dolor sit amet, conseda adipiscing elit. Aenean commodo ligula eget dolor massa."
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          delay={600}
          animateOnce={true}
          animateIn="animate__fadeInUp"
        >
          <Card
            icon={RiPenNibLine}
            title="Exclusive Design"
            detail="Lorem ipsum dolor sit amet, conseda adipiscing elit. Aenean commodo ligula eget dolor massa."
          />
        </AnimationOnScroll>
      </div>
    </div>
  );
}

export default Work;
