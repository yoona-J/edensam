import React from "react";

function UserCardBlock(props) {

  const renderItems = () =>
    props.uploads &&
    props.uploads.map((upload, index) => (
      <a href={`/product/${upload._id}`} key={index}>
        <div style={{ width: '166px', height: '250px'}}>
          <img
            src={`http://localhost:5000/${upload.item_image[0]}`}
            style={{
              height: "166px",
              width: "166px",
              marginBottom: "12px",
              borderRadius :"19px"
            }}
          />

          <div style={{ fontSize: '15px' }}>{upload.item_title}</div>
        </div>
      </a>
    ));

  return <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>{renderItems()}</div>;
}

export default UserCardBlock;
