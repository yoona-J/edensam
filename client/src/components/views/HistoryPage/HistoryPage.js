import React, { useEffect } from "react";
import "./HistoryPage.css";
import { useDispatch } from "react-redux";
import { getHistories } from "../../../_actions/user_actions";
import UserCardBlock from "./Sections/UserCardBlock";
// import "./MyWishlistPage.css";

function HistoryPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    let histories = [];
    //리덕스 User state안에 cart 안에 상품이 들어있는지 확인
    if (props.user.userData && props.user.userData.history) {
      if (props.user.userData.history.length > 0) {
        props.user.userData.history.forEach((item) => {
          histories.push(item.id);
        });
        dispatch(getHistories(histories, props.user.userData.history));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.user.userData]);

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
          주문내역
        </h2>
        {/* 상품값 */}

        <div>
          <UserCardBlock
            uploads={
              props.user.historyDetail && props.user.historyDetail.upload
            }
          />
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;
