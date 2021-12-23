import React, { useContext } from "react";
import { List, InputNumber, Button } from "antd";
import { favoriteContext, favouriteContext } from "../../contexts/favoriteContext";

const FavoriteItem = ({ item }) => {
  // console.log(item);
  const { deleteFromFavourite } = useContext(favouriteContext);
  return (
<>
    <List.Item
    style={{border: 'none', position: 'relative'}}
      key={item.id}
      extra={<video
      height='272px'
        src={item.item.video}
        width="100%"
        autoPlay
        loop
        muted
      ></video>}
    >
      <List.Item.Meta
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h4 style={{color:"white", fontSize: '30px'}}>{item.item.model}</h4>
            </div>
            <h3 style={{color: '#7CFC00', fontSize: '30px'}}>{"$" + item.item.price}</h3>
          </div>
        }
        description={
          <>
            <div style={{color: '#E2DACE90', fontSize: '20px'}}>{item.item.description}</div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "40%",
                marginTop: "20px",
              }}
            >
              
            </div>
            <button className="favorite-btn" onClick={() => deleteFromFavourite(item.item.id)}>
              Remove from favorite
            </button>
          </>
        }
      />
    </List.Item>
    <div className="battle-border" style={{width: '100%'}}></div>
    </>
  );
};

export default FavoriteItem;
