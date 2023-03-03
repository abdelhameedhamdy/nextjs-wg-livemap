import * as React from "react";

const ICON = `M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 18.6952 40.0000 C 17.9687 40.0000 17.4765 39.4844 17.4765 38.7344 C 17.4765 38.4297 17.5468 38.125 17.6640 37.8438 L 26.3358 15.6953 C 26.7109 14.7813 27.2499 14.3360 28.0234 14.3360 C 28.7499 14.3360 29.3124 14.7813 29.6405 15.6953 L 38.3358 37.8438 C 38.4530 38.125 38.5468 38.4297 38.5468 38.7344 C 38.5468 39.4844 38.0546 40.0000 37.3046 40.0000 C 36.9530 40.0000 36.5780 39.8594 36.3436 39.625 L 28.5624 31.8203 C 28.3514 31.6094 28.1874 31.4922 28.0234 31.4922 C 27.8358 31.4922 27.6483 31.6094 27.4374 31.8203 L 19.6327 39.625 C 19.3983 39.8594 19.0468 40.0000 18.6952 40.0000 Z`;

const pinStyle = {
  cursor: "pointer",
  fill: "#d00",
  stroke: "none",
};

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
    // <svg height={size} viewBox="0 0 22 22" style={pinStyle}>
    //   <circle cx="10.5" cy="10.5" r="8.5" fill="white" />
    //   <path d="M10.6724 21.3448C16.5004 21.3448 21.3449 16.5004 21.3449 10.6724C21.3449 4.83397 16.49 0 10.662 0C4.82348 0 0 4.83397 0 10.6724C0 16.5004 4.83397 21.3448 10.6724 21.3448ZM6.51853 16.0296C6.1942 16.0296 5.97446 15.7994 5.97446 15.4646C5.97446 15.3285 6.00585 15.1925 6.05817 15.067L9.92951 5.17924C10.097 4.77121 10.3376 4.57241 10.6829 4.57241C11.0072 4.57241 11.2583 4.77121 11.4048 5.17924L15.2867 15.067C15.339 15.1925 15.3808 15.3285 15.3808 15.4646C15.3808 15.7994 15.1611 16.0296 14.8263 16.0296C14.6693 16.0296 14.5019 15.9668 14.3973 15.8621L10.9235 12.3779C10.8293 12.2837 10.7561 12.2314 10.6829 12.2314C10.5992 12.2314 10.5154 12.2837 10.4213 12.3779L6.93705 15.8621C6.83241 15.9668 6.67549 16.0296 6.51853 16.0296Z" />

    // </svg>
    <div>
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
    </div>
  );
}

export default React.memo(Pin);
