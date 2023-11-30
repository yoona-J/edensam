import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ItemListPage.css";

function ItemListPage() {
  const [Products, setProducts] = useState([]);
  const [cnum, setcnum] = useState("0");

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

  const categoryTitle = () => {
    if (cnum === '0') {
      return <div>
        <p style={{fontSize: '20px', textAlign: 'center', color: '#000'}}>전체 상품</p>
      </div>
    } else if (cnum === '1') {
      return <div>
        <p style={{fontSize: '20px', textAlign: 'center', color: '#000'}}>화장품/향수</p>
      </div>
    } else if (cnum === '2') {
      return <div>
        <p style={{fontSize: '20px', textAlign: 'center', color: '#000'}}>가전/디지털</p>
      </div>
    } else if (cnum === '3') {
      return <div>
        <p style={{fontSize: '20px', textAlign: 'center', color: '#000'}}>식품</p>
      </div>
    } else if (cnum === '5') {
      return <div>
        <p style={{fontSize: '20px', textAlign: 'center', color: '#000'}}>완구/취미</p>
      </div>
    } else if (cnum === '6') {
      return <div>
        <p style={{fontSize: '20px', textAlign: 'center', color: '#000'}}>건강</p>
      </div>
    } else if (cnum === '7') {
      return <div>
        <p style={{fontSize: '20px', textAlign: 'center', color: '#000'}}>생활 용품</p>
      </div>
    } else if (cnum === '8') {
      return <div>
        <p style={{fontSize: '20px', textAlign: 'center', color: '#000'}}>패션/의류</p>
      </div>
    }
  }

  const renderCards = Products.map((upload, index) => {
    if (upload.item_category == cnum) {
      return (
        <a href={`/product/${upload._id}`}>
          <div
            className="itembox"
            key={index}
            style={{ boxShadow: "0px 0px 2px 0px #C4C4C4", width: '160px', height: '290px', borderRadius: '10px', marginBottom: '16px', border: 0 }}
          >
            <img
              src={`http://localhost:5000/${upload.item_image[0]}`}
              style={{
                height: "140px",
                width: "140px",
                borderRadius: "19px",
                margin: "10px",
              }}
            />
            <div style={{ width: '100%', height: '120px', display: 'flex', flexWrap: 'wrap', alignContent: 'space-around', marginLeft: '7px'}}>
              <div style={{ width: '90%', textAlign: 'center', margin: 0 }}>{upload.item_title}</div>
              <div style={{ width: '90%', height: '10px', textAlign: 'center' }}>{`${upload.how_much}원`}</div>
            </div>
          </div>
        </a>
      );
    }
    if (cnum == '0') {
      return (
        <a href={`/product/${upload._id}`}>
          <div
            className="itembox"
            key={index}
            style={{ boxShadow: "0px 0px 2px 0px #C4C4C4", width: '160px', height: '290px', borderRadius: '10px', marginBottom: '16px', border: 0 }}
          >
            <img
              src={`http://localhost:5000/${upload.item_image[0]}`}
              style={{
                height: "140px",
                width: "140px",
                borderRadius: "19px",
                margin: "10px",
              }}
            />
            <div style={{ width: '100%', height: '120px', display: 'flex', flexWrap: 'wrap', alignContent: 'space-around', marginLeft: '7px'}}>
              <div style={{ width: '90%', textAlign: 'center', margin: 0 }}>{upload.item_title}</div>
              <div style={{ width: '90%', height: '10px', textAlign: 'center' }}>{`${upload.how_much}원`}</div>
            </div>
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
        fontFamily: "Pretendard-Regular",
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
        <div>{categoryTitle()}</div>
        <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'space-evenly', textAlign: 'center', flexWrap: 'wrap'}}>{renderCards}</div>
      </div>
    </div>
  );
}

export default ItemListPage;
