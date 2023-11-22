import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

import WishlistIcon from './img/WishlistIcon.png'
import "./FriendWishlistPage.css";

function FriendWishlistPage(props) {
  const history = useHistory();

  const [FriendId, setFriendId] = useState("");
  const [MailingList, setMailingList] = useState([]);
  const [FriendWish, setFriendWish] = useState([]);
  const [Products, setProducts] = useState([]);
  const [FriendName, setFriendName] = useState('')

  useEffect(() => {
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
          setFriendName(response.data[0].name)
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

  const renderCards = Products.map((product, index) => {

    const clickHandler = () => {
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
      <div onClick={clickHandler} key={index} >
        <div>
          <img
            src={`http://localhost:5000/${product.item_image[0]}`}
            style={{
              height: "166px",
              width: "166px",
              marginBottom: "12px",
              borderRadius :"19px"
            }}
          />

          <div className="winame">{product.item_title}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="A" style={{fontFamily: "NeoDunggeunmo",
              width: '90%',
              margin: '3rem auto',
              padding: 0}}>
      <div style={{ width: '100%', display: 'inline-flex', marginBottom: '36px', marginTop: '35px'}}>
        <img src={WishlistIcon} alt="WishlistIcon" style={{ width: '20px', height: '20px', margin: '6px 8px 0px 0px'}} />
        <p style={{ fontSize: '20px', margin: 0 }}>{FriendName}님의 위시리스트</p>
      </div>
      <div style={{ fontFamily: "Pretendard-Regular", width: '100%', display: 'inline-flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
        {renderCards}
      </div>
    </div>
  );
}

export default FriendWishlistPage;
