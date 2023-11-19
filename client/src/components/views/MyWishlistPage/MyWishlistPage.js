import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWishItems } from "../../../_actions/user_actions";
import UserCardBlock from "./Sections/UserCardBlock";
import "./MyWishlistPage.css";

import WishlistIcon from './img/WishlistIcon.png'
import PlusIcon from './img/PlusIcon.png'

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.user.userData]);

  return (
    <div className="A" style={{fontFamily: "NeoDunggeunmo",
              width: '90%',
              margin: '3rem auto',
              padding: 0}}>
      <div style={{ width: '100%', display: 'inline-flex', marginBottom: '36px'}}>
        <img src={WishlistIcon} alt="WishlistIcon" style={{ width: '20px', height: '20px', margin: '6px 8px 0px 0px'}} />
        <p style={{ fontSize: '20px', margin: 0 }}>MY 위시리스트</p>
        <a>
          <img src={PlusIcon} alt="PlusIcon" style={{ width: '20px', height: '20px', margin: '6px 0px 0px 186px' }} />
        </a>
      </div>
        <div style={{ fontFamily: "Pretendard-Regular" }}>
          <UserCardBlock
            uploads={
              props.user.wishListDetail && props.user.wishListDetail.upload
            }
          />
      </div>
    </div>
  );
}

export default MyWishlistPage;
