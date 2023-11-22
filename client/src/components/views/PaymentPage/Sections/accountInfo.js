import React, { useState, useEffect } from "react";
import "./paystyle.css";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import Axios from "axios";
import { useDispatch } from "react-redux";
// import { addToHistory } from "../../../../_actions/user_actions";

function Accountinfo(props) {
  // const history = useHistory();

  const [FriendId, setFriendId] = useState("");
  const [FriendMailboxId, setFriendMailboxId] = useState("");
  const [EnvelopeImg, setEnvelopeImg] = useState("");
  const [StickerIcon, setStickerIcon] = useState("");
  const [Writer, setWriter] = useState("");
  const [content, setcontent] = useState("");
  const [ProductId, setproductId] = useState("");
  const [writerid, setWriterid] = useState("");

  useEffect(() => {
    if (props) {
      setWriterid(props.user.userData._id);
      setWriter(props.location.state.writer);
      setcontent(props.location.state.content);
      setFriendId(props.location.state.friendId);
      setFriendMailboxId(props.location.state.mailboxId);
      setEnvelopeImg(props.location.state.envelopeImg);
      setStickerIcon(props.location.state.stickerIcon);
      setproductId(props.location.state.productId);
      setWriterid(props.user.userData._id);
    }
  }, [props]);

  console.log('ProductId', ProductId)

  const submitHandler = (event) => {
    // event.preventDefault();
    //mail에 저장
    const body = {
      writerid: writerid,
      writer: Writer,
      content: content,
      friendId: FriendId,
      mailboxId: FriendMailboxId,
      envelopeImg: EnvelopeImg,
      stickerIcon: StickerIcon,
      giftAvailable: ProductId,
    };

    console.log(body);

    Axios.post("/api/mail", body).then((response) => {
      if (response.status === 200) {
        // alert('편지가 정상적으로 저장되었습니다.')
        props.history.push("/mailing/success");
      } else {
        alert("편지가 저장되지 않았습니다.");
      }
    });
  };

  // const dispatch = useDispatch();
  // const [isClicked, setIsClicked] = useState(false);
  // //save db user.history
  // const clickHandler = () => {
  //   dispatch(addToHistory(props.location.state.productId));
  //   dispatch(addToHistory(props.location.state.friendId));
  //   console.log("click=", props.location.state.productId);

  //   if (props.location.state.productId.length >= 1) {
  //     alert("구매 기록이 저장되었습니다.");
  //     setIsClicked(!isClicked);
  //   }
  // };

  console.log(props);

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
      아래 계좌번호로 입금하세요.
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
