import React from "react";
import style from "./Contacts.module.css";
import contacts from "../../helpers/contacts.json";

const Contacts = () => {
  return (
    <div className={style.overlay}>
      <p className={style.title}>Контакты</p>
      <div className={style.textWrapper}>
        <p className={style.name}>Адрес:</p>
        <p className={style.value}>{contacts.address}</p>
      </div>
      <div className={style.textWrapper}>
        <p className={style.name}>Телефон:</p>
        <p className={style.value}>
          {contacts.phone} <span>{contacts.operator}</span>
        </p>
      </div>
      <div className={style.textWrapper}>
        <p className={style.name}>Email:</p>
        <p className={style.value}>{contacts.email}</p>
      </div>
      <iframe
        title="map"
        className={style.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.611776597779!2d37.44561031593165!3d55.78261418056133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b548e8a9b01a4b%3A0x8a9775ce714465b6!2z0L3QsNCxLiDQndC-0LLQuNC60L7QstCwLdCf0YDQuNCx0L7RjywgMywg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDEyMzEwMw!5e0!3m2!1sru!2sua!4v1591603451245!5m2!1sru!2sua"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default Contacts;
