import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "antd";
import { addToCart } from "../../../../_actions/user_actions";
import empty_heart from "../img/empty_heart.png";
import full_heart from "../img/full_heart.png";

function ProductInfo(props) {
  // const [Product, setProduct] = useState({});

  // useEffect(() => {
  //   setProduct(props.detail);
  // }, [props.detail]);

  // const addToCarthandler = () => {
  //   // props.addToCart(props.detail._id);

  // };

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(addToCart(props.detail._id));
    console.log("click=", props.detail._id);

    if (props.detail._id.length >= 1) {
      alert("위시리스트에 저장되었습니다.");
    }
  };

  // const [imageSrc, setImageSrc] = useState("./empty_heart.png");
  // const [isClicked, setIsClicked] = useState(false);
  // const wishcheck = () => {
  //   if (isClicked) {
  //     setImageSrc({empty_heart});
  //     setIsClicked(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
  //   } else {
  //     setImageSrc({full_heart});
  //     setIsClicked(true); // true일 땐 변경될 이미지 src
  //   }
  // };

  return (
    <div>
      <div style={{
        display: "flex",
        // justifyContent: "center"
      }}>
        <Button
          style={{
            backgroundColor: "#FFFFFF",
            border: "none",
            // float: "left",
          }}
          onClick={clickHandler}
        >
          <img
            src={empty_heart}
            style={{
              width: "24px",
              height: "24px",
              
            }}
            // onClick={wishcheck}
          />
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
