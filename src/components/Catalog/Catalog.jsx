import React from "react";
import style from "./Catalog.module.css";
import CatalogItem from "../CatalogItem/CatalogItem";

const Catalog = ({
  lamps,
  typeLamps,
  changeLamp,
  changePhoto,
  selectedLamp,
  selectedPhoto,
  isOpenModal,
  openModal,
  closeModal,
  checkedLampId,
  selectedPhotoInd,
}) => {
  return (
    <div className={style.overlay}>
      <p className={style.title}>
        {typeLamps === "stand" ? "Лампы на подставке" : "Лампы на прищепке"}
      </p>
      <ul className={style.catalogList}>
        {lamps.map((el) => (
          <CatalogItem
            key={el.id}
            {...el}
            changeLamp={changeLamp}
            changePhoto={changePhoto}
            selectedLamp={selectedLamp}
            selectedPhoto={selectedPhoto}
            isOpenModal={isOpenModal}
            openModal={openModal}
            closeModal={closeModal}
            lamps={lamps}
            checkedLampId={checkedLampId}
            selectedPhotoInd={selectedPhotoInd}
          />
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
