import React, { useState, useEffect } from "react";
import "./MyWishlistPage.css";
import { useDispatch } from "react-redux";
import { getWishItems } from "../../../_actions/user_actions";
import UserCardBlock from "./Sections/UserCardBlock";
import "./MyWishlistPage.css";

function MyWishlistPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    let wishItems = [];
    //리덕스 User state안에 cart 안에 상품이 들어있는지 확인
    if (props.user.userData && props.user.userData.wishList) {
      if (props.user.userData.wishList.length > 0) {
        props.user.userData.wishList.forEach((item) => {
          wishItems.push(item.id);
        });
        dispatch(getWishItems(wishItems, props.user.userData.wishList));
      }
    }
  }, [props.user.userData]);

  return (
    <div className="A">
      <div style={{ textAlign: "center" }}>
        <h2 className="title">my 위시리스트</h2>
        {/* 상품값 */}
        <div
          style={{
            margin: "10px",
            border: "1px solid black",
            borderRadius: "12px",
          }}
        >
          <div>
            <UserCardBlock
              className="Card"
              uploads={
                props.user.wishListDetail && props.user.wishListDetail.upload
              }
              // removeItem={removeFromCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWishlistPage;
