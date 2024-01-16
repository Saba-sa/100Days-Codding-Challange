import React from "react";
import Todayforcast from "./Todaysforcast.jsx";
import Wetherdetail from "./Wetherdetail.js";
import ImageToShow from "./ImageTobeShown.jsx";
import { useAppStore } from "../../hooks/Context.jsx";
const Currentwether = () => {
  const { currentWether } = useAppStore();

  if (currentWether !== null) {
    const { city, main, weather } = currentWether;
    return (
      <div>
        <div className="flex text-white justify-between">
          <div className="flex flex-col">
            <div>
              <p className="font-bold mt-2">{city}</p>
              <p className="text-gray-500">{weather[0].description}</p>
              {/* <p className='text-gray-500'>{rain.1h}</p> */}
            </div>
            <p className="mt-12 text-4xl">{Math.ceil(main.temp)}°C</p>
          </div>
          <div className="image w-44">
            <ImageToShow condition={weather} />
          </div>
        </div>
        <Todayforcast />
        <Wetherdetail />
      </div>
    );
  } else {
    return (
      <div className="text-white w-full h-screen text-xl m-4">
        Getting your location...
      </div>
    );
  }
};

export default Currentwether;
