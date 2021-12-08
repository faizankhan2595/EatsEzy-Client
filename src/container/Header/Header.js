import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Nav from "../Nav/Nav";
import oval from "../../static/base.png";
import phone from "../../static/phone.png";
import clip from "../../static/video/bg-video.mp4";

function Header({ toggleOpen }) {
  return (
    <>
      <div className="header relative overflow-hidden">
        <video autoPlay muted loop className="h-full absolute object-cover">
          <source src={clip} type="video/mp4" />
        </video>
        <div className="relative bg-filter-red bg-opacity-90">
          <Nav toggleOpen={toggleOpen} />
          <div className="flex flex-col justify-center items-center p-5 text-white text-center">
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
              <p className="header-large font-semibold p-5">
                Getting more diners is Easy
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={true}
              delay={500}
              animateIn="animate__fadeInUp"
            >
              <p className="header-small max-w-screen-sm px-10 tracking-wide">
                Looking at more diners in your restaurant makes you feel happy?
                You are at the right place. Your passion to serve with our
                expertise to help you grow = EatsEzy.
              </p>
            </AnimationOnScroll>
          </div>
          <AnimationOnScroll
            animateOnce={true}
            delay={800}
            animateIn="animate__fadeInUp"
          >
            <div className="header-buttons flex items-center justify-center my-4 md:flex-row">
              <button className="bg-gray-50 py-4 px-10 rounded-full text-gray-800 font-medium hover:ring-offset-2 hover:ring-2">
                Enquire now
              </button>
            </div>
          </AnimationOnScroll>
          <div className="flex justify-center mt-8">
            <AnimationOnScroll
              animateOnce={true}
              delay={500}
              animateIn="animate__fadeInUp"
            >
              <img src={phone} alt="landing-phone" />
            </AnimationOnScroll>
          </div>
        </div>
        <div className="absolute bottom-0">
          <img src={oval} alt="background" />
        </div>
      </div>
    </>
  );
}

export default Header;
