import axios from "../../axios";

// get all info
const getInfo = async () => {
  const response = await axios.get("/info");
  return response.data;
};

// create info
const createInfo = async (infoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post("/info", infoData, config);
  return response.data;
};

// delete info
const deleteInfo = async (infoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`/info/${infoId}`, config);
  return response.data;
};

const issueService = {
  getInfo,
  createInfo,
  deleteInfo,
};

export default issueService;
