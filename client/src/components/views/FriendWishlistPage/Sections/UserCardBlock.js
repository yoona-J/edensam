import React from "react";
import { Col, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "../FriendWishlistPage.css";

function UserCardBlock(props) {
  const renderCartImage = (item_image) => {
    if (item_image.length > 0) {
      let image = item_image[0];
      return `http://localhost:5000/${image}`;
    }
  };

  const renderItems = () =>
    props.uploads &&
    props.uploads.map((upload) => (
      <a href={`/product/${upload._id}`}>
        <div className="witembox">
          <img
            src={`http://localhost:5000/${upload.item_image[0]}`}
            style={{
              height: "166px",
              width: "166px",
              borderInline: "19px",
              margin: "7px",
              borderRadius: "10px",
            }}
          />

          <div className="winame">{upload.item_title}</div>
          <div className="wprice">{`${upload.how_much}원`}</div>
        </div>
      </a>
    ));

  return <div className="Container">{renderItems()}</div>;
}

export default UserCardBlock;
