import React, { useEffect, useState } from "react";
import axios from "axios";
// import styles from "./ItemListPage.css";
import { Icon, Col, Card, Row, Collapse } from "antd";
import Meta from "antd/lib/card/Meta";
// import { ItemUpload } from "../../../../../server/models/ItemUpload";
import { categories } from "./Sections/Datas";
import CheckBox from "./Sections/CheckBox";
import ImageSlider from "../../utils/ImageSlider";
import "./ItemListPage.css";

function ItemListPage() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/admin/upload/product").then((response) => {
      if (response.data.success) {
        console.log(response.data);

        setProducts(response.data.upload);
      } else {
        alert("fail");
      }
    });
  }, []);

  const renderCards = Products.map((upload, index) => {
    // console.log("upload", upload);
    console.log("upload", upload.item_image);

    // const gridStyle: React.CSSProperties = {
    //   width: "50%",
    // };
    return (
      <a href={`/product/${upload._id}`}>
        <div className="momCard">
          <Col
            key={index}
            // style={{ width: "45%", height: "150px", margin: "1% 0% 1% 0%" }}
          >
            <Card
              hoverable={true}
              cover={
                <a href={`/product/${upload._id}`}>
                  {/* <ImageSlider images={upload.item_image} /> */}
                  {/* <img
                  src={`http://localhost:3000/uploads/${upload.item_image}`}
                /> */}
                  <img
                    src={`http://localhost:5000/${upload.item_image[0]}`}
                    style={{
                      height: "166px",
                      width: "166px",
                      borderInline: "19px",
                    }}
                  />
                </a>
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
    );
  });

  return (
    <div
      style={{
        width: "100%",
        margin: "3rem auto",
        fontFamily: "initial",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "NeoDunggeunmo",
          }}
        >
          --products--
        </h2>

        {/* checkbox */}
        {/* <CheckBox list={categories} /> */}

        {/* cards */}
        <div
          style={{
            margin: "10px",
            border: "1px solid black",
            borderRadius: "12px",
          }}
        >
          {/* <Row gutter={[16, 16]}>{renderCards}</Row> */}
          <div className="Card">{renderCards}</div>
        </div>
      </div>
    </div>
  );
}

export default ItemListPage;

/* <div id="menu">
        <ul>
          <li>
            <a href="">가전/디지털</a>
          </li>
          <li>
            <a href="">패션/의류</a>
          </li>
          <li>
            <a href="">건강</a>
          </li>
          <li>
            <a href="">생활용품</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">엇저고</a>
          </li>
          <li>
            <a href="">얘두 메뉴</a>
          </li>
          <li>
            <a href="">원모어</a>
          </li>
          <li>
            <a href="">예엥</a>
          </li>
        </ul>
      </div>
      <br />
      <h3>의류</h3>
      ItemListPage */
