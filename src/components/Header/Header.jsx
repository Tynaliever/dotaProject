import { ShoppingCartOutlined, StarOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

import { cartContext } from "../../contexts/cartContext";
import { favoriteContext, favouriteContext } from "../../contexts/favoriteContext";
import { productsContext } from "../../contexts/productsContext";

import "./Header.css";

const Header = () => {
  const location = useLocation();
  const { products, getProducts } = useContext(productsContext);

  const { getCart, cartLength } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);

  const { getFavourite, favouriteLength } = useContext(favouriteContext);
  useEffect(() => {
    getFavourite();
  }, []);

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  return (
    <div className="container header">
      <div className="header-left">
        <Link to="/">
          <img
            className="header-logo"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png"
            alt="header logo"
          />
        </Link>
        <Link to="/products">
          <div className="header-text">Герои</div>
        </Link>
        <div className="header-text">Новости</div>
        <a href="https://t.me/Dota_hackston_bot"><div className="header-text">Telegram</div></a>
        {email === "tynaliev13th@gmail.com" ? (
          <Link
            className={
              location.pathname === "/admin"
                ? "navbar__item-active"
                : "navbar__item"
            }
            to="/admin"
          >
            <div className="header-text">Admin</div>
          </Link>
        ) : null}
      </div>
      <div className="header-right">
      {email ? (
      <div style={{marginTop: '25px', width: '15%', display: 'flex', justifyContent: 'space-between'}}>
        <Link to="/favourite">
            <Badge count={+favouriteLength}>
            <StarOutlined
                style={{ fontSize: "30px", color: 'white', cursor: "pointer" }}
              />
            </Badge>
          </Link>
          <Link to="/cart">
            <Badge count={+cartLength}>
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: 'white', cursor: "pointer" }}
              />
            </Badge>
          </Link>
        </div>
        ) : null}
        {email ? (
          <Link to="/">
            <button className="header-btn" onClick={handleLogout}>
              Выйти
            </button>
          </Link>
        ) : null}

        {email ? null : (
          <Link to="/auth">
            <button className="header-btn">Войти</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
