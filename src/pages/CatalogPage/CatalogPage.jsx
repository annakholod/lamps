import React, { Component } from "react";
import Catalog from "../../components/Catalog/Catalog";
import allLamps from "../../helpers/lamps.json";

class CatalogPage extends Component {
  state = {
    selectedLamp: "",
    selectedPhoto: 0,
    selectedPhotoInd: 0,
    isOpenModal: false,
    checkedLampId: null,
  };

  changeLamp = (id) => {
    this.setState(
      {
        selectedLamp: id,
      },
      this.changePhotoNew(id)
    );
  };

  changePhotoNew = (id) => {
    const { selectedLamp } = this.state;

    if (selectedLamp !== id) {
      this.setState({
        selectedPhoto: 0,
        selectedPhotoInd: 0,
      });
    }
  };

  changePhoto = (ind) => {
    this.setState({
      selectedPhoto: ind,
      selectedPhotoInd: ind,
    });
  };

  openModal = (evt) => {
    const { id } = evt.target.parentNode;

    this.setState({
      checkedLampId: id,
      isOpenModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      isOpenModal: false,
      selectedPhotoInd: 0,
    });
  };

  render() {
    const {
      selectedPhoto,
      selectedLamp,
      isOpenModal,
      checkedLampId,
      selectedPhotoInd,
    } = this.state;
    const { type } = this.props.match.params;
    const lampsForRender = allLamps.filter((el) => el.type === type);

    return (
      <div>
        <Catalog
          lamps={lampsForRender}
          typeLamps={type}
          changeLamp={this.changeLamp}
          changePhoto={this.changePhoto}
          selectedLamp={selectedLamp}
          selectedPhoto={selectedPhoto}
          isOpenModal={isOpenModal}
          openModal={this.openModal}
          closeModal={this.closeModal}
          checkedLampId={checkedLampId}
          selectedPhotoInd={selectedPhotoInd}
        />
      </div>
    );
  }
}

export default CatalogPage;
