import React, { useContext } from "react";
import { List, InputNumber, Button } from "antd";
import { cartContext } from "../../contexts/cartContext";

const CartItem = ({ item }) => {
  // console.log(item);
  const { deleteFromCart, changeProductCount } = useContext(cartContext);
  return (
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
              <div>
                <h4 style={{color:"white"}}>Quantity</h4>
                <Button
                  onClick={() =>
                    changeProductCount(item.count - 1, item.item.id)
                  }
                >
                  -
                </Button>
                <InputNumber value={item.count} disabled />
                <Button
                  onClick={() =>
                    changeProductCount(item.count + 1, item.item.id)
                  }
                >
                  +
                </Button>
              </div>
              <div>
                <h4 style={{color:"white"}}>SubPrice</h4>
                <h3 style={{color: '#7CFC00', fontSize: '15px'}}>{"$" + item.subPrice}</h3>
              </div>
            </div>
            <button className="favorite-btn" style={{height: '15%'}} onClick={() => deleteFromCart(item.item.id)}>
              Remove from cart
            </button>
          </>
        }
      />
    </List.Item>
  );
};

export default CartItem;
