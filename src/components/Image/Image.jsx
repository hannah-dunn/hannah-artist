import style from "./Image.module.scss";

const Image = () => {
  return (
    <div className={style.box}>
      <img
        className={style.img}
        src="/hero.jpg"
        alt="outside water tank in dark"
      />
    </div>
  );
};

export default Image;
