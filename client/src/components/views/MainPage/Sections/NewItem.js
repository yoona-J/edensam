import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function NewItem(props) {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/admin/upload/product").then((response) => {
      if (response.data.success) {
        // console.log(response.data);

        setProducts(response.data.upload);
      } else {
        alert("fail");
      }
    });
  }, []);

  const renderCards = Products.map((upload, index) => {
    // console.log(upload);

    return (
      <a href={`/product/${upload._id}`}>
        <div>
          <img
            src={`http://localhost:5000/${upload.item_image[0]}`}
            style={{
              height: "100px",
              width: "100x",
              borderRadius: '19px'
            }}
          />
          <div style={{ width: "100px", textAlign: "left", fontFamily: "Pretendard-Medium" }}>
            {upload.item_maker}
          </div>
          <div style={{ width: "100px", textAlign: "left", fontFamily: "Pretendard-Regular" }}>
            {upload.item_title}
          </div>
        </div>
      </a>
    );
  });

  return (
    <div>
      <div>
        <p
          style={{
            fontSize: "20px",
            textAlign: "center",
            fontFamily: "Pretendard-Medium",
          }}
        >
          회원님을 위한 인기 상품
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div>{renderCards[27]}</div>
        <div>{renderCards[16]}</div>
        <div>{renderCards[17]}</div>
      </div>
      <div style={{ width: '100%', height: '12px', backgroundColor: '#F2F2F2', marginTop: '16px' }} />
      <div>
        <p
          style={{
            fontSize: "20px",
            textAlign: "center",
            fontFamily: "Pretendard-Medium",
          }}
        >
          회원님이 좋아할만한 선물
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div>{renderCards[20]}</div>
        <div>{renderCards[14]}</div>
        <div>{renderCards[15]}</div>
      </div>
    </div>
  );
}

export default NewItem;
