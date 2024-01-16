import React from "react";

const Load = () => {
  return (
    <div
      className="relative  w-full h-full bg-slate-800 m-4 z-10"
      style={{ width: "150%" }}
    >
      <div className="absolute right-1/2  bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-slate-400 border-8 h-64 w-64"></div>
      </div>
    </div>
  );
};

export default Load;
