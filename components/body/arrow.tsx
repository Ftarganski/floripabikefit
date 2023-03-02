import React from "react";
import styles from "../../styles/fbf.module.css";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Arrow = () => {
  return (
    <>
      <div className={styles.arrow}>
        <a href="#home">
          <ArrowUpwardIcon className={styles.arrow_icon} />
        </a>
      </div>
    </>
  );
};

export default Arrow;
