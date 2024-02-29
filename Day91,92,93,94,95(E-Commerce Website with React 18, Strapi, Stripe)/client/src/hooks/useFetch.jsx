import React, { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../utils/api";

const useFetch = (endpoints) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    makeApiCall();
  }, [endpoints]);

  const makeApiCall = async () => {
    const res = await fetchDataFromAPI(endpoints);
    setData(res.data);
  };
  return { data };
};

export default useFetch;
