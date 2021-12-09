import React from "react";
import { ReactComponent as Logo } from "../../static/logo.svg";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, Link } from "react-router-dom";
import { HOME } from "./../../routes.constant";

function NavPage({ toggleOpen }) {
  const location = useLocation();
  return (
    <div className="w-full px-8 py-5">
      <div className="flex flex-row justify-between">
        <a
          href="/"
          className=" text-lg font-bold tracking-tighter  transition duration-500
                    ease-in-out transform tracking-relaxed lg:px-8 "
        >
          <Logo />
        </a>
        <button
          className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
          onClick={toggleOpen}
        >
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <nav className="text-gray-600 font-medium tracking-wide my-8">
        {location.pathname === HOME ? (
          <>
            <CustomNavlink to="home">Home</CustomNavlink>
            <CustomNavlink to="feature">Features</CustomNavlink>
            <CustomNavlink to="review">Reviews</CustomNavlink>
            <CustomNavlink to="support">Support</CustomNavlink>
            <CustomNavlink to="contact">Contact</CustomNavlink>
          </>
        ) : (
          <CustomNavlink to={HOME} link>
            Home
          </CustomNavlink>
        )}
      </nav>
    </div>
  );
}

function CustomNavlink(props) {
  return (
    <div className="py-3">
      {!props.link ? (
        <ScrollLink
          to={props.to}
          activeClass="navlink-active"
          spy={true}
          smooth={true}
          offset={-80}
          className="cursor-pointer leading-3 underline-effect light-nav transition duration-300 transform hover:text-primary-red"
        >
          {props.children}
        </ScrollLink>
      ) : (
        <Link
          to={props.to}
          className="cursor-pointer leading-3 underline-effect light-nav transition duration-300 transform hover:text-primary-red"
        >
          {props.children}
        </Link>
      )}
    </div>
  );
}

export default NavPage;
