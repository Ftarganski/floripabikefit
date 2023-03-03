import React from "react";
import styles from "../../styles/fbf.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("common");
  return (
    <>
    <section id="about" className={`${styles.fullHeight} ${styles.section_about}`}>
      
      <div className={styles.about}>
        
        <div className={`${styles.fullHeight} ${styles.section_about_left}`}>
          
            
            <div className={styles.section_about_chapter}>
              <h4 className={styles.common_h4}>{t("about_fitter_one")}</h4>
              <p className={styles.common_p}>{t("about_description_fitter_one")}</p>
            </div>
            

            <div className={styles.section_about_chapter}>
              <h4 className={styles.common_h4}>{t("about_fitter_two")}</h4>
              <p className={styles.common_p}>{t("about_description_fitter_two")}</p>
            </div>
        
        </div>
        
        <div className={`${styles.fullHeight} ${styles.section_about_right}`}>

        <h2 className={styles.common_subtitle}>{t("about_title")}</h2>
        </div>
      
      </div>
      
    </section>
    </>
  );
};

export default About;
