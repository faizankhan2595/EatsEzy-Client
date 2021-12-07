import React from "react";
import Card from "./Card";
import { FiDatabase } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { RiPenNibLine } from "react-icons/ri";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Work() {
  return (
    <div className="card-section flex flex-col justify-evenly items-center m-10 py-5">
      <div className="card-section-header max-w-screen-sm flex flex-col justify-center items-center ">
        <h1 className="section-title-font-size font-semibold py-3 text-center">
          How it Works?
        </h1>
        <div className="section-detail-small text-gray-500 text-center">
          We are a made in Singapore for Singapore. We saw the same problems
          with multiple restaurants and we want to fix it for all.
        </div>
      </div>
      <div className="card-list my-12 max-w-6xl gap-10 grid grid-cols-1 justify-items-stretch items-stretch md:grid-cols-3">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <Card
            icon={FiDatabase}
            title="Your Data in Cloud"
            subtitle="Centralised bookings"
            detail="Get all your bookings in once place, from EatsEzy guest app, walking, website or infact on call bookings. Leverage the power of cloud with the platform."
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
            subtitle="Local Support"
            detail="Facing a problem? Give us a call. We are a local company and we will be always there to help our partners."
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
            subtitle="Easy to use"
            detail="The UX has been planned to make it super easy for restaurant partners to easily operate the app and experience the digital transformation of their business."
          />
        </AnimationOnScroll>
      </div>
    </div>
  );
}

export default Work;
