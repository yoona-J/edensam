import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Card } from "antd";
import Meta from "antd/lib/card/Meta";
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
  console.log("pp", Products);
  const [category, setcategory] = useState("");
  const [itemcate, setitemcate] = useState(second);
  const handleClickButton = (e) => {
    const { name } = e.target;
    setcategory(name);
  };

  const ProductCategory = ({ categoryId, products }) => {
    return <></>;
  };

  const renderCards = Products.map((upload, index) => {
    console.log("upload", upload);
    console.log("cate", upload.item_category);
    setitemcate(upload.item_category);

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
  });

  //카테고리

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

        {/* cards */}
        <div>
          <div className="Container">{renderCards}</div>
        </div>
      </div>
    </div>
  );
}

export default ItemListPage;
