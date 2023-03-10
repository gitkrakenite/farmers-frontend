import React, { useState } from "react";
import bgVideo from "../../assets/bgg2.mp4";
import "./hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleAuth = (user) => {
    user === "farmer" ? navigate("/fauth") : navigate("/uauth");
  };

  return (
    <div className="relative ">
      {/* <img
        src="https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        className="h-[85vh] w-[100%] object-cover"
      /> */}
      <video
        className="w-full h-[85vh] object-cover"
        src={bgVideo}
        autoPlay
        muted
        loop
      />
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.63)] " />
      {/* contentWrapper */}
      <div className="absolute w-full h-full top-0 flex flex-col  pl-[2em] pr-[2em] text-white pt-[10px]">
        {/* content */}
        <div className="">
          {/* topBar */}
          <div className="flex justify-between items-center">
            {/* logo */}
            <div>
              <h1 className="pt-[5px] text-2xl  md:text-4xl">
                MKU<span className="text-green-500">LIMA</span>
              </h1>
            </div>
            <div>
              <span
                className="bg-green-700 p-[8px] md:p-[15px] rounded-md cursor-pointer text-zinc-200"
                style={{ fontWeight: 500 }}
              >
                Get Started
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center  pl-[2em] pr-[2em] text-white pt-[10px] text-center">
        <div style={{ lineHeight: "1.9em" }}>
          <h1 className=" leading-10  text-2xl sm:text-3xl md:text-6xl mb-4">
            The Best Farmers Platform
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-6xl mb-4">
            anywhere in the world,{" "}
          </h1>
        </div>
        <p
          className="text-xl sm:text-2xl md:text-4xl mt-[0.2em] mb-[0.7em]"
          style={{ fontWeight: 300, letterSpacing: "1px" }}
        >
          Connect, Invest and Sell
        </p>
        <p
          className="mb-[40px]"
          style={{ fontWeight: 300, letterSpacing: "1px" }}
        >
          Are you ready to get started with the number one farmers platform ?
        </p>
        <div className=" block md:flex gap-[20px]">
          <div className="mb-[4em] md:mb-0">
            <span
              onClick={() => handleAuth("farmer")}
              className="splashGetStarted"
            >
              Join As a Farmer
            </span>
          </div>
          <div>
            <span
              onClick={() => handleAuth("user")}
              className="splashGetStarted"
            >
              Join As a Friend
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
