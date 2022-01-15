import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./components/root";
import configureStore from "./store/store";
import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore({});

  window.axios = axios;

  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store} />, root);
});
