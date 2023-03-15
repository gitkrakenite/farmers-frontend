import React from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Problems from "../../components/problems/Problems";
import Rightbar from "../../components/rightbar/Rightbar";
import "./landing.css";

const Landing = () => {
  return (
    <div className="  md:pl-[10px] md:pr-[10px] lg:pl-[2em] lg:pr-[2em] md:pt-[1em] w-[100%]">
      <Header />
      <div className="flex pt-[2em] gap-[10px]">
        <div className=" hidden lg:flex lg:w-[20%] ">
          <Problems />
        </div>
        <div className="w-[100%] lg:w-[60%] ">
          <Posts />
        </div>
        <div className="hidden lg:flex lg:w-[20%] ">
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Landing;
