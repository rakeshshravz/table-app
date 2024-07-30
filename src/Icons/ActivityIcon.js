import * as React from "react";
const ActivityIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#6B778C"
      fillRule="evenodd"
      d="M6.665 1.334h2.827a5.333 5.333 0 0 1 5.333 5.333v2.827a5.333 5.333 0 0 1-5.333 5.333H6.665a5.333 5.333 0 0 1-5.333-5.333V6.667a5.333 5.333 0 0 1 5.333-5.333Zm4.26 7.247h1.154v.02a.5.5 0 0 0 0-1h-1.167a1.293 1.293 0 0 0-.92.38L8.559 9.414V6.081a.667.667 0 0 0-1.194-.527l-1.92 1.933a.3.3 0 0 1-.22.094H4.08a.5.5 0 0 0 0 1h1.146c.348-.004.68-.142.927-.387l1.4-1.433v3.333a.667.667 0 0 0 .433.667.7.7 0 0 0 .76-.153l1.967-1.94a.32.32 0 0 1 .213-.087Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ActivityIcon;
