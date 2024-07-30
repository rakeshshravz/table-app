import * as React from "react";
const NavbarCollapseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={24} height={24} fill="#fff" rx={4} />
    <path
      stroke="#6B778C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.333 15.333 8 11.999l3.333-3.333M16.001 15.333l-3.333-3.334 3.333-3.333"
    />
  </svg>
);
export default NavbarCollapseIcon;
