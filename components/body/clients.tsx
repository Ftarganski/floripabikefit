import React from "react";
import styles from "../../styles/fbf.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

const Clients = () => {
  const { t } = useTranslation("common");
  return (
    <>
     <section id="clients" className={`${styles.fullHeight} ${styles.section_clients}`}>
      
      <div className={styles.clients}>
        
        <div className={styles.client_left}>
          <div></div>
          <div></div>
        </div>

        <div className={styles.client_center}>
          <div></div>
          <div></div>
        </div>
        
        <div className={styles.client_right}>
          <div></div>
          <div></div>
        </div>

      </div>


  </section>
    </>
  );
};

export default Clients;
