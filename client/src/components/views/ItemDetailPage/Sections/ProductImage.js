import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

function ProductImage(props) {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    if (props.detail.item_image && props.detail.item_image.length > 0) {
      let item_image = [];

      props.detail.item_image.map((item) => {
          item_image.push({
            original: `http://localhost:3000/${item}`,
            thumbnail: `http://localhost:3000/${item}`,
          });
        });
      setImages(item_image);
    }
  }, [props.detail]);

  return (
    <div>
      ProductImage
      <ImageGallery items={Images} />
    </div>
  );
}

export default ProductImage;
