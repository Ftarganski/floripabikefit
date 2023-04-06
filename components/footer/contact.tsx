import React from "react";
import styles from "../../styles/fbf.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

import InstagramIcon from "@mui/icons-material/Instagram";
import EventIcon from "@mui/icons-material/Event";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LogoAllWhite from "../../public/images/fbf_logo_allwhite_text.svg";
import Arrow from "../body/arrow";

const Contact = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <section id="contact" className={styles.section_contact_container}>
        {/* <div className={styles.background_top}>
          <svg className={styles.background_top_svg} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path className={styles.background_top_svg_fill} d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" ></path>
            <path className={styles.background_top_svg_fill} d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" ></path>
            <path className={styles.background_top_svg_fill} d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" ></path>
          </svg>
        </div> */}

        <div className={styles.contact}>
          <div className={styles.contact_title}>
            <h2 className={styles.common_subtitle_black}>
              {t("contact_title")}
            </h2>
          </div>

          <div className={styles.contact_content}>
            <div className={styles.contact_content_cards}>
              <div className={styles.contact_content_cards_map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.1707667560554!2d-48.46421598441714!3d-27.43278832170291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527437320e0737b%3A0xa37cb01a87346ff1!2sFloripa%20Bike%20Fit!5e0!3m2!1spt-BR!2sbr!4v1680803772926!5m2!1spt-BR!2sbr"
                  loading="lazy"
                ></iframe>
              </div>

              <div className={styles.contact_content_cards_data}>
                <div className={styles.contact_content_cards_data_address}>
                  <h3 className={styles.common_h3}>
                    {t("contact_address_street")}
                  </h3>

                  <p className={styles.common_p}>
                    {t("contact_address_neighborhood")}
                  </p>
                  <p className={styles.common_p}>{t("contact_address_city")}</p>
                  <p className={styles.common_p}>
                    {t("contact_address_postalcode")}
                  </p>
                  <p className={styles.common_p}>
                    {t("contact_address_country")}
                  </p>
                </div>

                <div className={styles.contact_content_cards_data_social}>
                  <a
                    href="https://www.instagram.com/floripabikefit/"
                    title="Instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon
                      className={styles.contact_content_cards_data_social_icon}
                    />
                  </a>
                  <a
                    href="mailto:floripabikefit@gmail.com"
                    title="Email"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MailOutlineIcon
                      className={styles.contact_content_cards_data_social_icon}
                    />
                  </a>

                  <a
                    href="https://api.whatsapp.com/send?phone=5548998098541"
                    title="Email"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon
                      className={styles.contact_content_cards_data_social_icon}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

<Arrow/>

          <div className={styles.contact_info}>
            <div className={styles.contact_info_top}></div>

            <div className={styles.contact_info_bottom}>
              <p>
                {t("copyright")}
                
                <a
                  href="https://www.targanski.com"
                  title="FT Dev."
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("create by")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
