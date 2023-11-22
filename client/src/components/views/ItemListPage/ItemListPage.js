import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "./ItemListPage.css";
import CategoryBtn from "./Sections/category";
import { categories } from "./Sections/Datas";

function ItemListPage() {
  const [Products, setProducts] = useState([]);
  const [cnum, setcnum] = useState("");

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
    if (upload.item_category == cnum) {
      return (
        <a href={`/product/${upload._id}`}>
          <div
            className="itembox"
            style={{ boxShadow: "0px 4px 4px 0px #C4C4C4" }}
          >
            <img
              src={`http://localhost:5000/${upload.item_image[0]}`}
              style={{
                height: "166px",
                width: "166px",
                borderInline: "19px",
                margin: "7px",
              }}
            />

            <div className="iname">{upload.item_title}</div>
            <div className="price">{`${upload.how_much}원`}</div>
          </div>
        </a>
      );
    }
    if (cnum == 0) {
      return (
        <a href={`/product/${upload._id}`}>
          <div
            className="itembox"
            style={{ boxShadow: "0px 4px 4px 0px #C4C4C4" }}
          >
            <img
              src={`http://localhost:5000/${upload.item_image[0]}`}
              style={{
                height: "166px",
                width: "166px",
                borderInline: "19px",
                margin: "7px",
              }}
            />

            <div className="iname">{upload.item_title}</div>
            <div className="price">{`${upload.how_much}원`}</div>
          </div>
        </a>
      );
    }
  });

  const [isActive, setIsActive] = useState(false);

  const change0 = () => {
    setcnum("0");
    setIsActive(!isActive);
  };
  const change1 = () => {
    setcnum("1");
  };
  const change2 = () => {
    setcnum("2");
  };
  const change3 = () => {
    setcnum("3");
  };
  const change5 = () => {
    setcnum("5");
  };
  const change6 = () => {
    setcnum("6");
  };
  const change7 = () => {
    setcnum("7");
  };
  const change8 = () => {
    setcnum("8");
  };

  return (
    <div
      style={{
        width: "100%",
        marginTop: "30px",
        fontFamily: "Pretendard",
      }}
    >
      <div style={{ textAlign: "center" }}></div>
      {/* category */}
      <div className="category">
        <button onClick={change0}>전체보기</button>
        <button onClick={change1}>화장품/향수</button>
        <button onClick={change2}>가전/디지털</button>
        <button onClick={change3}>식품</button>
        <br />
        <button onClick={change5}>완구/취미</button>
        <button onClick={change6}>건강</button>
        <button onClick={change7}>생활용품</button>
        <button onClick={change8}>패션/의류</button>
      </div>

      <div>
        <div className="Container">{renderCards}</div>
      </div>
    </div>
  );
}

export default ItemListPage;
