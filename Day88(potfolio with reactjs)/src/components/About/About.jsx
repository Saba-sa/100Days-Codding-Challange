import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={require("../../assets/about/aboutImage.png")}
          alt="about"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={require("../../assets/about/cursorIcon.png")}
              alt="cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Front-end Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                nulla labor.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={require("../../assets/about/serverIcon.png")}
              alt="cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Back-end Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                nulla labor.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={require("../../assets/about/uiIcon.png")}
              alt="cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Ui/UX Designer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                nulla labor.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
