import React from "react";
import { Col, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "../MyWishlistPage.css";

function UserCardBlock(props) {
  // const renderCartImage = (item_image) => {
  //   if (item_image.length > 0) {
  //     let image = item_image[0];
  //     return `http://localhost:5000/${image}`;
  //   }
  // };

  const renderItems = () =>
    props.uploads &&
    props.uploads.map((upload, index) => (
      <a href={`/product/${upload._id}`} key={index}>
        <div>
          <img
            src={`http://localhost:5000/${upload.item_image[0]}`}
            style={{
              height: "166px",
              width: "166px",
              marginBottom: "12px",
              borderRadius :"19px"
            }}
          />

          <div className="winame">{upload.item_title}</div>
        </div>
      </a>
    ));

  return <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>{renderItems()}</div>;
}

export default UserCardBlock;
