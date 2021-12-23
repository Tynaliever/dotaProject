import React, { useContext, useEffect } from "react";
import { List } from "antd";
import { favoriteContext, favouriteContext } from "../../contexts/favoriteContext";
import FavoriteItem from "./FavoriteItem";

import './Favorite.css'

const Favorite = () => {
  const { getFavourite, favourite } = useContext(favouriteContext);
  useEffect(() => {
    getFavourite();
  }, []);
  console.log(favourite);
  return (
    <div className="favorite-container">
      <List
      style={{marginTop: '50px'}}
        itemLayout="vertical"
        size="large"
        dataSource={favourite?.products}
        renderItem={(item) => <FavoriteItem item={item} />}
      />
    </div>
  );
};

export default Favorite;
