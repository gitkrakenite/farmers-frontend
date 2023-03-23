import axios from "../../axios";

// get all posts
const getPosts = async () => {
  const response = await axios.get("/post/fetch");
  return response.data;
};

// create posts
const createPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post("post/create", postData, config);
  return response.data;
};

// delete posts
const deletePost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`/post/delete/${postId}`, config);
  return response.data;
};

const postService = {
  getPosts,
  createPost,
  deletePost,
};

export default postService;
