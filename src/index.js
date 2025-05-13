import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./state/store";
import { Provider } from "react-redux";

// import './styles.scss'; // optional if you're using SCSS

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
