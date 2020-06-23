import React from "react";
import style from "./TypesCompare.module.css";

const TypesCompare = ({ typeLamp, changeType }) => {
  return (
    <div className={style.btnOverlay}>
      <button
        className={
          typeLamp === "stand" ? style.btnTypeActive : style.btnTypePassive
        }
        type="button"
        name="stand"
        onClick={changeType}
      >
        Подставка
      </button>
      <button
        className={
          typeLamp === "pin" ? style.btnTypeActive : style.btnTypePassive
        }
        type="button"
        name="pin"
        onClick={changeType}
      >
        Прищепка
      </button>
    </div>
  );
};

export default TypesCompare;
