import React, { useState, useEffect } from "react";
import "./FriendWishlistPage.css";
import Axios from "axios";
import "./FriendWishlistPage.css";
import { useHistory } from "react-router-dom";

function FriendWishlistPage(props) {
  const history = useHistory();

  const [FriendId, setFriendId] = useState("");
  const [MailingList, setMailingList] = useState([]);
  const [FriendWish, setFriendWish] = useState([]);
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    // console.log("pppp", props);
    setFriendId(props.location.state.friendId);
    setMailingList(props.location.state);
    if (props.location.state.friendId) {
      const body = {
        friendId: FriendId,
      };

      Axios.post("/api/mail/getFriendId", body).then((response) => {
        console.log("get", response.data);
        if (response.data.length > 0) {
          console.log(response.data[0].wishList);
          setFriendWish(response.data[0].wishList);
        }
      });
    }
  }, [props]);

  useEffect(() => {
    const body = {
      item: FriendWish,
    };

    Axios.post("/api/admin/upload/wishItem", body).then((response) => {
      console.log("data", response.data);
      console.log("dataupload", response.data.upload);
      setProducts(response.data.upload);
    });
  }, [FriendWish]);

  // console.log('MailingList', MailingList)

  const renderCards = Products.map((product, index) => {
    // console.log(product)

    const clickHandler = () => {
      // event.preventDefault();
      history.push({
        pathname: `/product/${product._id}`,
        state: {
          friendId: MailingList.friendId,
          mailboxId: MailingList.mailboxId,
          envelopeImg: MailingList.envelopeImg,
          stickerIcon: MailingList.stickerIcon,
          writer: MailingList.writer,
          content: MailingList.content,
        },
      });
    };
    console.log(props);

    return (
      <div onClick={clickHandler} key={index}>
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
      </div>
    );
  });

  return (
    <div className="A">
      <div style={{ textAlign: "center" }}>
        <h2 className="wtitle">my 위시리스트</h2>
        {renderCards}
      </div>
    </div>
  );
}

export default FriendWishlistPage;
