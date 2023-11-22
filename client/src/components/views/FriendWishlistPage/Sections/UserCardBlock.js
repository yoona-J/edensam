import React, { useState, useEffect } from "react";
import "../FriendWishlistPage.css";
// import { useHistory } from "react-router-dom";

function UserCardBlock(props) {
  // const renderCartImage = (item_image) => {
  //   if (item_image.length > 0) {
  //     let image = item_image[0];
  //     return `http://localhost:5000/${image}`;
  //   }
  // };
  const [UploadInfo, setUploadInfo] = useState("");

  useEffect(() => {
    console.log("pppp", props);

    if (props) {
      setUploadInfo(props.uploads);
    }
  }, [props]);

  console.log("UploadInfo", UploadInfo);

  // const renderItems = UploadInfo.map((upload, index) => {
  //   return (
  //     <div>
  //       <a href={`/product/${upload._id}`}>
  //         <div className="witembox">
  //           <img
  //             src={`http://localhost:5000/${upload.item_image[0]}`}
  //             style={{
  //               height: "166px",
  //               width: "166px",
  //               borderInline: "19px",
  //               margin: "7px",
  //               borderRadius: "10px",
  //             }}
  //           />

  //           <div className="winame">{upload.item_title}</div>
  //           <div className="wprice">{`${upload.how_much}원`}</div>
  //         </div>
  //       </a>
  //     </div>
  //   );
  // });

  // const renderItems = () =>
  //   props.uploads &&
  //   props.uploads.map((upload) => (
  //     <a href={`/product/${upload._id}`}>
  //       <div className="witembox">
  //         <img
  //           src={`http://localhost:5000/${upload.item_image[0]}`}
  //           style={{
  //             height: "166px",
  //             width: "166px",
  //             borderInline: "19px",
  //             margin: "7px",
  //             borderRadius: "10px",
  //           }}
  //         />

  //         <div className="winame">{upload.item_title}</div>
  //         <div className="wprice">{`${upload.how_much}원`}</div>
  //       </div>
  //     </a>
  //   ));

  // return <div className="Container">{renderItems()}</div>;
}

export default UserCardBlock;
