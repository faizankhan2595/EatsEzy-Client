import { useEffect } from "react";
import { Footer } from "../container/Footer";
import Header from "../container/Header/Header";
import NavPage from "../container/Nav/NavPage";
import Features from "../container/Features/Features";
import Work from "../container/Work/Work";
import ClientReview from "../container/ClientReview/ClientReview";
import TimeSchedule from "../container/TimeSchedule/TimeSchedule";
import Newsletter from "../container/Newsletter/Newsletter";
import FAQ from "../container/FAQ/FAQ";
import Contact from "../container/Contact/Contact";
import AppScreenShots from "../container/AppScreenShots/AppScreenShots";
import NavDropdown from "../container/Nav/NavDropdown";
import { useWindowPosition } from "../utils";

function HomePage({ open, toggleOpen }) {
  const showNav = useWindowPosition() >= 100;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="relative bg-white">
        {open && (
          <div className="fixed top-0 left-0 w-screen h-screen z-10 shadow-md bg-white">
            <NavPage toggleOpen={toggleOpen} />
          </div>
        )}
        {showNav && !open && (
          <div className="fixed top-0 z-10 w-full shadow-md">
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

export default HomePage;
