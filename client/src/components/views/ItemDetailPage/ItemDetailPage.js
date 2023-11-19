import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ItemDetailPage.css";
import ProductImage from "./Sections/ProductImage";
import ProductInfo from "./Sections/ProductInfo";

function ItemDetailPage(props) {
  const productId = props.match.params.productId;
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/admin/upload/products_by_id?id=${productId}&type=single`)
      .then((response) => {
        setProduct(response.data.upload[0]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        width: "100%",
        marginTop: "30px",
        fontFamily: "Pretendard-Regular",
      }}
    >
      {/* 상품 이미지 */}
      {/* <ProductImage detail={Product} /> */}
      <img
        className="infoimg"
        alt="infoimg"
        src={`http://localhost:5000/${Product.item_image}`}
      />
      <div className="box">
        {/* 상품 회사 */}
        <div className="company">{Product.item_maker}</div>
        {/* 상품 이름 */}
        <div className="item_title">{Product.item_title}</div>
        {/* 상품 가격 */}
        <div className="price">{Product.how_much} 원</div>
        {/* 찜하기 버튼 */}
      </div>
      <div
        style={{
          display: "flex",
          // justifyContent: "center",
          float: "left",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <div style={{ paddingBottom: "15px" }}>
          <ProductInfo detail={Product} />
        </div>

        {/* 결제 버튼 */}
        <div className="payment">
          <a href="/payment">
            <div className="paybtn">구매하기</div>
          </a>
          <br />
        </div>
      </div>

      {/* 상품 상세 정보 */}
      <br />
      <hr />
      <div className="detail">상품 정보</div>
      <img
        className="infoimg"
        alt="infoimg"
        src={`http://localhost:5000/${Product.item_info}`}
      />
    </div>
  );
}

export default ItemDetailPage;
