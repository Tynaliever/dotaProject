import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { cartContext } from "../../contexts/cartContext";
import "./Invoice.css";
const Invoic = () => {
  const [user, setUser] = useState(null);
  const {
    user: { email },
  } = useAuth();
  const { cart } = useContext(cartContext);
  useEffect(() => {
    getCart(user);
  }, []);

  function getCart(user) {
    let cart = JSON.parse(localStorage.getItem("Cartinfo"));
    user = cart;
    setUser(user);
    console.log(cart);
  }

  function deleteFromCart() {
    JSON.parse(localStorage.getItem("Cartinfo"));
    let cart2 = {};
    localStorage.setItem("Cartinfo", JSON.stringify(cart2));

    localStorage.removeItem("cart");
  }

  return (
    <div
    className="invoice-container"
      style={{
        paddingTop: "150px",
        paddingBottom: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="check">
        <div className="check_inner">
          <img
            width="100px"
            src="https://img.icons8.com/plasticine/100/000000/dota.png"
            alt="logo"
          />
          <div>
            <span className="check-words">User's email : </span>
            <span>{email}</span>
          </div>
          <div>
            <span className="check-words">Username : </span>
            <span>{user?.username}</span>
          </div>
          <div>
            <span className="check-words">City : </span>
            <span>{user?.provinсe}</span>
          </div>
          <div>
            <span className="check-words">Street : </span>
            <span>{user?.street}</span>
          </div>
          <div className="ch">
            <div>
              <span className="check-words">Name of product </span>
              {cart?.products?.map((product) => {
                return <li>{product.item.model}</li>;
              })}
            </div>
            <div>
              <span className="check-words">Price </span>
              {cart?.products?.map((product) => {
                return <li>{product.item.price} $</li>;
              })}
            </div>
            <div>
              <span className="check-words">Count </span>
              {cart?.products?.map((product) => {
                return <li>{product.count}</li>;
              })}
            </div>
            <div>
              <span className="check-words">Sum </span>
              {cart?.products?.map((product) => {
                return <li>{product.subPrice + "  $"}</li>;
              })}
            </div>
          </div>
          <div className="total">
            <h3>
              <strong>TOTAL : </strong>
            </h3>
            <strong>{cart?.totalPrice + "  $"}</strong>
          </div>
          <h1 className="thanks">
            <i> Спасибо за покупку!</i>
          </h1>
        </div>
      </div>
      <Link to="/">
        <button
          style={{
            marginTop: "100px",
            backgroundColor: "whitesmoke",
            borderRadius: "10px",
            height: "50px",
            width: "100px",
            color: "black",
          }}
          onClick={() => deleteFromCart()}
        >
          HOME
        </button>
      </Link>
    </div>
  );
};

export default Invoic;