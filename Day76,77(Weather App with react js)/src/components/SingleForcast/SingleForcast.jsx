import React from "react";

export default function SingleForcast({ time, weather, main }) {
  return (
    <div className="flex flex-col px-5">
      <p>{time}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
        alt="weather icon"
        className="w-full"
      />
      <p>{weather[0].main}</p>
      <p>Temp: {Math.floor(main.temp)}°C</p>
    </div>
  );
}
