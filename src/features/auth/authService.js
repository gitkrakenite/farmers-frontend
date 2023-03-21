import axios from "../../axios";

// register user
const register = async (userData) => {
  const response = await axios.post("/user/register", userData);

  if (response.data) {
    // This will make our data persist even when we refresh
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// login user
const login = async (userData) => {
  const response = await axios.post("/user/login", userData);

  if (response.data) {
    // This will make our data persist even when we refresh
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// logout user
const logout = () => {
  localStorage.removeItem("user");
};

// get a specific user
const getAUser = async (id) => {
  const response = await axios.get(`/user/${id}`);
  return response.data;
};

// get a specific user
const getMe = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`/user/mydet`, config);
  return response.data;
};

const authService = {
  register,
  login,
  getAUser,
  getMe,
  logout,
};

export default authService;
