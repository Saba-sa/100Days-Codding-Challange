import React from "react";
import "./Footer.scss";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <div className="blur"></div>
      <div className="blur blur2"></div>
      <div className="wrapper">
        <div className="social-icons">
          <FaGithub />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
        <div className="logo">
          <img
            src={require("../../assets/logo.png")}
            alt="logo of the companey"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
