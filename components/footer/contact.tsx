import React from "react";
import styles from "../../styles/fbf.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className={styles.section_contact}>
      
        <div className={styles.contact}>
          
          <div className={styles.contact_left}>
            <div></div>
            <div></div>
          </div>
                
          <div className={styles.contact_right}>
            <div></div>
            <div></div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Contact;
