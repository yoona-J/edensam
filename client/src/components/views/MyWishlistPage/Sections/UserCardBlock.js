import React from "react";
import { Icon, Col, Card, Row, Collapse } from "antd";
import Meta from "antd/lib/card/Meta";
import "../MyWishlistPage.css";

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
        <div
          className="momCard"
          style={{
            padding: "1%",
            border: "1px",
          }}
        >
          <Col key={upload._id}>
            <Card
              hoverable={true}
              cover={
                <img
                  alt="upload"
                  src={renderCartImage(upload.item_image)}
                  style={{
                    height: "166px",
                    width: "166px",
                    borderInline: "19px",
                  }}
                />
              }
            >
              <Meta
                style={{ padding: "2px 10px" }}
                title={upload.item_title}
                description={`${upload.how_much}원`}
              />
            </Card>
          </Col>
        </div>
      </a>
    ));

  return (
    <div className="Card">
      {renderItems()}
    </div>
  );
}

export default UserCardBlock;
