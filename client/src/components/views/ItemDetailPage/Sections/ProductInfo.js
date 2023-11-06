import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { Button } from "antd";
import { addToCart } from '../../../../_actions/user_actions'

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
        dispatch(addToCart(props.detail._id))
        console.log('click=', props.detail._id)
        
        if (props.detail._id.length >= 1) {
            alert('카트에 저장되었습니다.')
        }
    }


  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="large"
          shape="round"
          type="danger"
          onClick={clickHandler}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
