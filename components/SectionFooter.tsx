import React from "react";
import styles from "../styles/fbf.module.css";

import Contact from "./footer/contact";
import Foot from "./footer/foot"




const Footer = () => {

  return (
    <>
      <div id="contact" className={styles.section_footer}>
        <Contact/>
        <Foot/>
      </div>
    </>
  );
};

export default Footer;
