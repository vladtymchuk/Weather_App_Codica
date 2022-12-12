import * as React from "react"

export const DegreesIcon = (props) => (
  <svg
    id="Icons"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 32 32"
    style={{
      enableBackground: "new 0 0 32 32",
      width: props.width
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>
      {
        ".st1{fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round}.st1,.st2,.st3{stroke-linejoin:round}.st2{fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-dasharray:6,6}.st3{stroke-dasharray:4,4}.st3,.st4,.st5{fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round}.st5{stroke-dasharray:3.1081,3.1081}"
      }
    </style>
    <path
      style={{
        fill: "none",
        stroke: "#fff",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
      }}
      d="M30 27H3L25 6"
    />
    <path
      d="M22.1 9.8C25.2 13.7 27 18.6 27 24c0 1.4-.1 2.7-.3 4"
      style={{
        fill: "none",
        stroke: "#fff",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "4,3",
      }}
    />
  </svg>
)
