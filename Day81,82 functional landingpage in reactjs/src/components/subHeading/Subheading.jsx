import React from "react";
import Line from "../../assets/svg/Line.svg";
const Subheading = ({ heading, subHeading }) => {
  return (
    <div className="inline-flex px-4 py-1.5 mx-auto w-full flex-col text-center ">
      <p className="font-semibold text-sm text-g uppercase  text-stone-400 mt-8">
        {subHeading}
      </p>
      <p className="text-2xl font-bold  text-g uppercase w-full">{heading}</p>
      <img src={Line} alt="line" className="h-0.5 mt-1" />
    </div>
  );
};

export default Subheading;
