import React from "react";
import style from "./Compare.module.css";
import CompareCard from "../CompareCard/CompareCard";
import shortid from "shortid";

const Compare = ({
  lamps,
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
    <div className={style.overlay}>
      <p className={style.title}>Сравнение</p>
      <ul className={style.catalogList}>
        {lamps.map((el) => (
          <CompareCard
            key={shortid.generate()}
            photos={el.photos}
            title={el.title}
            compareTitle={el.compareTitle}
            changeType={changeType}
            changeColor={changeColor}
            firstLampColor={firstLampColor}
            firstLampType={firstLampType}
            secondLampColor={secondLampColor}
            secondLampType={secondLampType}
            thirdLampColor={thirdLampColor}
            thirdLampType={thirdLampType}
            fourthLampColor={fourthLampColor}
            fourthLampType={fourthLampType}
            fifthLampColor={fifthLampColor}
            fifthLampType={fifthLampType}
            sixthLampColor={sixthLampColor}
            sixthLampType={sixthLampType}
          />
        ))}
      </ul>
    </div>
  );
};

export default Compare;
