import React from "react";
import { useEffect, useState } from "react";
import styles from "../styles/fbf.module.css";
import HeadSite from "./hero/head";
import Navbar from "./hero/navbar";
import "./i18n/i18n";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("common");
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

  return (
    <>
      <HeadSite />
      <Navbar />
      <section id="home" className={`${styles.fullHeight} ${styles.hero}`}>
        <h3 className={styles.hero_title}>{t("title")}</h3>
        <h1 className={styles.hero_subtitle}>{t("company")}</h1>
      </section>
    </>
  );
};

export default Hero;
