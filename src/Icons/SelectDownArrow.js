import * as React from "react";
const SelectDownArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={7}
    fill="none"
    {...props}
  >
    <path
      fill="#424242"
      d="m11.354 1.354-5 5a.5.5 0 0 1-.707 0l-5-5a.5.5 0 0 1 .707-.707L6 5.293 10.646.647a.5.5 0 0 1 .708.707Z"
    />
  </svg>
);
export default SelectDownArrow;
