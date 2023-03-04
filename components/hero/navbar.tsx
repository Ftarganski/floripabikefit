import React from "react";
import { useEffect, useState } from "react";
import styles from "../../styles/fbf.module.css";
import LogoAllWhite from "../../public/images/fbf_logo_allwhite.svg";
import LogoAllBlue from "../../public/images/fbf_logo_allblue.svg";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
import PhoneIcon from '@mui/icons-material/Phone';

const Navbar = () => {
  const { t } = useTranslation("common");
  //SCROLL FUNCTION
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const TagLogo = scrolled ? LogoAllWhite : LogoAllBlue;

  //PHONE CONTACT FUNCTION
  function callPhoneNumber() {
    const phoneNumber = "+5548998098541";
    window.location.href = `tel:${phoneNumber}`;
  }

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <span className={styles.nav_logo}>
          <a href="#home">
            <TagLogo className={styles.nav_logo_image} alt="Logo" width={50} height={50} />
          </a>
          <p className={`${styles.nav_company} ${scrolled ? styles.scrolled : ""}`}>{t("company")}</p>
        </span>
        <ul>
          <li>
            <a href="#services">
              <p
                className={`${styles.nav_button} ${
                  scrolled ? styles.scrolled : ""
                }`}
              >
                {" "}
                Serviços
              </p>
            </a>
          </li>

          <li>
            <a href="#about">
              <p
                className={`${styles.nav_button} ${
                  scrolled ? styles.scrolled : ""
                }`}
              >
                Quem Somos
              </p>
            </a>
          </li>

          <li>
            <a href="#clients">
              <p
                className={`${styles.nav_button} ${
                  scrolled ? styles.scrolled : ""
                }`}
              >
                Clientes
              </p>
            </a>
          </li>

          <li>
            <a href="#partners">
              <p
                className={`${styles.nav_button} ${
                  scrolled ? styles.scrolled : ""
                }`}
              >
                Parceiros
              </p>
            </a>
          </li>

          <li>
            <a href="#contact">
              <p
                className={`${styles.nav_button} ${
                  scrolled ? styles.scrolled : ""
                }`}
              >
                Contato
              </p>
            </a>
          </li>

          <li>
            <a href="tel:+5548998098541">
              <PhoneIcon
                className={`${styles.nav_button} ${
                  scrolled ? styles.scrolled : ""
                }`}
                onClick={callPhoneNumber}
              />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
