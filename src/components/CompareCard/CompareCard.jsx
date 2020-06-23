import React from "react";
import style from "./CompareCard.module.css";
import colors from "../../helpers/colors.json";
import TypesCompare from "../TypesCompare/TypesCompare";

const CompareCard = ({
  photos,
  title,
  compareTitle,
  changeType,
  changeColor,
  firstLampColor,
  firstLampType,
  secondLampColor,
  secondLampType,
  thirdLampColor,
  thirdLampType,
  fourthLampColor,
  fourthLampType,
  fifthLampColor,
  fifthLampType,
  sixthLampColor,
  sixthLampType,
}) => {
  return (
    <li className={style.compareItem} id={compareTitle}>
      {compareTitle === "firstLamp" && (
        <TypesCompare typeLamp={firstLampType} changeType={changeType} />
      )}
      {compareTitle === "secondLamp" && (
        <TypesCompare typeLamp={secondLampType} changeType={changeType} />
      )}
      {compareTitle === "thirdLamp" && (
        <TypesCompare typeLamp={thirdLampType} changeType={changeType} />
      )}
      {compareTitle === "fourthLamp" && (
        <TypesCompare typeLamp={fourthLampType} changeType={changeType} />
      )}
      {compareTitle === "fifthLamp" && (
        <TypesCompare typeLamp={fifthLampType} changeType={changeType} />
      )}
      {compareTitle === "sixthLamp" && (
        <TypesCompare typeLamp={sixthLampType} changeType={changeType} />
      )}
      <div className={style.compareItemOverlay}>
        {photos.length > 0 ? (
          <img
            className={style.mainPhoto}
            src={require(`../../img/lamps/${photos[0]}.jpg`)}
            alt={`Лампа ${title}`}
          />
        ) : (
          <img className={style.mainPhoto} src="" alt={`Лампа ${title}`} />
        )}
        <ul className={style.listColors} id={compareTitle}>
          {colors.map((el) => (
            <li className={style.listColorsItem} key={el.id}>
              <button
                type="button"
                className={style.listColorsItemBtn}
                id={el.id}
                style={{
                  backgroundColor: el.ccsColor,
                }}
                onClick={changeColor}
              >
                {firstLampColor === el.id &&
                  compareTitle === "firstLamp" &&
                  el.theme === "dark" && (
                    <p className={style.iconDarkTheme}>&#10004;</p>
                  )}
                {firstLampColor === el.id &&
                  compareTitle === "firstLamp" &&
                  el.theme === "light" && (
                    <p className={style.iconLightTheme}>&#10004;</p>
                  )}
                {secondLampColor === el.id &&
                  compareTitle === "secondLamp" &&
                  el.theme === "dark" && (
                    <p className={style.iconDarkTheme}>&#10004;</p>
                  )}
                {secondLampColor === el.id &&
                  compareTitle === "secondLamp" &&
                  el.theme === "light" && (
                    <p className={style.iconLightTheme}>&#10004;</p>
                  )}
                {thirdLampColor === el.id &&
                  compareTitle === "thirdLamp" &&
                  el.theme === "dark" && (
                    <p className={style.iconDarkTheme}>&#10004;</p>
                  )}
                {thirdLampColor === el.id &&
                  compareTitle === "thirdLamp" &&
                  el.theme === "light" && (
                    <p className={style.iconLightTheme}>&#10004;</p>
                  )}
                {fourthLampColor === el.id &&
                  compareTitle === "fourthLamp" &&
                  el.theme === "dark" && (
                    <p className={style.iconDarkTheme}>&#10004;</p>
                  )}
                {fourthLampColor === el.id &&
                  compareTitle === "fourthLamp" &&
                  el.theme === "light" && (
                    <p className={style.iconLightTheme}>&#10004;</p>
                  )}
                {fifthLampColor === el.id &&
                  compareTitle === "fifthLamp" &&
                  el.theme === "dark" && (
                    <p className={style.iconDarkTheme}>&#10004;</p>
                  )}
                {fifthLampColor === el.id &&
                  compareTitle === "fifthLamp" &&
                  el.theme === "light" && (
                    <p className={style.iconLightTheme}>&#10004;</p>
                  )}
                {sixthLampColor === el.id &&
                  compareTitle === "sixthLamp" &&
                  el.theme === "dark" && (
                    <p className={style.iconDarkTheme}>&#10004;</p>
                  )}
                {sixthLampColor === el.id &&
                  compareTitle === "sixthLamp" &&
                  el.theme === "light" && (
                    <p className={style.iconLightTheme}>&#10004;</p>
                  )}
              </button>
            </li>
          ))}
        </ul>
        <p className={style.title}>{title}</p>
      </div>
    </li>
  );
};

export default CompareCard;
