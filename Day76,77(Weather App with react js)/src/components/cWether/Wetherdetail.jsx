import React from "react";
import { useAppStore } from "../../hooks/Context";
import { FaThermometerThreeQuarters } from "react-icons/fa";
import { FaWind } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { MdWaterDrop } from "react-icons/md";
import Swetherdescription from "./Swetherdescription";
const Wetherdetail = () => {
  const { currentWether } = useAppStore();
  if (currentWether !== null) {
    const { wind, main } = currentWether;
    const detail = [
      {
        icon: <FaThermometerThreeQuarters />,
        text: "Temperature is",
        wether: main.temp,
      },
      {
        icon: <FaWind />,
        text: "Wind Speed",
        wether: wind.speed,
      },
      {
        icon: <FaSun />,
        text: "Humidity",
        wether: main.humidity,
      },
      {
        icon: <MdWaterDrop />,
        text: "Real Feel",
        wether: "30%",
      },
    ];
    let detailsShow = detail.map((item) => {
      return <Swetherdescription key={item.icon} item={item} />;
    });
    return (
      <div className=" bg-slate-700 text-white rounded-2xl h-60 p-9 flex flex-col  justify-center">
        <p className="font-bold text-xl mb-4">AIR CONDITIONS</p>
        <div className="flex flex-wrap ">{detailsShow}</div>
      </div>
    );
  }
};

export default Wetherdetail;
