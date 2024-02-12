import React, { useState } from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          src={
            menuOpen
              ? require("../../assets/nav/closeIcon.png")
              : require("../../assets/nav/menuIcon.png")
          }
          alt="menu button"
          className={styles.menuBtn}
          onClick={() => setmenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.meuOpen}`}
          onClick={() => setmenuOpen(!menuOpen)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experence">Experence</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contac">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
