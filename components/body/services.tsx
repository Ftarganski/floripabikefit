import React from "react";
import styles from "../../styles/fbf.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
import Performance from "../../public/images/bolt.svg";
import Comfort from "../../public/images/comfort.svg";
import Injury from "../../public/images/injury.svg";

const Services = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <section id="services" className={styles.section_services_container}>
     
      
      <div className={styles.services}>
        
        <div className={styles.service_chapter}>
          <div>
            <h2 className={styles.common_subtitle_black}>{t("service_subtitle_top")}</h2>
          </div>
          <div className={styles.service_container}>        
            <div  className={styles.service_grid}>
              <p className={styles.common_p_large} dangerouslySetInnerHTML={{ __html: t("service_description_top") }} />
            </div>
          </div>
        </div>

              
        <div className={styles.service_chapter}>
          <div>
            <h2 className={styles.common_subtitle_black}>{t("service_subtitle_bottom")}</h2>
          </div>
          <div className={styles.service_container}>
              <div  className={styles.service_grid}>
                <Performance className={styles.service_icon} alt="Performance" />
                <h3 className={styles.common_h3}>{t("service_performance_title")}</h3>
                <p className={styles.common_p_services}>{t("service_performance_description")}</p>
              </div>
              
              <div className={styles.service_grid}>
                <Comfort className={styles.service_icon} alt="Conforto"/>
                <h3 className={styles.common_h3}>{t("service_confort_title")}</h3>
                <p  className={styles.common_p_services}>{t("service_confort_description")}</p>
              </div>
              
              <div className={styles.service_grid}>
                <Injury className={styles.service_icon} alt="Lesões"/>
                <h3 className={styles.common_h3}>{t("service_injury_title")}</h3>
                <p  className={styles.common_p_services}>{t("service_injury_description")}</p>
              </div>
          </div>
        </div>

      </div>


  </section>
    </>
  );
};

export default Services;
