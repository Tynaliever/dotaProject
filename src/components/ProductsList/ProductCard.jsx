import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Card } from "antd";
import {
  ShoppingCartOutlined,
  EllipsisOutlined,
  StarOutlined,
} from "@ant-design/icons";

import { cartContext } from "../../contexts/cartContext";
import { favoriteContext, favouriteContext } from "../../contexts/favoriteContext";

const ProductCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));
  useEffect(() => {
    setCheckInCart(checkItemInCart(item.id))
  })
  const { addProductToFavourite, checkItemInFavourite } = useContext(favouriteContext);
  const [checkInFavourite, setCheckInFavourite] = useState(checkItemInFavourite(item.id));
  useEffect(() => {
    setCheckInFavourite(checkItemInFavourite(item.id))
  })
  return (
    <Card
    className="product-card"
      hoverable
      key={item.id}
      style={{ width: "280px", margin: "10px" }}
      cover={<img alt="example" src={item.image1} />}
      actions={[
        <StarOutlined style={{fontSize: "25px", color: checkInFavourite ? "red" : "yellow"}} onClick={() => {
          addProductToFavourite(item);
          setCheckInFavourite(checkItemInFavourite(item.id));
        }}  />,
        <ShoppingCartOutlined
          style={{backgroundColor: 'transparent', color: checkInCart ? "red" : "black", fontSize: "25px" }}
          onClick={() => {
            addProductToCart(item);
            setCheckInCart(checkItemInCart(item.id));
          }}
        />,
        <Link style={{backgroundColor: 'transparent'}} to={`/products/${item.id}`}>
          <EllipsisOutlined
            style={{backgroundColor: 'transparent', color: "grey", fontSize: "25px" }}
            key="ellipsis"
          />
        </Link>,
      ]}
    >
      <Card.Meta
        title={item.brand}
        description={
          <>
            <h3>{item.model}</h3>
            <h2>{"$" + item.price}</h2>
          </>
        }
      />
    </Card>
  );
};

export default ProductCard;
