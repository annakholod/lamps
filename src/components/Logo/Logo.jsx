import React from "react";
import style from "./Logo.module.css";
import { NavLink } from "react-router-dom";

const Logo = ({ closeMenu }) => {
  return (
    <div className={style.logo}>
      <NavLink to="/" className={style.logoOverlay} onClick={closeMenu}>
        {document.documentElement.clientWidth < 768 && (
          <img
            className={style.logoImg}
            src={require("../../img/logo_320.png")}
            alt="LampaОПТ"
          />
        )}
        {document.documentElement.clientWidth > 767 && (
          <img
            className={style.logoImg}
            src={require("../../img/logo.png")}
            alt="LampaОПТ"
          />
        )}
        <p className={style.titleLampa}>Lampa</p>
        <div className={style.titleOptContainer}>
          <p className={style.titleOpt}>ОПТ</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Logo;
