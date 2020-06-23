import React, { Component } from "react";
import Compare from "../../components/Compare/Compare";
import allLamps from "../../helpers/lamps.json";

class ComparePage extends Component {
  state = {
    firstLampColor: "cherry",
    firstLampType: "stand",
    secondLampColor: "dark_blue",
    secondLampType: "stand",
    thirdLampColor: "red",
    thirdLampType: "stand",
    fourthLampColor: "melon",
    fourthLampType: "pin",
    fifthLampColor: "silver_metallic",
    fifthLampType: "pin",
    sixthLampColor: "green_bright",
    sixthLampType: "pin",
  };

  componentDidMount() {
    try {
      const compare = localStorage.getItem("compare");
      const compareParse = JSON.parse(compare);
      this.setState({
        firstLampColor:
          compareParse.firstLampColor === null
            ? undefined
            : compareParse.firstLampColor,
        firstLampType:
          compareParse.firstLampType === null
            ? undefined
            : compareParse.firstLampType,
        secondLampColor:
          compareParse.secondLampColor === null
            ? ""
            : compareParse.secondLampColor,
        secondLampType:
          compareParse.secondLampType === null
            ? ""
            : compareParse.secondLampType,
        thirdLampColor:
          compareParse.thirdLampColor === null
            ? undefined
            : compareParse.thirdLampColor,
        thirdLampType:
          compareParse.thirdLampType === null
            ? undefined
            : compareParse.thirdLampType,
        fourthLampColor:
          compareParse.fourthLampColor === null
            ? ""
            : compareParse.fourthLampColor,
        fourthLampType:
          compareParse.fourthLampType === null
            ? ""
            : compareParse.fourthLampType,
        fifthLampColor:
          compareParse.fifthLampColor === null
            ? undefined
            : compareParse.fifthLampColor,
        fifthLampType:
          compareParse.fifthLampType === null
            ? undefined
            : compareParse.fifthLampType,
        sixthLampColor:
          compareParse.sixthLampColor === null
            ? ""
            : compareParse.sixthLampColor,
        sixthLampType:
          compareParse.sixthLampType === null ? "" : compareParse.sixthLampType,
      });
    } catch (err) {
      console.log(err);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      firstLampColor,
      firstLampType,
      secondLampColor,
      secondLampType,
      thirdLampColor,
      thirdLampType,
      fourthLampColor,
      fourthLampType,
      fifthLampColor,
      fifthLampType,
      sixthLampColor,
      sixthLampType,
    } = this.state;

    if (
      prevState.firstLampColor !== firstLampColor ||
      prevState.firstLampType !== firstLampType ||
      prevState.secondLampColor !== secondLampColor ||
      prevState.secondLampType !== secondLampType ||
      prevState.thirdLampColor !== thirdLampColor ||
      prevState.thirdLampType !== thirdLampType ||
      prevState.fourthLampColor !== fourthLampColor ||
      prevState.fourthLampType !== fourthLampType ||
      prevState.fifthLampColor !== fifthLampColor ||
      prevState.fifthLampType !== fifthLampType ||
      prevState.sixthLampColor !== sixthLampColor ||
      prevState.sixthLampType !== sixthLampType
    ) {
      try {
        const compare = {
          firstLampColor,
          firstLampType,
          secondLampColor,
          secondLampType,
          thirdLampColor,
          thirdLampType,
          fourthLampColor,
          fourthLampType,
          fifthLampColor,
          fifthLampType,
          sixthLampColor,
          sixthLampType,
        };
        localStorage.setItem("compare", JSON.stringify(compare));
      } catch (err) {
        console.log(err);
      }
    }
  }

  changeType = (evt) => {
    const { name } = evt.target;
    const { id } = evt.target.parentNode.parentNode;

    this.setState({
      [`${id}Type`]: name,
    });
  };

  changeColor = (evt) => {
    const color = evt.target.id;
    const { id } = evt.target.parentNode.parentNode;

    this.setState({
      [`${id}Color`]: color,
    });
  };

  render() {
    const {
      firstLampColor,
      firstLampType,
      secondLampColor,
      secondLampType,
      thirdLampColor,
      thirdLampType,
      fourthLampColor,
      fourthLampType,
      fifthLampColor,
      fifthLampType,
      sixthLampColor,
      sixthLampType,
    } = this.state;
    const firstLampForRender = allLamps.find(
      (el) => el.color === firstLampColor && el.type === firstLampType
    );
    const firstLampForRenderWithId = {
      ...firstLampForRender,
      compareTitle: "firstLamp",
    };
    const secondLampForRender = allLamps.find(
      (el) => el.color === secondLampColor && el.type === secondLampType
    );
    const secondLampForRenderWithId = {
      ...secondLampForRender,
      compareTitle: "secondLamp",
    };
    const thirdLampForRender = allLamps.find(
      (el) => el.color === thirdLampColor && el.type === thirdLampType
    );
    const thirdLampForRenderWithId = {
      ...thirdLampForRender,
      compareTitle: "thirdLamp",
    };
    const fourthLampForRender = allLamps.find(
      (el) => el.color === fourthLampColor && el.type === fourthLampType
    );
    const fourthLampForRenderWithId = {
      ...fourthLampForRender,
      compareTitle: "fourthLamp",
    };
    const fifthLampForRender = allLamps.find(
      (el) => el.color === fifthLampColor && el.type === fifthLampType
    );
    const fifthLampForRenderWithId = {
      ...fifthLampForRender,
      compareTitle: "fifthLamp",
    };
    const sixthLampForRender = allLamps.find(
      (el) => el.color === sixthLampColor && el.type === sixthLampType
    );
    const sixthLampForRenderWithId = {
      ...sixthLampForRender,
      compareTitle: "sixthLamp",
    };

    const lampsForRender = [
      firstLampForRenderWithId,
      secondLampForRenderWithId,
      thirdLampForRenderWithId,
      fourthLampForRenderWithId,
      fifthLampForRenderWithId,
      sixthLampForRenderWithId,
    ];

    return (
      <div>
        <Compare
          lamps={lampsForRender}
          changeType={this.changeType}
          changeColor={this.changeColor}
          firstLampColor={firstLampColor}
          firstLampType={firstLampType}
          secondLampColor={secondLampColor}
          secondLampType={secondLampType}
          thirdLampColor={thirdLampColor}
          thirdLampType={thirdLampType}
          fourthLampColor={fourthLampColor}
          fourthLampType={fourthLampType}
          fifthLampColor={fifthLampColor}
          fifthLampType={fifthLampType}
          sixthLampColor={sixthLampColor}
          sixthLampType={sixthLampType}
        />
      </div>
    );
  }
}

export default ComparePage;
