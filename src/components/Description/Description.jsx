import React from "react";
import style from "./Description.module.css";
import lampsDescription from "../../helpers/description.json";
import features from "../../helpers/features.json";

const Description = () => {
  return (
    <div className={style.overlay}>
      <p className={style.title}>
        Лампа <span className={style.titleDecor}>Eldini</span>
      </p>
      <div className={style.container}>
        <div className={style.photos}>
          <img
            className={style.imgWoman}
            src={require("../../img/descr_woman.jpg")}
            alt=""
          />
          <img
            className={style.imgGirl}
            src={require("../../img/descr_girl.jpg")}
            alt=""
          />
        </div>
        <div className={style.overlayDescr}>
          <p className={style.description}>{lampsDescription.description}</p>
          <p className={style.titleFeatures}>Характеристики</p>
          {features.map((el) => (
            <p key={el.title} className={style.featuresName}>
              {`${el.title}: `}
              <span className={style.featuresValue}>{el.value}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
