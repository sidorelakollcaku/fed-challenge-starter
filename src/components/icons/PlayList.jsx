import React from "react";

function PlayList({ height = "25px", width = "25px", ...props }) {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 13"
      fill="#231F20"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1h17V0H0v1zm0 4h17V4H0v1zm15 8l5-3-5-3v6zm1-4.234L18.057 10 16 11.233V8.766zM0 9h13V7.999H0V9z"
      />
    </svg>
  );
}

export default PlayList;
