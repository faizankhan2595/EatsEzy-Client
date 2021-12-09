import React, { useState } from "react";
import horizontalmobile from "../../static/horizontalmobile.png";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import mailbox from "../../static/mailbox.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import { PRIVACY } from "../../routes.constant";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    console.log(email);
  };

  return (
    <div className=" md:mt-10">
      <Parallax bgImage={mailbox} bgImageAlt="mail box" strength={-80}>
        <div className="flex flex-col justify-center bg-black bg-opacity-75">
          <div className="relative flex justify-center items-center px-10">
            <div className="absolute h-1/2 top-0 left-0 right-0 bg-white"></div>
            <div className="relative max-w-screen-sm mx-auto">
              <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp">
                <img src={horizontalmobile} alt="mobile" />
              </ScrollAnimation>
            </div>
          </div>
          <div className="relative max-w-screen-sm mx-auto mb-12 text-white">
            <div className="mx-10">
              <div className="py-6">
                <h1 className="section-title-font-size font-semibold py-3 text-center">
                  Subscribe To Newsletter
                </h1>
                <div className="screenshot-small  text-center">
                  Do not miss on important updates. Share your email below so we
                  can keep you posted on the latest updates and ongoing
                  promotion offers
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 my-3 mb-6">
                  <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="appearance-none  border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-card-red"
                  />
                  <button
                    type="submit"
                    className="rounded cursor-pointer font-medium w-full p-3 leading-tight transition-colors duration-300 focus:outline-none bg-card-red transform hover:bg-button-hvr"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <div className="text-sm mt-6 lg:mt-10 mx-4 font-semibold text-white text-center">
                We don’t share your personal information with anyone or company.
                Check out our{" "}
                <Link to={PRIVACY}>
                  <span className="text-card-red">Privacy Policy</span>
                </Link>{" "}
                for more information.
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Newsletter;
