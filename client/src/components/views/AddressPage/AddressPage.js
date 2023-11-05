import React, { useState } from "react";
import "./AddressPage.css";
import DaumPost from "./Sections/DaumPost";

function AddressPage() {
  const [popup, setPopup] = useState(false);
  const [address, setAddress] = useState("");
  //위에거는 주소 찾기에 쓴 거
  //우편번호 기본주소 상세주소 수령인이름 핸드폰 번호 요청사항
  const [Postnum, setPostnum] = useState("");
  const [Detail, setDetail] = useState("");
  const [Name, setName] = useState("");
  const [PNum, setPNum] = useState("");

  // const TitleChangeHandler = (event) => {
  //   setTitle(event.target.value);
  // };

  return (
    <div className="A">
      <div className="title">배송지 입력</div>
      <br />
      {/* 우편번호칸 */}
      {/* <div className="postnum">우편번호</div> */}

      <input
        type="text"
        id="zipcode"
        name="zip_code"
        onClick={() => {
          "openZipSearch();";
        }}
        readOnly="readonly"
        placeholder="우편번호"
        // style={{ width: "250px" }}
      ></input>
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
      {/* <div className="blank">주소지를 입력해주세요</div> */}
      <input
        id="address"
        readOnly="readonly"
        placeholder="주소지를 입력해주세요"
      ></input>
      {/* 상세주소 입력 */}
      <input className="blank" placeholder="상세주소를 입력해주세요"></input>
      {/* 수령인 이름 */}
      <input className="blank" placeholder="수령인 이름"></input>
      {/* 핸드폰 번호 */}
      <input className="blank" placeholder="핸드폰 번호 입력"></input>
      {/* 요청사항 */}
      <input className="blank" placeholder="요청사항"></input>
      <div className="donebtn">submit</div>
    </div>
  );
}

export default AddressPage;
