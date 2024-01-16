import React from "react";
import { useAppStore } from "../../hooks/Context";
const Forcast = () => {
  const {
    wetherForcast,
    currentWether,
    setcurrentWether,
    setwetherForcastHourly,
  } = useAppStore();
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

    // Group items by date
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
      const { dt, weather, day } = item;
      return (
        <div
          key={dt}
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
