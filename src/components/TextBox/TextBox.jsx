import React from "react";
import styles from "./TextBox.module.scss";

const TextBox = ({ children }) => {
  return <div className={styles.text}>{children}</div>;
};

export default TextBox;
