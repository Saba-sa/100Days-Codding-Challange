import React from "react";
import "./Reason.scss";
const Reasons = () => {
  return (
    <section className="reason-section" id="reasons">
      <div className="wrapper">
        <div className="left">
          <img src={require("../../assets/image1.png")} alt="1" />
          <img src={require("../../assets/image2.png")} alt=" 2" />
          <img src={require("../../assets/image3.png")} alt="3" />
          <img src={require("../../assets/image4.png")} alt=" 4" />
        </div>
        <div className="right">
          <span className="sub-heading">Some Reasons</span>
          <p>
            <span className="stroke-text">Why </span>
            choose us?
          </p>
          <ul>
            <li>
              <img src={require("../../assets/tick.png")} alt="tick " />
              over 140+ expert coaches
            </li>
            <li>
              <img src={require("../../assets/tick.png")} alt="tick " />
              Train smarter and faster than before
            </li>
            <li>
              <img src={require("../../assets/tick.png")} alt="tick " />
              1free program for new member Train smarter and faster than before
            </li>
            <li>
              <img src={require("../../assets/tick.png")} alt="tick " />
              Reliable partners
            </li>
          </ul>
          <div className="partners">
            <span>Our Partners</span>
            <div className="imgs">
              <img src={require("../../assets/nb.png")} alt="" />
              <img src={require("../../assets/adidas.png")} alt="" />
              <img src={require("../../assets/nike.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
