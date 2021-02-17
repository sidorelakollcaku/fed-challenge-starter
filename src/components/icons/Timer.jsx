import React from "react";

function Timer({ height = "10px", width = "10px", color = "black", ...props }) {
  return (
    <svg
      width={width}
      height={height}
      color={color}
      xmlns="http://www.w3.org/2000/svg"
      fill="#2E3134"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 5.5c0-2.205-1.795-4-4-4s-4 1.795-4 4 1.795 4 4 4 4-1.795 4-4zm.5 0C9.5 7.981 7.481 10 5 10A4.505 4.505 0 01.5 5.5C.5 3.019 2.519 1 5 1a4.48 4.48 0 012.905 1.07l.716-.716.354.353-.708.708A4.479 4.479 0 019.5 5.5zm-6-5h3V0h-3v.5zM4.75 6h.5V3h-.5v3z"
      />
    </svg>
  );
}

export default Timer;
