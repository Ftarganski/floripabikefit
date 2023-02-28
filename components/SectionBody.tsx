import React from "react";
import { useState } from "react";
import styles from "../styles/fbf.module.css";

const Body = () => {


  return (
    <>
      <div className={styles.sectionContainer}>
        <section className={`${styles.doubleHeight} ${styles.section1}`}>
          <div className={styles.section1a}></div>
          <div className={styles.section1b}></div>
        </section>
        <section
          className={`${styles.doubleHeight} ${styles.section2}`}
        ></section>
        <section
          className={`${styles.fullHeight} ${styles.section3}`}
        ></section>
        <section
          className={`${styles.fullHeight} ${styles.section4}`}
        ></section>
      </div>
    </>
  );
};

export default Body;
