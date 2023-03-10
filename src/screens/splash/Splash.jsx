import React from "react";
import "./splash.css";
import Who from "../../components/whoWeAre/Who";
import Services from "../../components/services/Services";

import Footer from "../../components/banner/Footer";
import Hero from "../../components/hero/Hero";

const Splash = () => {
  return (
    <div className="relative ">
      <Hero />
      <Who />
      <Services />
      <Footer />
    </div>
  );
};

export default Splash;
