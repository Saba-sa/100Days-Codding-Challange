import React from "react";
import style from "./Page.module.css";
import image from "../../assets/content4.jpg";
// import style from "./SinglePage.module.css";
import { GrPrevious } from "react-icons/gr";

const Page2 = ({ item, changePageBack }) => {
  const { id, img, recepieName } = item;
  return (
    <div className={`${style.page_back}`}>
      <div className={`${style.page_content}`}>
        <div className={`${style.page_content_img}`}>
          <img src={image} alt="" />
        </div>
        <div className={`${style.pageContent_text}`}>
          <h2 className={`${style.title}`}>{recepieName}</h2>
          <div className={`${style.detail}`}>
            <div className={`${style.ingrediants}`}>
              <h3>Ingredients</h3>
              <p>Onion</p>
              <p>Onion</p>
              <p>Onion</p>
              <p>Onion</p>
              <p>Onion</p>
              <p>Onion</p>
              <p>Onion</p>
              <p>Onion</p>
              <p>Onion</p>
              <p>Onion</p>
            </div>
            <div className={`${style.cookingWay}`}>
              <h3>steps</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, modi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, modi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, modi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, modi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, modi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <span
        className={`${style.nextprev_btn} ${style.back}`}
        onClick={changePageBack}
      >
        <GrPrevious />
      </span>
      <span className={`${style.number_page}`}>{id + 1}</span>
    </div>
  );
};

export default Page2;
