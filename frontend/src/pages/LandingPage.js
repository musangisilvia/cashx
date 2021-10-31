import Header from "../components/Header";
import Content from "../components/Content";
import React from "react";

import "../styles/LandingPage.css";
import About from "../components/About";
import FooterLanding from "../components/FooterLanding";

const LandingPage = () => {
  return (
    <>
      <div className="common">
        <Header></Header>
        <Content></Content>
      </div>
       <About />
       <FooterLanding />
    </>
  );
};

export default LandingPage;
