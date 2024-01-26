import React from "react";

const Detailshow = ({ item }) => {
  const { id, icon, heading, para } = item;
  if (id % 2 === 0) {
    return (
      <div className="p-6 relative  rounded-xl text-black ">
        <img src={icon} alt="img" className="bg-orange-400 p-3 rounded-sm " />
        <h3 className="mt-8 text-lg font-semibold ">{heading}</h3>
        <p className="mt-4 text-base ">{para}</p>
      </div>
    );
  } else {
    return (
      <div className=" p-6 relative bg-orange-400 shadow-lg rounded-xl text-white ">
        <img src={icon} alt="img" className="bg-orange-300 p-3 rounded-sm " />
        <h3 className="mt-8 text-lg font-semibold ">{heading}</h3>
        <p className="mt-4 text-base ">{para}</p>
      </div>
    );
  }
};

export default Detailshow;
