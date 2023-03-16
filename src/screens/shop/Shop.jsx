import React, { useEffect, useState } from "react";
import "./shop.css";
import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { dummyProducts } from "../../data";

const Shop = () => {
  const [heroImg, setHeroImg] = useState("");

  const [showCreate, setShowCreate] = useState(false);

  const heroImage = [
    "https://images.pexels.com/photos/235925/pexels-photo-235925.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2148852/pexels-photo-2148852.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3066025/pexels-photo-3066025.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/14348416/pexels-photo-14348416.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const changeHeroImg = () => {
    // get random index value
    const randomIndex = Math.floor(Math.random() * heroImage.length);

    const item = heroImage[randomIndex];

    // set to state
    setHeroImg(item);
  };

  setTimeout(changeHeroImg, 50000);

  useEffect(() => {
    changeHeroImg();
  }, []);

  // console.log(heroImg);

  // setInterval(getRandomHeroImg(), 3000);

  return (
    <div>
      {/* top strip */}
      <div className="w-full pl-[3em] pr-[3em] pt-[1em]  bg-green-900 text-zinc-100 hidden md:flex justify-between items-center">
        <div className="flex gap-[10px] text-lg items-center">
          <p>
            <AiOutlinePhone />
          </p>
          <p>+ 784 435322</p>
        </div>
        <div>
          <p style={{ fontWeight: 400 }}>
            Get the best deals from Farmers | Enjoy
          </p>
        </div>
        <div>
          <p className="text-zinc-300 text-lg">
            <a
              href="https://covid19.who.int/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit" }}
            >
              Covid Updates
            </a>
          </p>
        </div>
      </div>
      {/* search and logo */}
      <div className=" pl-[8px] pr-[8px] md:pl-[3em] md:pr-[3em] mt-[8px] md:mt-[2em] flex justify-between">
        <div className=" flex-[0.2] hidden md:flex gap-2 ">
          <div>
            <AiOutlineShoppingCart className="text-3xl text-green-700" />
          </div>
          <div>
            <h2>
              Deals<span className="text-green-700">Drive</span>
            </h2>
          </div>
        </div>
        <div className="flex-[0.6] flex justify-center">
          <form className="flex items-center bg-slate-200 w-full flex-1 justify-between rounded-md p-[10px]">
            <div className="w-full flex-1">
              <input
                type="text"
                placeholder="Search Product"
                className="w-full flex-1 bg-transparent  outline-none"
              />
            </div>
            <div>
              <AiOutlineSearch
                className="text-2xl text-zinc-500 cursor-pointer"
                title="search"
              />
            </div>
          </form>
        </div>
        <div className="flex-[0.2] flex justify-end items-center ">
          <AiOutlinePlus
            title="Create"
            onClick={() => setShowCreate(!showCreate)}
            className="bg-zinc-900 text-zinc-100 p-[10px] text-5xl rounded-lg cursor-pointer"
          />
          <Link to="/landing">
            <div className="ml-[2em]">
              <AiOutlineHome className="text-3xl text-green-700" />
            </div>
          </Link>
        </div>
      </div>

      {/*create product  */}

      {showCreate && (
        <div className="pl-[8px] pr-[8px] md:pl-[3em] md:pr-[3em] mt-[2em]">
          <h2>Create a product</h2>
          <form className="flex  flex-col lg:flex-row justify-between mt-3 gap-3">
            <input
              type="text"
              placeholder="Enter Title or name"
              className="p-[10px] rounded-md flex-[0.2] outline-none"
              style={{ border: "1px solid green" }}
            />
            <input
              type="text"
              placeholder="Description"
              className="p-[10px] rounded-md flex-[0.2] outline-none"
              style={{ border: "1px solid green" }}
            />
            <input
              type="text"
              placeholder="Price per product"
              className="p-[10px] rounded-md flex-[0.2] outline-none"
              style={{ border: "1px solid green" }}
            />
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

      {/* hero section */}
      <div className="relative mt-4">
        <img
          className="w-full h-[60vh] object-cover"
          src={
            heroImg
              ? heroImg
              : "https://images.pexels.com/photos/13760484/pexels-photo-13760484.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          alt="heroImg"
        />
        {/* overlay div */}
        <div className="absolute top-0 left-0 w-full h-[60vh] bg-[rgba(0,0,0,.7)]" />
        <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center pl-[3em] pr-[3em] pt-[2em]  text-white">
          {/* content */}
          <div className="flex text-center">
            <div>
              <h2
                className=" text-3xl md:text-5xl lg:text-7xl mb-4"
                style={{ fontWeight: 700 }}
              >
                Get the Best Deals Available
              </h2>
              <h2
                className=" text-3xl md:text-5xl lg:text-7xl mb-[1em]"
                style={{ fontWeight: 700 }}
              >
                {" "}
                Directly from Farmers
              </h2>
              <p className="bg-green-700 text-zinc-100 p-[10px] rounded-lg cursor-pointer">
                Shop Now
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* categories */}
      <div className="pl-[8px] pr-[8px] md:pl-[3em] md:pr-[3em] pt-[2em] pb-[2em]">
        <h2>Explore our categories</h2>
        <div className="block  sm:flex gap-2">
          <div className="relative mb-[1em] sm:mb-0">
            <img
              src="https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-[rgba(0,0,0,.45)]" />
            <div className="absolute w-full h-full top-0 text-white flex justify-center items-center">
              <p className="pt-[20px] text-center text-lg">Animal Products</p>
            </div>
          </div>
          <div className="relative mb-[1em] sm:mb-0">
            <img
              src="https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full rounded-lg h-full bg-[rgba(0,0,0,.7)]" />
            <div className="absolute w-full h-full top-0 text-white flex justify-center items-center">
              <p className="pt-[20px] text-center text-lg">
                Fruits and Vegetables
              </p>
            </div>
          </div>
          <div className="relative mb-[1em] sm:mb-0">
            <img
              src="https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-[rgba(0,0,0,.7)]" />
            <div className="absolute w-full h-full top-0 text-white flex justify-center items-center">
              <p className="pt-[20px] text-center text-lg">Cereals</p>
            </div>
          </div>
          <div className="relative ">
            <img
              src="https://images.pexels.com/photos/3696170/pexels-photo-3696170.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full rounded-lg h-full bg-[rgba(0,0,0,.7)]" />
            <div className="absolute w-full h-full top-0 text-white flex justify-center items-center">
              <p className="pt-[20px] text-center text-lg">Fertilizer</p>
            </div>
          </div>
        </div>
      </div>

      {/* products */}

      <div className="pl-[8px] pr-[8px] md:pl-[3em] md:pr-[3em] pt-[2em] pb-[2em] h-[50vh] overflow-y-scroll hide-scrollbar">
        <p>All Products</p>
        <div className="productWrapper">
          {dummyProducts.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id}>
              <div key={item.id} className="productItem">
                <img
                  src={item.productimg}
                  alt=""
                  style={{ borderRadius: "10px" }}
                />
                <div className="flex justify-between items-center text-zinc-900 mt-3 px-3">
                  <p>{item.title}</p>
                  <p>Ksh. {item.price}</p>
                </div>
                <p className="text-zinc-500 px-3">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* footer */}
      <div className="flex justify-center bg-green-800 text-zinc-100 p-3">
        Product of Mkulima &copy; 2023 All rights Reserved
      </div>
    </div>
  );
};

export default Shop;
