import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Form, Input, Select, InputNumber } from "antd";
import { productsContext } from "../../contexts/productsContext";

import './EditProduct.css'

const EditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { getOneProduct, oneProduct, updateProduct } =
    useContext(productsContext);
  const [form] = Form.useForm();
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  useEffect(() => {
    form.setFieldsValue(oneProduct);
  }, [oneProduct]);
  const onFinish = (values) => {
    console.log("Success:", values);
    updateProduct(params.id, values).then(() => navigate("/admin"));
  };
  return (
    <div className="edit-container" style={{ paddingTop: "80px" }}>
      <h2 className="edit-text">Edit product</h2>
      <Form
      className="edit-form"
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        form={form}
      >

        <Form.Item
        className='edit-form-item'
          label="Model"
          name="model"
          rules={[
            {
              required: true,
              message: "Please input model!",
            },
          ]}
        >
          <Input style={{height: '40px'}} />
        </Form.Item>

        <Form.Item
        className='edit-form-item'
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input description!",
            },
          ]}
        >
          <Input style={{height: '40px'}} />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input price!",
            },
          ]}
        >
          <InputNumber min={1} style={{ width: "100%", height: '40px' }}/>
        </Form.Item>

        <Form.Item
          label="Image 1"
          name="image1"
          rules={[
            {
              required: true,
              message: "Please input URL of image 1!",
            },
          ]}
        >
          <Input style={{height: '40px'}} />
        </Form.Item>

        <Form.Item
          label="Image 2"
          name="image2"
          rules={[
            {
              required: true,
              message: "Please input URL of image 2!",
            },
          ]}
        >
          <Input style={{height: '40px'}} />
        </Form.Item>

        <Form.Item
        className='edit-form-item'
          label="Video"
          name="video"
          rules={[
            {
              required: true,
              message: "Please input URL of video!",
            },
          ]}
        >
          <Input style={{height: '40px'}} />
        </Form.Item>

        <Form.Item
        className='edit-form-item'
          wrapperCol={{
            offset: 9,
            span: 16,
          }}
        >
          <Button className="edit-btn"  htmlType="submit">
            Edit product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProduct;
