import React from "react";
import "./splash.css";
import Header from "../../components/header/Header";
import Who from "../../components/whoWeAre/Who";
import Services from "../../components/services/Services";

import Footer from "../../components/banner/Footer";

const Splash = () => {
  return (
    <div className="relative ">
      <Header />
      <Who />
      <Services />
      <Footer />
    </div>
  );
};

export default Splash;
