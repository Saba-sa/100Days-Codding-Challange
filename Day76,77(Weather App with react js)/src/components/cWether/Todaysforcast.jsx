import React from "react";
import { useAppStore } from "../../hooks/Context.jsx";
import DumpSaba from "../SingleForcast/SingleForcast.jsx";

const Todaysforcast = () => {
  const { wetherForcastHourly } = useAppStore();
  if (wetherForcastHourly !== null) {
    const todaysforcast = wetherForcastHourly.slice(0, 6);
    const tempData = todaysforcast.map((item) => {
      const { dt, dt_txt, weather, main } = item;
      const [, time] = dt_txt.split(" ");
      return <DumpSaba key={dt} time={time} weather={weather} main={main} />;
    });
    return (
      <>
        <div className="text-white flex justify-evenly p-8 flex-col bg-slate-700 rounded-2xl h-60 mb-4">
          <p className="mb-2 text-xl font-bold">Todaysforcast</p>
          <div className="flex items-center justify-evenly divide-x-2">
            {tempData}
          </div>
        </div>
      </>
    );
  }
};

export default Todaysforcast;
