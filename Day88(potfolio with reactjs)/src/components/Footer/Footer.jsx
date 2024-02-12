import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1 className={styles.title}>Contact</h1>
          <h2>Feel free to react out!</h2>
        </div>
        <div className={styles.right}>
          <div>
            <img
              src={require("../../assets/contact/emailIcon.png")}
              alt="email"
            />
            <p>myemail@gmail.com</p>
          </div>
          <div>
            <img
              src={require("../../assets/contact/linkedinIcon.png")}
              alt="linkedin"
            />
            <p>linkedin</p>
          </div>
          <div>
            <img
              src={require("../../assets/contact/githubIcon.png")}
              alt="github"
            />
            <p>github</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
