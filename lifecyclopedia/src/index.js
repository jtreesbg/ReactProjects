import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import CyclOPediaClassPage from "./components/CyclOPediaClassPage";
import CyclOPediaFuncPage from "./components/CyclOPediaFuncPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="row">
    <div className="col-5 offset-1">
      <Header />
      <CyclOPediaClassPage />
    </div>
    <div className="col-5">
      <Header />
      <CyclOPediaFuncPage />
    </div>
  </div>
);
