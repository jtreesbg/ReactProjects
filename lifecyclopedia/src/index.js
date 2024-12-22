import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import CyclOPediaClassPage from "./components/CyclOPediaClassPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <CyclOPediaClassPage />
  </div>
);
