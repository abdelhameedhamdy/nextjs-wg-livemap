import * as React from "react";

function Pin({
  size = 30,
  color = "#4185F4",
  onMouseMove,
  onMouseOut,
}: {
  size?: number;
  color?: string;
  onMouseMove?: React.MouseEventHandler<SVGCircleElement>;
  onMouseOut?: React.MouseEventHandler<SVGCircleElement>;
}) {
  return (
    <svg width={size} viewBox="0 0 38 63" fill="none">
      <path
        d="M0 8.00001L7 3.00001L18 0L28 1.5L37.5 8.00001L28 54.5H10.5L0 8.00001Z"
        fill="url(#paint0_linear_0_1)"
        fillOpacity="0.55"
      />
      <g filter="url(#filter0_d_0_1)">
        <circle
          cx="19"
          cy="48"
          r="11"
          fill={color}
          cursor="pointer"
          onMouseMove={onMouseMove}
          onMouseOut={onMouseOut}
        />
        <circle cx="19" cy="48" r="10.25" stroke="white" strokeWidth="2" />
      </g>
      <defs>
        <filter
          id="filter0_d_0_1"
          x="4"
          y="33"
          width="30"
          height="30"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.254902 0 0 0 0 0.521569 0 0 0 0 0.956863 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_1"
          x1="19.7246"
          y1="0.0615342"
          x2="17.9494"
          y2="48.9867"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9D9D9" stopOpacity="0" />
          <stop offset="0.791667" stopColor={color} />
          <stop offset="1" stopColor={color} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Pin;
