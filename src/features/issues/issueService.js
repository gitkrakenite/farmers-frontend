import axios from "../../axios";

// get all posts
const getIssues = async () => {
  const response = await axios.get("/issue");
  return response.data;
};

// create issue
const createIssue = async (issueData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post("/issue", issueData, config);
  return response.data;
};

// delete issue
const deleteIssue = async (issueId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`/issue/${issueId}`, config);
  return response.data;
};

const issueService = {
  getIssues,
  createIssue,
  deleteIssue,
};

export default issueService;
