import React from "react";
import style from "./Image.module.scss";

const Image = ({ src, alt }) => {
  return (
    <div className={style.box}>
      <img className={style.img} src={src} alt={alt} />
    </div>
  );
};

export default Image;
