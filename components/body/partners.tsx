import React from "react";
import styles from "../../styles/fbf.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation("common");
  return (
    <>
     <section id="partners" className={`${styles.fullHeight} ${styles.section_partners}`}>
      
      <div className={styles.partners}>
        
        <div className={styles.partner_left}>
          <div></div>
          <div></div>
        </div>

        <div className={styles.partner_center}>
          <div></div>
          <div></div>
        </div>
        
        <div className={styles.partner_right}>
          <div></div>
          <div></div>
        </div>

      </div>


  </section>
    </>
  );
};

export default Partners;
