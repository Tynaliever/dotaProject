import React, { useContext, useEffect, useState } from "react";

import { Card, Avatar, List, Pagination } from "antd";

import "./Heroes.css";
import ProductsList from "../ProductsList/ProductsList";
import { Link, useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Slider } from "antd";

const { Meta } = Card;

const Heroes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getProducts, deleteProduct, products, productsTotalCount } =
    useContext(productsContext);

  const [model, setModel] = useState([]);
  const [price, setPrice] = useState([1, 10000]);

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 8
  );
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: currentPage,
      _limit: limit,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      q: search,
      _page: currentPage,
      _limit: limit,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, currentPage, limit, price]);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  //   console.log(window.location.search);

  //   const handleChange = (event, value) => {
  //     setCurrentPage(value);
  //   };

  //   const handleChangeSlider = (event, newValue) => {
  //     setPrice(newValue);
  //     console.log("newValue", newValue);
  //   };

  return (
    <div className="heroes-container">
      <div className="heroes-wrapper">
        <div className="heroes-title">Выберите героя</div>
        <div className="heroes-text">
          Список героев в Dota 2 огромен и безгранично разнообразен: здесь вы
          встретите и магов-тактиков, и свирепых громил, и хитроумных негодяев.
          Их невероятные способности и сокрушительные ульты непременно приведут
          вас к победе.
        </div>
      </div>
      <div className="heroes-filter">
        <div className="filter-label">Фильтр</div>
        <div
          className="filter-container"
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="selector-label">Цена</div>
          <div style={{ width: 400, margin: "0" }}>
          <Slider
        value={price}
        onChange={(e) => setPrice(e)}
        range
        defaultValue={[1, 100]}
        min={0}
        max={100}
        step={1}
      />
          </div>
        </div>
        <div className="heroes-search">
          <div className="heroes-search-bar">
            <div className="search-icon"></div>
            <form className="search-form">
              <input
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="card-container">
        {products.map((item) => (
          <Link to={`/products/${item.id}`}>
            <Card
              className="heroes-card"
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src={item.image1} />}
            >
              <Meta
                style={{ textAlign: "center", color: "white" }}
                title={item.model}
                description={`$ ${item.price}`}
              />
            </Card>
          </Link>
        ))}
      </div>
      <Pagination
        className="pagination"
        onChange={(page, limit) => {
          setCurrentPage(page);
          setLimit(limit);
        }}
        current={+currentPage}
        defaultCurrent={1}
        total={+productsTotalCount}
        pageSize={+limit}
      />
    </div>
  );
};

export default Heroes;
