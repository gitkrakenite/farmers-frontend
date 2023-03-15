import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      style={{
        position: "sticky",
        backgroundColor: "#e2dfdf",
        top: 0,
        zIndex: 999,
      }}
    >
      {/* topbar */}
      <div className="flex justify-between items-center">
        {/* logo and links */}
        <div className="flex gap-[4em] items-center">
          <Link to="/landing" style={{ color: "inherit" }}>
            <div className="cursor-pointer" onClick={ScrollTop}>
              <h1>
                MKU<span className="text-green-600 font-serif">LIMA</span>{" "}
              </h1>
            </div>
          </Link>
          <div>
            <ul className="flex gap-[20px] items-center text-lg p-0 m-0">
              <li className="cursor-pointer">Info</li>
              <li className="cursor-pointer">Shop</li>
              <li className="cursor-pointer">Invest</li>
              <li className="cursor-pointer">Chat</li>
            </ul>
          </div>
        </div>
        {/* search field */}
        <div className="flex-[0.3]">
          <form className="bg-slate-200 rounded-xl">
            <input
              type="text"
              placeholder="Search Post"
              className="bg-transparent text-lg p-[8px] outline-none border-none w-[100%]"
            />
          </form>
        </div>
        {/* user details */}
        <div className="flex gap-[10px] items-center bg-slate-200 rounded-xl p-[5px] cursor-pointer">
          <div className="flex items-center">
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
      </div>
    </div>
  );
};

export default Header;
