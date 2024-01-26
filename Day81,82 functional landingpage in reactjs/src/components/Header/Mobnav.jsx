import React from "react";
import Move from "../Move";
import { RxCross1 } from "react-icons/rx";

const Mobnav = ({ height, resetHeight }) => {
  return (
    <div
      className={`flex flex-col items-center justify-between overflow-hidden  absolute w-full h-${height} bg-white `}
    >
      <RxCross1 onClick={resetHeight} className=" cursor-pointer" />
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
      <p className="px-8 py-3 text-sm   font-bold text-white uppercase transition-all duration-150 bg-orange-400 rounded shadow outline-none active:bg-orange-400 hover:shadow-md focus:outline-none ease">
        Planifiez un call
      </p>
    </div>
  );
};

export default Mobnav;
