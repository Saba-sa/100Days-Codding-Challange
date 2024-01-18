import React from "react";
import { useAppStore } from "../../hooks/Context";

const Sforcast = ({ item, groupedByDate }) => {
  const { currentWether, setcurrentWether, setwetherForcastHourly } =
    useAppStore();
  const { weather, day } = item;
  return (
    <div
      className="flex justify-between items-center mt-6 cursor-pointer"
      onClick={() => {
        setcurrentWether({ ...currentWether, ...item });
        Object.keys(groupedByDate).map((i) => {
          if (day === i) {
            return setwetherForcastHourly(groupedByDate[i]);
          }
        });
      }}
    >
      <p>{day}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
        alt={weather[0].description}
      />
      <p>{weather[0].description}</p>
    </div>
  );
};

export default Sforcast;
