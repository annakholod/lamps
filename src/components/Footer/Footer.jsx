import React from "react";
import style from "./Footer.module.css";
import contacts from "../../helpers/contacts.json";

const Footer = () => {
  return (
    <div className={style.footer}>
      <p className={style.description}>
        {`НАШИ КОНТАКТЫ: ${contacts.phone} ${contacts.operator}, ${contacts.email}`}
      </p>
    </div>
  );
};

export default Footer;
