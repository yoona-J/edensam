// import React, { useState } from "react";

// function checkbox() {
//   const IssueList = () => {
//     const issues = [...Array(10).keys()]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//     const [checkedItems, setCheckedItems] = useState(new Set());
//     const checkedItemHandler = (id, isChecked) => {
//       if (isChecked) {
//         checkedItems.add(id);
//         setCheckedItems(checkedItems);
//       } else if (!isChecked && checkedItems.has(id)) {
//         checkedItems.delete(id);
//         setCheckedItems(checkedItems);
//       }
//     };
//     return (
//       <>
//         <div>
//           <input type="checkbox" />
//         </div>
//         <List>
//           {issues.map((issue, index) => (
//             <Issue key={index} />
//           ))}
//         </List>
//       </>
//     );
//   };
// }

// export default checkbox;


import React from "react";
import { Checkbox } from "antd";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const checkbox = () => <Checkbox onChange={onChange}>무통장입금</Checkbox>;
export default checkbox;