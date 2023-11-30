import React from "react";
import styles from "./HeroPic.module.scss";

const HeroPic = () => {
  return (
    <>
      <div className={styles.hero}>
        <img
          src="./android-chrome-192x192.png"
          alt="pink tamagotchi version 4"
        />
      </div>
    </>
  );
};

export default HeroPic;
