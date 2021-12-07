import { useState, useEffect } from "react";
import { Footer } from "./container/Footer";
import Header from "./container/Header/Header";
import NavPage from "./container/Nav/NavPage";
import "animate.css/animate.min.css";
import Features from "./container/Features/Features";
import Work from "./container/Work/Work";
import ClientReview from "./container/ClientReview/ClientReview";
import TimeSchedule from "./container/TimeSchedule/TimeSchedule";
import Newsletter from "./container/Newsletter/Newsletter";
import FAQ from "./container/FAQ/FAQ";
import Contact from "./container/Contact/Contact";
import AppScreenShots from "./container/AppScreenShots/AppScreenShots";
import { useWindowPosition } from "./utils";
import NavDropdown from "./container/Nav/NavDropdown";

// const dataproperty = {
//   videoURL: "https://www.youtube.com/watch?v=mqEeWiRwv0k",
//   mobileFallbackImage:
//     "https://www.athenastudio.co/themes/naxos-wp/wp-content/uploads/2021/05/video-bg.jpg",
//   containment: "#home",
//   autoPlay: true,
//   showControls: false,
//   showYTLogo: false,
//   mute: true,
//   loop: true,
//   startAt: 0,
//   stopAt: 0,
//   opacity: 1,
//   vol: 50,
// };

function App() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  const showNav = useWindowPosition() >= 100;

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "EatsEzy";

    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <>
      <div className="h-screen w-full relative bg-gray-100">
        {open && (
          <div className="fixed top-0 left-0 w-screen h-screen z-10 shadow-md bg-white">
            <NavPage toggleOpen={toggleOpen} />
          </div>
        )}
        {showNav && !open && (
          <div className="fixed top-0 w-full z-10 shadow-md">
            <NavDropdown toggleOpen={toggleOpen} />
          </div>
        )}
        <div id="home">
          <Header open={open} toggleOpen={toggleOpen} />
        </div>
        <div id="feature">
          <Features />
          <Work />
          <TimeSchedule />
          <ClientReview />
        </div>
        <div id="screenshot">
          <AppScreenShots />
        </div>
        <div id="support">
          <FAQ />
          <Newsletter />
        </div>
        <div id="contact">
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
