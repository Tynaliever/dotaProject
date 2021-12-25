import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../contexts/cartContext";
import { Form, Input, Tooltip, Space, Typography } from "antd";
import { Modal, Button, List } from "antd";
import "antd/dist/antd.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

import './Cart.css'

const Cart = () => {
  // const { getCart, cart } = useContext(cartContext);
  // useEffect(() => {
  //   getCart();
  // }, []);
  // console.log(cart);

  const [newUser, setNewUser] = useState({
    username: "",
    provinсe: "",
    street: "",
    email: "",
  });

  function handleValues(e) {
    let values = {
      ...newUser,
      [e.target.name]: e.target.value,
    };
    setNewUser(values);
  }

  function checkValues() {
    if (
      !newUser.username ||
      !newUser.provinсe ||
      !newUser.street ||
      !newUser.email
    ) {
      alert("Пожалуйста, заполните все поля!");
      return;
    } else {
      localStorage.setItem("Cartinfo", JSON.stringify(newUser));
      console.log(newUser);
    }
    setIsModalVisible(false);
  }

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { getCart, cart } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  //   console.log(cart);
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
<>
<div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "100px",
          }}
        >
          {" "}
          {cart.totalPrice === 0 ? null : (
            <button className="cart-btn" onClick={showModal}>
              Проверить
            </button>
          )}
          {cart.totalPrice === 0 ? null : (
            <Link to="/credit-card">
                <button className="cart-btn">Buy</button>
            </Link>
          )}
        </div>
        <Modal
          title="Paymound metod"
          visible={isModalVisible}
          onOk={checkValues}
          onCancel={handleCancel}
        >
          <Form
            name="complex-form"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Form.Item label="Username">
              <Space>
                <Form.Item
                  noStyle
                  rules={[{ required: true, message: "Username is required" }]}
                >
                  <Input
                    style={{ width: 160 }}
                    placeholder="Please input"
                    name="username"
                    onChange={handleValues}
                  />
                </Form.Item>
                <Tooltip title="Useful information">
                  <Typography.Link href="#API">Нужна помощь?</Typography.Link>
                </Tooltip>
              </Space>
            </Form.Item>
            <Form.Item label="Provinсe">
              <Space>
                <Form.Item
                  noStyle
                  rules={[{ required: true, message: "Provinсe is required" }]}
                >
                  <Input
                    style={{ width: 160 }}
                    placeholder="Please input"
                    name="provinсe"
                    onChange={handleValues}
                  />
                </Form.Item>
                <Tooltip title="Useful information">
                  <Typography.Link href="#API">Нужна помощь?</Typography.Link>
                </Tooltip>
              </Space>
            </Form.Item>
            <Form.Item label="Street">
              <Space>
                <Form.Item
                  noStyle
                  rules={[{ required: true, message: "Street is required" }]}
                >
                  <Input
                    style={{ width: 160 }}
                    placeholder="Please input"
                    name="street"
                    onChange={handleValues}
                  />
                </Form.Item>
                <Tooltip title="Useful information">
                  <Typography.Link href="#API">Нужна помощь?</Typography.Link>
                </Tooltip>
              </Space>
            </Form.Item>

            <Form.Item label="Email">
              <Space>
                <Form.Item
                  noStyle
                  rules={[{ required: true, message: "Email is required" }]}
                >
                  <Input
                    onChange={handleValues}
                    name="email"
                    style={{ width: 160 }}
                    placeholder="Please input email"
                  />
                </Form.Item>
                <Tooltip title="Useful information">
                  <Typography.Link href="#API">Нужна помощь?</Typography.Link>
                </Tooltip>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
      </>
    </div>
    
  );
};

export default Cart;
