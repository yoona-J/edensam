import React, { useEffect, useState } from "react";
import axios from "axios";

import "./HistoryPage.css";

function HistoryPage(props) {
  const [UserData, setUserData] = useState([])
  const [Res, setRes] = useState([]);
  //내가보낸 편지 찾아옴
  useEffect(() => {
    console.log("user", props.user.userData);

    if (props.user.userData) {
      setUserData(props.user.userData)
      axios
        .post("/api/mail/getMailHistory", {
          params: {
            userId: props.user.userData._id
          },
        })
        .then((response) => {
          console.log(response.data)
          setRes(response.data);
          // console.log("gift", response.data);
          // console.log("res", Res);
        });
    }
  }, [props.user.userData]);

  //편지의 productid 랑 같은 값 upload에서 들고오기
  const [Gift, setGift] = useState([]);
  console.log(Res)
  useEffect(() => {
        if (Res) {
          const body = {
            giftAvailable: Res
          }

          axios.post('/api/admin/upload/history_by_id', body)
            .then((response) => {
              console.log(response)
              setGift(response.data)
            })
        }
    }, [Res]);

  const HistoryCard = Gift.map((gift, index) => {
      console.log(gift)
      return <div>
                <a href={`/product/${gift._id}`}>
                  <div className="witembox">
                    <img
                      src={`http://localhost:5000/${gift.item_image[0]}`}
                      style={{
                        height: "166px",
                        width: "166px",
                        borderInline: "19px",
                        margin: "7px",
                        borderRadius: "10px",
                      }}
                    />
                    <div className="winame">{gift.item_title}</div>
                    <div className="wprice">{gift.how_much}원</div>
                  </div>
                </a>
              </div>
    })

  return (
    <div
      className="A"
      style={{
        fontFamily: "Pretendard",
        width: "90%",
        margin: "3rem auto",
        padding: 0,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2 className="title" style={{ padding: 0 }}>
          {UserData.name}님의 편지함 목록
        </h2>
        {HistoryCard}
      </div>
    </div>
  );
}

export default HistoryPage;
