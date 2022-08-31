import React from "react";
import { MainBox } from "../../styled__components/common";

import Navigation from "../../components/ForHome/Navigation";
import HomeContent from "../../components/ForHome/HomeContent";
const index = () => {
  return (
    <MainBox>
      <Navigation />
      <HomeContent />
    </MainBox>
  );
};

export default index;
