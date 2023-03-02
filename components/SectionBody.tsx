import React from "react";
import styles from "../styles/fbf.module.css";
import Services from "./body/services";
import About from "./body/about";
import Clients from "./body/clients";
import Partners from "./body/partners";
import Contact from "./body/contact";
import Arrow from "./body/arrow";
import "./i18n/i18n";
import { useTranslation } from "react-i18next";



const Body = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className={styles.sectionContainer}>
        <Services/>
        <About />
        <Clients />
        <Partners />
        <Contact/>
      </div>
      <Arrow />
    </>
  );
};

export default Body;
