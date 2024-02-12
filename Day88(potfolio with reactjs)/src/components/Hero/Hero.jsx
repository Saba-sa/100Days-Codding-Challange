import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,I'm Saba</h1>
        <p className={styles.description}>
          I am a dedicated front-end web developer passionate about crafting
          exceptional digital experiences. With 2 years of hands-on experience
          in the field, I specialize in translating creative concepts into
          engaging and responsive websites
        </p>
        <a href="mailto:sabaali3201@gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img
        src={require("../../assets/hero/heroImage.png")}
        alt="me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
