import React from "react";

const BrandmingoLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="loader-container">
        {/* Hidden SVG for Gradients */}
        <svg height="0" width="0" viewBox="0 0 64 64" className="absolute">
          <defs xmlns="http://www.w3.org/2000/svg">
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="2"
              x2="0"
              y1="62"
              x1="0"
              id="b"
            >
              <stop stopColor="#973BED"></stop>
              <stop stopColor="#007CFF" offset="1"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="0"
              x2="0"
              y1="64"
              x1="0"
              id="c"
            >
              <stop stopColor="#FFC800"></stop>
              <stop stopColor="#F0F" offset="1"></stop>
              <animateTransform
                repeatCount="indefinite"
                keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
                keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1"
                dur="8s"
                values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
                type="rotate"
                attributeName="gradientTransform"
              ></animateTransform>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="2"
              x2="0"
              y1="62"
              x1="0"
              id="d"
            >
              <stop stopColor="#00E0ED"></stop>
              <stop stopColor="#00DA72" offset="1"></stop>
            </linearGradient>
            {/* Orange gradient for Brandmingo theme */}
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="2"
              x2="0"
              y1="62"
              x1="0"
              id="orange"
            >
              <stop stopColor="#f4a702"></stop>
              <stop stopColor="#ff8c00" offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Main Loader */}
        <div className="loader-wrapper">
          <div className="loader">
            {/* B Letter */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 64 64"
              height="80"
              width="80"
              className="letter"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="6"
                stroke="url(#orange)"
                d="M 12,4 V 60 H 32 C 42,60 50,52 50,42 C 50,35 46,29 40,27 C 44,25 47,20 47,14 C 47,6 40,4 32,4 Z M 20,12 H 30 C 35,12 39,15 39,20 C 39,25 35,28 30,28 H 20 Z M 20,36 H 32 C 37,36 42,39 42,46 C 42,51 37,52 32,52 H 20 Z"
                className="dash dash-1"
                pathLength="360"
              ></path>
            </svg>

            {/* R Letter */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 64 64"
              height="80"
              width="80"
              className="letter"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="6"
                stroke="url(#c)"
                d="M 12,60 V 4 H 32 C 42,4 48,10 48,20 C 48,28 43,33 36,34 L 50,60 M 20,12 V 32 H 32 C 37,32 40,28 40,22 C 40,16 37,12 32,12 Z"
                className="dash dash-2"
                pathLength="360"
              ></path>
            </svg>

            {/* A Letter */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 64 64"
              height="80"
              width="80"
              className="letter"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="6"
                stroke="url(#d)"
                d="M 8,60 L 32,4 L 56,60 M 18,42 H 46"
                className="dash dash-3"
                pathLength="360"
              ></path>
            </svg>

            {/* N Letter */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 64 64"
              height="80"
              width="80"
              className="letter"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="6"
                stroke="url(#b)"
                d="M 12,60 V 4 L 52,60 V 4"
                className="dash dash-4"
                pathLength="360"
              ></path>
            </svg>

            {/* D Letter */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 64 64"
              height="80"
              width="80"
              className="letter"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="6"
                stroke="url(#orange)"
                d="M 12,4 V 60 H 32 C 47,60 56,50 56,32 C 56,14 47,4 32,4 Z M 20,12 H 32 C 42,12 48,18 48,32 C 48,46 42,52 32,52 H 20 Z"
                className="dash dash-5"
                pathLength="360"
              ></path>
            </svg>

            {/* Space */}
            <div className="letter-space"></div>

            {/* M Letter */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 64 64"
              height="80"
              width="80"
              className="letter"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="6"
                stroke="url(#c)"
                d="M 8,60 V 4 L 32,32 L 56,4 V 60"
                className="dash dash-6"
                pathLength="360"
              ></path>
            </svg>

            {/* I Letter */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 64 64"
              height="80"
              width="80"
              className="letter"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="6"
                stroke="url(#d)"
                d="M 32,4 V 60"
                className="dash dash-7"
                pathLength="360"
              ></path>
            </svg>

            {/* N Letter */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 64 64"
              height="80"
              width="80"
              className="letter"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="6"
                stroke="url(#b)"
                d="M 12,60 V 4 L 52,60 V 4"
                className="dash dash-8"
                pathLength="360"
              ></path>
            </svg>

            {/* G Letter */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 64 64"
              height="80"
              width="80"
              className="letter"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="6"
                stroke="url(#orange)"
                d="M 52,12 C 48,6 40,4 32,4 C 18,4 8,14 8,32 C 8,50 18,60 32,60 C 44,60 52,52 52,42 V 32 H 32"
                className="dash dash-9"
                pathLength="360"
              ></path>
            </svg>

            {/* O Letter (Circle) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 64 64"
              height="80"
              width="80"
              className="letter"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="8"
                stroke="url(#c)"
                d="M 32 32 m 0 -27 a 27 27 0 1 1 0 54 a 27 27 0 1 1 0 -54"
                className="spin"
                pathLength="360"
              ></path>
            </svg>
          </div>

          {/* Loading Text */}
          <div className="text-center mt-12">
            <p className="text-[#f4a702] text-2xl font-bold animate-pulse tracking-wider">
              Loading...
            </p>
          </div>
        </div>

        <style jsx>{`
          .absolute {
            position: absolute;
          }
          .loader-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
          .loader {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.25rem;
            max-width: 90vw;
          }
          .letter {
            display: inline-block;
            filter: drop-shadow(0 0 10px currentColor);
          }
          .letter-space {
            width: 1.5rem;
          }
          .dash {
            animation: dashArray 2.5s ease-in-out infinite,
              dashOffset 2.5s linear infinite;
          }
          .dash-1 {
            animation-delay: 0s;
          }
          .dash-2 {
            animation-delay: 0.1s;
          }
          .dash-3 {
            animation-delay: 0.2s;
          }
          .dash-4 {
            animation-delay: 0.3s;
          }
          .dash-5 {
            animation-delay: 0.4s;
          }
          .dash-6 {
            animation-delay: 0.5s;
          }
          .dash-7 {
            animation-delay: 0.6s;
          }
          .dash-8 {
            animation-delay: 0.7s;
          }
          .dash-9 {
            animation-delay: 0.8s;
          }
          .spin {
            animation: spinDashArray 2.5s ease-in-out infinite,
              spin 8s ease-in-out infinite, dashOffset 2.5s linear infinite;
            transform-origin: center;
            animation-delay: 0.9s;
          }
          @keyframes dashArray {
            0% {
              stroke-dasharray: 0 1 359 0;
            }
            50% {
              stroke-dasharray: 0 359 1 0;
            }
            100% {
              stroke-dasharray: 359 1 0 0;
            }
          }
          @keyframes spinDashArray {
            0% {
              stroke-dasharray: 270 90;
            }
            50% {
              stroke-dasharray: 0 360;
            }
            100% {
              stroke-dasharray: 270 90;
            }
          }
          @keyframes dashOffset {
            0% {
              stroke-dashoffset: 365;
            }
            100% {
              stroke-dashoffset: 5;
            }
          }
          @keyframes spin {
            0% {
              rotate: 0deg;
            }
            12.5%,
            25% {
              rotate: 270deg;
            }
            37.5%,
            50% {
              rotate: 540deg;
            }
            62.5%,
            75% {
              rotate: 810deg;
            }
            87.5%,
            100% {
              rotate: 1080deg;
            }
          }

          @media (max-width: 768px) {
            .letter {
              height: 60px;
              width: 60px;
            }
            .letter-space {
              width: 1rem;
            }
          }

          @media (max-width: 480px) {
            .letter {
              height: 45px;
              width: 45px;
            }
            .letter-space {
              width: 0.5rem;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default BrandmingoLoader;
