import React from "react";

const TabletIcon = ({ color, w, h }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
       <path
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20.626 17.381l-.001-10.763A3.618 3.618 0 0017.007 3H6.992a3.618 3.618 0 00-3.618 3.618l.001 10.764A3.618 3.618 0 006.993 21h10.014a3.618 3.618 0 003.619-3.619z"
        clipRule="evenodd"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.001 17.33v-.048m0-.253a.25.25 0 100 .5.25.25 0 000-.5z"
      ></path>
    </svg>
  );
};

TabletIcon.defaultProps = {
  color: "#000",
  w: "24",
  h: "24",
};

export default TabletIcon;
