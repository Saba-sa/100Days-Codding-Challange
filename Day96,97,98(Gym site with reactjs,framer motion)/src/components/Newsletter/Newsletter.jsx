import React from "react";
import "./Newsletter.scss";
const Newsletter = () => {
  return (
    <section className="newsLetter" id="contact">
      <div className="wrapper">
        <div className="left">
          <p className="stroke-text">
            READY TO
            <span> LEVEL UP YOUR BODY </span>
            WITH US?
          </p>
        </div>
        <div className="right">
          <form className="form">
            <input
              type="text"
              placeholder="Enter your email"
              className="input"
            />
            <button className="btn">Join Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
