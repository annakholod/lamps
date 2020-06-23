import React from "react";
import Banner from "../../components/Banner/Banner";
import Lamps from "../../components/Lamps/Lamps";
import Description from "../../components/Description/Description";
import SectionDelivery from "../../components/SectionDelivery/SectionDelivery";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Lamps />
      <Description />
      <SectionDelivery />
    </div>
  );
};

export default HomePage;
