import React from "react";
import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={style.navigation}>
      <div className={style.menu}>
        <ul className={style.menuList}>
          <li className={style.listItem}>
            <NavLink to="/" className={style.title}>
              Главная
            </NavLink>
          </li>
          <li className={`${style.listItem} ${style.listItemLamp}`}>
            <div className={style.lampsOverlay}>
              <p className={style.titleLamps}>Лампы</p>
              <div className={style.iconExpends}></div>
            </div>
            <ul className={style.listLamps}>
              <li className={style.listItemLamps}>
                <NavLink
                  to="/lamps/stand"
                  className={style.titleTypeLamp}
                  id="stand"
                >
                  Подставка
                </NavLink>
              </li>
              <li className={style.listItemLamps}>
                <NavLink
                  to="/lamps/pin"
                  className={style.titleTypeLamp}
                  id="pin"
                >
                  Прищепка
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={style.listItem}>
            <NavLink to="/delivery" className={style.title}>
              Доставка и оплата
            </NavLink>
          </li>
          <li className={style.listItem}>
            <NavLink to="/contacts" className={style.title}>
              Контакты
            </NavLink>
          </li>
        </ul>
        <NavLink to="/compare" className={style.btnCompare}></NavLink>
      </div>
    </div>
  );
};

export default Navigation;
