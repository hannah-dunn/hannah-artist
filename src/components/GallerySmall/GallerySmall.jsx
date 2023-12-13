import React from "react";
import styles from "./GallerySmall.module.scss";
import Image from "../Image/Image";

const GallerySmall = ({ children }) => {
  return (
    <>
      <div className={styles.grid}>{children}</div>
    </>
  );
};

export default GallerySmall;
