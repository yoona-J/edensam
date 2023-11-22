import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ItemDetailPage.css";
import ProductImage from "./Sections/ProductImage";
import ProductInfo from "./Sections/ProductInfo";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

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
  console.log("product", Product);

  const history = useHistory();

  const [Mailing, setMailing] = useState([]);
  const [ProductId, setProductId] = useState([]);

  const [FriendId, setFriendId] = useState("");
  const [MailingList, setMailingList] = useState([]);
  const [FriendWish, setFriendWish] = useState([]);
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    if (props) {
      setMailing(props.location.state);
      setProductId(props.match.params.productId);
    }
  }, [props]);

  const getProductHandler = (event) => {
    event.preventDefault();
    history.push({
      pathname: `/payment`,
      state: {
        mailing: Mailing,
        ProductId: productId,
      },
    });
  };
  console.log(props);

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
          <Button className="paybtn" onClick={getProductHandler}>
            구매하기
          </Button>
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
