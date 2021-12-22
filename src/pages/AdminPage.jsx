import React from "react";
import { Row, Col } from "antd";

import './Admin.css'

import AddProductModal from "../components/AddProductModal/AddProductModal";
import AdminProductsList from "../components/AdminProductsList/AdminProductsList";
import Header from "../components/Header/Header";

const AdminPage = () => {
  return (
    <div className="wrapper-admin" style={{ paddingTop: "130px" }}>
            <AddProductModal />
            <AdminProductsList />
    </div>
  );
};

export default AdminPage;
