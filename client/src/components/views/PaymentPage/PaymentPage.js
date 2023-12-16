import React, { useState, useEffect } from "react";
import Axios from 'axios'

import { Checkbox } from "antd";
import { useHistory } from "react-router-dom";
import "./PaymentPage.css";

function PaymentPage(props) {

  const history = useHistory();

  const [FriendId, setFriendId] = useState("");
  const [FriendMailboxId, setFriendMailboxId] = useState("");
  const [EnvelopeImg, setEnvelopeImg] = useState("");
  const [StickerIcon, setStickerIcon] = useState("");
  const [Writer, setWriter] = useState("");
  const [Content, setContent] = useState("");
  const [ProductId, setProductId] = useState("");

  const [Product, setProduct] = useState([])
  const [Mailbox, setMailbox] = useState([])
  const [FriendName, setFriendName] = useState('')

  useEffect(() => {
    if (props) {
      setWriter(props.location.state.mailing.writer)
      setContent(props.location.state.mailing.content)
      setFriendId(props.location.state.mailing.friendId)
      setFriendMailboxId(props.location.state.mailing.mailboxId)
      setEnvelopeImg(props.location.state.mailing.envelopeImg)
      setStickerIcon(props.location.state.mailing.stickerIcon)
      setProductId(props.location.state.ProductId)
    }

    if (ProductId) {
      Axios.get(`/api/admin/upload/products_by_id?id=${ProductId}&type=single`)
        .then((response) => {
          setProduct(response.data.upload[0])
        })
    }

    if (FriendMailboxId) {
      Axios.post(`/api/mailbox/friend/getMailbox`, { params: { 'FriendId': FriendId } })
        .then((response) => {
          setMailbox(response.data[0])
          setFriendName(response.data[0].maker.name)
        })
    }
  }, [props])

  const onChange = (event) => {
    console.log(`${event.target.checked}`)
  }

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
        content: Content,
        productId: ProductId,
      },
    });
  };

  return (
    <div style={{ width: '100%', fontFamily: 'Pretendard-Regular', margin: '3rem auto'}}>
      <p style={{ textAlign: 'center', fontSize: '18px' }}>주문/결제</p>
      <div style={{ width: '100%', height: '12px', backgroundColor: '#F2F2F2', border: 0 }} />
      <div style={{ width: '90%', margin: '1rem auto' }}>
        <p style={{ fontFamily: 'Pretendard-Medium', fontSize: '20px' }}>배송 편지함</p>
        <p style={{ fontFamily: 'Pretendard-Medium', fontSize: '20px', marginBottom: '0px' }}>To.{FriendName}</p>
        <p style={{ fontSize: '18px', marginTop: '8px', marginBottom: '0px' }}>{Mailbox.title}</p>
        <p style={{ fontSize: '12px', marginTop: '19px', color: '#F46B72', marginBottom: '31px'}}>배송지 입력은 친구가 편지함 열람 후에 직접 입력합니다.</p>
      </div>
      <div style={{ width: '100%', height: '12px', backgroundColor: '#F2F2F2', border: 0 }} />
      <div style={{ width: '90%', margin: '1rem auto' }}>
        <p style={{ fontFamily: 'Pretendard-Medium', fontSize: '20px' }}>주문 상품</p>
        <div style={{ width: '100%', height: '150px', borderRadius: '20px', border: '2px solid #37B8B3', display: 'inline-flex' }}>
          <img style={{ width: '121px', borderRadius: '19px', margin: '15px' }} alt='item_image' src={`http://localhost:5000/${Product.item_image}`}/>
          <div style={{ height: '97px', margin: '32px 22px 0px 0px', display: 'flex', alignContent: 'space-between', flexWrap: 'wrap', flexDirection: 'row-reverse' }}>
            <p style={{ fontSize: '15px', margin: 0 }}>{Product.item_title}</p>
            <p style={{ fontFamily: 'Pretendard-Medium', fontSize: '15px', margin: 0 }}>{Product.how_much}원</p>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', height: '12px', backgroundColor: '#F2F2F2', border: 0, marginTop: '30px' }} />
      <div style={{ width: '90%', margin: '1rem auto' }}>
        <p style={{ fontFamily: 'Pretendard-Medium', fontSize: '20px' }}>결제 방식</p>
        <Checkbox className='payment-input' onChange={onChange}>무통장 입금</Checkbox>
        <hr style={{ border: '1px solid #BDBDBD', marginTop: '17px' }} />
      </div>
      <div style={{ width: '90%', margin: '1rem auto' }}>
        <button onClick={getGiftHandler} style={{ width: '100%', height: '39px', borderRadius: '5px', border: 0, backgroundColor: '#B4E8E6' }}>
          <p style={{ margin: 0, fontFamily: 'Pretendard-Medium', fontSize: '15px' }}>{Product.how_much}원 결제하기</p>
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;
