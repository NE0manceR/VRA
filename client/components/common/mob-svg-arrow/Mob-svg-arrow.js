import React, { Fragment } from 'react';

const MobSvgArrow = (props) => {
  return (
    <Fragment>
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="#blue-gradient"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="rainbow"
            x1="20"
            x2="20%"
            y1="20%"
            y2="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#009FE3" offset="0%" />
            <stop stopColor="#E6007E" offset="80%" />
            <stop stopColor="#FFED00" offset="100%" />
          </linearGradient>
        </defs>
        <path
          d="M2.11997 1.29L5.99997 5.17L9.87997 1.29C10.27 0.899998 10.9 0.899998 11.29 1.29C11.68 1.68 11.68 2.31 11.29 2.7L6.69997 7.29C6.30997 7.68 5.67997 7.68 5.28997 7.29L0.699971 2.7C0.309971 2.31 0.309971 1.68 0.699971 1.29C1.08997 0.909998 1.72997 0.899998 2.11997 1.29Z"
          fill={props.status ? `url("#rainbow")` : 'black'}
          fillOpacity="0.6"
        />
      </svg>
    </Fragment>
  );
};

export default MobSvgArrow;
