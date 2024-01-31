import React from "react";
import style from "./Book.module.css";
import Pages from "../Pages/Pages.jsx";
const Book = () => {
  return (
    <div className={`${style.wrapper}`}>
      <div className={`${style.cover} ${style.cover_left}`}></div>
      <div
        className={`${style.cover} ${style.cover_right} ${style.turn}`}
      ></div>

      <Pages />
    </div>
  );
};

export default Book;
