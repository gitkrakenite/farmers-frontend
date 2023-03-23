import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaPhoenixSquadron } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };

  const { user } = useSelector((state) => state.auth);

  return (
    <div
      style={{
        position: "sticky",
        backgroundColor: "#e2dfdf",
        top: 0,
        zIndex: 999,
      }}
    >
      {/* desktop topbar */}
      <div className=" hidden md:flex justify-between items-center ">
        {/* logo and links */}
        <div className="flex gap-[1em] lg:gap-[4em] items-center">
          <Link to="/landing" style={{ color: "inherit" }}>
            <div className="cursor-pointer" onClick={ScrollTop}>
              <h1>
                MKU<span className="text-green-600 font-serif">LIMA</span>{" "}
              </h1>
            </div>
          </Link>
          <div>
            <ul className="flex gap-[20px] items-center text-lg p-0 m-0">
              <Link to="/info">
                <li className="cursor-pointer text-zinc-700">Info</li>
              </Link>
              <Link to="/shop">
                <li className="cursor-pointer text-zinc-700">Shop</li>
              </Link>
              <Link to="/invest">
                <li className="cursor-pointer text-zinc-700">Invest</li>
              </Link>
              <li className="cursor-pointer text-zinc-700">Chat</li>
            </ul>
          </div>
        </div>
        {/* search field */}
        {/* <div className=" flex-[0.7] lg:flex-[0.3]">
          <form className="bg-slate-200 rounded-xl">
            <input
              type="text"
              placeholder="Search Post"
              className="bg-transparent text-lg p-[8px] outline-none border-none w-[100%]"
            />
          </form>
        </div> */}
        {/* user details */}
        <Link to={`/profile/${user?._id}`}>
          <div className="flex gap-[10px] items-center bg-slate-200 rounded-xl p-[5px] cursor-pointer">
            <div className="flex items-center text-zinc-800">
              <span>Hello {user?.name}</span>
            </div>
            <div>
              <img
                src={user?.profile}
                alt=""
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
            </div>
          </div>
        </Link>
      </div>

      {/* mobile menu */}
      <div className="md:hidden   ">
        {toggle ? (
          <div className="flex justify-end bg-green-800 text-white pt-[20px] pr-[10px]">
            <AiOutlineClose
              className="text-3xl cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </div>
        ) : (
          <div className="flex justify-end pt-[1em] pr-[1em] pb-[10px]">
            <AiOutlineMenu
              className="text-3xl cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </div>
        )}

        {toggle && (
          <div className="flex flex-col justify-end items-end pr-[1em] pl-[1em] pb-[1em] pt-3 bg-green-800 text-white">
            <div
              className="flex flex-col gap-[1em] items-right "
              style={{ flex: 1, width: "80%" }}
            >
              <Link
                to="/landing"
                style={{ color: "inherit" }}
                className="flex items-center justify-between "
              >
                <div className="cursor-pointer" onClick={ScrollTop}>
                  <h1 className="text-3xl" onClick={() => setToggle(!toggle)}>
                    MKU<span className="text-green-600 font-serif">LIMA</span>{" "}
                  </h1>
                </div>
                <div>
                  <FaPhoenixSquadron className="text-2xl" />
                </div>
              </Link>
              <div className="mb-[2em] w-[100%] flex-1">
                <ul className="flex flex-col gap-[20px] items-end  text-lg p-0 m-0 ">
                  <div
                    style={{
                      borderBottom: "2px solid white",
                      padding: "8px",
                      width: "100%",
                    }}
                  >
                    <Link to="/info">
                      <li
                        className="cursor-pointer text-end text-white"
                        onClick={() => setToggle(!toggle)}
                      >
                        Information page
                      </li>
                    </Link>
                  </div>
                  <div
                    style={{
                      borderBottom: "2px solid white",
                      padding: "8px",
                      width: "100%",
                    }}
                  >
                    <Link to="/shop">
                      <li
                        className="cursor-pointer text-end text-white"
                        onClick={() => setToggle(!toggle)}
                      >
                        Shop products
                      </li>
                    </Link>
                  </div>
                  <div
                    style={{
                      borderBottom: "2px solid white",
                      padding: "8px",
                      width: "100%",
                    }}
                  >
                    <Link to="/invest">
                      <li
                        className="cursor-pointer text-end text-white"
                        onClick={() => setToggle(!toggle)}
                      >
                        Invest now
                      </li>
                    </Link>
                  </div>
                  <div
                    style={{
                      borderBottom: "2px solid white",
                      padding: "8px",
                      width: "100%",
                    }}
                  >
                    <li
                      className="cursor-pointer text-end"
                      onClick={() => setToggle(!toggle)}
                    >
                      Chat with others
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            {/* search field */}
            {/* <div className="w-[100%] mb-[1em]">
              <form className="bg-slate-200 rounded-xl">
                <input
                  type="text"
                  placeholder="Search Anything"
                  className=" bg-zinc-300 text-lg p-[8px] outline-none border-none w-[100%] text-green-800 rounded-lg"
                  // style={{ border: "2px solid #0f5c1d" }}
                />
              </form>
            </div> */}
            {/* user details */}

            <Link
              to={`/profile/${user?._id}`}
              className="flex justify-between items-center bg-green-800 rounded-xl p-[5px] cursor-pointer w-[100%]"
              style={{ border: "1px solid white" }}
            >
              <div className="flex items-center text-zinc-100">
                <span>Hello {user?.name}</span>
              </div>
              <div>
                <img
                  src={user?.profile}
                  alt=""
                  className="w-[40px] h-[40px] object-cover rounded-full"
                />
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
