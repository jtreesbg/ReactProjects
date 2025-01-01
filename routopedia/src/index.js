import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import CryptoDetail from "./components/CryptoDetail";
import Product from "./components/Pages/Product";
import ProductCreate from "./components/Pages/CreateProduct";
import ProductList from "./components/Pages/ProductList";
import ProductDetails from "./components/Pages/ProductDetails";
import NotFound from "./NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/cryptodetail/:cryptoSymbol"
          element={<CryptoDetail />}
        ></Route>

        <Route path="product">
          {/* <Route index element={<Product />}></Route> */}
          <Route path="" element={<Product />}></Route>
          <Route path="create" element={<ProductCreate />}></Route>
          <Route path="list" element={<ProductList />}></Route>
          <Route path="details/:productID" element={<ProductDetails />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
