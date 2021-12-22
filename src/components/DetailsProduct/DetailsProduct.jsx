import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { Carousel, Button } from "antd";

import { productsContext } from "../../contexts/productsContext";

import "./DetailProduct.css";
import { cartContext } from "../../contexts/cartContext";

const DetailsProduct = ({ item }) => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    setProducts(oneProduct);
  }, [oneProduct]);
  return (
    <div className="detail-container">
      {products ? (
        <div className="detail-wrapper">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "35vw", color: "white" }}>
              <h3 className="detail-title">{products.model}</h3>
              <h2 style={{ color: "white" }}>{"$" + products.price}</h2>
              <button
                className="detail-btn"
                size="large"
                style={{ margin: "15px 0px", width: "100%" }}
              >
                ADD TO CART
              </button>
              <div className="detail-desc">{products.description}</div>
            </div>
            <div style={{ width: "40vw" }}>
              <video
                src={products.video}
                width="100%"
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailsProduct;
