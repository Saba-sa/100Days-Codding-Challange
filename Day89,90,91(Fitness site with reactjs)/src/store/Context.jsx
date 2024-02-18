import React, { createContext, useContext, useState } from "react";
import { FetchData, options } from "../utils/FetchData";

const Store = createContext();
export const Context = ({ children }) => {
  const [loading, setLoading] = useState("");
  const [err, setErr] = useState(false);

  const get_Result = async (url, setTo) => {
    const results = await FetchData(url, options);
    setTo(results);
  };

  return <Store.Provider value={{ get_Result }}>{children}</Store.Provider>;
};

export const useAppStore = () => {
  return useContext(Store);
};
