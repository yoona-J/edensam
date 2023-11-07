import React from "react";
import "./PaymentPage.css";
import { Button } from "antd";
import checkbox from "./Sections/checkbox";
import { Checkbox } from "antd";

function PaymentPage({ history }) {
  // const onChange = (e) => {
  //   console.log(`checked = ${e.target.checked}`);
  // };

  return (
    <div className="A">
      <div className="title">주문/결제</div>
      <hr />
      <div></div>
      <div className="title2">결제 방식을 선택해주세요</div>
      <br />
      {/* <Radio.Group className="checkbox">
          <Radio value={1}>무통장입금</Radio>
          <hr />
          <Radio value={2}>일반 결제</Radio>
        </Radio.Group>{" "} */}
      {/* <div className="passbox">
        <a href="/passinfo">
          <p>무통장 입금</p>
        </a>
        <br />

        <div
          style={{
            margin: "auto",
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
          dangerouslySetInnerHTML={tosspay()}
        />
      </div> */}
      <div class="box">
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
        <div>결제하기</div>
        <a href="/address"></a>
      </div>
    </div>
  );
}

export default PaymentPage;
