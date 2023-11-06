// import React from "react";
// import "./MyWishlistPage.css";

// function MyWishlistPage() {
//   const dispatch = useDispatch();
//   const [Total, setTotal] = useState(0);
//   const [ShowTotal, setShowTotal] = useState(false);
//   const [ShowSuccess, setShowSuccess] = useState(false);

//   useEffect(() => {
//     let cartItems = [];
//     if (props.user.userData && props.user.userData.cart) {
//       if (props.user.userData.cart.length > 0) {
//         props.user.userData.cart.forEach((item) => {
//           cartItems.push(item.id);
//         });
//         dispatch(getCartItems(cartItems, props.user.userData.cart)).then(
//           (response) => {
//             if (response.payload.length > 0) {
//               calculateTotal(response.payload);
//             }
//           }
//         );
//       }
//     }
//   }, [props.user.userData]);

//   const calculateTotal = (cartDetail) => {
//     let total = 0;

//     cartDetail.map((item) => {
//       total += parseInt(item.price, 10) * item.quantity;
//     });

//     setTotal(total);
//     setShowTotal(true);
//   };

//   const removeFromCart = (productId) => {
//     dispatch(removeCartItem(productId)).then((response) => {
//       if (response.payload.cartDetail.length <= 0) {
//         setShowTotal(false);
//       } else {
//         calculateTotal(response.payload.cartDetail);
//       }
//     });
//   };

//   const transactionSuccess = (data) => {
//     dispatch(
//       onSuccessBuy({
//         cartDetail: props.user.cartDetail,
//         paymentData: data,
//       })
//     ).then((response) => {
//       if (response.payload.success) {
//         setShowSuccess(true);
//         setShowTotal(false);
//       }
//     });
//   };

//   const transactionError = () => {
//     console.log("Paypal error");
//   };

//   const transactionCanceled = () => {
//     console.log("Transaction canceled");
//   };

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

// export default MyWishlistPage;


