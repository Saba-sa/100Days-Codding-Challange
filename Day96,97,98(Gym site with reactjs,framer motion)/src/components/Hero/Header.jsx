import React, { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

import "./Header.scss";
const Header = () => {
  const [showMenu, setshowMenu] = useState(false);
  const [showwidth, setshowWidth] = useState(1024);
  useEffect(() => {
    setshowWidth(window.innerWidth);
  }, []);
  return (
    <div className="header">
      <img
        src={require("../../assets/logo.png")}
        alt="logo of the companey"
        className="logo"
      />
      <div className="bar">
        {showMenu ? (
          <IoCloseSharp onClick={() => setshowMenu(!showMenu)} />
        ) : (
          <FaBarsStaggered onClick={() => setshowMenu(!showMenu)} />
        )}
      </div>
      <ul className={`${showMenu && showwidth <= 640 && "showMenu"}`}>
        <li>
          <Link
            to="home"
            span={true}
            smooth={true}
            onClick={() => setshowMenu(!showMenu)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="programs"
            span={true}
            smooth={true}
            onClick={() => setshowMenu(!showMenu)}
          >
            Programs
          </Link>
        </li>
        <li>
          <Link
            to="reasons"
            span={true}
            smooth={true}
            onClick={() => setshowMenu(!showMenu)}
          >
            Why us
          </Link>
        </li>
        <li>
          <Link
            to="plans"
            span={true}
            smooth={true}
            onClick={() => setshowMenu(!showMenu)}
          >
            Plans
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            span={true}
            smooth={true}
            onClick={() => setshowMenu(!showMenu)}
          >
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
