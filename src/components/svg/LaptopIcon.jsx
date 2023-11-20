import React from "react";

const LaptopIcon = ({ color, w, h }) => {
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
        d="M17.024 3.986a2.435 2.435 0 012.436 2.436v8.005l1.426 3.102a1.847 1.847 0 01-1.735 2.483H4.849a1.847 1.847 0 01-1.735-2.483l1.427-3.102V6.421a2.435 2.435 0 012.436-2.436h10.047zM10.693 17.254h2.616M19.443 14.428H4.56"
      ></path>
    </svg>
  );
};

LaptopIcon.defaultProps = {
  color: "#000",
  w: "24",
  h: "24",
};

export default LaptopIcon;
