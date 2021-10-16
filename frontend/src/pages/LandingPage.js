import Header from "../components/Header";
import Content from "../components/Content";
import React from "react";

import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="common">
      <Header></Header>
      <Content></Content>
    </div>
  );
};

export default LandingPage;
