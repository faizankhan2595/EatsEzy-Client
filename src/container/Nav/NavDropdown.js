import React from "react";
import { ReactComponent as Logo } from "../../static/textlogored.svg";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { HOME } from "./../../routes.constant";

function NavDropdown({ toggleOpen }) {
  const location = useLocation();
  return (
    <>
      <div className=" w-full bg-white">
        <div className="h-full p-5 mx-auto md:px-8 md:py-5 md:w-full md:items-center md:justify-around md:flex-row">
          <div className="flex flex-row">
            <div className="flex flex-row mx-3 flex-grow items-center justify-between lg:justify-start">
              <Link
                to="/"
                className=" text-lg font-bold tracking-tighter  transition duration-500
                    ease-in-out transform tracking-relaxed lg:px-8 py-1.5 "
              >
                <Logo />
              </Link>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={toggleOpen}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-8 h-8"
                >
                  (
                  <path
                    x-show="!open"
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <nav className="text-gray-900 text-opacity-90 font-medium tracking-wide flex-grow hidden pb-4 md:pb-0 md:flex md:flex-nowrap md:justify-end md:items-center md:flex-row lg:px-2">
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
        </div>
      </div>
    </>
  );
}

function CustomNavlink(props) {
  return (
    <div className="px-4 lg:px-8 py-2">
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

export default NavDropdown;
