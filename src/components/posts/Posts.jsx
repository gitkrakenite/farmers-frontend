import React, { useState } from "react";
import "./posts.css";
import { MdCreate, MdClear } from "react-icons/md";
import { BsCloudUpload } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { dummyPosts } from "../../data";

const Posts = () => {
  const [create, setCreate] = useState(false);
  const [createPost, setCreatePost] = useState(false);
  const [createIssue, setCreateIssue] = useState(false);

  // Convert image into url using cloudinary
  const postDetails = (pics) => {
    // setLoading(true);
    // if (pics === null || undefined) {
    //   toast({
    //     title: "Please select an Image",
    //     status: "warning",
    //     duration: 5000,
    //     isClosable: true,
    //     position: "bottom",
    //   });
    //   return;
    // }
    // if (
    //   pics.type === "image/jpeg" ||
    //   pics.type === "image/png" ||
    //   pics.type === "image/jpg"
    // ) {
    //   const data = new FormData();
    //   data.append("file", pics);
    //   data.append("upload_preset", "hooksie");
    //   data.append("cloud_name", "ddyw2aavm");
    //   fetch("https://api.cloudinary.com/v1_1/ddyw2aavm/image/upload", {
    //     method: "post",
    //     body: data,
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       // if we dont have a response from cloudinary back which is data.url then we will show an error
    //       if (data.url === undefined) {
    //         toast({
    //           title: "Please select an Image",
    //           status: "warning",
    //           duration: 5000,
    //           isClosable: true,
    //           position: "bottom",
    //         });
    //         return;
    //       }
    //       setImage(data.url);
    //       setLoading(false);
    //       console.log(data.url);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       setLoading(false);
    //     });
    // } else {
    //   toast({
    //     title: "Please select an image",
    //     status: "warning",
    //     duration: 5000,
    //     isClosable: true,
    //     position: "bottom",
    //   });
    //   setLoading(false);
    // }
  };

  return (
    <div className="p-[10px] relative">
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
                <form>
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
                      maxLength={100}
                      className="flex-1 p-[8px] rounded-lg"
                      style={{ border: "2px solid #0d6316", resize: "none" }}
                    />
                    <MdClear className="text-3xl bg-red-700 text-white p-[5px] rounded-full cursor-pointer" />
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* create issue */}

          {}

          {createIssue && (
            <div className="createPost mb-[20px] p-[10px]">
              <h3>Create an alert </h3>
              <p>Genuine alert that other farmers need to know</p>
              <div>
                <form>
                  <p>What is the emergency ?</p>
                  <div className="flex items-center gap-[1em]">
                    <textarea
                      type="text"
                      placeholder="Your thoughts"
                      required
                      maxLength={100}
                      className="flex-1 p-[8px] rounded-lg"
                      style={{ border: "2px solid #0d6316", resize: "none" }}
                    />
                    <MdClear className="text-3xl bg-red-700 text-white p-[5px] rounded-full cursor-pointer" />
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* load all posts */}
      {dummyPosts?.map((post) => (
        <div key={post.id}>
          <div className="eachPost mb-[20px] rounded-md">
            <img
              src={post.postImg}
              alt="postImg"
              style={{ maxHeight: "750px", width: "100%", objectFit: "cover" }}
              className="rounded-md"
            />

            <p className="mt-[15px] p-[10px]" style={{ lineHeight: "1.8em" }}>
              {post.info}
            </p>

            <div className=" block sm:flex justify-between p-[10px]">
              <p>Posted By : {post.user}</p>
              <p>When : {post.createdAt}</p>
              <p>Category : {post.category}</p>
              <RiDeleteBinLine
                className="text-2xl text-red-600 cursor-pointer"
                title="Delete post"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
