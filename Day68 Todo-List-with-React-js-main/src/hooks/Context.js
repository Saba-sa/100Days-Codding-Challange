import React, {
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";
const DataContext = createContext();

const Context = ({ children }) => {
  const [tasks, settasks] = useState([]);
  const [status, setstatus] = useState(true);
  const [editTask, seteditTask] = useState({});
  const [load, isLoading] = useState(false);

  useEffect(() => {
    if(tasks.length>0){
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);
  
  useEffect(() => {
    isLoading(true)
      let temp = JSON.parse(localStorage.getItem("tasks"))|| [];
      if(temp && temp.length>0){
        settasks(temp)
        isLoading(false)
      }
      else{
        isLoading(false)
      }
    }, []);



  return (
    <DataContext.Provider
      value={{ tasks, settasks, status, setstatus, editTask, seteditTask,load,isLoading }}
    >
      {children}
    </DataContext.Provider>
  );
};

export {Context}
export const useAppStore = () => {
  return useContext(DataContext);
};
