import React, { useState } from "react";
import "./PaymentPage.css";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

function PaymentPage() {
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
      pathname: `/passinfo/ ${ProductId}/ ${FriendId} `,
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
