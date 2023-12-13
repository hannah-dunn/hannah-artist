import style from "./Gif.module.scss";

const Gif = () => {
  return (
    <div className={style.box}>
      <img
        className={style.img}
        src="/gif.gif"
        alt="sorry the blood isnt mine"
      />
    </div>
  );
};

export default Gif;
