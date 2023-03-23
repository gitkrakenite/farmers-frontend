import React, { useEffect, useState } from "react";
import "./posts.css";
import { MdCreate, MdClear } from "react-icons/md";
import { BsCloudUpload } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { dummyPosts } from "../../data";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getPosts,
  createMyPost,
  deletePost,
} from "../../features/posts/postSlice";

import { createMyIssue } from "../../features/issues/issueSlice";
import { toast } from "react-hot-toast";
import moment from "moment";
import Spinner from "../Spinner";
import { AiOutlineSearch } from "react-icons/ai";

const Posts = () => {
  const [create, setCreate] = useState(false);
  const [createPost, setCreatePost] = useState(false);
  const [createIssue, setCreateIssue] = useState(false);

  // create post states
  const [info, setInfo] = useState("");
  const [postImg, setpostImg] = useState("");
  const [loading, setLoading] = useState(false);

  // create issue state
  const [alertInfo, setAlertInfo] = useState("");

  // search
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setsearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const dispatch = useDispatch();

  const { posts, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.posts
  );

  const { user } = useSelector((state) => state.auth);

  // Convert image into url using cloudinary
  const postDetails = (pics) => {
    setLoading(true);
    if (pics === null || undefined) {
      toast.error("Please select an Image");
      return;
    }
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "hooksie");
      data.append("cloud_name", "ddyw2aavm");
      fetch("https://api.cloudinary.com/v1_1/ddyw2aavm/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          // if we dont have a response from cloudinary back which is data.url then we will show an error
          if (data.url === undefined) {
            toast.error("Please select an Image");
            return;
          }
          setpostImg(data.url);
          setLoading(false);
          console.log(data.url);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast.error("Please select an image");
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please login or register");
      return;
    }
    if (!info || !postImg) {
      toast.error("All details needed");
      return;
    } else {
      try {
        const postData = { info, postImg };
        // console.log(profile);
        dispatch(createMyPost(postData));
        // console.log(reportData);
        setInfo("");
        setpostImg("");
        setCreatePost(false);
        toast.success("Sent successfully");
      } catch (error) {
        toast.error("Error occured" + message);
      }
    }
  };

  const handleDeletePost = (postId) => {
    if (!postId) {
      toast.error("ID needed");
      return;
    } else {
      dispatch(deletePost(postId));
      toast.success("Deleted successfully");
    }
  };

  const handleCreateAlert = (e) => {
    e.preventDefault();

    if (!alertInfo) {
      toast.error("Info needed to create alert");
      return;
    } else {
      const alertData = { alertInfo };
      dispatch(createMyIssue(alertData));
      toast.success("Created Alert");
      setAlertInfo("");
      setCreateIssue("");
    }
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, createPost]);

  // fetch all
  const handleSearchChange = async (e) => {
    e.preventDefault();
    clearTimeout(setsearchTimeout);

    setSearchText(e.target.value);

    setsearchTimeout(
      setTimeout(() => {
        const searchResults = posts?.filter(
          (item) =>
            item.username.toLowerCase().includes(searchText.toLowerCase()) ||
            item.info.toLowerCase().includes(searchText.toLowerCase())
        );

        setSearchedResults(searchResults);
      }, 500)
    );
  };

  return (
    <div className="p-[10px] relative">
      {/* search sections */}

      <div>
        <div className="mb-[20px]">
          <form
            className="flex p-[14px] items-center gap-2 bg-zinc-300 w-[100%] rounded-lg"
            // onSubmit={handleSearchChange}
          >
            <div>
              <AiOutlineSearch className="text-lg" />
            </div>
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search post or user"
                className="text-lg bg-transparent outline-none border-none w-full"
                value={searchText}
                onChange={handleSearchChange}
              />
            </div>
          </form>
        </div>
      </div>

      {/* create section */}
      <div>
        <div>
          <div
            className="flex items-center justify-center gap-[5px] cursor-pointer mb-[2em] rounded-md p-[5px]"
            style={{ border: "2px solid #0d6316" }}
            onClick={() => setCreate(!create)}
          >
            <div>
              <h1 className="text-xl">Express your thoughts</h1>
            </div>
            <div>
              <MdCreate className="text-xl mb-2" />
            </div>
          </div>
          {create && (
            <div className="flex justify-between items-center">
              <p
                className="bg-green-800 text-white p-[10px] rounded-lg cursor-pointer"
                onClick={() => setCreatePost(!createPost)}
              >
                Create a new post
              </p>
              <p
                className="bg-red-800 text-white p-[10px] rounded-lg cursor-pointer"
                onClick={() => setCreateIssue(!createIssue)}
              >
                Alert on an issue
              </p>
            </div>
          )}

          {/* create post */}
          {createPost && (
            <div className="createPost mb-[20px] p-[10px]">
              <h3>Create a Post</h3>
              <p>Remember to keep it polite</p>
              <div className="mt-[20px]">
                <form onSubmit={handleSubmit}>
                  <div className="flex mb-[1em] items-center justify-between ">
                    <div className="flex gap-[5px] items-center">
                      <BsCloudUpload className="upload" />
                      <input
                        type="file"
                        name=""
                        required
                        id=""
                        accept="image/*"
                        onChange={(e) => postDetails(e.target.files[0])}
                      />
                    </div>
                    <div>
                      <p>Recommendation: Use high-quality JPG, JPEG or PNG</p>
                    </div>
                    <div>
                      <img
                        src="https://images.pexels.com/photos/66284/winter-nature-season-trees-66284.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                        className="w-[100px] h-[100px] rounded-md"
                      />
                    </div>
                  </div>
                  <p>Express your Thoughts</p>
                  <div className="flex items-center gap-[1em]">
                    <textarea
                      type="text"
                      placeholder="Your thoughts"
                      required
                      // maxLength={100}
                      className="flex-1 p-[8px] rounded-lg"
                      style={{ border: "2px solid #0d6316", resize: "none" }}
                      value={info}
                      onChange={(e) => setInfo(e.target.value)}
                    />
                    <MdClear
                      className="text-3xl bg-red-700 text-white p-[5px] rounded-full cursor-pointer"
                      onClick={() => setInfo("")}
                    />
                  </div>

                  {loading ? (
                    <Spinner message="Uploading" />
                  ) : (
                    <div
                      className="flex justify-center mt-3 bg-green-700 text-white p-[10px] rounded-md cursor-pointer"
                      style={{}}
                      onClick={handleSubmit}
                    >
                      <button type="submit" onClick={handleSubmit}>
                        Create Post
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          )}

          {/* create issue */}

          {searchText && (
            <h2 className="font-medium text-[#666e75] text-xl mb-3">
              Showing Resuls for{" "}
              <span className="text-[#222328]">{searchText}</span>:
            </h2>
          )}

          {createIssue && (
            <div className="createPost mb-[20px] p-[10px]">
              <h3>Create an alert </h3>
              <p>Genuine alert that other farmers need to know</p>
              <div>
                <form onSubmit={handleCreateAlert}>
                  <p>What is the emergency ?</p>
                  <div className="flex items-center gap-[1em]">
                    <textarea
                      type="text"
                      placeholder="Your thoughts"
                      required
                      maxLength={100}
                      className="flex-1 p-[8px] rounded-lg"
                      style={{ border: "2px solid #0d6316", resize: "none" }}
                      value={alertInfo}
                      onChange={(e) => setAlertInfo(e.target.value)}
                    />
                    <MdClear
                      className="text-3xl bg-red-700 text-white p-[5px] rounded-full cursor-pointer"
                      onClick={() => setAlertInfo("")}
                    />
                  </div>
                  <div
                    className="flex justify-center mt-3 bg-green-700 text-white p-[10px] rounded-md cursor-pointer"
                    style={{}}
                    onClick={handleCreateAlert}
                  >
                    <button type="submit" onClick={handleCreateAlert}>
                      Create Alert
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* {isLoading && <Spinner message="Loading Posts" />} */}

      {searchText ? (
        <>
          {/* load all posts */}
          {searchedResults?.map((post) => (
            <div key={post._id}>
              <div className="eachPost mb-[20px] rounded-md">
                <img
                  src={post.postImg}
                  alt="postImg"
                  style={{
                    maxHeight: "750px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  className="rounded-md"
                />

                <p
                  className="mt-[15px] p-[10px]"
                  style={{ lineHeight: "1.8em" }}
                >
                  {post.info}
                </p>

                <div className=" block sm:flex justify-between p-[10px]">
                  <p>
                    Posted By :{" "}
                    <Link to={`/profile/${post.userId}`}>{post.username}</Link>{" "}
                  </p>
                  <p>When : {moment(post.createdAt).fromNow()}</p>
                  {/* <p>Category : {post.category}</p> */}

                  {user.name === post.username && (
                    <RiDeleteBinLine
                      className="text-2xl text-red-600 cursor-pointer"
                      title="Delete post"
                      onClick={() => handleDeletePost(post._id)}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {/* load all posts */}
          {posts?.map((post) => (
            <div key={post._id}>
              <div className="eachPost mb-[20px] rounded-md">
                <img
                  src={post.postImg}
                  alt="postImg"
                  style={{
                    maxHeight: "750px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  className="rounded-md"
                />

                <p
                  className="mt-[15px] p-[10px]"
                  style={{ lineHeight: "1.8em" }}
                >
                  {post.info}
                </p>

                <div className=" block sm:flex justify-between p-[10px]">
                  <p>
                    Posted By :{" "}
                    <Link to={`/profile/${post.userId}`}>{post.username}</Link>{" "}
                  </p>
                  <p>When : {moment(post.createdAt).fromNow()}</p>
                  {/* <p>Category : {post.category}</p> */}

                  {user.name === post.username && (
                    <RiDeleteBinLine
                      className="text-2xl text-red-600 cursor-pointer"
                      title="Delete post"
                      onClick={() => handleDeletePost(post._id)}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Posts;
