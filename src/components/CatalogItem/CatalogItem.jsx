import React from "react";
import style from "./CatalogItem.module.css";
import shortid from "shortid";
import Modal from "../Modal/Modal";
import ModalCard from "../ModalCard/ModalCard";

const CatalogItem = ({
  color,
  title,
  photos,
  changeLamp,
  changePhoto,
  selectedLamp,
  selectedPhoto,
  isOpenModal,
  openModal,
  closeModal,
  lamps,
  checkedLampId,
  selectedPhotoInd,
}) => {
  const checkedLamp = lamps.find((el) => el.color === checkedLampId);

  return (
    <li className={style.catalogItem} onMouseOver={() => changeLamp(color)}>
      <div className={style.mainPhotoOverlay} id={color}>
        {photos.length > 0 ? (
          selectedLamp === color ? (
            <img
              className={style.mainPhoto}
              src={require(`../../img/lamps/${photos[selectedPhoto]}.jpg`)}
              alt=""
            />
          ) : (
            <img
              className={style.mainPhoto}
              src={require(`../../img/lamps/${photos[0]}.jpg`)}
              alt=""
            />
          )
        ) : (
          <img className={style.mainPhoto} src="" alt="" />
        )}
        <div className={style.photoBg} onClick={openModal}></div>
      </div>
      <ul className={style.photosList}>
        {photos.map((el, ind) => (
          <li className={style.photosItem} key={shortid.generate()}>
            <img
              className={style.photosItemImg}
              src={require(`../../img/lamps/${el}.jpg`)}
              alt=""
            />
            <div
              className={style.photosItemOverlay}
              style={{
                background:
                  ind === selectedPhoto && color === selectedLamp
                    ? "none"
                    : "rgba(255, 255, 255, 0.5)",
              }}
              onMouseOver={() => changePhoto(ind)}
            ></div>
          </li>
        ))}
      </ul>
      <p className={style.title}>{title}</p>
      {isOpenModal && (
        <Modal closeModal={closeModal}>
          <ModalCard
            checkedLamp={checkedLamp}
            selectedPhotoInd={selectedPhotoInd}
          />
        </Modal>
      )}
    </li>
  );
};

export default CatalogItem;
