import React from 'react'

const MonitorIcon = ({ color, w, h }) => {
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
        d="M6.007 3.22h11.987A3.007 3.007 0 0121 6.228v7.5a3.007 3.007 0 01-3.006 3.008H6.007A3.008 3.008 0 013 13.728v-7.5A3.007 3.007 0 016.007 3.22z"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.097 16.734l1.606 2.818a.845.845 0 01-.735 1.257H9.036a.844.844 0 01-.737-1.266l1.625-2.809M3 12.676h18"
      ></path>
    </svg>
  )
}

MonitorIcon.defaultProps = {
    color: "#000",
    w: "24",
    h: "24"
}

export default MonitorIcon