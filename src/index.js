import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position="top-right" />
      <App />
    </Provider>
  </React.StrictMode>
);
