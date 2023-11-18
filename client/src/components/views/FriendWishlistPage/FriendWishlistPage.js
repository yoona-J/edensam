import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getWishItems } from "../../../_actions/user_actions";
// import UserCardBlock from "./Sections/UserCardBlock";
import "./FriendWishlistPage.css";
import Axios from "axios";
// import Axios from "axios";

import { useHistory } from "react-router-dom";
// import { response } from "express";

function FriendWishlistPage(props) {
  const [FriendId, setFriendId] = useState("");
  const [MailingList, setMailingList] = useState([]);
  const [FriendWish, setFriendWish] = useState([]);
  const [Products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("pppp", props);
    setFriendId(props.location.state.friendId);
    setMailingList(props.location.state);
    if (props.location.state.friendId) {
      const body = {
        friendId: FriendId,
      };

      Axios.post("/api/mail/getFriendId", body).then((response) => {
        // console.log(response.data);
        if (response.data.length > 0) {
          // console.log(response.data[0].wishList);
          setFriendWish(response.data[0].wishList);
        }
      });
    }
  }, [props]);

  useEffect(() => {
    const body = {
      item: FriendWish
    }

    Axios.post("/api/admin/upload/wishItem", body).then((response) => {
      console.log(response.data);
      setProducts(response.data.upload);
    });
  }, [FriendWish])
  

  console.log('Products', Products)

  const renderCards = Products.map((product, index) => {
    console.log(product)

    return <div>
            <a href={`/product/${product._id}`}>
              <div className="witembox">
                <img
                  src={`http://localhost:5000/${product.item_image[0]}`}
                  style={{
                    height: "166px",
                    width: "166px",
                    borderInline: "19px",
                    margin: "7px",
                    borderRadius: "10px",
                  }}
                />
                <div className="winame">{product.item_title}</div>
                <div className="wprice">{product.how_much}원</div>
              </div>
            </a>
          </div>
  })

  return (
    <div className="A">
        <div style={{ textAlign: "center" }}>
        <h2 className="wtitle">my 위시리스트</h2>
        {renderCards}
      </div>
    </div>
  )
}

export default FriendWishlistPage;
