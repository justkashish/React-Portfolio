import React from "react";
import styles from "./ProjectCard.module.css";
import project1 from "../../../assets/projects/formbot.png";
import project2 from "../../../assets/projects/PocketNotes.png";
import project3 from "../../../assets/projects/linktrim.png";

const images = {
  "formbot.png": project1,
  "PocketNotes.png": project2,
  "linktrim.png": project3
};

export const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills, demo, source } = project;

  return (
    <div className={styles.container}>
      <img src={images[imageSrc]} alt={`Image of ${title}`} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.description}>
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>Demo</a>
        <a href={source} className={styles.link}>Source</a>
      </div>
    </div>
  );
};
