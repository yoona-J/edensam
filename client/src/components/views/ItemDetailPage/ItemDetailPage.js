// import React, { useEffect } from 'react'
// import axios from 'axios'
// function ItemDetailPage() {

//     const productId = props.match.params.productId

//     useEffect(() => {

//         axios.get(`/api/admin/upload/product/products_by_id?id=${productId}&type=single`);

//     }, [])

//   return (
//     <div>ItemDetailPage</div>
//   )
// }

// export default ItemDetailPage

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Upload } from "antd";
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
        if (response.data.success) {
          console.log("response.data", response.data);
          setProduct(response.data.upload[0]);
        }
        //   setProduct(response.data[0]);
      });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        margin: "3rem auto",
      }}
    >
      {/* 상품 이미지 */}
      <ProductImage detail={Upload} />
      <hr />
      <div className="box">
        {/* 상품 회사 */}
        <div className="company">{Product.item_maker}</div>
        {/* 상품 이름 */}
        <div className="item_title">{Product.item_title}</div>
        {/* 상품 가격 */}
        <div className="price">{Product.how_much} 원</div>
        {/* 찜하기 버튼 */}

        {/* 결제 버튼 */}
        <div className="pay">
          <button className="paybtn">결제</button>
        </div>
      </div>
      {/* 상품 상세 정보 */}
      <hr />
      <div className="detail">상품 정보</div>
      <ProductInfo detail={Upload} />
    </div>
  );
}

export default ItemDetailPage;
