import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWishItems } from "../../../_actions/user_actions";
import UserCardBlock from "./Sections/UserCardBlock";
import "./FriendWishlistPage.css";

function FriendWishlistPage(props) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.user.userData]);

  return (
    <div className="A">
      <div style={{ textAlign: "center" }}>
        <h2 className="wtitle">my 위시리스트</h2>
        {/* 상품값 */}

        <div>
          <UserCardBlock
            uploads={
              props.user.wishListDetail && props.user.wishListDetail.upload
            }
          />
        </div>
      </div>
    </div>
  );
}

export default FriendWishlistPage;
