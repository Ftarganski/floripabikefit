import React from "react";
import styles from "../styles/fbf.module.css";

import InstagramIcon from '@mui/icons-material/Instagram';
import EventIcon from '@mui/icons-material/Event';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CopyrightIcon from '@mui/icons-material/Copyright';

import "./i18n/i18n";
import { useTranslation } from "react-i18next";
import LogoAllWhite from "../public/images/fbf_logo_allwhite_text.svg";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer_top}>
          <div className={styles.footer_topLeft}>
            <LogoAllWhite alt="Logo" className={styles.footer_logo} />
          </div>

          <div className={styles.footer_topCenter}>
            <p className={styles.footer_slogan}>{t("slogan")}</p>
          </div>

          <div className={styles.footer_topRight}>
            <a
              href="https://www.instagram.com/floripabikefit/"
              title="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className={styles.footer_icon} />
            </a>
            <a
              href="https://www.instagram.com/floripabikefit/"
              title="Agenda"
              target="_blank"
              rel="noreferrer"
            >
              <EventIcon className={styles.footer_icon} />
            </a>
            <a
              href="mailto:floripabikefit@gmail.com"
              title="Email"
              target="_blank"
              rel="noreferrer"
            >
              <MailOutlineIcon  className={styles.footer_icon} />
            </a>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <p>{t("company")}</p>
          <p>
            {t("copyright")}
            <span>
              {" "}
              <CopyrightIcon/>{" "}
            </span>
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
    </>
  );
};

export default Footer;
