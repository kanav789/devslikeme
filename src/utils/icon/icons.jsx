// Brush Icon
export const Brush = () => {
  const color = "black";
  const size = 24;

  return (
    <svg
      fill={color}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 34.78 34.78"
      xmlSpace="preserve"
      stroke={color}
      strokeWidth="0.0003478"
      transform="rotate(0)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.06956"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <path d="M34.24,1.919c-0.532-0.635-1.836-1.133-2.471-0.599L16.292,14.937l2.089,2.479l16.031-12.96 C35.048,3.92,34.775,2.553,34.24,1.919z"></path>
            <path d="M14.601,16.423l-2.559,2.252c-0.037,0.029-0.064,0.064-0.097,0.1c-2.344-0.513-6.879-0.919-10.123,2.398 c-4.557,4.661,1.234,8.28-1.659,12.482c6.139,0.372,8.879-2.769,10.35-6.385..."></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

// Eraser Icon
export const Eraser = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 504.747 504.747"
      fill="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <g transform="translate(1 1)">
        <path
          style={{ fill: "#dedede" }}
          d="M188.867,171.8L356.12,339.054L229.827,465.347h-104.96L12.227,349.293 c-10.24-10.24-10.24-34.133,0-44.373l153.6-156.16L188.867,171.8z"
        />
        <path
          style={{ fill: "#ccb66b" }}
          d="M188.867,171.8L356.12,339.054l133.12-133.12c13.653-13.653,13.653-34.987,0-48.64L345.88,13.933 c-13.653-13.653-34.987-13.653-47.787,0L166.68,147.907L188.867,171.8L188.867,171.8z"
        />
      </g>
      <path
        style={{ fill: "#51565F" }}
        d="M269.227,504.747c-1.707,0-3.413,0-5.12-0.853c-5.12-2.56-6.827-8.533-6.827-11.947 ... (rest of path here) ..."
      />
    </svg>
  );
};


// Pencil Icon
export const Pencil = () => {
  const size = 24;

  return (
    <svg
      height={size}
      width={size}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 511.882 511.882"
      xmlSpace="preserve"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          style={{ fill: "#F6BB42" }}
          d="M493.136,18.746c-24.994-24.994-65.5-24.994-90.495,0L0,421.403v90.479h90.479 
             l402.657-402.643C518.13,84.246,518.13,43.74,493.136,18.746z"
        ></path>
        <path
          style={{ fill: "#EC87C0" }}
          d="M478.062,124.315l15.074-15.075c24.994-24.994,24.994-65.5,0-90.494 
             c-24.994-24.994-65.5-24.994-90.495,0L387.567,33.82L478.062,124.315z"
        ></path>
        <path
          style={{ fill: "#FFCE54" }}
          d="M425.339,71.592L75.466,421.465c-4.155,4.171-4.155,10.92,0,15.075 
             c4.171,4.171,10.92,4.171,15.091,0L440.414,86.683L425.339,71.592z"
        ></path>
        <polygon
          style={{ fill: "#FFE5AB" }}
          points="0,421.403 0,511.882 90.479,511.882 "
        ></polygon>
        <polygon
          style={{ fill: "#E6E9ED" }}
          points="417.795,184.708 327.299,94.212 387.629,33.898 478.125,124.378 "
        ></polygon>
        <g>
          <path
            style={{ fill: "#CCD1D9" }}
            d="M380.099,71.592l-15.09-15.074L349.873,71.53l15.074,15.091 
               c4.171,4.155,10.92,4.155,15.09,0C384.255,82.512,384.255,75.763,380.099,71.592z"
          ></path>
          <path
            style={{ fill: "#CCD1D9" }}
            d="M425.199,146.873l15.09,15.074l15.075-15.074l-15.075-15.091 
               c-4.17-4.155-10.919-4.155-15.09,0C421.044,135.952,421.044,142.702,425.199,146.873z"
          ></path>
        </g>
        <polygon
          style={{ fill: "#656D78" }}
          points="0,481.717 0,511.882 30.165,511.882 "
        ></polygon>
      </g>
    </svg>
  );
};


export const Paint =()=>{
    const size = 24
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M25.202 31.217L45.907 10.517C46.7888 9.55027 48.0176 8.97215 49.3246 8.90918C50.6316 8.84621 51.9103 9.30352 52.881 10.181L55.096 12.395C55.974 13.3656 56.4319 14.6445 56.3695 15.9518C56.3071 17.2591 55.7295 18.4885 54.763 19.371L34.063 40.071" stroke="#c0ae39" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M30.591 49.899C23.557 57.299 14.377 55.843 10.005 54.442C9.68446 54.3389 9.38995 54.1677 9.14161 53.9403C8.89326 53.7129 8.69693 53.4346 8.56601 53.1243C8.43509 52.8141 8.37268 52.4792 8.38303 52.1426C8.39339 51.806 8.47627 51.4757 8.62601 51.174C9.61883 49.1709 10.51 47.119 11.296 45.026C11.805 43.5767 12.1684 42.0803 12.381 40.559C12.562 39.3982 12.9398 38.2768 13.498 37.243C14.2245 35.8782 15.2367 34.6861 16.4658 33.7481C17.6949 32.8101 19.1118 32.1482 20.6199 31.8076C22.1281 31.467 23.6919 31.4557 25.2048 31.7744C26.7177 32.0932 28.1441 32.7345 29.3866 33.6546C30.6291 34.5748 31.6585 35.7521 32.4047 37.1063C33.1508 38.4604 33.5961 39.9596 33.7101 41.5015C33.8241 43.0434 33.6043 44.5918 33.0655 46.041C32.5267 47.4902 31.6816 48.8061 30.588 49.899H30.591Z" stroke="#c1a725" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
    )
}

export const Share = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
    >
      <path
        d="M9 6L12 3M12 3L15 6M12 3V13M7.00023 10C6.06835 10 5.60241 10 5.23486 10.1522C4.74481 10.3552 4.35523 10.7448 4.15224 11.2349C4 11.6024 4 12.0681 4 13V17.8C4 18.9201 4 19.4798 4.21799 19.9076C4.40973 20.2839 4.71547 20.5905 5.0918 20.7822C5.5192 21 6.07899 21 7.19691 21H16.8036C17.9215 21 18.4805 21 18.9079 20.7822C19.2842 20.5905 19.5905 20.2839 19.7822 19.9076C20 19.4802 20 18.921 20 17.8031V13C20 12.0681 19.9999 11.6024 19.8477 11.2349C19.6447 10.7448 19.2554 10.3552 18.7654 10.1522C18.3978 10 17.9319 10 17 10"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
