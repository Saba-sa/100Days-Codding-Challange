import React from "react";
import styles from "./Projects.module.css";
import project from "../../data/projects.json";
const Projects = () => {
  return (
    <section id="experence" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {project.map((project, id) => {
          const { title, imageSrc, description, skills, demo, source } =
            project;
          return (
            <div className={styles.project}>
              <img
                src={require(`../../assets/${imageSrc}`)}
                alt="project image"
              />
              <h2>{title}</h2>
              <p>{description}</p>
              <div className={styles.skills}>
                {skills.map((skill, id) => {
                  return <div className={styles.skill}>{skill}</div>;
                })}
              </div>
              <div className={styles.tags}>
                <a href={demo}>Demo</a>
                <a href={source}>Source</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
