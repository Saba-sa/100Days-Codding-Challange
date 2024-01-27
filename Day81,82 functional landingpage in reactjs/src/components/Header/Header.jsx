import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Move from "../Move";
import Mobnav from "./Mobnav.jsx";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [height, setheight] = useState(0);
  const resetHeight = () => {
    console.log("clicked");
    setheight(0);
    console.log("clicked", height);
  };
  return (
    <div>
      <>
        <Mobnav height={height} resetHeight={resetHeight} />
        <header className=" w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font z-40 fixed ">
          <div className="container flex max-w-lg  flex-wrap items-center justify-between  p-2 mx-auto sm:flex-row lg:mx-auto lg:max-w-6xl lg:justify-between md:max-w-4xl sm:max-w-8xl ">
            <nav className="flex flex-wrap w-4/12  items-center text-base lg:w-1/5 md:ml-0 md:w-1/5 md:max-w-1/2   lg:m-0 sm:max-w-44 ">
              <img src={logo} alt="logo of the companey" />
            </nav>
            <FaBars
              className="md:hidden sm:text-2xl cursor-pointer"
              onClick={() => setheight(40)}
            />
            <div className="hidden md:inline-flex  md:items-center md:m-auto md:h-full   lg:w-4/5  lg:inline-flex lg:bg-white lg:m-0 lg:justify-end xl:justify-end    ">
              <p
                className="mr-8 text-xl font-medium hover:text-gray-900 cursor-pointer"
                onClick={() => Move("hero")}
              >
                Home
              </p>
              <p
                className="mr-8 text-xl font-medium hover:text-gray-900 cursor-pointer"
                onClick={() => Move("advices")}
              >
                About
              </p>
              <p
                className="mr-8 text-xl font-medium hover:text-gray-900 cursor-pointer"
                onClick={() => Move("services")}
              >
                Services
              </p>
              <p
                className="mr-8 text-xl font-medium hover:text-gray-900 cursor-pointer"
                onClick={() => Move("testimonial")}
              >
                Testimonials
              </p>
              <p
                className="px-8 cursor-pointer py-3 text-sm   font-bold text-white uppercase transition-all duration-150 bg-orange-400 rounded shadow outline-none active:bg-orange-400 hover:shadow-md focus:outline-none ease"
                onClick={() => Move("contact")}
              >
                Contact us now
              </p>
            </div>
          </div>
        </header>
      </>
    </div>
  );
};

export default Header;
