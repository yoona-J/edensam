import React, { useState } from "react";
import "./paystyle.css";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import Axios from "axios";

function Accountinfo(props) {
  const history = useHistory();

  const [FriendId, setFriendId] = useState("");
  const [FriendMailboxId, setFriendMailboxId] = useState("");
  const [EnvelopeImg, setEnvelopeImg] = useState("");
  const [StickerIcon, setStickerIcon] = useState("");
  const [Writer, setWriter] = useState("");
  const [content, setcontent] = useState("");
  const [ProductId, setproductId] = useState("");

  const getGiftHandler = (event) => {
    event.preventDefault();
    history.push({
      pathname: `/mailing/success/`,
      state: {
        friendId: FriendId,
        mailboxId: FriendMailboxId,
        envelopeImg: EnvelopeImg,
        stickerIcon: StickerIcon,
        writer: Writer,
        content: content,
        productId: ProductId,
      },
      // state: {
      //   mailing: Mailing,
      //   friendId: FriendId,
      //   envelopeImg: ImageClicked,
      //   stickerIcon: IconClicked,
      // },
    });
    console.log(getGiftHandler);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const body = {
      friendId: FriendId,
      productId: ProductId,
      date: Date.now()
    };

    console.log(body);

    Axios.post("/api/user", body).then((response) => {
      props.history.push("/mailing/success");
      // if (response.status === 200) {
      //   // alert('편지가 정상적으로 저장되었습니다.')
      //   props.history.push("/mailing/success");
      // } else {
      //   alert("편지가 저장되지 않았습니다.");
      // }
    });
  };

  return (
    <div
      style={{
        width: "100%",
        margin: "3rem auto",
        fontFamily: "NeoDunggeunmo",
        padding: "0 3%",
        textAlign: "center",
        fontSize: "20px",
      }}
    >
      <br />
      <br />
      <br />
      <br />
      입금은 열로 하세요~
      <div
        style={{
          display: "inline-block",
          fontSize: "16px",
          textAlign: "center",
          height: "100px",
          width: "300px",
          borderRadius: "20px",
          border: "1px solid black",
          margin: "20px",
        }}
      >
        <br />
        우리은행 1002-454-971900
        <br /> 예금주 : 이삼사오
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button
        style={{
          width: "100%",
          height: "40px",
          borderRadius: "20px",
          background: "#B4E8E6",
          border: "0",
          marginTop: "60px",
        }}
        onClick={submitHandler}
      >
        입금완료
      </Button>
    </div>
  );
}

export default Accountinfo;
