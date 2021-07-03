import * as React from "react";

function SvgPlus(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.286 0v4.286H0v1.428h4.286V10h1.428V5.714H10V4.286H5.714V0H4.286z"
        fill="#fff"
      />
      <mask
        id="plus_svg__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={10}
        height={10}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.286 0v4.286H0v1.428h4.286V10h1.428V5.714H10V4.286H5.714V0H4.286z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
}

export default SvgPlus;
