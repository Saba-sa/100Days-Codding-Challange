import React, { useState, createContext, useEffect } from 'react';

const dataContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(()=>{})
    const storedData = JSON.parse(localStorage.getItem('noteList')) || [];
    setData(storedData);
  }, []);

  useEffect(() => {
    if(data.length!==0){
      localStorage.setItem('noteList', JSON.stringify(data));
    }
  }, [data]);

  return (
    <dataContext.Provider value={{ data, setData }}>
      {children}
    </dataContext.Provider>
  );
};

export { Context, dataContext };
