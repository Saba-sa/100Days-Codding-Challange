import React from "react";
import MsgPortion from "./MsgPortion.jsx";
import SingleContact from "./SingleContact.jsx";
import { Link } from "react-router-dom";
const AllContact = () => {
  return (
    <div className="flex flex-row h-screen antialiased text-gray-800">
      <div className="flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
        <div className="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center">
              <div className="text-xl font-semibold">Messages</div>
            </div>
          </div>
          <div className="mt-5">
            <ul className="flex flex-row items-center justify-between">
              <li>
                <span>All Conversations</span>
                <span className="absolute left-0 bottom-0 h-1 w-6 bg-indigo-800 rounded-full" />
              </li>
            </ul>
          </div>
          <div className="h-full overflow-hidden relative pt-2">
            <div className="flex flex-col divide-y h-full overflow-y-auto -mx-4">
              <SingleContact />
            </div>
            <Link to={"/add"}>
              <div className="absolute bottom-0 right-0 mr-2">
                <button className="flex items-center justify-center shadow-sm h-10 w-10 bg-red-500 text-white rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <MsgPortion />
    </div>
  );
};

export default AllContact;
