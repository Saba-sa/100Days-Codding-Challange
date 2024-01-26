import React from "react";

const Floating = ({ item }) => {
  const { icon, text, positionX, positionY } = item;
  console.log(positionX);
  console.log(positionY);
  return (
    <div
      className={`bg-orange-50 p-3 w-2/3 absolute z-8 top-[${positionY}px] left-[${positionX}px] rounded-full flex items-center`}
      style={{ zIndex: 1 }}
    >
      <img src={icon} alt="icon" className="ml-2" />
      <p>{text}</p>
    </div>
  );
};

export default Floating;
