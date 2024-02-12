import React from "react";
import styles from "./Experence.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

const Experence = () => {
  return (
    <section id="experence" className={styles.container}>
      <h2 className={styles.title}>Experence</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skills, id) => {
            const { title, imageSrc } = skills;
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={require(`../../assets/${imageSrc}`)} alt={title} />
                </div>
                <p>{title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            const {
              role,
              organisation,
              startDate,
              endDate,
              experiences,
              imageSrc,
            } = historyItem;
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={require(`../../assets/${imageSrc}`)}
                  alt={organisation}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${role}, ${organisation}`}</h3>
                  <p>{`${startDate}, ${endDate}`}</p>
                  <ul>
                    {experiences.map((experence, id) => {
                      return <li key={id}>{experence}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experence;
