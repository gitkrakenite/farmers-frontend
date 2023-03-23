import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postReducer from "../features/posts/postSlice";
import issueReducer from "../features/issues/issueSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    issues: issueReducer,
  },
});
