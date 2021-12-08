import { useState, useEffect } from "react";
import "animate.css/animate.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import { HOME, PRIVACY } from "./routes.constant";

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

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "EatsEzy";

    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={HOME}
            exact
            element={<HomePage toggleOpen={toggleOpen} open={open} />}
          />
          <Route
            path={PRIVACY}
            element={<PrivacyPage toggleOpen={toggleOpen} open={open} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
