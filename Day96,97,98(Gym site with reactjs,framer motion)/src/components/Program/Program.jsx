import React from "react";
import "./Program.scss";
import { programsData } from "../../data/programsData";
const Program = () => {
  return (
    <section className="programs-section" id="programs">
      <div className="wrapper">
        <div className="programs-header">
          <span className="stroke-text">Explore our</span>
          <span className="full-text">Programs</span>
          <span className="stroke-text">to shape you</span>
        </div>
        <div className="programs-categories">
          {programsData?.map((item) => {
            const { image, heading, details } = item;
            return (
              <div className="category">
                {image}
                <h1>{heading}</h1>
                <p>{details}</p>
                <div className="button">
                  <button className="program-btn">Join</button>
                  <img
                    src={require("../../assets/rightArrow.png")}
                    alt="arrow"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Program;
