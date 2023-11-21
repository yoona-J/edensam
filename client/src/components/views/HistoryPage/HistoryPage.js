// import React, { useEffect } from "react";
// import "./HistoryPage.css";
// import { useDispatch } from "react-redux";
// import { getHistories } from "../../../_actions/user_actions";
// import UserCardBlock from "./Sections/UserCardBlock";
// // import "./MyWishlistPage.css";

// function HistoryPage(props) {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     let histories = [];
//     //리덕스 User state안에 history 안에 상품이 들어있는지 확인
//     if (props.user.userData && props.user.userData.history) {
//       if (props.user.userData.history.length > 0) {
//         props.user.userData.history.forEach((item) => {
//           histories.push(item.id);
//         });
//         dispatch(getHistories(histories, props.user.userData.history));
//       }
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [props.user.userData]);

//   return (
//     <div
//       className="A"
//       style={{
//         fontFamily: "Pretendard",
//         width: "90%",
//         margin: "3rem auto",
//         padding: 0,
//       }}
//     >
//       <div style={{ textAlign: "center" }}>
//         <h2 className="title" style={{ padding: 0 }}>
//           주문내역
//         </h2>
//         {/* 상품값 */}

//         <div>
//           <UserCardBlock
//             uploads={
//               props.user.historyDetail && props.user.historyDetail.upload
//             }
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HistoryPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HistoryPage.css";
import UserCardBlock from "./Sections/UserCardBlock";
// import { response } from "express";

function HistoryPage(props) {
  const [UserId, setUserId] = useState("");
  const [Res, setRes] = useState([]);
  const [MyHistory, setMyHistory] = useState([]);
  const [giftId, setgiftId] = useState([]);
  //내가보낸 편지 찾아옴
  useEffect(() => {
    console.log("user", props.user.userData);

    if (props.user.userData !== undefined) {
      setUserId(props.user.userData);
      axios
        .post("/api/mail/getMailHistory", {
          params: {
            userId: props.user.userData,
          },
        })
        .then((response) => {
          setRes(response.data);
          // console.log("gift", response.data);
          // console.log("res", Res);
        });
    }
  }, [props.user.userData]);

  console.log("res", Res);

  // Res.giftAvailable;

  // useEffect(() => {
  //    setGiftedId(res.gif);
  //   if (Res.giftAvailable) {
  //     const body = {
  //       giftAvailable: GiftedId,
  //     };
  //     axios.get(`/api/admin/upload/history_by_id`, body).then((response) => {
  //       console.log(response.data);
  //     });
  //   }
  // }, [Res]);

  // console.log("res", Res);
  // console.log(props);
  //편지의 productid 랑 같은 값 upload에서 들고오기
  const [gift, setgift] = useState([]);
  const [GiftedId, setGiftedId] = useState([]);
  // const HistoryCard = () => {
  useEffect(() => {
    Res.map((product, index) => {
      // const test = product.giftAvailable;
      // axios
      //   .get(`/api/admin/upload/products_by_id?id=${test}`)
      //   .then((response) => {
      //     console.log("aaa", response.data);
      //     setgift(response.data.upload[0]);
      //   });
      // console.log("gift", gift);
      const test = product.giftAvailable;
      console.log("test", test);
      setGiftedId(product.giftAvailable);
      if (product.giftAvailable) {
        console.log("aaaaa", product.giftAvailable);
        const body = {
          giftAvailable: product.giftAvailable,
        };
        axios.get(`/api/admin/upload/history_by_id`, body).then((response) => {
          console.log("gift", response.data);
          //     console.log("aaa", response.data);
          //     setgift(response.data.upload[0]);
          //   });
          // console.log("gift", gift)
        });
      }
    });
  }, [Res]);
  // }

  const HistoryCard = () => {
    console.log("gg", gift);
    if (gift.item_image !== undefined) {
      return (
        <a href={`/product/${gift._id}`}>
          <div
            className="itembox"
            style={{ boxShadow: "0px 4px 4px 0px #C4C4C4" }}
          >
            <img
              src={`http://localhost:5000/${gift.item_image[0]}`}
              style={{
                height: "166px",
                width: "166px",
                borderInline: "19px",
                margin: "7px",
              }}
            />

            <div className="iname">{gift.item_title}</div>
            <div className="price">{`${gift.how_much}원`}</div>
          </div>
        </a>
      );
    }
  };

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
          {UserId.name}님의 편지함 목록
        </h2>

        {HistoryCard()}
      </div>
    </div>
  );
}

export default HistoryPage;
