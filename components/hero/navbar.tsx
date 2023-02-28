import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiHome, FiInfo, FiSettings, FiLogOut } from "react-icons/fi";
import styles from "../../styles/fbf.module.css";
import LogoWhite from "../../public/images/fbf_logo_white.svg";
import LogoBlack from "../../public/images/fbf_logo_black.svg";

const Navbar = () => {
  
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

  const TagLogo = scrolled ? LogoWhite : LogoBlack;

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <TagLogo alt="Logo" width={50} height={50} />
        <ul>
          <li>
            <Link href="/">
              <FiHome
                className={`${styles.icon} ${scrolled ? styles.scrolled : ""}`}
              />
            </Link>
          </li>
          <li>
            <Link href="/about">
              <FiInfo
                className={`${styles.icon} ${scrolled ? styles.scrolled : ""}`}
              />
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <FiSettings
                className={`${styles.icon} ${scrolled ? styles.scrolled : ""}`}
              />
            </Link>
          </li>
          <li>
            <a href="https://www.example.com">
              <FiLogOut
                className={`${styles.icon} ${scrolled ? styles.scrolled : ""}`}
              />
            </a>
          </li>
        </ul>
              </nav>
    </>
  );
};

export default Navbar;
