import React from "react";
import styles from "../../styles/fbf.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <section id="about" className={`${styles.fullHeight} ${styles.section_about_left}`}>
        
        <div className={styles.section_about1}>

        </div>
        

        <div className={styles.section_about2}>

        </div>
      
      </section>

      <section className={`${styles.fullHeight} ${styles.section_about_right}`}>

        
      </section>
    </>
  );
};

export default About;
