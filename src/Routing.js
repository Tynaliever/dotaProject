import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import Cart from "./components/Cart/Cart";
import Heroes from "./components/Heroes/Heroes";
import Home from "./components/Home/Home";
import ProductsList from "./components/ProductsList/ProductsList";
import { useAuth } from "./contexts/authContext";
import AdminPage from "./pages/AdminPage";
import Error404 from "./pages/Error404";
import Favorite from "./components/Favorite/Favorite";
import Invoic from "./components/Invoice/Invoice";
import CreditApp from '../src/components/CreditCard/CreditApp';
import Chat from "./components/Chat/Chat";


const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/products",
      element: <ProductsList />,
      id: 2,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 3,
    },
    {
      link: "/products/:id",
      element: <DetailsProduct />,
      id: 4,
    },
    {
      link: "/heroes",
      element: <Heroes />,
      id: 5,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 6
    },
    {
      link: "/favourite",
      element: <Favorite />,
      id: 7
    },
    {
      link: "/invoice",
      element: <Invoic />,
      id: 8
    },
    {
      link: "/credit-card",
      element: <CreditApp />,
      id: 9
    },
    {
      link: "/chat",
      element: <Chat />,
      id: 10
    },
  ];
  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 2,
    },
  ];
  const { user } = useAuth();
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
      { user ? ADMIN_ROUTES.map((item) => (
        <Route
          path={item.link}
          element={
            user.email === "tynaliev13th@gmail.com" ? (
              item.element
            ) : (
              <Navigate replace to="*" />
            )
          }
        />
      )): null}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Routing;
