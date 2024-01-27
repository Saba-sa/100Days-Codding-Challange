import React, { useState, useEffect } from "react";
import Move from "../Move";
import { RxCross1 } from "react-icons/rx";
import OverLay from "../OverLay/OverLay";

const Mobnav = ({ height, resetHeight }) => {
  const [overlay, setoverlay] = useState(false);
  useEffect(() => {
    if (height > 0) {
      setoverlay(true);
    } else {
      setoverlay(false);
    }
  }, [height]);
  return (
    <>
      {overlay && <OverLay />}
      <div
        className={`transition-all flex flex-col items-end gap-4 justify-center overflow-hidden  fixed top-0 w-full  bg-white z-50 h-[${height}%]`}
      >
        <RxCross1
          onClick={resetHeight}
          className="mt-8 cursor-pointer font-bold text-2xl"
        />
        <div className="mb-8 flex items-center justify-start w-full flex-col gap-8">
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
            className="px-8 py-3 text-sm   font-bold text-white uppercase transition-all duration-150 bg-orange-400 rounded shadow outline-none active:bg-orange-400 hover:shadow-md focus:outline-none ease"
            onClick={() => Move("contact")}
          >
            Planifiez un call
          </p>
        </div>
      </div>
    </>
  );
};

export default Mobnav;
