import React from "react";

import "antd/dist/antd.css";
import "./App.css";

import Header from "./components/Header/Header";
import "antd/dist/antd.css";
import AuthContextProvider from "./contexts/authContext";
import { BrowserRouter } from "react-router-dom";
import ProductsContextProvider from "./contexts/productsContext";
import FavoriteContextProvider from "./contexts/favoriteContext";
import CartContextProvider from "./contexts/cartContext";
import Routing from "./Routing";
import FavouriteContextProvider from "./contexts/favoriteContext";
import CommentContextProvider from "./contexts/CommentContext";
import LikesContextProvider from "./contexts/likesContext";


const App = () => {
  return (
    <AuthContextProvider>
<CommentContextProvider>
      <CartContextProvider>
        <FavouriteContextProvider>
        <LikesContextProvider>
        <ProductsContextProvider>
          <BrowserRouter>
            <Header />
            <Routing />
          </BrowserRouter>
        </ProductsContextProvider>
          </LikesContextProvider>
        </FavouriteContextProvider>
      </CartContextProvider>
      </CommentContextProvider>
    </AuthContextProvider>
  );
};

export default App;
