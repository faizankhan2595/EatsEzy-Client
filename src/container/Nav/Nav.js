import React, { useState } from "react";
import { ReactComponent as Logo } from "../../static/logo.svg";

function NavLink(props) {
  return (
    <p
      className=" px-4 py-2 mt-2 text-2xl text-white md:text-lg md:mt-0 hover:text-white focus:outline-none focus:shadow-outline cursor-pointer "
      {...props}
    />
  );
}

function NavPage({ children }) {
  return (
    <div className="h-full pt-16 pb-10 px-2 flex flex-col flex-grow justify-start items-center gap-2 md:hidden">
      {children}
    </div>
  );
}

function Nav({ isLoggedIn = true }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    console.log("hello");
    setOpen(!open);
  };

  return (
    <>
      <div className=" w-full bg-transparent">
        <div className="h-full flex flex-col p-5 mx-auto  md:w-full md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 ">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <a
              href="/"
              className=" text-lg font-bold tracking-tighter  transition duration-500
                    ease-in-out transform tracking-relaxed lg:px-8 "
            >
              <Logo />
            </a>
            <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline text-white">
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
                {open ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    onClick={toggleOpen}
                  ></path>
                ) : (
                  <path
                    x-show="!open"
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                    onClick={toggleOpen}
                  ></path>
                )}
              </svg>
            </button>
          </div>
          <nav className="flex-col items-center flex-grow hidden pb-4 border-primary-red md:pb-0 md:flex md:justify-end md:flex-row lg:border-l-2 lg:pl-2">
            <div className="mr-3 flex flex-row">
              <NavLink>About</NavLink>
              <NavLink>Features</NavLink>
              <NavLink>Screenshot</NavLink>
              <NavLink>Support</NavLink>
              <NavLink>Contact</NavLink>
            </div>
          </nav>
          {open ? (
            <NavPage>
              <NavLink>About</NavLink>
              <NavLink>Contact</NavLink>
            </NavPage>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Nav;
