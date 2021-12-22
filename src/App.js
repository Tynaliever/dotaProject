import React from "react";

import "antd/dist/antd.css";
import "./App.css";

import Header from "./components/Header/Header";
import "antd/dist/antd.css";
import AuthContextProvider from "./contexts/authContext";
import { BrowserRouter } from "react-router-dom";
import ProductsContextProvider from "./contexts/productsContext";
import Routing from "./Routing";



const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
      <BrowserRouter>
        <Header />
        <Routing/>
      </BrowserRouter>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
