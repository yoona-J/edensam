import React, { useState } from "react";
import "./AddressPage.css";
import DaumPost from "./Sections/DaumPost";

function AddressPage() {
  // const [(popup, setPopup)] = React.useState(false);
  const [popup, setPopup] = useState(false);
  const [address, setAddress] = useState("");

  return (
    <div className="A">
      <div className="title">배송지 입력</div>
      <br />
      {/* 우편번호칸 */}
      <div className="postnum">우편번호</div>
      {/* 주소 찾기 */}
      <div
        className="Search"
        onClick={() => {
          setPopup(!popup);
        }}
      >
        🔍︎ 검색
      </div>
      {popup && <DaumPost address={address} setAddress={setAddress}></DaumPost>}
      {/* 큰 주소 */}
      <br />
      <div className="blank">주소지를 입력해주세요</div>
      {/* 상세주소 입력 */}
      <div className="blank">상세주소를 입력해주세요</div>
      {/* 수령인 이름 */}
      <div className="blank">수령인 이름</div>
      {/* 핸드폰 번호 */}
      <div className="blank">핸드폰 번호 입력</div>
      {/* 요청사항 */}
      <div className="blank">요청사항</div>
      <div className="donebtn">완료</div>
    </div>
  );
}

export default AddressPage;
