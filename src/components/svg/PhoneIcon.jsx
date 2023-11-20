import React from "react";

const PhoneIcon = ({ color, w, h }) => {
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
        d="M18.375 6.618v10.764A3.618 3.618 0 0114.758 21H9.243a3.618 3.618 0 01-3.618-3.617L5.624 6.617A3.618 3.618 0 019.242 3h5.515a3.618 3.618 0 013.618 3.618zM5.635 14.862h12.732"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 17.981v-.048m0-.253a.25.25 0 100 .5.25.25 0 000-.5z"
      ></path>
    </svg>
  );
};

PhoneIcon.defaultProps = {
  color: "#000",
  w: "24",
  h: "24",
};

export default PhoneIcon;
