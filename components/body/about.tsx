import React from "react";
import styles from "../../styles/fbf.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
import Strava from "../../public/images/strava.svg";

const About = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <section id="about" className={`${styles.fullHeight} ${styles.section_about}`}>
        <div className={styles.about}>
          <div>
            <h2 className={styles.common_subtitle}>{t("about_title")}</h2>
          </div>
          
          <div className={styles.section_about_cards}>
                      
            <div className={styles.section_about_card}>
              <div className={styles.section_about_card_image_one}></div>
                <div className={styles.section_about_card_text}>
                  <h3 className={styles.common_h3}>{t("about_fitter_one")}</h3>
                  
                  <a href="https://www.strava.com/athletes/14404479"
                  title="Strava Jorge"
                  target="_blank"
                  rel="noreferrer" className={styles.section_about_card_nickname}>
                  <Strava className={styles.section_about_card_icon}/>{t("about_fitter_one_nickname")}</a>


                  <p className={styles.common_p}>{t("about_description_fitter_one")}</p>
                </div>

                <div className={styles.section_about_card_stats}>

                  <h6 className={styles.common_h6}>{t("about_fitter_stats_title")}</h6>
                  <div className={styles.section_about_card_stats_bottom}>
                  
                    <div className={styles.section_about_card_stat}>
                      <h6 className={styles.common_h6}>{t("about_fitter_one_distance")}</h6>
                      <p className={styles.common_p_white}>{t("about_fitter_one_distance_data")}</p>
                    </div>

                    <div className={styles.section_about_card_stat}>
                      <h6 className={styles.common_h6}>{t("about_fitter_one_elevation")}</h6>
                      <p className={styles.common_p_white}>{t("about_fitter_one_elevation_data")}</p>
                    </div>

                    <div className={styles.section_about_card_stat}>
                      <h6 className={styles.common_h6}>{t("about_fitter_one_category")}</h6>
                      <p className={styles.common_p_white}>{t("about_fitter_one_category_data")}</p>
                    </div>
                  </div>
                </div>
              </div>
            
            <div className={styles.section_about_card}>
              <div className={styles.section_about_card_image_two}></div>
                <div className={styles.section_about_card_text}>
                  <h3 className={styles.common_h3}>{t("about_fitter_two")}</h3>
                  
                  <a href="https://www.strava.com/athletes/80187448"
                  title="Strava Francis"
                  target="_blank"
                  rel="noreferrer" className={styles.section_about_card_nickname}>
                  <Strava className={styles.section_about_card_icon}/>{t("about_fitter_two_nickname")}</a>

                  <p className={styles.common_p}>{t("about_description_fitter_two")}</p>
                </div>

                <div className={styles.section_about_card_stats}>

                  <h6 className={styles.common_h6}>{t("about_fitter_stats_title")}</h6>
                  <div className={styles.section_about_card_stats_bottom}>

                    <div className={styles.section_about_card_stat}>
                      <h6 className={styles.common_h6}>{t("about_fitter_two_distance")}</h6>
                      <p className={styles.common_p_white}>{t("about_fitter_two_distance_data")}</p>
                    </div>

                    <div className={styles.section_about_card_stat}>
                      <h6 className={styles.common_h6}>{t("about_fitter_two_elevation")}</h6>
                      <p className={styles.common_p_white}>{t("about_fitter_two_elevation_data")}</p>
                    </div>

                    <div className={styles.section_about_card_stat}>
                      <h6 className={styles.common_h6}>{t("about_fitter_two_category")}</h6>
                      <p className={styles.common_p_white}>{t("about_fitter_two_category_data")}</p>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
        </div>
      </section>

      
    </>
  );
};

export default About;
