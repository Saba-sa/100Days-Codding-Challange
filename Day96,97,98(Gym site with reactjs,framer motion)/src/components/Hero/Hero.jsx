import React from "react";
import Header from "./Header.jsx";
import "./Hero.scss";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";

const Hero = () => {
  const transition = {
    type: "spring",
    duration: 3,
  };
  return (
    <section className="hero_section" id="home">
      <div className="blur"></div>
      <div className="blur"></div>
      <div className="wrapper">
        <div className="hero_left_text">
          <Header />
          <div className="hero-text">
            <div className="best-add">
              <p>
                {/* <div> */}
                <motion.div
                  initial={{ left: "80%" }}
                  whileInView={{ left: "10%" }}
                  transition={{ ...transition, type: "tween" }}
                ></motion.div>
                {/* </div> */}
                <span>The best fitness club in the town</span>
              </p>
            </div>
            <div className="heading ">
              <p>
                <span className="stroke-text">SHAPE </span>
                YOUR IDEAL BODY
              </p>
            </div>
            <div className="description">
              <p>
                In here we will help you to shape and build your ideal body and
                live up your life to fullest
              </p>
            </div>
            <div className="figures">
              <div className="fig_1">
                <span>
                  <NumberCounter end={160} start={90} delay="4" preFix="+" />
                </span>
                <p>Expert Coaches</p>
              </div>
              <div className="fig_2">
                <span>
                  <NumberCounter end={900} start={830} delay="4" preFix="+" />
                </span>
                <p>MEMBERS JOINED</p>
              </div>
              <div className="fig_3">
                <span>
                  <NumberCounter end={90} start={35} delay="4" preFix="+" />
                </span>
                <p>Fitness Programs</p>
              </div>
            </div>
            <div className="cta">
              <button className="btn">Get Started</button>
              <button className="btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_right_text">
        <button className="btn">
          <Link to="contact" span={true} smooth={true}>
            Join us
          </Link>
        </button>
        <div>
          <motion.div
            initial={{ left: "100%" }}
            whileInView={{ left: "25%" }}
            transition={transition}
            className="heart-rate"
          >
            <img src={require("../../assets/heart.png")} alt="heart rate" />
            <span>Heart Rate</span>
            <span>166bpm</span>
          </motion.div>
          <motion.div
            initial={{ right: "100%" }}
            whileInView={{ right: "10%" }}
            transition={transition}
            className="hero-img"
          >
            <img src={require("../../assets/hero_image.png")} alt="" />

            <img
              src={require("../../assets/hero_image_back.png")}
              alt="hero back"
            />
          </motion.div>
          <motion.div
            initial={{ left: "100%" }}
            whileInView={{ left: "-90%" }}
            transition={transition}
            className="heart-rate caloreies-burn"
          >
            <img src={require("../../assets/calories.png")} alt="heart rate" />
            <div>
              <span>Heart Rate</span>
              <span>867 bpm</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
