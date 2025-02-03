import React from "react";

import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import css from "../../../assets/skills/css.png";
import html from "../../../assets/skills/html.png";
import react from "../../../assets/skills/react.png";
import node from "../../../assets/skills/node.png";
import mongodb from "../../../assets/skills/mongodb.png";
import history from "../../data/history.json";

export const Skills = () => {
  // Map the image names to their respective imports
  const images = {
    "html.png": html,
    "css.png": css,
    "react.png": react,
    "node.png": node,
    "mongodb.png": mongodb,
  };

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  {/* Use skill.imageSrc instead of imageSrc */}
                  <img src={images[skill.imageSrc]} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        {/* History section is commented out */}
        {/* <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul> */}
      </div>
    </section>
  );
};
