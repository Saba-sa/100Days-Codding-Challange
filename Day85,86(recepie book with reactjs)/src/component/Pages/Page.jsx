import React, { useState } from "react";
import style from "./SinglePage.module.css";
import Page1 from "./Page1.jsx";
import Page2 from "./Page2.jsx";
const Page = ({ data }) => {
  console.log(data);
  const [pageTurn, setpageTurn] = useState(false);
  const changePage = () => {
    setpageTurn(true);
  };
  const changePageBack = () => {
    setpageTurn(false);
  };

  return (
    <div
      className={`${style.book_page} ${style.page_right} ${
        pageTurn && style.turn
      }`}
      id="turn-1"
    >
      <Page1 item={data} changePage={changePage} />
      <Page2 item={data} changePageBack={changePageBack} />
    </div>
  );
};
export default Page;
