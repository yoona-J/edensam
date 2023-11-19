import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "antd";
import { addToCart } from "../../../../_actions/user_actions";

import ClickedWishButton from './img/ClickedWishButton.png'
import WishButton from './img/WishButton.png'

function ProductInfo(props) {
  const dispatch = useDispatch();

  // const [imageSrc, setImageSrc] = useState("./img/empty_heart.png");
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    dispatch(addToCart(props.detail._id));
    console.log("click=", props.detail._id);

    if (props.detail._id.length >= 1) {
      alert("위시리스트에 저장되었습니다.");
      setIsClicked(!isClicked);
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
            padding: "0",
            fontSize: "39px",
          }}
          onClick={clickHandler}
        >
          {isClicked ? "♥" : "♡"}
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
