import React from "react";

const Swetherdescription = ({ item }) => {
  const { icon, text, wether } = item;
  return (
    <div className="flex items-center w-1/2  gap-2 mb-3">
      <div className="icon text-4xl">{icon}</div>
      <div className="flex flex-col text-2xl ">
        <p className="text-gray-300">{text}</p>
        <p className="text-xl text-gray-200">{wether}</p>
      </div>
    </div>
  );
};

export default Swetherdescription;
