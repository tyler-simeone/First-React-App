import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Kennel from "./components/Kennel";

// TODO: Bk 4, Ch. 3-4 practice exercises.. THEN look @ Andy's lights app from this am.
ReactDOM.render(
  <Router>
    <Kennel />
  </Router>,
  document.getElementById("root")
);