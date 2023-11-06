import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

function ProductImage(props) {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    if (props.detail.item_info && props.detail.item_info.length > 0) {
      let item_info = [];

      props.detail.item_info.map((item) => {
        item_info.push({
          original: `http://localhost:5000/${item}`,
          thumbnail: `http://localhost:5000/${item}`,
        });
      });
      setImages(item_info);
    }
  }, [props.detail]);

  return (
    <div>
          {/* <ImageGallery items={Images} /> */}
          <img items={Images}></img>
    </div>
  );
}

export default ProductImage;
