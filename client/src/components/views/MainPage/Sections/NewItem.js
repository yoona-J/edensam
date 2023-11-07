// import React from 'react'

// function NewItem() {

//   useEffect(() => {
//     axios.get("/api/admin/upload/product").then((response) => {
//       if (response.data.success) {
//         console.log(response.data);

//         setProducts(response.data.upload);
//       } else {
//         alert("fail");
//       }
//     });
//   }, []);

//   return (
//     <div>NewItem</div>
//   )
// }

// export default NewItem

import React from "react";

function NewItem() {
  return <div>NewItems</div>;
}

export default NewItem;
