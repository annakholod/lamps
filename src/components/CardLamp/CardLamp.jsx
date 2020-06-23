import React from "react";
import style from "./CardLamp.module.css";
import lampsDescription from "../../helpers/description.json";
import colors from "../../helpers/colors.json";
import shortid from "shortid";

const CardLamp = ({
  type,
  selectedPhoto,
  changeMainPhoto,
  leafMainPhoto,
  selectedColor,
  selectedColorId,
  changeColor,
  photosListRef,
}) => {
  return (
    <li className={style.listItem}>
      <p className={style.title}>
        Лампа{" "}
        <span className={style.titleDecor}>
          {" "}
          {type === "stand" ? "на подставке" : "на прищепке"}
        </span>
      </p>
      <div className={style.listItemWrapper}>
        <div className={style.photos}>
          <div className={style.mainPhotoOverlay}>
            {selectedColor.photos.length > 0 ? (
              <img
                className={style.mainPhoto}
                src={require(`../../img/lamps/${selectedColor.photos[selectedPhoto]}.jpg`)}
                alt={
                  type === "stand" ? "Лампа на подставке" : "Лампа на прищепке"
                }
              />
            ) : (
              <img
                className={style.mainPhoto}
                src=""
                alt={
                  type === "stand" ? "Лампа на подставке" : "Лампа на прищепке"
                }
              />
            )}
            <button
              className={style.btnPrev}
              type="button"
              name="prev"
              onClick={(evt) =>
                leafMainPhoto(evt, type, selectedColor.photos.length)
              }
            ></button>
            <button
              className={style.btnNext}
              type="button"
              name="next"
              onClick={(evt) =>
                leafMainPhoto(evt, type, selectedColor.photos.length)
              }
            ></button>
          </div>
          <ul className={style.photosList} id="photosList" ref={photosListRef}>
            {selectedColor.photos.map((el, ind) => (
              <li
                className={style.photosListItem}
                key={shortid.generate()}
                type={type}
                onMouseOver={() => changeMainPhoto(ind, type)}
              >
                <div
                  className={style.opacityOverlay}
                  style={{
                    background:
                      ind === selectedPhoto
                        ? "none"
                        : "rgba(255, 255, 255, 0.5)",
                  }}
                ></div>
                <img
                  className={style.galleryPhoto}
                  src={require(`../../img/lamps/${el}.jpg`)}
                  alt=""
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={style.wrapperDescr}>
          <p className={style.description}>{lampsDescription[type]}</p>
          <p className={style.colorName}>{selectedColor.title}</p>
          <div className={style.colors}>
            <p className={style.color}>Цвет:</p>
            <ul className={style.listColors}>
              {colors.map((el) => (
                <li className={style.listColorsItem} key={el.id}>
                  <button
                    type="button"
                    className={style.listColorsItemBtn}
                    id={el.id}
                    disabled={selectedColorId === el.id}
                    style={{
                      backgroundColor: el.ccsColor,
                    }}
                    onClick={(evt) => changeColor(evt, type)}
                  >
                    {selectedColorId === el.id && el.theme === "dark" && (
                      <p className={style.iconDarkTheme}>&#10004;</p>
                    )}
                    {selectedColorId === el.id && el.theme === "light" && (
                      <p className={style.iconLightTheme}>&#10004;</p>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardLamp;
