import React from "react";
import style from "./SectionDelivery.module.css";
import contacts from "../../helpers/contacts.json";

const SectionDelivery = () => {
  return (
    <div className={style.overlay}>
      <div className={style.titleOverlay}>
        <p className={style.title}>Условия доставки</p>
      </div>
      <p className={style.delivery}>{contacts.delivery.delivery1}</p>
      <p className={style.delivery}>{contacts.delivery.delivery2}</p>
      <p className={style.delivery}>{contacts.delivery.delivery3}</p>
    </div>
  );
};

export default SectionDelivery;
