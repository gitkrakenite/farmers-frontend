import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./info.css";
import { dummyInfo } from "../../data";
import { RiDeleteBinLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";

import {
  getInfo,
  deleteInfo,
  createInformation,
} from "../../features/info/infoSlice";
import { toast } from "react-hot-toast";
import Spinner from "../../components/Spinner";
import moment from "moment";

const Info = () => {
  // create info states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);

  // search
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setsearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const dispatch = useDispatch();

  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please login or register");
      return;
    }
    console.log(` ${category}`);
    if (!title || !category || !details) {
      toast.error("All details needed");
      return;
    } else {
      try {
        setLoading(true);
        const infoData = { title, category, details };
        // console.log(profile);
        dispatch(createInformation(infoData));
        // console.log(reportData);
        handleClear();
        setLoading(false);
        toast.success("created successfully");
      } catch (error) {
        toast.error("Error occured" + message);
      }
    }
  };

  const handleDeleteInfo = (infoId) => {
    if (!infoId) {
      toast.error("ID needed");
      return;
    } else {
      dispatch(deleteInfo(infoId));
      toast.success("Deleted successfully");
    }
  };

  const handleClear = () => {
    setTitle("");
    setCategory("");
    setDetails("");
  };

  const { user } = useSelector((state) => state.auth);

  const { information, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.information
  );

  // search
  const handleSearchChange = async (e) => {
    e.preventDefault();
    clearTimeout(setsearchTimeout);

    setSearchText(e.target.value);

    setsearchTimeout(
      setTimeout(() => {
        const searchResults = information?.filter(
          (item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase()) ||
            item.category.toLowerCase().includes(searchText.toLowerCase())
        );

        setSearchedResults(searchResults);
      }, 500)
    );
  };

  useEffect(() => {
    if (isError) {
      toast.error("Something broke " + message);
    }

    if (isSuccess || information) {
      toast.success("Fetched All Info!");
    }
  }, [isError, isSuccess, message, dispatch]);

  useEffect(() => {
    dispatch(getInfo());
  }, [dispatch, information]);

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
            <Link to={`/profile/${user._id}`} className="  ">
              <div className="flex gap-[10px] items-center  rounded-xl p-[5px] cursor-pointer justify-center">
                <div
                  className=" hidden lg:flex items-center text-zinc-800 p-[10px]"
                  style={{ border: "1px solid green" }}
                >
                  <span>Hello {user.name.split(" ")[0]}</span>
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
                placeholder="Search title or category"
                className="bg-transparent text-lg pb-[8px] pt-[8px]  outline-none border-none w-[100%]"
                style={{ borderBottom: "2px solid green" }}
                value={searchText}
                onChange={handleSearchChange}
              />
            </form>
          </div>
        </div>
      </div>

      {/* all posts */}

      <div className="mt-[2em]">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-4">
          <div className="flex-[0.6]">
            {/* {isLoading && <Spinner message="Loading info" />} */}

            {searchText ? (
              <>
                {searchedResults?.map((info) => (
                  <div className="eachPost p-[5px] md:p-4 mb-3" key={info._id}>
                    <p className="m-0 p-0">
                      Title :{" "}
                      <span className="text-green-700">{info.title}</span>{" "}
                    </p>
                    <p className="m-0 p-0">Category : {info.category}</p>
                    <p>
                      Created by{" "}
                      <span className="text-green-700">
                        <Link
                          to={`/profile/${info.userId}`}
                          // className="text-green-700"
                        >
                          {info.username}
                        </Link>
                      </span>{" "}
                      {moment(info.createdAt).fromNow()}
                    </p>
                    <p>{info.information}</p>

                    {/* if logged in user equals to post user */}
                    {user.name === info.username && (
                      <div className="flex justify-end">
                        <RiDeleteBinLine
                          className="text-2xl text-red-600 cursor-pointer"
                          title="Delete post"
                          onClick={() => handleDeleteInfo(info._id)}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </>
            ) : (
              <>
                {information?.map((info) => (
                  <div className="eachPost p-[5px] md:p-4 mb-3" key={info._id}>
                    <p className="m-0 p-0">
                      Title :{" "}
                      <span className="text-green-700">{info.title}</span>{" "}
                    </p>
                    <p className="m-0 p-0">Category : {info.category}</p>
                    <p>
                      Created by{" "}
                      <span className="text-green-700">
                        <Link
                          to={`/profile/${info.userId}`}
                          // className="text-green-700"
                        >
                          {info.username}
                        </Link>
                      </span>{" "}
                      {moment(info.createdAt).fromNow()}
                    </p>
                    <p>{info.information}</p>

                    {/* if logged in user equals to post user */}
                    {user.name === info.username && (
                      <div className="flex justify-end">
                        <RiDeleteBinLine
                          className="text-2xl text-red-600 cursor-pointer"
                          title="Delete post"
                          onClick={() => handleDeleteInfo(info._id)}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
          {/* create posts */}
          <div className="flex-[0.4]">
            <h2 className="text-lg mb-3 underline">
              Do you have good advice {user.name} ?
            </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Short descriptive title"
                style={{ border: "3px solid green" }}
                className="outline-none p-[8px] rounded-lg text-zinc-900"
                maxLength={40}
                minLength={5}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <label htmlFor="category">Most Suitable Category</label>
              <select
                name="category"
                id="category"
                style={{ border: "3px solid green", resize: "none" }}
                className="outline-none p-[8px] rounded-lg text-zinc-900"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Choose</option>
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
                minLength={5}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />

              {loading ? (
                <Spinner />
              ) : (
                <button className="createInfoBtn" onClick={handleSubmit}>
                  Create Information
                </button>
              )}
              <div
                className="clearInfoBtn text-center justify-center"
                onClick={handleClear}
              >
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
