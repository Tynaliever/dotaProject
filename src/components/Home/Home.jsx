import React, { useContext, useEffect, useState } from "react";

import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "./Home.css";
import { Link, useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

const { Meta } = Card;
const Home = () => {
  const { products, getProducts } = useContext(productsContext);
  // const {addProductToCart} = useContext(cartContext);
  useEffect(() => {
    getProducts();
  }, []);

  // pagination
  const { productsTotalCount } = useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [valueSlider, setValueSlider] = useState([0, 1000]);

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 8
  );

  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
      price_gte: valueSlider[0],
      price_lte: valueSlider[1],
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
      price_gte: valueSlider[0],
      price_lte: valueSlider[1],
    });
  }, [search, page, limit, valueSlider]);
  // end pagination
  console.log("valueSlider", valueSlider);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleChangeSlider = (event, newValue) => {
    setValueSlider(newValue);
    console.log("newValue", newValue);
  };

  function valuetext(value) {
    return `$ ${value}`;
  }
  return (
    <>
      <div className="home">
        <div>
          <video
            className="background-video"
            muted
            autoPlay
            preload="auto"
            loop
          >
            <source
              type="video/webm"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm"
            />
            <source
              type="video/mp4"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4"
            />
          </video>
          <div className="fade-background-video">
            <div className="fade-video">
              <div className="background-video-text">
                «СОВРЕМЕННЫЙ МНОГОПОЛЬЗОВАТЕЛЬСКИЙ ШЕДЕВР»
              </div>
            </div>
          </div>
        </div>
        <div className="home-battle">
          <div className="home-battle_section">
            <img
              class="home-battle_img"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/radiant_dire5.jpg"
            />
            <div className="home-battle-fade fade-image">
              <div class="fade-homepage">
                <div className="fade-homepage-text">
                  <span>Присоединитесь к</span>
                  <span className="first-text">
                    <br />
                    битве Древних
                  </span>
                </div>
                <div className="battle-border"></div>
                <div className="battle-text">
                  Каждый день миллионы игроков по всему миру вступают в
                  командную битву 5 на 5 в роли одного из более чем сотни
                  героев. Dota — глубочайшая многопользовательская стратегия
                  всех времён, в которой всегда найдётся место новой стратегии
                  или тактике. Она совершенно бесплатна, и это не поменяется —
                  начинайте защищать своего Древнего уже сейчас.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-hero-image">
          <div className="fade-home-hero-image">
            <div className="fade-hero">
              <div className="fade-homepage-text">
                <span>КОГО ВЫ</span>
                <span className="first-text">
                  <br />
                  ВЫБЕРЕТЕ?
                </span>
              </div>
              <div className="battle-border"></div>
              <div className="battle-text">
                Список героев в Dota 2 огромен и безгранично разнообразен: здесь
                вы встретите и магов-тактиков, и свирепых громил, и хитроумных
                негодяев. Их невероятные способности и сокрушительные ульты
                непременно приведут вас к победе.
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
