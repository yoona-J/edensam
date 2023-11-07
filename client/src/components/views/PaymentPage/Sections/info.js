import React from "react";
import "./paystyle.css";

function info() {
  return (
    <div
      style={{
        width: "100%",
        margin: "3rem auto",
        fontFamily: "NeoDunggeunmo",
        padding: "0 3%",
        textAlign: "center",
        fontSize: "20px",
      }}
    >
      <br />
      <br />
      <br />
      <br />
      입금은 열로 하세요~
      <div
        style={{
          display: "inline-block",
          fontSize: "16px",
          textAlign: "center",
          height: "100px",
          width: "300px",
          borderRadius: "20px",
          border: "1px solid black",
          margin: "20px",
        }}
      >
        <br />
        우리은행 1002-454-971900
        <br /> 예금주 : 이삼사오
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
      //   className="btn"
      >
        <a href="/paymentsuccess">
          <div className="btn">입금완료</div>
        </a>
      </div>
    </div>
  );
}

export default info;
