import React from "react";
import { useAppStore } from "../hooks/Context";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowFromRight, BiTrash, BiEditAlt } from "react-icons/bi";
import Loading from './Loading'
const Display = () => {
  const { tasks, settasks,load } = useAppStore();
  const navigate = useNavigate();

  const changeStatus = (id) => {
    settasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, status: !task.status };
        } else {
          return task;
        }
      });
      return updatedTasks;
    });
  };

  const handleDel = (id) => {
    const temp = tasks.filter((i) => i.id !== id);
    settasks(temp);
  };

  return (
    <div className="center pt-16">
      <div className="flex flex-center ">
            <BiArrowFromRight onClick={() => navigate("/action")}  className="text-2xl"/>
        <h3 className="text-2xl">Your Tasks are:</h3>
      </div>
      {
        load?
        <Loading/>
        :
      <section className="bg-blueGray-50 ">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-8">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0"></div>

            <div className="block w-full overflow-x-auto p-12 ">
              <table className="items-center bg-transparent w-full border-collapse ">
                <tbody className="text-2xl">
                  {tasks.length > 0 ? (
                    tasks.map((i) => {
                      const { id, task, status } = i;
                      return (
                        <tr key={id}>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
						  <input
                              type="checkbox"
                              name="status"
                              value={status}
                              checked={status}
                              onChange={() => changeStatus(id)}
                            />
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4 text-lg">
                            <p className={status?"text-gray-400 line-through":"text-black "}
                              onClick={() => changeStatus(id)}
                            >
                              {task}
                            </p>
							</td>
							<td>
                            <div className="btns">
                              <Link to={`action/?id=${id}`}>
                                <button disabled={status} className={status?"text-gray-400":"text-black"}>
                                  <BiEditAlt />
                                </button>
                              </Link>
                              <button
                                onClick={() => handleDel(id)}
                                disabled={status}
                                className={status?"text-gray-400":"text-black"}>
                                <BiTrash />
                              </button>
                            </div>
							</td>
                        </tr>
                      );
                    })
                  ) : (
                    
                    <tr><td>No Data ....</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>}
    </div>
  );
};

export default Display;
