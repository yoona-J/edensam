import React, { useState, useEffect } from "react";
import "./MyWishlistPage.css";
import { useDispatch } from "react-redux";
// import { id } from "date-fns/locale";
// import ProductImage from "../ItemDetailPage/Sections/ProductImage";
import { getWishItems } from "../../../_actions/user_actions";
import UserCardBlock from "./Sections/UserCardBlock";

function MyWishlistPage(props) {
  const dispatch = useDispatch();
  const [Total, setTotal] = useState(0);
  const [ShowTotal, setShowTotal] = useState(false);
  const [ShowSuccess, setShowSuccess] = useState(false);

  // useEffect(() => {
  //   let wishListItems = [];
  //   //상품 들어있는지 확인
  //   if (props.user.userData && props.user.userData.wishList) {

  //     if (props.user.userData.wishList.length > 0) {
  //       props.user.userData.wishList.forEach((item) => {
  //         wishListItems.push(item.id);
  //         console.log(props.user.userData.wishList);
  //       });

  // dispatch(
  //   getwishListItems(
  //     wishListItems,
  //           // props.user.userData.props.user.userData.wishList
  //           props.user.userData.wishList
  //         )
  //         // .then((response) => {
  //         // if (response.payload.length > 0) {
  //         //   calculateTotal(response.payload);
  //         // }
  //         // }
  //         // )
  //       );
  //     }
  //   }
  //   return () => {};
  // }, [props.user.userData]);

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

  // const calculateTotal = (cartDetail) => {
  //   let total = 0;

  //   cartDetail.map((item) => {
  //     total += parseInt(item.price, 10) * item.quantity;
  //   });

  //   setTotal(total);
  //   setShowTotal(true);
  // };

  // const removeFromCart = (productId) => {
  //   dispatch(removeCartItem(productId)).then((response) => {
  //     if (response.payload.cartDetail.length <= 0) {
  //       setShowTotal(false);
  //     } else {
  //       calculateTotal(response.payload.cartDetail);
  //     }
  //   });
  // };

  // const transactionSuccess = (data) => {
  //   dispatch(
  //     onSuccessBuy({
  //       cartDetail: props.user.cartDetail,
  //       paymentData: data,
  //     })
  //   ).then((response) => {
  //     if (response.payload.success) {
  //       setShowSuccess(true);
  //       setShowTotal(false);
  //     }
  //   });
  // };

  // const transactionError = () => {
  //   console.log("Paypal error");
  // };

  // const transactionCanceled = () => {
  //   console.log("Transaction canceled");
  // };

  //   return (
  //     <div style={{ width: "85%", margin: "3rem auto" }}>
  //       <h1>My Cart</h1>
  //       <div>
  //         <UserCardBlock
  //           products={props.user.cartDetail}
  //           removeItem={removeFromCart}
  //         />
  //       </div>
  //     </div>
  //   );
  // }

  // // return (
  // //   <div
  // //     className="A">
  // //     <div className="wishtitle">My 위시리스트</div>

  // //   </div>
  // // );

  return (
    <div
      style={{
        width: "100%",
        margin: "3rem auto",
        fontFamily: "initial",
        padding: "0 3%",
      }}
    >
      <h2
        style={{
          fontFamily: "NeoDunggeunmo",
          textAlign: "center",
          height: "39px",
          width: "100%",
          borderRadius: "20px",
          backgroundColor: "#b4e8e6",
          border: "none",
          lineheight: "39px",
        }}
      >
        my 위시리스트
      </h2>
      {/* 상품값 */}

      <UserCardBlock
        products={props.user.wishListDetail && props.user.wishListDetail.upload}
        // removeItem={removeFromCart}
      />
    </div>
  );
}

export default MyWishlistPage;
