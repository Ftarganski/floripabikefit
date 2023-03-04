import React from "react";
import styles from "../../styles/fbf.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

import InstagramIcon from '@mui/icons-material/Instagram';
import EventIcon from '@mui/icons-material/Event';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CopyrightIcon from '@mui/icons-material/Copyright';

import LogoAllWhite from "../../public/images/fbf_logo_allwhite_text.svg";

const Foot = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className={styles.section_foot}>
        <div className={styles.foot_top}>
            <div className={styles.foot_topLeft}>
              <LogoAllWhite alt="Logo" className={styles.foot_logo} />
            </div>

            <div className={styles.foot_topCenter}>
              <p className={styles.foot_slogan}>{t("slogan")}</p>
            </div>

            <div className={styles.foot_topRight}>
              <a
                href="https://www.instagram.com/floripabikefit/"
                title="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon className={styles.foot_icon} />
              </a>
              <a
                href="https://www.instagram.com/floripabikefit/"
                title="Agenda"
                target="_blank"
                rel="noreferrer"
              >
                <EventIcon className={styles.foot_icon} />
              </a>
              <a
                href="mailto:floripabikefit@gmail.com"
                title="Email"
                target="_blank"
                rel="noreferrer"
              >
                <MailOutlineIcon  className={styles.foot_icon} />
              </a>
            </div>
          </div>
          <div className={styles.foot_bottom}>
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

export default Foot;
