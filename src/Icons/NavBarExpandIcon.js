import * as React from "react";
const NavBarExpandIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={24}
      height={24}
      fill="#fff"
      rx={4}
      transform="matrix(-1 0 0 1 24 0)"
    />
    <path
      stroke="#6B778C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.667 15.333 16 11.999l-3.333-3.333M7.999 15.333l3.333-3.334-3.333-3.333"
    />
  </svg>
);
export default NavBarExpandIcon;
