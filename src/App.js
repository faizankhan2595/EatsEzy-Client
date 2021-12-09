import { useState, useEffect } from "react";
import "animate.css/animate.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import { HOME, PRIVACY } from "./routes.constant";

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
