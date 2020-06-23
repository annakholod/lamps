import React, { Component } from "react";
import style from "./ModalCard.module.css";
import shortid from "shortid";
import ReactPlayer from "react-player/youtube";

class ModalCard extends Component {
  state = {
    selectedPhoto: this.props.selectedPhotoInd,
    isShowVideo: false,
  };

  changePhoto = (evt, length) => {
    const { name } = evt.target;

    if (name === "next") {
      this.setState(
        (prevState) => ({
          selectedPhoto:
            prevState.selectedPhoto < length - 1
              ? prevState.selectedPhoto + 1
              : -1,
        }),
        () => {
          this.showVideoBtn(length);
        }
      );
    } else if (name === "prev") {
      this.setState(
        (prevState) => ({
          selectedPhoto:
            prevState.selectedPhoto > 0 ? prevState.selectedPhoto - 1 : length,
        }),
        () => {
          this.showVideoBtn(length);
        }
      );
    }
  };

  changePhotoHover = (ind) => {
    this.setState({
      isShowVideo: false,
      selectedPhoto: ind,
    });
  };

  showVideo = () => {
    this.setState({
      isShowVideo: true,
      selectedPhoto: -1,
    });
  };

  showVideoBtn = (length) => {
    const { selectedPhoto } = this.state;

    if (selectedPhoto === -1 || selectedPhoto === length) {
      this.setState({
        isShowVideo: true,
      });
    } else {
      this.setState({
        isShowVideo: false,
      });
    }
  };

  render() {
    const { checkedLamp } = this.props;
    const { selectedPhoto, isShowVideo } = this.state;

    return (
      <div className={style.cardOverlay}>
        <div className={style.mainPhotoOverlay}>
          {isShowVideo && (
            <ReactPlayer
              url={checkedLamp.video}
              width="80%"
              height="90%"
              style={{ margin: "0 auto", padding: "10px 0 0 0" }}
            />
          )}
          {selectedPhoto >= 0 && selectedPhoto < checkedLamp.photos.length && (
            <img
              className={style.mainPhoto}
              src={require(`../../img/lamps/${checkedLamp.photos[selectedPhoto]}.jpg`)}
              alt=""
            />
          )}
          <button
            className={style.btnPrev}
            type="button"
            name="prev"
            onClick={(evt) => this.changePhoto(evt, checkedLamp.photos.length)}
          ></button>
          <button
            className={style.btnNext}
            type="button"
            name="next"
            onClick={(evt) => this.changePhoto(evt, checkedLamp.photos.length)}
          ></button>
        </div>
        <ul className={style.listPhotos}>
          {checkedLamp.photos.map((el, ind) => (
            <li key={shortid.generate()} className={style.listPhotosItem}>
              <img
                className={style.listPhoto}
                src={require(`../../img/lamps/${el}.jpg`)}
                alt=""
              />
              <div
                className={style.photoOverlay}
                style={{
                  background:
                    ind === selectedPhoto ? "none" : "rgba(255, 255, 255, 0.5)",
                }}
                onMouseOver={() => this.changePhotoHover(ind)}
              ></div>
            </li>
          ))}
          {checkedLamp.video && (
            <li key={shortid.generate()} className={style.listPhotosItem}>
              <img
                src={require(`../../img/video.png`)}
                alt=""
                id="video"
                onMouseOver={this.showVideo}
              />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ModalCard;
