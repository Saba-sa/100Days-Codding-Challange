import React, { useState, useEffect } from "react";
import { useAppStore } from "../hooks/Context";
import { useNavigate, useSearchParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import '../App.css';

const Action = () => {
  const [searchParams] = useSearchParams()
  const navigate=useNavigate()
  const idFromUrl=searchParams.get("id")
  const { tasks, settasks } = useAppStore();

  const [item, setItem] = useState("");
  const [error, setErr] = useState(false);

  useEffect(() => {
    if (idFromUrl) {
      const tempData = tasks.find(task => task.id.toString() === idFromUrl);
      setItem(tempData ? tempData.task : "");
    } 
  }, [tasks, idFromUrl]);

  
  const updatedItem = () => {
    if (item.length > 0) {
      let tempItem = {
        id: idFromUrl,
        task: item,
        status: false
      };
      let temp = tasks.map(i => (i.id).toString() === idFromUrl ? tempItem : i);
      settasks(temp);
      setItem('');
      navigate('/');
    } else {
      setErr(true);
    }
  };
  const addItem = () => {
    if (item.length !== 0) {
      settasks(prevTasks => {
        const newTask = { id: uuidv4().slice(0,4), task: item, status: false };
        return [...prevTasks, newTask];
      });
      navigate('/');
      setItem("");
      setErr(false);
    } else {
      setErr(true);
    }
  };

  useEffect(() => {
    if(item.length > 0) setErr(false);
  }, [item]);

  const handleClick = () => {
    if (idFromUrl) {
      updatedItem();
    } else {
      addItem();
    }
  };

  return (
    <div className="bg-gray-200 flex items-center justify-center">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-xl font-semibold mb-4">
            {idFromUrl ? "Edit Task" : "Add Any Task"}
          </h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Task..."
              className={`text-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500  ${error ? "bg-red" : "nothing"}`}
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={handleClick}
          >
            {idFromUrl ? "Update" : "Add Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Action;
