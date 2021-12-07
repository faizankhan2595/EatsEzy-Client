import React from "react";
import { ReactComponent as Logo } from "../../static/logo.svg";
import { Link } from "react-scroll";

function Nav({ toggleOpen }) {
  return (
    <>
      <div className=" w-full bg-transparent">
        <div className="h-full max-w-screen-xl p-5 mx-auto md:px-8 md:py-10 md:w-full md:items-center md:justify-around md:flex-row">
          <div className="flex flex-row">
            <div className="flex flex-row mx-3 flex-grow items-center justify-between lg:justify-start">
              <Link
                to="header"
                className=" text-lg font-bold tracking-tighter  transition duration-500
                    ease-in-out transform tracking-relaxed lg:px-8 "
              >
                <Logo />
              </Link>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline text-white"
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
            <nav className="text-white text-opacity-90 font-medium tracking-wide hidden pb-4 lg:flex-grow md:pb-0 md:flex md:flex-nowrap md:justify-end md:items-center md:flex-row lg:pl-2">
              <div className="py-2 md:px-5 lg:px-8">
                <Link
                  to="home"
                  activeClass="navlink-active"
                  spy={true}
                  smooth={true}
                  className="cursor-pointer underline-effect"
                >
                  Home
                </Link>
              </div>
              <div className="py-2 md:px-5 lg:px-8">
                <Link
                  to="feature"
                  activeClass="navlink-active"
                  spy={true}
                  smooth={true}
                  offset={-87}
                  className="cursor-pointer underline-effect"
                >
                  Features
                </Link>
              </div>
              <div className="py-2 md:px-5 lg:px-8">
                <Link
                  to="screenshot"
                  activeClass="navlink-active"
                  spy={true}
                  smooth={true}
                  offset={-87}
                  className="cursor-pointer underline-effect"
                >
                  Screenshot
                </Link>
              </div>
              <div className="py-2 md:px-5 lg:px-8">
                <Link
                  to="support"
                  activeClass="navlink-active"
                  spy={true}
                  smooth={true}
                  offset={-87}
                  className="cursor-pointer underline-effect"
                >
                  Support
                </Link>
              </div>
              <div className="py-2 md:px-5 lg:px-8">
                <Link
                  to="contact"
                  activeClass="navlink-active"
                  spy={true}
                  smooth={true}
                  offset={-87}
                  className="cursor-pointer underline-effect"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
