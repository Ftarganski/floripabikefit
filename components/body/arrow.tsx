import React from "react";
import styles from "../../styles/fbf.module.css";
import { BsFillFileArrowUpFill } from "react-icons/Bs";

const Arrow = () => {
  return (
    <>
      <div className={styles.arrow}>
        <a href="#home">
          <BsFillFileArrowUpFill className={styles.arrow_icon} />
        </a>
      </div>
    </>
  );
};

export default Arrow;
