import React, { useEffect } from "react";
import NavDropdown from "../container/Nav/NavDropdown";
import NavPage from "../container/Nav/NavPage";
import { Footer } from "../container/Footer";
import Privacy from "../container/Privacy/Privacy";

function PrivacyPage({ open, toggleOpen }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {open ? (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 shadow-md bg-white">
          <NavPage toggleOpen={toggleOpen} />
        </div>
      ) : (
        <div className="sticky top-0 w-full z-10 shadow-md">
          <NavDropdown toggleOpen={toggleOpen} />
        </div>
      )}
      <Privacy />
      <Footer />
    </div>
  );
}

export default PrivacyPage;
