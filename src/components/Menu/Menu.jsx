import React from "react";
import style from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const Menu = ({ isMenuOpen, toggleMenu, isMenuLampsOpen, toggleMenuLamps }) => {
  return (
    <div className={style.menu}>
      {document.documentElement.clientWidth < 768 && isMenuOpen && (
        <button className={style.btnMenu} type="button" onClick={toggleMenu}>
          <span className={`material-icons ${style.iconMenu}`}>close</span>
        </button>
      )}
      <ul className={style.menuList}>
        <li className={style.listItem}>
          <button
            type="button"
            className={style.btnTitle}
            onClick={toggleMenuLamps}
          >
            Лампы
            {isMenuLampsOpen ? (
              <span className={`material-icons ${style.iconExpand}`}>
                expand_less
              </span>
            ) : (
              <span className={`material-icons ${style.iconExpand}`}>
                expand_more
              </span>
            )}
          </button>
          {isMenuLampsOpen && (
            <ul className={style.listItemLamps}>
              <li className={style.listItemLamps}>
                <NavLink
                  to="/lamps/stand"
                  className={style.title}
                  id="stand"
                  onClick={toggleMenu}
                >
                  Подставка
                </NavLink>
              </li>
              <li className={style.listItemLamps}>
                <NavLink
                  to="/lamps/pin"
                  className={style.title}
                  id="pin"
                  onClick={toggleMenu}
                >
                  Прищепка
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li className={style.listItem}>
          <NavLink to="/compare" className={style.title} onClick={toggleMenu}>
            Сравнение
          </NavLink>
        </li>
        <li className={style.listItem}>
          <NavLink to="/delivery" className={style.title} onClick={toggleMenu}>
            Доставка и оплата
          </NavLink>
        </li>
        <li className={style.listItem}>
          <NavLink to="/contacts" className={style.title} onClick={toggleMenu}>
            Контакты
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
