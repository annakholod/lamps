import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename="/">
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);
