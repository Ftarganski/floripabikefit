import React from "react";
import styles from "../../styles/fbf.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
import Strava from "../../public/images/strava.svg";

const About = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <section id="about" className={styles.section_about_container}>

        <div className={styles.background_top}>
          <svg className={styles.background_top_svg} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path className={styles.background_top_svg_fill} d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" ></path>
            <path className={styles.background_top_svg_fill} d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" ></path>
            <path className={styles.background_top_svg_fill} d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" ></path>
          </svg>
        </div>

        <div className={styles.about}>
          <div className={styles.about_title}>
            <h2 className={styles.common_subtitle_white}>{t("about_title")}</h2>
          </div>
          
          <div className={styles.about_cards}>
                      
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
