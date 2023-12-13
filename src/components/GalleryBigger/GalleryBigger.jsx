import React from "react";
import styles from "./GalleryBigger.module.scss";

const GalleryBigger = ({ children }) => {
  return (
    <>
      <div className={styles.grid}>{children}</div>
    </>
  );
};

export default GalleryBigger;
