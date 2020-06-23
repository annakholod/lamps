import React, { Component, createRef } from "react";
import style from "./Lamps.module.css";
import lamps from "../../helpers/lamps.json";
import CardLamp from "../CardLamp/CardLamp";

class Lamps extends Component {
  state = {
    selectedPhotoStand: 0,
    selectedPhotoPin: 0,
    selectedColorStand: "black_antique",
    selectedColorPin: "black_antique",
  };

  photosListStandRef = createRef();
  photosListPinRef = createRef();

  changeMainPhoto = (ind, type) => {
    type === "stand"
      ? this.setState({
          selectedPhotoStand: ind,
        })
      : this.setState({
          selectedPhotoPin: ind,
        });
  };

  leafMainPhoto = (evt, type, length) => {
    const { name } = evt.target;
    const { selectedPhotoStand, selectedPhotoPin } = this.state;

    if (type === "stand" && name === "next") {
      this.setState(
        (prevState) => ({
          selectedPhotoStand:
            prevState.selectedPhotoStand < length - 1
              ? prevState.selectedPhotoStand + 1
              : 0,
        }),
        () => this.scroll("stand", "next", selectedPhotoStand, length)
      );
    } else if (type === "stand" && name === "prev") {
      this.setState(
        (prevState) => ({
          selectedPhotoStand:
            prevState.selectedPhotoStand > 0
              ? prevState.selectedPhotoStand - 1
              : length - 1,
        }),
        () => this.scroll("stand", "prev", selectedPhotoStand, length)
      );
    }
    if (type === "pin" && name === "next") {
      this.setState(
        (prevState) => ({
          selectedPhotoPin:
            prevState.selectedPhotoPin < length - 1
              ? prevState.selectedPhotoPin + 1
              : 0,
        }),
        () => this.scroll("pin", "next", selectedPhotoPin, length)
      );
    } else if (type === "pin" && name === "prev") {
      this.setState(
        (prevState) => ({
          selectedPhotoPin:
            prevState.selectedPhotoPin > 0
              ? prevState.selectedPhotoPin - 1
              : length - 1,
        }),
        () => this.scroll("pin", "prev", selectedPhotoPin, length)
      );
    }
  };

  scroll = (type, name, selectedPhoto, length) => {
    let current;
    if (type === "stand") {
      current = this.photosListStandRef.current;
    } else if (type === "pin") {
      current = this.photosListPinRef.current;
    }

    if (name === "next") {
      if (selectedPhoto > 1 && selectedPhoto < length - 1) {
        current.scrollLeft += 50;
      } else {
        current.scrollLeft = 0;
      }
    } else if (name === "prev") {
      if (selectedPhoto > 0 && selectedPhoto < length - 2) {
        current.scrollLeft -= 50;
      } else {
        current.scrollLeft = current.scrollWidth;
      }
    }
  };

  changeColor = (evt, type) => {
    const { id } = evt.target;
    let current;

    if (type === "stand") {
      this.setState({
        selectedColorStand: id,
        selectedPhotoStand: 0,
      });
      current = this.photosListStandRef.current;
      current.scrollLeft = 0;
    } else if (type === "pin") {
      this.setState({
        selectedColorPin: id,
        selectedPhotoPin: 0,
      });
      current = this.photosListPinRef.current;
      current.scrollLeft = 0;
    }
  };

  render() {
    const {
      selectedPhotoStand,
      selectedPhotoPin,
      selectedColorStand,
      selectedColorPin,
    } = this.state;
    const selectedColorStandLamp = lamps.find(
      (el) => el.color === selectedColorStand && el.type === "stand"
    );
    const selectedColorPinLamp = lamps.find(
      (el) => el.color === selectedColorPin && el.type === "pin"
    );

    return (
      <div className={style.overlay}>
        <ul className={style.lampsList}>
          <CardLamp
            type="stand"
            selectedPhoto={selectedPhotoStand}
            changeMainPhoto={this.changeMainPhoto}
            leafMainPhoto={this.leafMainPhoto}
            selectedColor={selectedColorStandLamp}
            selectedColorId={selectedColorStand}
            changeColor={this.changeColor}
            photosListRef={this.photosListStandRef}
          />
          <CardLamp
            type="pin"
            selectedPhoto={selectedPhotoPin}
            changeMainPhoto={this.changeMainPhoto}
            leafMainPhoto={this.leafMainPhoto}
            selectedColor={selectedColorPinLamp}
            selectedColorId={selectedColorPin}
            changeColor={this.changeColor}
            photosListRef={this.photosListPinRef}
          />
        </ul>
      </div>
    );
  }
}

export default Lamps;
