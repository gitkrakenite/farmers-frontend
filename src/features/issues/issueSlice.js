import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import issueService from "./issueService";

const initialState = {
  issues: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// get all issues
export const getIssues = createAsyncThunk(
  "issue/getIssues",
  async (_, thunkAPI) => {
    try {
      return await issueService.getIssues();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// create an issue
export const createMyIssue = createAsyncThunk(
  "/issue/create",
  async (issueData, thunkAPI) => {
    try {
      // this is a protected route we need our token to create report
      const token = thunkAPI.getState().auth.user.token;
      return await issueService.createIssue(issueData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// delete my issue
export const deleteIssue = createAsyncThunk(
  "/issue/delete",
  async (issueId, thunkAPI) => {
    try {
      // this is a protected route we need our token to create report
      const token = thunkAPI.getState().auth.user.token;
      return await issueService.deleteIssue(issueId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const issueSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    resetPosts: (state) => initialState, //won't persist like user
  },

  extraReducers: (builder) => {
    builder
      .addCase(getIssues.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIssues.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.issues = action.payload;
      })
      .addCase(getIssues.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.reports = null;
      })

      .addCase(createMyIssue.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMyIssue.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.issues.push(action.payload);
      })
      .addCase(createMyIssue.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.reports = null;
      })

      .addCase(deleteIssue.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteIssue.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.issues = state.issues.filter(
          (issue) => issue._id !== action.payload.id
        );
      })
      .addCase(deleteIssue.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.reports = null;
      });
  },
});

export const { resetPosts } = issueSlice.actions;
export default issueSlice.reducer;
