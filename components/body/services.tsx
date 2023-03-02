import React from "react";
import styles from "../../styles/fbf.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
import Bolt from "../../public/images/bolt.svg";
import Comfort from "../../public/images/comfort.svg";
import Injury from "../../public/images/injury.svg";

const Services = () => {
  const { t } = useTranslation("common");
  return (
    <>
     <section id="services" className={`${styles.fullHeight} ${styles.section_services}`}>
      
      <div className={styles.services}>
        
        <div className={styles.service_chapter}>
          <div>
            <h2 className={styles.service_subtitle}>O que é o Bike Fit?</h2>
          </div>
          <div className={styles.service_container}>
            
            
            <div  className={styles.service_grid}>
                            <p className={styles.common_p}>Inserir relato breve sobre Bik Fit</p>
              </div>
            
            
            </div>
        </div>

              
        <div className={styles.service_chapter}>
         
          <div>
            <h2 className={styles.service_subtitle}>Para que serve o Bike Fit?</h2>
          </div>
          <div className={styles.service_container}>
              <div  className={styles.service_grid}>
                <Bolt className={styles.service_icon} alt="Performance" />
                <h4 className={styles.common_h4} >Performance</h4>
                <p className={styles.common_p}>ipsum lorem</p>
              </div>
              
              <div className={styles.service_grid}>
                <Comfort className={styles.service_icon} alt="Conforto"/>
                <h4 className={styles.common_h4} >Conforto</h4>
                <p  className={styles.common_p}>ipsum lorem</p>
              </div>
              
              <div className={styles.service_grid}>
                <Injury className={styles.service_icon} alt="Lesões"/>
                <h4 className={styles.common_h4} >Evita Lesões</h4>
                <p  className={styles.common_p}>ipsum lorem</p>
              </div>
          </div>
        </div>

      </div>


  </section>
    </>
  );
};

export default Services;
