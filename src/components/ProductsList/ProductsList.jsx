import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Input, Pagination, Empty, Slider } from "antd";

import { productsContext } from "../../contexts/productsContext";

import ProductCard from "./ProductCard";

import "./ProductsList.css";
import Heroes from "../Heroes/Heroes";

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 4
  );
  const [price, setPrice] = useState([1, 1000000]);
  const [showFilters, setShowFilters] = useState(false);
  const { getProducts, products, productsTotalCount } =
    useContext(productsContext);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
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
      _page: page,
      _limit: limit,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, page, limit, price]);
  console.log(products);
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
      <div className="products-list">
        {products.length > 0 ? (
          products.map((item) => <ProductCard item={item} />)
        ) : (
          <Empty style={{ marginBottom: "20px" }} />
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          total={+productsTotalCount}
        />
      </div>
    </div>
  );
};

export default ProductsList;
