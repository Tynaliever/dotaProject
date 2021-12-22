import React from "react";

import "antd/dist/antd.css";
import "./App.css";

import Header from "./components/Header/Header";
import "antd/dist/antd.css";
import AuthContextProvider from "./contexts/authContext";
import { BrowserRouter } from "react-router-dom";
import ProductsContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";
import Routing from "./Routing";

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <ProductsContextProvider>
          <BrowserRouter>
            <Header />
            <Routing />
          </BrowserRouter>
        </ProductsContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;
