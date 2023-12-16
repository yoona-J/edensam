import React from "react";
import { Checkbox } from "antd";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const checkbox = () => <Checkbox onChange={onChange}>무통장입금</Checkbox>;
export default checkbox;