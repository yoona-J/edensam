import React from "react";
import DaumPostcode from "react-daum-postcode";

const DaumPost = (props) => {
  const setAddress = props.setAddress;

  const onCompletePost = (data) => {
    console.log(`
    우편번호: ${data.zonecode}.            
    주소: ${data.address}`);

    setAddress(data.address);

    document.querySelector("#zipcode").value = data.zonecode;
    document.querySelector("#address").value = data.address;
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "20%",
    width: "400px",
    height: "400px",
    padding: "7px",
    zIndex: 100,
  };

  return (
    <>
      <DaumPostcode
        style={postCodeStyle}
        autoClose
        onComplete={onCompletePost}
      />
    </>
  );
};

export default DaumPost;
