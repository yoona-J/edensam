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
    if (FriendWish) {
      FriendWish.map((wish) => {
        const body = {
          item: wish.id,
        };

        Axios.post("/api/admin/upload/wishItem", body).then((response) => {
          // console.log(response.data);
          setProducts(response.data.upload[0]);
        });
      });
    }
  }, [FriendWish]);

  // console.log(Products);

  // const WishItems =
  //   Products &&
  //   Products.map((product) => {
  //     return (
  //       <div>
  //         <a href={`/product/${product._id}`}>
  //           <div className="witembox">
  //             <img
  //               src={`http://localhost:5000/${product.item_image[0]}`}
  //               style={{
  //                 height: "166px",
  //                 width: "166px",
  //                 borderInline: "19px",
  //                 margin: "7px",
  //                 borderRadius: "10px",
  //               }}
  //             />

  //             <div className="winame">{product.item_title}</div>
  //             <div className="wprice">{product.how_much}원</div>
  //           </div>
  //         </a>
  //       </div>
  //     );
  //   });

  // const WishItems = () => {
  //   if (Products !== undefined) {
  //     return (
  //       <div>
  //         <a href={`/product/${Products._id}`}>
  //           <div className="witembox">
  //             <img
  //               src={`http://localhost:5000/${Products.item_image[0]}`}
  //               style={{
  //                 height: "166px",
  //                 width: "166px",
  //                 borderInline: "19px",
  //                 margin: "7px",
  //                 borderRadius: "10px",
  //               }}
  //             />

  //             <div className="winame">{Products.item_title}</div>
  //             <div className="wprice">{Products.how_much}원</div>
  //           </div>
  //         </a>
  //       </div>
  //     );
  //   }
  // };

  // const WishItems = FriendWish.map((wish, index) => {
  //   const body = {
  //     item: wish.id,
  //   };

  //   Axios.post("/api/admin/upload/wishItem", body).then((response) => {
  //     // console.log(response.data.upload[0]);
  //     // setProducts(response.data.upload[0]);
  //   });

  // return (
  //   <div>
  //     <a href={`/product/${response.data.upload[0]._id}`}>
  //       <div className="witembox">
  //         <img
  //           src={`http://localhost:5000/${response.data.upload[0].item_image[0]}`}
  //           style={{
  //             height: "166px",
  //             width: "166px",
  //             borderInline: "19px",
  //             margin: "7px",
  //             borderRadius: "10px",
  //           }}
  //         />

  //         <div className="winame">{response.data.upload[0].item_title}</div>
  //         <div className="wprice">{`${response.data.upload[0].how_much}원`}</div>
  //       </div>
  //     </a>
  //   </div>
  // );
  // });

  // const renderItems = FriendWish.map((upload, index) => {
  //   return (
  //     <div>
  //       <a href={`/product/${upload._id}`}>
  //         <div className="witembox">
  //           <img
  //             src={`http://localhost:5000/${upload.item_image[0]}`}
  //             style={{
  //               height: "166px",
  //               width: "166px",
  //               borderInline: "19px",
  //               margin: "7px",
  //               borderRadius: "10px",
  //             }}
  //           />

  //           <div className="winame">{upload.item_title}</div>
  //           <div className="wprice">{`${upload.how_much}원`}</div>
  //         </div>
  //       </a>
  //     </div>
  //   );
  // });

  //history

  // const history = useHistory();

  // const [Mailing, setMailing] = useState([]);
  // const [ProductId, setProductId] = useState("");

  // useEffect(() => {
  //   if (props) {
  //     setMailing(props.location.state);
  //     setProductId(props.location.state.productId);
  //   }
  // }, [props]);

  // const getProductHandler = (event) => {
  //   event.preventDefault();
  //   history.push({
  //     pathname: `/product/${ProductId}`,
  //     state: {
  //       mailing: Mailing,
  //       // productId: ProductId,
  //     },
  //   });
  // };

  //card

  //   return (
  //     <div className="A">
  //       <div style={{ textAlign: "center" }}>
  //         <h2 className="wtitle">my 위시리스트</h2>
  //         {/* 상품값 */}

  //         {/* <div>{WishItems()}</div> */}
  //       </div>
  //     </div>
  //   );
  // }

  const test = () => {
    if (Products) {
      Products.map((product) => {
        return (
          <div className="A">
            <div style={{ textAlign: "center" }}>
              <h2 className="wtitle">my 위시리스트</h2>
              <div>
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
            </div>
          </div>
        );
      });
    }
  };
  return <div>{test()}</div>;
}

export default FriendWishlistPage;
