import React, { useEffect, useState } from "react";
import Axios from "axios";

function DetailMailPage(props) {
  // console.log(props)

  const [MailboxId, setMailboxId] = useState("");
  const [Mail, setMail] = useState([]);

  const [UserData, setUserData] = useState([]);

  useEffect(() => {
    if (props.match.params) {
      setMailboxId(props.match.params.MailboxId);

      Axios.post("/api/mail/getMail", {
        params: { mailboxId: props.match.params.MailboxId },
      }).then((response) => {
        console.log("pos", response);
        setMail(response.data[0]);
      });
    }
  }, [props.match.params]);

  console.log("mm", Mail);

  const [Gift, setGift] = useState([]);
  useEffect(() => {
    if (Mail) {
      // const body = {
      //   giftAvailable: Mail,
      // };

      Axios.post("/api/admin/upload/history_by_id$type=sigle").then(
        (response) => {
          console.log(response);
          setGift(response.data);
        }
      );
    }
  }, [Mail]);

  console.log("rr", Mail);

  const giftBox = () => {
    if (Mail.giftAvailable === false) {
      return <div></div>;
    } else if (Mail.giftAvailable === true) {
      return (
        <div>
          <div
            style={{
              width: "100%",
              height: "150px",
              borderRadius: "20px",
              border: "3px solid #828282",
              marginTop: "28px",
            }}
          ></div>
        </div>
      );
    }
  };

  return (
    <div
      style={{
        width: "90%",
        margin: "3rem auto",
        fontFamily: "NeoDunggeunmo",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "54px",
          borderRadius: "20px",
          border: "3px solid #828282",
          textIndent: "15px",
          fontSize: "15px",
        }}
      >
        <p>{Mail.writer}</p>
      </div>
      <div
        style={{
          width: "100%",
          height: "431px",
          borderRadius: "30px",
          border: "3px solid #828282",
          overflow: "scroll",
          marginTop: "26px",
          fontSize: "15px",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
          paddingLeft: "15px",
        }}
      >
        <p> {Mail.content} </p>
      </div>
      {/* 선물 */}
      {giftBox}
    </div>
  );
}

export default DetailMailPage;
