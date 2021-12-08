import React from "react";
import { ReactComponent as Logo } from "../../static/logo.svg";
import { Link as ScrollLink } from "react-scroll";

function NavPage({ toggleOpen }) {
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
        <div className="py-3">
          <ScrollLink
            to="home"
            activeClass="navlink-active"
            spy={true}
            smooth={true}
            onClick={toggleOpen}
            className="cursor-pointer underline-effect"
          >
            Home
          </ScrollLink>
        </div>
        <div className="py-3">
          <ScrollLink
            to="feature"
            activeClass="navlink-active"
            spy={true}
            smooth={true}
            offset={-80}
            onClick={toggleOpen}
            className="cursor-pointer underline-effect"
          >
            Features
          </ScrollLink>
        </div>
        <div className="py-3">
          <ScrollLink
            to="screenshot"
            activeClass="navlink-active"
            spy={true}
            smooth={true}
            onClick={toggleOpen}
            offset={-80}
            className="cursor-pointer underline-effect"
          >
            Screenshot
          </ScrollLink>
        </div>
        <div className="py-3">
          <ScrollLink
            to="support"
            activeClass="navlink-active"
            spy={true}
            smooth={true}
            onClick={toggleOpen}
            offset={-80}
            className="cursor-pointer underline-effect"
          >
            Support
          </ScrollLink>
        </div>
        <div className="py-3">
          <ScrollLink
            to="contact"
            activeClass="navlink-active"
            spy={true}
            smooth={true}
            onClick={toggleOpen}
            offset={-80}
            className="cursor-pointer underline-effect"
          >
            Contact
          </ScrollLink>
        </div>
      </nav>
    </div>
  );
}

export default NavPage;
