import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  function usePathname() {
    const pathname = window.location.pathname;
    return pathname;
  }

  return (
    <div>
      <nav className="absolute bg-transparent top-0 left-0 right-0 z-50 md:p-8 md:pt-4 py-8 pr-8 pl-3">
        <div className="flex  flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link to="/">
              {" "}
              {/* Use "to" instead of "href" */}
              <div className="pr-4  xl:px-11">
                <img
                  src={assets.navbar_logo}
                  alt="Logo"
                  className="h-[4rem]"
                  width={70}
                  height={70}
                />
              </div>
            </Link>

            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                &#9776;
              </button>
            </div>
          </div>
          <div
            className={`lg:flex ${
              toggle
                ? "fixed top-0 left-0 flex-row flex justify-center items-center w-[100vw] bg-[#000000ff] h-[100vh]  py-4"
                : "hidden"
            } lg:items-center`}
          >
            <ul
              className={`${
                toggle
                  ? "flex-col justify-center text-center gap-8 md:gap-8"
                  : "flex-row"
              } flex justify-center items-center gap-4 md:gap-16 font-semibold text-white text-left text-[1.25rem] lg:text-[1.15rem] lg:mr-5`}
            >
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/sponsors">Sponsors</Link>
              <a
                href="https://drive.google.com/file/d/1DvWKw2UYGOArsBhXi2onB_c9Ew73e0U1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white"
              >
                Brochure
              </a>
              <a
                href="https://maitri.bmu.edu.in/asd_EventPublicUserMaster.htm?eventID=23"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-900 py-1 px-4 text-white rounded-xl bg-blue-900 transition-all duration-300 ease-in-out cursor-pointer hover:bg-transparent hover:text-white"
              >
                Register
              </a>
            </ul>
            <div
              className={
                toggle
                  ? "absolute top-[2rem] right-[2rem] w-[3rem] h-[3rem] rounded-full flex justify-center items-center text-white cursor-pointer bg-[#c3c3c364]"
                  : "hidden"
              }
              onClick={toggleMenu}
            >
              X
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
