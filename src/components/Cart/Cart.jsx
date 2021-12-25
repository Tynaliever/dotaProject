import React, { useContext, useEffect } from "react";
import { List } from "antd";
import { cartContext } from "../../contexts/cartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { getCart, cart } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return (
    <div className="favorite-container">
      <List
        style={{ marginTop: "50px" }}
        itemLayout="vertical"
        size="large"
        dataSource={cart?.products}
        footer={
          <h2 style={{ color: "#7CFC00", fontSize: "25px" }}>
            Total: {cart?.totalPrice}$
          </h2>
        }
        renderItem={(item) => <CartItem item={item} />}
      />
      <button>Buy</button>
    </div>
    
  );
};

export default Cart;
