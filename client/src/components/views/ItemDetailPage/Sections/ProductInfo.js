import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "antd";
import { addToCart } from "../../../../_actions/user_actions";
import empty_heart from "../img/empty_heart.png";

function ProductInfo(props) {

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(addToCart(props.detail._id));
    console.log("click=", props.detail._id);

    if (props.detail._id.length >= 1) {
      alert("위시리스트에 저장되었습니다.");
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
        }}
      >
        <Button
          style={{
            backgroundColor: "#FFFFFF",
            border: "none",
            float: "left",
          }}
          onClick={clickHandler}
        >
          <img
            src={empty_heart}
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
