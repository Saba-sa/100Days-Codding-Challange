import React from "react";
import Content from "./Content";
// import style from "./SinglePage.module.css";
import style from "./Page.module.css";
const Pages = () => {
  return (
    <div className={`${style.book}`}>
      <div className={`${style.book_page} ${style.page_left} ${style.turn}`}>
        <div className={`${style.profile_page}`}>
          <h1>Recepie Book</h1>
          <h3>Note Your every favitote recepie</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            rerum at suscipit sapiente aliquid totam, nesciunt eum libero
            ducimus fuga.
          </p>
          <div className=" btn-box">
            <button className={`${style.btn}`}>Add New</button>{" "}
            <button className={`${style.btn}`}>view Favirote</button>
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
};

export default Pages;
