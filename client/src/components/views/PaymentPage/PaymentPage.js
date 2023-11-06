import React from "react";
import "./PaymentPage.css";
import { Radio } from "antd";

function PaymentPage() {
  const [method, setMethod] = React.useState(["green"]);

  return (
    <div className="A">
      <div className="title">주문/결제</div>
      <hr />
      <div></div>
      <div className="title2">결제 방식</div>
      <hr />
      <br />
      {/* <Radio.Group className="checkbox">
          <Radio value={1}>무통장입금</Radio>
          <hr />
          <Radio value={2}>일반 결제</Radio>
        </Radio.Group>{" "} */}
      <div className="passbox">
        <a href="/passinfo">
          <p>
            무통장
            <br />
            입금
          </p>
        </a>
      </div>
      <br />
      <footer>
        <div className="pay">
          <div>결제하기</div>
          <a href="/address"></a>
        </div>
      </footer>
    </div>
  );
}

export default PaymentPage;
