import React from "react";
import style from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={style.overlay}>
      <picture>
        <source
          className={style.banner}
          media="(max-width: 425px)"
          srcSet={require("../../img/banner_320.jpg")}
        />
        <source
          className={style.banner}
          media="(max-width: 767px)"
          srcSet={require("../../img/banner_768.jpg")}
        />

        <img
          className={style.banner}
          src={require("../../img/banner_1200.jpg")}
          alt="Подари свет"
        />
      </picture>
    </div>
  );
};

export default Banner;
