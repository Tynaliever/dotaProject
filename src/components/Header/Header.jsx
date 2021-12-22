import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

import "./Header.css";

const Header = () => {
  const location = useLocation();
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
        <div className="header-text">Герои</div>
        <div className="header-text">Новости</div>
        <div className="header-text">Live чат</div>
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
