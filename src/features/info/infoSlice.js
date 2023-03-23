import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import infoService from "./infoService";

const initialState = {
  information: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// get all info
export const getInfo = createAsyncThunk("info/getInfo", async (_, thunkAPI) => {
  try {
    return await infoService.getInfo();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// create info
export const createInformation = createAsyncThunk(
  "/info/create",
  async (infoData, thunkAPI) => {
    try {
      // this is a protected route we need our token to create report
      const token = thunkAPI.getState().auth.user.token;
      return await infoService.createInfo(infoData, token);
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

// delete info
export const deleteInfo = createAsyncThunk(
  "/info/delete",
  async (infoId, thunkAPI) => {
    try {
      // this is a protected route we need our token to create report
      const token = thunkAPI.getState().auth.user.token;
      return await infoService.deleteInfo(infoId, token);
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

export const infoSlice = createSlice({
  name: "information",
  initialState,
  reducers: {
    resetInfo: (state) => initialState, //won't persist like user
  },

  extraReducers: (builder) => {
    builder
      .addCase(getInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.information = action.payload;
      })
      .addCase(getInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.reports = null;
      })

      .addCase(createInformation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createInformation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.information.push(action.payload);
      })
      .addCase(createInformation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.reports = null;
      })

      .addCase(deleteInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.issues = state.information.filter(
          (info) => info._id !== action.payload.id
        );
      })
      .addCase(deleteInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.reports = null;
      });
  },
});

export const { resetInfo } = infoSlice.actions;
export default infoSlice.reducer;
