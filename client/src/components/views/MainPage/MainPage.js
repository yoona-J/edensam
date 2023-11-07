import React, {useEffect, useState} from "react";
import Footer from "../Footer/Footer";

import MainPageImg from "./img/MainPageImg.png";
import NotificationIcon from "./img/NotificationIcon.png";
import GiftBoxIcon from "./img/GiftBoxIcon.png";
import Top100Icon from "./img/Top100Icon.png";
import WishListIcon from "./img/WishListIcon.png";
import MyMailboxIcon from "./img/MyMailboxIcon.png";

import NewItem from "./Sections/NewItem";

function MainPage(props) {
    const [UserId, setUserId] = useState("");

    useEffect(() => {
        console.log(props.user.userData);
        if (props.user.userData !== undefined) {
            setUserId(props.user.userData);
        } else {
            console.log("nothing");
        }
    }, [props.user.userData]);

    console.log("uu", UserId._id);

    return (
        <div
            style={{
              width: "30px",
              margin: "10px",
            }}
          ></img>
          <p
            style={{
              margin: "13px 0px 15px 0px",
              fontSize: "18px",
              fontFamily: "Pretendard-Regular",
            }}
          >
            이번 주 HOT 신상 선물 세트가 왔다!
          </p>
        </div>
      </a>
      <div
        style={{
          width: "100%",
          backgroundColor: "#FFF1EF",
          height: "250px",
          marginTop: "26px",
          display: "flex",
          alignContent: "space-evenly",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <a
          href={`/gift/${UserId._id}`}
          style={{ textDecorationLine: "none", color: "#000" }}
        >
          <div
            style={{
              width: "171px",
              height: "86px",
              backgroundColor: "#FAD993",
              borderRadius: "20px",
              display: "inline-flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              boxShadow: "0px 4px 4px 0px #C4C4C4",
            }}
          >
            <img
              src={GiftBoxIcon}
              alt="GiftBoxIcon"
              style={{ width: "50px" }}
            ></img>
            <p style={{ fontSize: "20px" }}>선물함가기</p>
          </div>
        </a>
        <a
          href={`/mailbox/${UserId._id}`}
          style={{ textDecorationLine: "none", color: "#000" }}
        >
          <div
            style={{
              width: "171px",
              height: "86px",
              backgroundColor: "#FAD993",
              borderRadius: "20px",
              display: "inline-flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              boxShadow: "0px 4px 4px 0px #C4C4C4",
            }}
          >
            <img
              src={MyMailboxIcon}
              alt="MailboxIcon"
              style={{ width: "50px" }}
            ></img>
            <p style={{ fontSize: "20px" }}>우편함가기</p>
          </div>
        </a>
        <a
          href="/product"
          style={{ textDecorationLine: "none", color: "#000" }}
        >
          <div
            style={{
              width: "171px",
              height: "86px",
              backgroundColor: "#FAD993",
              borderRadius: "20px",
              display: "inline-flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              boxShadow: "0px 4px 4px 0px #C4C4C4",
            }}
          >
            <img
              src={Top100Icon}
              alt="Top100Icon"
              style={{ width: "50px" }}
            ></img>
            <p style={{ fontSize: "20px" }}>선물하기</p>
          </div>
        </a>
        <a
          href={`/wish/${UserId._id}`}
          style={{ textDecorationLine: "none", color: "#000" }}
        >
          <div
            style={{
              width: "171px",
              height: "86px",
              backgroundColor: "#FAD993",
              borderRadius: "20px",
              display: "inline-flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              boxShadow: "0px 4px 4px 0px #C4C4C4",
            }}
          >
            <img
              src={WishListIcon}
              alt="WishListIcon"
              style={{ width: "50px" }}
            ></img>
            <p style={{ fontSize: "20px", textAlign: "center" }}>위시리스트</p>
          </div>
        </a>
      </div>
      <div>
        <NewItem />
      </div>
      {/* <div>
        <p
          style={{
            fontSize: "20px",
            textAlign: "center",
            fontFamily: "Pretendard-Medium",
          }}
        >
          회원님을 위한 인기 상품
        </p>
      </div>
      <div>
        <NewItem />
      </div>
      <hr />
      <div>
        <p
          style={{
            fontSize: "20px",
            textAlign: "center",
            fontFamily: "Pretendard-Medium",
          }}
        >
          회원님이 좋아할만한 선물
        </p>
      </div>
      <div>
        <likeItems />
      </div> */}
      <Footer />
    </div>
  );
}

export default MainPage;
