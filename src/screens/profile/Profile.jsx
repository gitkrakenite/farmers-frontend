import React, { useEffect, useState } from "react";
import { MdOutlineCreate } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Problems from "../../components/problems/Problems";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import { logout } from "../../features/auth/authSlice";
import moment from "moment";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-hot-toast";
import { deletePost } from "../../features/posts/postSlice";

// make an api that fetches the user data from db based on user id
// make an api that fetches all posts based on a user id.

// if fetched posts.name === logged in username then show delete icon.

const Profile = () => {
  const [navuser, setNavUser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // harvest id from the parameter url
  let { id } = useParams();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/fauth");
  };

  const { user } = useSelector((state) => state.auth);
  const { posts, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.posts
  );

  const fetchUser = async () => {
    // console.log(id);
    const response = await axios.get(`/user/${id}`);
    setNavUser(response.data);
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

  useEffect(() => {
    fetchUser();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/fauth");
    }
  }, []);

  // console.log(user);
  return (
    <div className=" p-[5px] md:pl-[10px] md:pr-[10px] lg:pl-[2em] lg:pr-[2em] md:pt-[1em] w-[100%]">
      {/* header */}
      <div
        style={{
          position: "sticky",
          backgroundColor: "#e2dfdf",
          top: 0,
          zIndex: 999,
        }}
      >
        <Link to="/landing">
          <h1 className="text-zinc-700">
            MKU<span className="text-green-600 font-serif">LIMA</span>{" "}
          </h1>
        </Link>
      </div>
      <div className="flex pt-[2em] gap-[10px]">
        <div className=" hidden lg:flex lg:w-[20%] ">
          <Problems />
        </div>
        <div className="w-[100%] lg:w-[60%] ">
          {/* user data */}
          <div>
            {/* cover picture */}
            <div>
              <img
                src="https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                style={{ height: "40vh", width: "100%", objectFit: "cover" }}
                className="rounded-md"
              />
            </div>
            {/* profile */}
            <div className="flex justify-center mt-[-2.7em]">
              <img
                src={navuser?.profile}
                alt=""
                className="w-[100px] h-[100px] object-cover rounded-full"
              />
            </div>

            {/* user details */}
            <div className="profileUserData mt-[1em] text-zinc-500">
              <div className=" block sm:flex justify-between items-center">
                <p>
                  Hello my name is :{" "}
                  <span className="text-zinc-800">{navuser?.name}</span>
                </p>
                <p>
                  My email is :{" "}
                  <a href="mailto:jujs@gmail.com">
                    <span className="text-zinc-800">{navuser?.email}</span>
                  </a>
                </p>
              </div>

              <p>
                Joined the community{" "}
                <span className="text-zinc-800">
                  {moment(navuser?.createdAt).fromNow()}
                </span>
              </p>
              <p>
                My{" "}
                <a
                  href="google.com"
                  className="text-green-600 active:text-green-600"
                  target="_blank"
                >
                  <span className="text-green-600">Sema</span>{" "}
                </a>
                account is:{" "}
                <a href="google.com" className="underline" target="_blank">
                  <span className="underline">markzie</span>
                </a>
                . Create an account{" "}
                <a
                  href="google.com"
                  className="text-green-600 active:text-green-600"
                  target="_blank"
                >
                  <span className="text-green-600">Here</span>{" "}
                </a>{" "}
                to chat with me and others.
              </p>

              {user?.email === navuser?.email && (
                <div className="bg-red-700 flex justify-center text-zinc-200 p-[10px] rounded-xl cursor-pointer">
                  <button onClick={handleLogout}>
                    Log out of your account
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* if logged in user == post user */}

          {user?.email === navuser?.email && (
            <div className="profileChangeCover p-[10px] mt-[1em] mb-[2em]">
              <p>Change Cover Picture</p>
              <div className=" block sm:flex justify-between items-center gap-[1em]">
                <div className="flex-[0.8] mb-3 sm:mb-0">
                  {" "}
                  <input
                    type="text"
                    placeholder="Enter Cover pic url"
                    className="w-[100%] p-[10px] outline-none "
                    style={{ borderBottom: "3px solid green" }}
                  />
                </div>
                <div
                  className="flex-[0.2] flex items-center gap-[5px] cursor-pointer p-[10px] justify-center rounded-lg"
                  style={{ border: "3px solid green" }}
                >
                  <button>Change</button>
                  <MdOutlineCreate className="text-xl" />
                </div>
              </div>
            </div>
          )}

          {/* posts sections */}
          {console.log(navuser?.name)}

          {/* {console.log(posts)} */}

          {posts.map((post) => (
            <div key={post._id}>
              {navuser?.name === post.username && (
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
                      <Link to={`/profile/${post.userId}`}>
                        {post.username}
                      </Link>{" "}
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
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:w-[20%] ">
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Profile;
