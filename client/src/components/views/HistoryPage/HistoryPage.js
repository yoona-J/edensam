import React, { useEffect, useState } from "react";
import axios from "axios";

function HistoryPage(props) {

  const [UserData, setUserData] = useState([]);
  const [Res, setRes] = useState([]);
  const [Gift, setGift] = useState([]);
  const [Maker, setMaker] = useState([])

  //내가보낸 편지 찾아옴
  useEffect(() => {
    console.log("user", props.user.userData);

    if (props.user.userData) {
      setUserData(props.user.userData);
      axios
        .post("/api/mail/getMailHistory", {
          params: {
            userId: props.user.userData._id,
          },
        })
        .then((response) => {
          // console.log(response.data);
          setRes(response.data);
        });
    }
  }, [props.user.userData]);

  Res.map((res) => {
    if (res.friendId) {
      axios.post(`/api/mailbox/friend/getMailbox`, { params: { 'FriendId': res.friendId } })
        .then(response => {
          // console.log(response)
          setMaker(response.data[0].maker.name)
        })
    }
  })

  //편지의 productid 랑 같은 값 upload에서 들고오기
  useEffect(() => {
    if (Res) {
      const body = {
        giftAvailable: Res,
      };

      axios.post("/api/admin/upload/history_by_id", body).then((response) => {
        // console.log(response);
        setGift(response.data);
      });
    }
  }, [Res]);

  const HistoryCard = Gift.map((gift, index) => {
    console.log(gift);
    return (
      <div key={index}>
        <div style={{
          width: '100%',
          height: '150px',
          borderRadius: '20px',
          border: '2px solid #37B8B3',
          backgroundColor: '#E9F8F7',
          marginTop: '20px',
          display: 'flex',
          flexFlow: 'row wrap',
          alignItems: 'center',
          fontFamily: 'Pretendard-Regular'
        }}
        >
          <div style={{ width: '100%', margin: '11px 10px 0px 22px', display: 'inline-flex', justifyContent: 'space-between'}}>
            <p style={{ fontFamily: 'Pretendard-Medium', fontSize: '20px', margin: 0 }}>To. { Maker }</p>
          </div>
          <div style={{ width: '100%', display: 'inline-flex', alignItems: 'center', margin: '3px 22px 17px 22px'}} >
            <img src={`http://localhost:5000/${gift.item_image}`} alt='item_image' style={{ width: '90px', borderRadius: '19px' }} />
            <div style={{ height: '90px', display: 'flex', alignContent: 'space-between', flexFlow: 'row wrap', fontSize: '15px', marginLeft: '30px'}}>
              <p style={{ margin: 0, textAlign: 'left' }}>{gift.item_title}</p>
              <p style={{ margin: 0, fontFamily: 'Pretendard-Regular', fontWeight: 'bold',  textAlign: 'right' }}>{ gift.how_much }원</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      style={{
        fontFamily: "NeoDunggeunmo",
        width: "90%",
        margin: "3rem auto"
      }}
    >
      <div style={{ textAlign: "center", width: '100%' }}>
        <p style={{ fontSize: '20px', marginTop: '35px', marginBottom: '0px'}}>주문내역</p>
        <div>{HistoryCard}</div>
      </div>
    </div>
  );
}

export default HistoryPage;
