import React from "react";
import "./Plans.scss";
import whiteTick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData.js";
import { FaArrowRightLong } from "react-icons/fa6";

const Plans = () => {
  let plan = plansData.map((plan, index) => {
    const { icon, name, price, features } = plan;
    return (
      <div className="plan-card" key={index}>
        {icon}
        <span className="name">{name}</span>
        <span className="price">${price}</span>
        <div className="features">
          {features.map((feature, index) => {
            return (
              <div key={index} className="feature">
                <img src={whiteTick} alt="white tick" />
                <span>{feature}</span>
              </div>
            );
          })}
        </div>
        <div className="explore">
          <span>See more benefits</span>
          <FaArrowRightLong />
        </div>
        <div className="btn">Join now</div>
      </div>
    );
  });
  return (
    <section className="plans-section" id="plans">
      <div className="blur"></div>
      <div className="blur"></div>
      <div className="wrapper">
        <h1 className="sub-heading">
          <span className="stroke-text"> READY TO START </span>
          YOUR JOURNEY
          <span className="stroke-text"> NOW WITHUS </span>
        </h1>
        <div className="plans-container">{plan}</div>
      </div>
    </section>
  );
};

export default Plans;
