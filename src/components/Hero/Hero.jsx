import React from "react";
import heroImg from "../../../assets/hero/passport.png"
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kashish</h1>
        <p className={styles.description}>
        I am a fresher MERN stack developer with a strong foundation in building dynamic, responsive websites and web applications. I am eager to apply my skills in MongoDB, Express.js, React.js, and Node.js to create efficient and scalable solutions. Reach out if you'd like to learn more!🚀
        </p>
        <a href="mailto:kashishmeghani11@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImg}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};