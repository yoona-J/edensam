import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "antd";
import { addToCart } from "../../../../_actions/user_actions";
import empty_heart from "../img/empty_heart.png";

function ProductInfo(props) {
  const dispatch = useDispatch();

  const [imageSrc, setImageSrc] = useState("../img/empty_heart.png");
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    dispatch(addToCart(props.detail._id));
    console.log("click=", props.detail._id);

    if (props.detail._id.length >= 1) {
      alert("위시리스트에 저장되었습니다.");
    }
  };

  const handleClick = () => {
    // if (isClicked) {
    //   setImageSrc("../img/empty_heart.png");
    //   setIsClicked(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
    // } else {
    //   setImageSrc("../img/full_heart.png");
    //   setIsClicked(true); // true일 땐 변경될 이미지 src
    // }

    if (isClicked) {
      setImageSrc("../img/empty_heart.png");
      setIsClicked(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
    } else {
      setImageSrc("../img/full_heart.png");
      setIsClicked(true); // true일 땐 변경될 이미지 src
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
          }}
          onClick={clickHandler}
        >
          <img
            src={empty_heart}
            onClick={handleClick}
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
