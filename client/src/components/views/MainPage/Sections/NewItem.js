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
    console.log(upload);

    return (
      <a href={`/product/${upload._id}`}>
        <div>
          <img
            src={`http://localhost:5000/${upload.item_image[0]}`}
            style={{
              height: "100px",
              width: "100x",
              borderInline: "19px",
            }}
          />

          <div style={{width:"100px",textAlign:"left"}}>{upload.item_title}</div>
          <div style={{width:"100px",textAlign:"right"}}>{`${upload.how_much}원`}</div>
        </div>
      </a>
    );
  });

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "space-around",
    //     flexWrap: "wrap",
    //   }}
    // >
    //   <div>{renderCards[7]}</div>
    //   <div>{renderCards[13]}</div>
    //   <div>{renderCards[18]}</div>
    // </div>
    <div>
  <div>
    <p
      style={{
        fontSize: "20px",
        textAlign: "center",
        fontFamily: "Pretendard-Medium",
      }}
    >
      따끈따끈한 신상
    </p>
  </div>
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    }}
  >
    <div>{renderCards[7]}</div>
    <div>{renderCards[13]}</div>
    <div>{renderCards[18]}</div>
  </div>
  <hr />
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
    <div>{renderCards[12]}</div>
    <div>{renderCards[13]}</div>
    <div>{renderCards[15]}</div>
  </div>
</div>
  );
}

export default NewItem;
