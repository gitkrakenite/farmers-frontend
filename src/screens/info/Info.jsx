import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./info.css";
import { dummyInfo } from "../../data";
import { RiDeleteBinLine } from "react-icons/ri";

const Info = () => {
  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className=" pl-[6px] pr-[6px] pt-[5px] md:pl-[2em] md:pr-[2em] md:pt-[1em]">
      {/* header */}
      <div
        className=" block md:flex justify-between items-center gap-5 p-[5px]"
        style={{
          position: "sticky",
          backgroundColor: "#e2dfdf",
          top: 0,
          zIndex: 999,
        }}
      >
        {/* left side */}
        <div className=" flex-[0.6] xl:flex-[0.4] flex justify-between items-center">
          <div className="flex justify-between items-center">
            <div className="cursor-pointer">
              <Link to="/landing" style={{ color: "inherit" }}>
                <h1>
                  MKU<span className="text-green-600 font-serif">LIMA</span>{" "}
                </h1>
              </Link>
            </div>
          </div>

          {/* scroll to top */}
          <div onClick={ScrollTop} title="scroll up">
            <AiOutlineArrowUp className="text-4xl cursor-pointer text-green-700" />
          </div>

          {/* user details */}
          <div>
            <Link to="/profile/45" className="  ">
              <div className="flex gap-[10px] items-center  rounded-xl p-[5px] cursor-pointer justify-center">
                <div
                  className=" hidden lg:flex items-center text-zinc-800 p-[10px]"
                  style={{ border: "1px solid green" }}
                >
                  <span>Hello Joyce</span>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/3221849/pexels-photo-3221849.png?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    className="w-[40px] h-[40px] object-cover rounded-full"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* right side */}
        <div className=" flex-[0.4] xl:flex-[0.6]">
          {/* search field */}
          <div className="">
            <form className=" rounded-xl">
              <input
                type="text"
                placeholder="Search Anything"
                className="bg-transparent text-lg pb-[8px] pt-[8px]  outline-none border-none w-[100%]"
                style={{ borderBottom: "2px solid green" }}
              />
            </form>
          </div>
        </div>
      </div>

      {/* all posts */}
      <div className="mt-[2em]">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-4">
          <div className="flex-[0.6]">
            {dummyInfo?.map((info) => (
              <div className="eachPost p-[5px] md:p-4 mb-3" key={info.id}>
                <p className="m-0 p-0">
                  Title : <span className="text-green-700">{info.title}</span>{" "}
                </p>
                <p className="m-0 p-0">Category : {info.category}</p>
                <p>
                  Created by <span className="text-green-700">{info.user}</span>{" "}
                  {info.createdAt}
                </p>
                <p>{info.info}</p>

                {/* if logged in user equals to post user */}
                <div className="flex justify-end">
                  <RiDeleteBinLine
                    className="text-2xl text-red-600 cursor-pointer"
                    title="Delete info"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* create posts */}
          <div className="flex-[0.4]">
            <form className="flex flex-col gap-4">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Short title"
                style={{ border: "3px solid green" }}
                className="outline-none p-[8px] rounded-lg text-zinc-900"
              />

              <label htmlFor="category">Most Suitable Category</label>
              <select
                name="category"
                id="category"
                style={{ border: "3px solid green", resize: "none" }}
                className="outline-none p-[8px] rounded-lg text-zinc-900"
              >
                <option value="choose" disabled>
                  Choose
                </option>
                <option value="cattle">Cattle</option>
                <option value="poultry">Poultry</option>
                <option value="agriculture">Agriculture</option>
                <option value="hydroponic">Technology</option>
                <option value="motivation">Motivation</option>
              </select>

              <label htmlFor="info">Information to present</label>
              <textarea
                type="text"
                name="title"
                id="info"
                placeholder="Type your information. Keep it brief and clear"
                style={{ border: "3px solid green", resize: "none" }}
                className="outline-none p-[8px] rounded-lg text-zinc-900"
              />

              <button className="createInfoBtn">Create Information</button>
              <div className="  clearInfoBtn text-center justify-center">
                <p className="m-0 p-0">Clear Info</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;