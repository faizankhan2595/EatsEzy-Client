import React from "react";
import Nav from "../Nav/Nav";
import oval from "../../static/base.png";
import phone from "../../static/phone.png";
import playstore from "../../static/playstore.png";
import appstore from "../../static/appstore.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Header() {
  return (
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
      <Nav />
      <div className="flex flex-col justify-center items-center p-5 text-white text-center">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <p className="header-large font-semibold p-5">Made for Better</p>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateOnce={true}
          delay={500}
          animateIn="animate__fadeInUp"
        >
          <p className="header-small font-medium tracking-wide">
            Best landing for your App showcase. Follow other investors,
            <br />
            discover companies to believe in.
          </p>
        </AnimationOnScroll>
      </div>
      <AnimationOnScroll
        animateOnce={true}
        delay={800}
        animateIn="animate__fadeInUp"
      >
        <div className="header-buttons flex flex-col gap-3 items-center justify-center mt-6 md:flex-row">
          <img src={playstore} alt="Play Store" />
          <img src={appstore} alt="App Store" />
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
  );
}

export default Header;
