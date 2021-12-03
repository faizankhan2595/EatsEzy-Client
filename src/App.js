import { Footer } from "./container/Footer";
import Header from "./container/Header/Header";
import "animate.css/animate.min.css";
import Features from "./container/Features/Features";
import Work from "./container/Work/Work";
import ClientReview from "./container/ClientReview/ClientReview";
import TimeSchedule from "./container/TimeSchedule/TimeSchedule";
import Newsletter from "./container/Newsletter/Newsletter";
import FAQ from "./container/FAQ/FAQ";
import Contact from "./container/Contact/Contact";
import AppScreenShots from "./container/AppScreenShots/AppScreenShots";

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
  return (
    <>
      <div className="bg-video"></div>
      <div className="h-screen w-full bg-gray-100">
        <div className="sticky top-0"></div>

        <Header />
        <Features />
        <Work />
        <TimeSchedule />
        <ClientReview />
        <AppScreenShots />
        <FAQ />
        <Newsletter />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
