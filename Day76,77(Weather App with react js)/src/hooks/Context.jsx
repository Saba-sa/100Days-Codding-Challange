import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import {
  GEO_API_URL,
  geoApiOptions,
  Weather_API_Key,
  Weather_API_URL,
} from "../Api";

const DataContext = createContext();

const Context = ({ children }) => {
  const [currentWether, setcurrentWether] = useState(null);
  const [wetherForcast, setwetherForcast] = useState(null);
  const [wetherForcastHourly, setwetherForcastHourly] = useState(null);
  const [searchChange, setSearchChange] = useState("");
  const [status, setStatus] = useState(false);
  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const result = await response.json();
      return {
        options: result.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name},${city.country}`,
          };
        }),
      };
    } catch (error) {
      console.error("we got an error:", error);
    }
  };
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const currentWeatherFetch = fetch(
          `${Weather_API_URL}/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${Weather_API_Key}&units=metric`
        );
        const forcastWeatherFetched = fetch(
          `${Weather_API_URL}/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${Weather_API_Key}&units=metric`
        );
        Promise.all([currentWeatherFetch, forcastWeatherFetched])
          .then(async (response) => {
            const wetherResponse = await response[0].json();
            const forcastResponse = await response[1].json();

            setcurrentWether({
              city: `${wetherResponse.name} ${wetherResponse.sys.country}`,
              ...wetherResponse,
            });
            setwetherForcast({ city: wetherResponse.name, ...forcastResponse });
            setwetherForcastHourly(forcastResponse.list);
            setStatus(false);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  }, []);

  useEffect(() => {
    const handleOnsearchChange = (data) => {
      const [latitude, longitude] = data.value.split("");
      const currentWeatherFetch = fetch(
        `${Weather_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${Weather_API_Key}&units=metric`
      );
      const forcastWeatherFetched = fetch(
        `${Weather_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${Weather_API_Key}&units=metric`
      );
      Promise.all([currentWeatherFetch, forcastWeatherFetched])
        .then(async (response) => {
          const wetherResponse = await response[0].json();
          const forcastResponse = await response[1].json();

          setcurrentWether({ city: data.label, ...wetherResponse });
          setwetherForcast({ city: data.label, ...forcastResponse });
          setwetherForcastHourly(forcastResponse.list);
          setStatus(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    Object.keys(searchChange).length > 0 && handleOnsearchChange(searchChange);
  }, [searchChange]);
  return (
    <DataContext.Provider
      value={{
        searchChange,
        setSearchChange,
        setwetherForcast,
        loadOptions,
        currentWether,
        setcurrentWether,
        wetherForcast,
        status,
        setStatus,
        wetherForcastHourly,
        setwetherForcastHourly,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { Context };
export const useAppStore = () => {
  return useContext(DataContext);
};
