import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { addToCart } from "../../../../_actions/user_actions";
import { useDispatch } from "react-redux";

function ProductInfo(props) {
  const [Product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.detail);
  }, [props.detail]);
//==============================
  const dispatch = useDispatch();
  
  // const addToCarthandler = () => {
  //   props.addToCart(props.detail._id);
  // };
   
  const addToCarthandler = () => {
    dispatch(addToCart(props.detail._id));
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="large"
          shape="round"
          type="danger"
          onClick={addToCarthandler}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
