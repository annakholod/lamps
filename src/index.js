import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { HashRouter, Route } from "react-router-dom";

ReactDOM.render(
  <HashRouter basename="/">
    <Route component={App} />
  </HashRouter>,
  document.getElementById("root")
);
