import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductInfo from "./Sections/ProductInfo";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

import "./ItemDetailPage.css";

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
      <img
        src={`http://localhost:5000/${Product.item_image}`}
        style={{ width: '100%' }}
      />
      <div style={{ width: '90%', margin: '1rem auto' }}>
        {/* 상품 회사 */}
        <div style={{ fontSize: '15px', color: '#4F4F4F', marginTop: '20px' }}>{Product.item_maker}</div>
        {/* 상품 이름 */}
        <div style={{ fontSize: '20px', marginTop: '17px' }}>{Product.item_title}</div>
        {/* 상품 가격 */}
        <div style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'right', marginTop: '27px' }}>{Product.how_much} 원</div>
        {/* 찜하기 버튼 */}
      </div>

      <div className="fix-linear" style={{width: '100%', height: '115px', position: 'fixed', top: '92%', zIndex: '1'}}>
        <div style={{ display: "flex", float: "left", width: "100%", justifyContent: "space-evenly" }}>
          {/* 찜하기 버튼 */}
          <div style={{ paddingBottom: "15px" }}>
            <ProductInfo detail={Product} />
          </div>
          {/* 결제 버튼 */}
            <Button style={{ width: '80%', height: '39px', borderRadius: '20px', backgroundColor: '#B4E8E6', border: 0 }} onClick={getProductHandler}>
              <p style={{fontSize: '15px', fontFamily: 'NeoDunggeunmo', margin: 0}}>구매하기</p>
            </Button>
        </div>
      </div>

      {/* 상품 상세 정보 */}
      <hr style={{ marginTop: '61px' }} />
      <div style={{ fontSize: '20px', textAlign: 'center', margin: '17px'}}>상품 정보</div>
      <img
        alt="infoimg"
        src={`http://localhost:5000/${Product.item_info}`}
      />
    </div>
  );
}

export default ItemDetailPage;
