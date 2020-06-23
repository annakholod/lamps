import React from "react";
import style from "./Delivery.module.css";
import contacts from "../../helpers/contacts.json";

const Delivery = () => {
  return (
    <div className={style.overlay}>
      <p className={style.title}>Условия доставки</p>
      <img
        className={style.image}
        src={require("../../img/sec_delivery.jpg")}
        alt="Условия доставки"
      />
      <p className={style.delivery}>{contacts.delivery.delivery1}</p>
      <p className={style.delivery}>{contacts.delivery.delivery2}</p>
      <p className={style.delivery}>{contacts.delivery.delivery3}</p>
    </div>
  );
};

export default Delivery;
