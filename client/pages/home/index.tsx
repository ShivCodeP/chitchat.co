import React from "react";
import { MainBox } from "../../styled__components/common";

import Navigation from "../../components/ForHome/Navigation";
import HomeContent from "../../components/ForHome/HomeContent";
import { HomeBox } from "../../styled__components/home";
const index = () => {
  return (
    <MainBox>
      <HomeBox>
        <Navigation />
        <HomeContent />
      </HomeBox>
    </MainBox>
  );
};

export default index;
