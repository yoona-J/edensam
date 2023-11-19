import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import LandingImg from "./img/LandingImg.png";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_actions";

import './LandingPage.css'

function LandingPage(props) {
  const dispatch = useDispatch();

  const [ID, setID] = useState("");
  const [Password, setPassword] = useState("");

  const idChangeHandler = (event) => {
    setID(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const body = {
      ID: ID,
      password: Password,
    };

    console.log("is logged: ", body);

    dispatch(loginUser(body)).then((response) => {
      console.log(response);
      if (response.payload.loginSuccess) {
        window.localStorage.setItem("userId", response.payload.userId);
        props.history.push("/main");
      } else {
        alert("로그인이 실패");
      }
    });
  };

  return (
    <div
      style={{
        width: "90%",
        margin: "3rem auto",
        fontFamily: "NeoDunggeunmo",
      }}
    >
      <img
        src={LandingImg}
        alt="LandingImg"
        style={{
          width: "100%",
          borderRadius: "30px",
        }}
      />
      <Form onSubmitCapture={submitHandler} className="landing-input">
        <div>
          <Input
            placeholder="아이디"
            onChange={idChangeHandler}
            value={ID}
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "20px",
              border: "0",
              marginTop: "20px",
              textIndent: "15px",
              // boxShadow: '0px 4px 4px 0px #c4c4c4'
            }}
          ></Input>
          <Input
            placeholder="비밀번호"
            onChange={passwordChangeHandler}
            value={Password}
            type="password"
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "20px",
              border: "0",
              marginTop: "20px",
              textIndent: "15px",
            }}
          ></Input>
        </div>
        <a href="/main">
          <Button
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "20px",
              background: "#B4E8E6",
              border: "0",
              marginTop: "20px",
            }}
            htmlType="submit"
          >
            로그인
          </Button>
        </a>
      </Form>
      <div
        style={{
          fontSize: "10px",
          color: "#828282",
          display: "flex",
          flexDirection: "low",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <a
          href="/exit"
          style={{
            marginRight: "20px",
            textDecorationLine: "none",
            color: "#828282",
          }}
        >
          <p>탈퇴</p>
        </a>
        <a
          href="/retake"
          style={{
            marginRight: "20px",
            textDecorationLine: "none",
            color: "#828282",
          }}
        >
          <p>아이디/비밀번호 찾기</p>
        </a>
        <a
          href="/register"
          style={{ textDecorationLine: "none", color: "#828282" }}
        >
          <p>회원가입</p>
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
