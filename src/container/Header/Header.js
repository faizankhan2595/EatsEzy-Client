import React from "react";
import Nav from "../Nav/Nav";
import oval from "../../static/base.png";
import phone from "../../static/phone.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Header({ toggleOpen }) {
  return (
    <>
      <div className="header relative overflow-hidden">
        {/* <div class="absolute inset-0 video-background">
        <div class="video-foreground">
          <iframe
            src={
              "https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ"
            }
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div> */}
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
            <button
              className="btn-hover color-1 py-5 px-10 rounded-full text-white font-medium
            "
            >
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
        <div className="absolute bottom-0">
          <img src={oval} alt="background" />
        </div>
      </div>
    </>
  );
}

export default Header;
