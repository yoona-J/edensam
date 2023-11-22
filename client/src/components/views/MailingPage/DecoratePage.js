import React, { useState, useEffect } from "react";
import { Form, Button } from "antd";

import { useHistory } from "react-router-dom";

// sticker icon
import StickerIcon1 from "./icon/StickerIcon1.png";
import StickerIcon2 from "./icon/StickerIcon2.png";
import StickerIcon3 from "./icon/StickerIcon3.png";
import StickerIcon4 from "./icon/StickerIcon4.png";
import StickerIcon5 from "./icon/StickerIcon5.png";
import StickerIcon6 from "./icon/StickerIcon6.png";
import StickerIcon7 from "./icon/StickerIcon7.png";
import StickerIcon8 from "./icon/StickerIcon8.png";
import StickerIcon9 from "./icon/StickerIcon9.png";
import StickerIcon10 from "./icon/StickerIcon10.png";
import StickerIcon11 from "./icon/StickerIcon11.png";
import StickerIcon12 from "./icon/StickerIcon12.png";

//Envelope image
import EnvelopeImg1 from "./img/EnvelopeImg1.png";
import EnvelopeImg2 from "./img/EnvelopeImg2.png";
import EnvelopeImg3 from "./img/EnvelopeImg3.png";
import EnvelopeImg4 from "./img/EnvelopeImg4.png";
import EnvelopeImg5 from "./img/EnvelopeImg5.png";

function DecoratePage(props) {
  console.log(props);
  const history = useHistory();

  const [FriendId, setFriendId] = useState("");
  const [FriendMailboxId, setFriendMailboxId] = useState("");
  const [Mailing, setMailing] = useState([]);

  useEffect(() => {
    if (props.location.state) {
      setMailing(props.location.state);
      setFriendId(props.match.params.FriendId);
      setFriendMailboxId(props.match.params.MailboxId);
    }
  }, [props]);

  const [ImageClicked, setImageClicked] = useState("1");
  const [IconClicked, setIconClicked] = useState(1);

  const ImageHandleClick = (event) => {
    setImageClicked(event.target.value);
  };

  const IconHandleClick = (event) => {
    console.log(event.target.value)
    setIconClicked(event.target.value)

  const EnvelopeImg = () => {
    if (ImageClicked === "1") {
      return (
        <div>
          <img
            src={EnvelopeImg1}
            alt="EnvelopeImg1"
            style={{
              width: "70%",
              marginTop: "22px",
              marginBottom: "24px",
              marginLeft: "58px",
            }}
          />
        </div>
      );
    } else if (ImageClicked === "2") {
      return (
        <div>
          <img
            src={EnvelopeImg2}
            alt="EnvelopeImg2"
            style={{
              width: "70%",
              marginTop: "22px",
              marginBottom: "24px",
              marginLeft: "58px",
            }}
          />
        </div>
      );
    } else if (ImageClicked === "3") {
      return (
        <div>
          <img
            src={EnvelopeImg3}
            alt="EnvelopeImg3"
            style={{
              width: "70%",
              marginTop: "22px",
              marginBottom: "24px",
              marginLeft: "58px",
            }}
          />
        </div>
      );
    } else if (ImageClicked === "4") {
      return (
        <div>
          <img
            src={EnvelopeImg4}
            alt="EnvelopeImg4"
            style={{
              width: "70%",
              marginTop: "22px",
              marginBottom: "24px",
              marginLeft: "58px",
            }}
          />
        </div>
      );
    } else if (ImageClicked === "5") {
      return (
        <div>
          <img
            src={EnvelopeImg5}
            alt="EnvelopeImg5"
            style={{
              width: "70%",
              marginTop: "22px",
              marginBottom: "24px",
              marginLeft: "58px",
            }}
          />
        </div>
      );
    } else {
      return (
        <div>
          <img
            src={EnvelopeImg1}
            alt="EnvelopeImg1"
            style={{
              width: "70%",
              marginTop: "22px",
              marginBottom: "24px",
              marginLeft: "58px",
            }}
          />
        </div>
      );
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    history.push({
      pathname: `/mailbox/friend/${FriendId}/${FriendMailboxId}/mailing/gift`,
      state: {
        mailing: Mailing,
        friendId: FriendId,
        envelopeImg: ImageClicked,
        stickerIcon: IconClicked,
      },
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
      <Form>
        {EnvelopeImg()}
        <div
          style={{
            width: "50%",
            display: "inline-flex",
            justifyContent: "space-evenly",
            marginLeft: "25%",
          }}
        >
          <Button
            onClick={ImageHandleClick}
            value={1}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "100%",
              backgroundColor: "#C6A8CE",
              border: "0px",
            }}
          />
          <Button
            onClick={ImageHandleClick}
            value={2}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "100%",
              backgroundColor: "#EE8577",
              border: "0px",
            }}
          />
          <Button
            onClick={ImageHandleClick}
            value={3}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "100%",
              backgroundColor: "#8BCDBF",
              border: "0px",
            }}
          />
          <Button
            onClick={ImageHandleClick}
            value={4}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "100%",
              backgroundColor: "#CBE0A2",
              border: "0px",
            }}
          />
          <Button
            onClick={ImageHandleClick}
            value={5}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "100%",
              backgroundColor: "#FAD993",
              border: "0px",
            }}
          />
        </div>
        <div
          style={{
            width: "100px",
            height: "40px",
            backgroundColor: "#FAD993",
            borderRadius: "15px",
            marginTop: "27px",
            marginLeft: "135px",
            marginBottom: "19px",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              textAlign: "center",
              paddingTop: "8px",
              fontWeight: "bold",
            }}
          >
            스티커
          </p>
        </div>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Button
              onClick={IconHandleClick}
              value={1}
              style={{
                width: "72px",
                height: "72px",
                backgroundColor: "#4F4F4F",
                borderRadius: "25px",
                marginRight: "15px",
                marginBottom: "36px",
              }}
            >
              <img
                src={StickerIcon1}
                alt="StickerIcon1"
                style={{
                  width: "50px",
                  height: "50px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </Button>
            <Button
              onClick={IconHandleClick}
              value={2}
              style={{
                width: "72px",
                height: "72px",
                backgroundColor: "#4F4F4F",
                borderRadius: "25px",
                marginRight: "15px",
              }}
            >
              <img
                src={StickerIcon2}
                alt="StickerIcon2"
                style={{
                  width: "50px",
                  height: "50px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </Button>
            <Button
              onClick={IconHandleClick}
              value={3}
              style={{
                width: "72px",
                height: "72px",
                backgroundColor: "#4F4F4F",
                borderRadius: "25px",
                marginRight: "15px",
              }}
            >
              <img
                src={StickerIcon3}
                alt="StickerIcon3"
                style={{
                  width: "50px",
                  height: "50px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </Button>
            <Button
              onClick={IconHandleClick}
              value={4}
              style={{
                width: "72px",
                height: "72px",
                backgroundColor: "#4F4F4F",
                borderRadius: "25px",
              }}
            >
              <img
                src={StickerIcon4}
                alt="StickerIcon4"
                style={{
                  width: "50px",
                  height: "50px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </Button>
            <Button
              onClick={IconHandleClick}
              value={5}
              style={{
                width: "72px",
                height: "72px",
                backgroundColor: "#4F4F4F",
                borderRadius: "25px",
                marginRight: "15px",
                marginBottom: "36px",
              }}
            >
              <img
                src={StickerIcon5}
                alt="StickerIcon5"
                style={{
                  width: "50px",
                  height: "50px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </Button>
            <Button
              onClick={IconHandleClick}
              value={6}
              style={{
                width: "72px",
                height: "72px",
                backgroundColor: "#4F4F4F",
                borderRadius: "25px",
                marginRight: "15px",
              }}
            >
              <img
                src={StickerIcon6}
                alt="StickerIcon6"
                style={{
                  width: "50px",
                  height: "50px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </Button>
            <Button
              onClick={IconHandleClick}
              value={7}
              style={{
                width: "72px",
                height: "72px",
                backgroundColor: "#4F4F4F",
                borderRadius: "25px",
                marginRight: "15px",
              }}
            >
              <img
                src={StickerIcon7}
                alt="StickerIcon7"
                style={{
                  width: "38px",
                  height: "28px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </Button>
            <Button
              onClick={IconHandleClick}
              value={8}
              style={{
                width: "72px",
                height: "72px",
                backgroundColor: "#4F4F4F",
                borderRadius: "25px",
              }}
            >
              <img
                src={StickerIcon8}
                alt="StickerIcon8"
                style={{
                  width: "50px",
                  height: "50px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </Button>
            <Button
              onClick={IconHandleClick}
              value={9}
              style={{
                width: "72px",
                height: "72px",
                backgroundColor: "#4F4F4F",
                borderRadius: "25px",
                marginRight: "15px",
              }}
            >
              <img
                src={StickerIcon9}
                alt="StickerIcon9"
                style={{
                  width: "50px",
                  height: "50px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </Button>
            <Button
              onClick={IconHandleClick}
              value={10}
              style={{
                width: "72px",
                height: "72px",
                backgroundColor: "#4F4F4F",
                borderRadius: "25px",
                marginRight: "15px",
              }}
            >
              <img
                src={StickerIcon10}
                alt="StickerIcon10"
                style={{
                  width: "50px",
                  height: "50px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </Button>
            <Button
              onClick={IconHandleClick}
              value={11}
              style={{
                width: "72px",
                height: "72px",
                backgroundColor: "#4F4F4F",
                borderRadius: "25px",
                marginRight: "15px",
              }}
            >
              <img
                src={StickerIcon11}
                alt="StickerIcon11"
                style={{
                  width: "50px",
                  height: "50px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </Button>
            <Button
              onClick={IconHandleClick}
              value={12}
              style={{
                width: "72px",
                height: "72px",
                backgroundColor: "#4F4F4F",
                borderRadius: "25px",
              }}
            >
              <img
                src={StickerIcon12}
                alt="StickerIcon12"
                style={{
                  width: "50px",
                  height: "50px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </Button>
          </div>
        </div>
        <Button
          style={{
            width: "100%",
            height: "40px",
            borderRadius: "20px",
            background: "#B4E8E6",
            border: "0",
            marginTop: "87px",
          }}
          onClick={submitHandler}
        >
          다음
        </Button>
      </Form>
    </div>
  );
}

export default DecoratePage;
