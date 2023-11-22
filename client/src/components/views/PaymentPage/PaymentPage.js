import React, { useState,useEffect } from "react";
import "./PaymentPage.css";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

function PaymentPage(props) {
  const history = useHistory();

  const [FriendId, setFriendId] = useState("");
  const [FriendMailboxId, setFriendMailboxId] = useState("");
  const [EnvelopeImg, setEnvelopeImg] = useState("");
  const [StickerIcon, setStickerIcon] = useState("");
  const [Writer, setWriter] = useState("");
  const [content, setcontent] = useState("");
  const [ProductId, setproductId] = useState("");

  // const [MailingList, setMailingList] = useState([]);
  const [Mailing, setMailing] = useState([]);

  useEffect(() => {
    if (props) {
      setWriter(props.location.state.mailing.writer)
      setcontent(props.location.state.mailing.content)
      setFriendId(props.location.state.mailing.friendId)
      setFriendMailboxId(props.location.state.mailing.mailboxId)
      setEnvelopeImg(props.location.state.mailing.envelopeImg)
      setStickerIcon(props.location.state.mailing.stickerIcon)
      setproductId(props.location.state.ProductId)
    }

  }, [props])

  const getGiftHandler = (event) => {
    event.preventDefault();
    history.push({
      pathname: `/passinfo`,
      state: {
        friendId: FriendId,
        mailboxId: FriendMailboxId,
        envelopeImg: EnvelopeImg,
        stickerIcon: StickerIcon,
        writer: Writer,
        content: content,
        productId: ProductId,
      },
    });
  };
  console.log(props);

  return (
    <div className="A">
      <div className="title">주문/결제</div>
      <hr />
      <div></div>
      <div className="title2">결제 방식을 선택해주세요</div>
      <br />
      <div className="box">
        <input id="checkbox" type="checkbox" />
        <label id="label" htmlFor="checkbox"></label>
      </div>
      <div>무통장입금</div>
      {/* <div>
        <checkbox />
        <Checkbox onChange={onChange} />
        무통장입금
      </div> */}

      <br />
      <div className="pay">
        <Button className="paybtn" onClick={getGiftHandler}>
          결제하기
        </Button>
      </div>
    </div>
  );
}

export default PaymentPage;
