import React from "react";
import emailIcon from "../../../assets/contact/emailIcon.png";
import linkedinIcon from "../../../assets/contact/linkedinIcon.png";
import githubIcon from "../../../assets/contact/githubIcon.png";
import resumePDF from "../../../assets/contact/resume.pdf";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <div>
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
          >
            Download Resume
          </a>
        </div>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:kashishmeghani11@gmail.com">
            kashishmeghani11@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/kashish-meghani-303274230/">
            linkedin.com/kashish-meghani
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://www.github.com/justkashish">
            github.com/justkashish
          </a>
        </li>
      </ul>
    </footer>
  );
};
