import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import Header from "./Layout/header";
import Footer from "./Layout/footer";
import Counter from "./counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header></Header>
    <Counter></Counter>
    <Footer></Footer>
  </div>
);
