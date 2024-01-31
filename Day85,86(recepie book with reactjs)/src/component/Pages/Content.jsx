import React, { useState } from "react";
import style from "./Page.module.css";
import PagesBack from "./Page2";
import { data } from "../../Data/Data";
import logo from "../../assets/logo.png";
import conetntImg1 from "../../assets/content1.jpg";
import conetntImg2 from "../../assets/content2.jpg";
import conetntImg3 from "../../assets/content3.jpg";
import conetntImg4 from "../../assets/content4.jpg";
import { GrNext } from "react-icons/gr";

const Content = () => {
  const [pageTurn1, setpageTurn1] = useState(false);
  const [pageTurn2, setpageTurn2] = useState(false);
  const [pageTurn3, setpageTurn3] = useState(false);
  const [pageZindex1, setpageZindex1] = useState(30);
  const [pageZindex2, setpageZindex2] = useState(10);
  const [pageZindex3, setpageZindex3] = useState(10);

  const changePage = (temp) => {
    if (parseInt(temp) === 1) {
      setpageTurn1(true);
      setpageZindex1(30);
      setpageZindex2(10);
      setpageZindex3(10);
    } else if (parseInt(temp) === 2) {
      setpageTurn2(true);
      setpageZindex1(10);
      setpageZindex2(30);
      setpageZindex3(10);
    } else {
      setpageTurn3(true);
      setpageZindex1(10);
      setpageZindex2(10);
      setpageZindex3(30);
    }
  };
  const changePageBack = (temp) => {
    if (parseInt(temp) === 1) {
      setpageTurn1(false);
      setpageZindex2(10);
      setpageZindex1(30);
      setpageZindex3(10);
    } else if (parseInt(temp) === 2) {
      setpageTurn2(false);
      setpageZindex2(30);
      setpageZindex1(10);
      setpageZindex3(10);
    } else {
      setpageTurn3(false);
      setpageZindex1(10);
      setpageZindex2(10);
      setpageZindex3(30);
    }
  };
  return (
    <>
      <div
        className={`${style.book_page} ${style.page_right} ${
          style.page_content
        } ${style.page_right_1} ${pageTurn1 && style.turn} z-${pageZindex1}`}
        style={{ zIndex: `${pageZindex1}` }}
      >
        <div className={`${style.page_front}`}>
          <div className={`${style.front_page_content}`}>
            <div className={`${style.content_food_imgs}`}>
              <img src={conetntImg1} alt="content 1" />
              <img src={conetntImg2} alt="content 2" />
              <img src={conetntImg3} alt="content 3" />
              <img src={conetntImg4} alt="content 4" />
            </div>
            <div className={`${style.content_food_text}`}>
              <img src={logo} alt="logo" />

              {data.map((item) => {
                const { id, recepieName } = item;
                return (
                  <div key={id} className={`${style.contentDetail}`}>
                    <p className={`${style.contentDetail_No}`}>{id}</p>
                    <p className={`${style.contentDetail_title}`}>
                      {recepieName}
                    </p>
                    <p className={`${style.contentDetail_pageNo}`}>{id + 1}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <span className={`${style.number_page}`}>1</span>
          <span
            className={`${style.nextprev_btn}`}
            onClick={() => changePage(1)}
          >
            <GrNext />
          </span>
        </div>
        <PagesBack item={data[0]} changePageBack={() => changePageBack(1)} />
      </div>

      <div
        className={`${style.book_page} ${style.page_right} ${
          style.page_right_2
        } ${pageTurn2 && style.turn} z-${pageZindex2}`}
        style={{ zIndex: `${pageZindex2}` }}
      >
        <div className={`${style.page_front}`}>
          <div className={`${style.front_page_content}`}>
            <h1>Logo</h1>
          </div>
          <span className={`${style.number_page}`}>1</span>
          <span
            className={`${style.nextprev_btn}`}
            onClick={() => changePage(2)}
          >
            next
          </span>
        </div>
        <PagesBack item={data[0]} changePageBack={() => changePageBack(2)} />
      </div>
      <div
        className={`${style.book_page} ${style.page_right} ${
          style.page_right_2
        } ${pageTurn3 && style.turn} z-${pageZindex3}`}
        style={{ zIndex: `${pageZindex3}` }}
      >
        <div className={`${style.page_front}`}>
          <div className={`${style.front_page_content}`}>
            <h1>Logo</h1>
          </div>
          <span className={`${style.number_page}`}>1</span>
          <span
            className={`${style.nextprev_btn}`}
            onClick={() => changePage(3)}
          >
            next
          </span>
        </div>
        <PagesBack item={data[0]} changePageBack={() => changePageBack(3)} />
      </div>
    </>
  );
};

export default Content;
