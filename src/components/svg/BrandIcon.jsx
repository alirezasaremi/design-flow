import React from "react";

const BrandIcon = ({ color, w, h }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21.186 12.5H20.14m-15.91 0H3.185m15.5-6.501l-1 1M5.709 19.021l1-1M5.686 6.023l1 .999m12.021 11.977l-1-1m-5.522 2.5v1m0-17.999v1"
      ></path>
      <path
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.306 13.83l-1.828.41a.206.206 0 00-.13.09l-.88 1.378c-.428.67-1.452.489-1.627-.286l-.982-4.88c-.174-.778.679-1.377 1.351-.951l4.38 2.611c.673.427.494 1.455-.284 1.629z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

BrandIcon.defaultProps = {
  color: "#000",
  w: "24",
  h: "24",
};

export default BrandIcon;
