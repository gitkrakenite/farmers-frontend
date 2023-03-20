import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { dummyBid } from "../../data";
import "./invest.css";

const Invest = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [showBids, setShowBids] = useState(false);

  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      {/* topbar */}
      <div className="flex justify-between items-center md:pl-[2em] md:pr-[2em] md:pt-[1em]">
        {/* logo */}
        <div>
          <div className="cursor-pointer">
            <Link to="/landing" style={{ color: "inherit" }}>
              <h1>
                MKU<span className="text-green-600 font-serif">LIMA</span>{" "}
              </h1>
            </Link>
          </div>
        </div>
        {/* create and avatar */}
        <div className="flex items-center gap-[10px]">
          <div>
            <AiOutlinePlus
              title="Create"
              onClick={() => setShowCreate(!showCreate)}
              className="bg-zinc-900 text-zinc-100 p-[10px] text-5xl rounded-lg cursor-pointer"
            />
          </div>

          <Link to="profile/45">
            <div>
              <img
                src="https://images.pexels.com/photos/11734663/pexels-photo-11734663.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* create a bid */}
      <div>
        {showCreate && (
          <div className="pl-[8px] pr-[8px] md:pl-[3em] md:pr-[3em] mt-[2em]">
            <h2>Create a bid</h2>
            <form className="flex  flex-col lg:flex-row justify-between mt-3 gap-3">
              <input
                type="text"
                placeholder="Enter Item to bid"
                className="p-[10px] rounded-md flex-[0.2] outline-none"
                style={{ border: "1px solid green" }}
              />
              <input
                type="text"
                placeholder="Description and base bid"
                className="p-[10px] rounded-md flex-[0.2] outline-none"
                style={{ border: "1px solid green" }}
              />
              <select
                name=""
                id=""
                className="p-[10px] rounded-md flex-[0.2] outline-none"
                style={{ border: "1px solid green" }}
              >
                <option value="category" disabled>
                  Choose
                </option>
                <option value="livestock">Livestock</option>
                <option value="horticulture">Fruits & Veges</option>
                <option value="equipment">Farm Equipment</option>
                <option value="other">Other</option>
              </select>

              <input
                type="text"
                placeholder="Enter product url"
                className="p-[10px] rounded-md flex-[0.2] outline-none"
                style={{ border: "1px solid green" }}
              />
              <button
                className="p-[10px] rounded-md flex-[0.2] outline-none bg-green-800 text-zinc-100"
                style={{ backgroundColor: "" }}
              >
                Create
              </button>
            </form>
          </div>
        )}
      </div>

      {/* bidding platform */}
      <div className="pl-[8px] pr-[8px] md:pl-[3em] md:pr-[3em] mt-[2em]">
        {/* all bids from latest */}
        <h2 className="text-2xl">Active Bids</h2>
        <div>
          {dummyBid.map((bid) => (
            <div key={bid.id} className="eachPost p-[10px] mb-[20px]">
              <div className="flex justify-between items-center">
                <p>CreatedBy: Mike zoe {bid.createdAt}</p>
                <p>item: {bid.item}</p>
                <p>Category: {bid.category}</p>
              </div>
              <p>{bid.description}</p>
              <img src={bid.imgUrl} alt={bid.item} className="w-[150px]" />
              <div className="flex justify-between items-center">
                <div>
                  {bid.status === "open" ? (
                    <p className="mt-[1em] ">
                      <span className="bg-green-800 text-white p-2">
                        Status: {bid.status}
                      </span>
                    </p>
                  ) : (
                    <p className="mt-[1em]">
                      {" "}
                      <span className="bg-red-800 text-white p-2">
                        Status: {bid.status}
                      </span>
                    </p>
                  )}
                </div>
                {bid.status === "open" && (
                  <div>
                    <form className="flex gap-[8px]">
                      <input
                        type="text"
                        placeholder="Enter your bidding info"
                        className="p-[10px] rounded-md flex-[0.2] outline-none"
                        style={{ border: "1px solid green" }}
                      />
                      <button className="bg-green-800 text-white p-2">
                        Bid Now ?
                      </button>
                    </form>
                  </div>
                )}
                <div>
                  {showBids ? (
                    <button
                      className="bg-green-800 text-white p-2"
                      onClick={() => setShowBids(!showBids)}
                    >
                      Hide bids
                    </button>
                  ) : (
                    <button
                      className="bg-green-800 text-white p-2"
                      onClick={() => setShowBids(!showBids)}
                    >
                      See Other bids
                    </button>
                  )}
                </div>
              </div>
              {/* other people's bids */}
              {showBids && (
                <div className="mt-[3em]">
                  <h2 className="text-2xl">All Bids</h2>
                  <div className="h-[10vh] overflow-y-scroll">
                    <div
                      className="flex items-center gap-2 p-2"
                      style={{ borderBottom: "1px solid green" }}
                    >
                      <p className="text-zinc-900">Josh Brumhn</p>
                      <p className="text-zinc-900">josh@gmail.com</p>
                      <p className="text-zinc-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime earum nisi perspiciatis, veniam magnam et
                        voluptatibus? Veniam facere molestiae iure?
                      </p>
                    </div>
                    {/*  */}
                    <div
                      className="flex items-center gap-2 p-2"
                      style={{ borderBottom: "1px solid green" }}
                    >
                      <p className="text-zinc-900">Josh Brumhn</p>
                      <p className="text-zinc-900">josh@gmail.com</p>
                      <p className="text-zinc-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime earum nisi perspiciatis, veniam magnam et
                        voluptatibus? Veniam facere molestiae iure?
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* all your active bids */}
        <div></div>
      </div>
    </div>
  );
};

export default Invest;
