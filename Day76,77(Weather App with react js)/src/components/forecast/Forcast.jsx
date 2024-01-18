import React from "react";
import { useAppStore } from "../../hooks/Context";
import Sforcast from "./Sforcast";
const Forcast = () => {
  const { wetherForcast } = useAppStore();
  if (wetherForcast !== null) {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const groupedByDate = {};
    wetherForcast.list.forEach((item) => {
      const [forecastDate, time] = item.dt_txt.split(" ");
      const date = new Date(forecastDate);
      const day = weekday[date.getDay()];

      if (!groupedByDate[day]) {
        groupedByDate[day] = [];
      }

      groupedByDate[day].push(item);
    });
    const renderForecast = Object.keys(groupedByDate).map((day) => {
      const dailyForecast = groupedByDate[day];
      const firstItem = { ...dailyForecast[0], day: day };
      return firstItem;
    });

    let display = renderForecast.map((item) => {
      return (
        <Sforcast key={item.dt} item={item} groupedByDate={groupedByDate} />
      );
    });

    return (
      <div className="text-white p-8 flex-col bg-slate-700 rounded-2xl h-full mb-4">
        7-DAY FORECAST
        <div className="flex flex-col  divide-y-2">{display}</div>
      </div>
    );
  }
};

export default Forcast;
