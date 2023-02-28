import React from "react";
import { useEffect, useState } from "react";
import styles from "../styles/fbf.module.css";
import HeadSite from "./hero/head";
import Navbar from "./hero/navbar";

const Hero = () => {
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
      <Navbar/>
      <section
        className={`${styles.fullHeight} ${styles.hero} ${
          scrolled ? styles.scrolled : ""
        }`}
      ></section>
    </>
  );
};

export default Hero;
