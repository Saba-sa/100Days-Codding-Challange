import React from "react";

const Sidebar = ({ selectedTab, changeClickedValue }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: 280 }}
    >
      <span className="fs-4">Socail Media Example</span>
      <hr />
      <ul className="nav nav-pills  flex-column mb-auto">
        <li
          className="nav-item active  cursor-pointer"
          onClick={() => changeClickedValue("Home")}
        >
          <span
            className={`nav-link text-white  ${
              selectedTab === "Home" && "active"
            }`}
          >
            Home
          </span>
        </li>
        <li
          onClick={() => changeClickedValue("Create Post")}
          className="cursor-pointer  "
        >
          <span
            className={`nav-link text-white ${
              selectedTab !== "Home" && "active"
            }`}
          >
            Create Post
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
