import React from "react";
import logo1 from "../assets/images/ClientLogos/1.png";
import logo2 from "../assets/images/ClientLogos/2.png";
import logo3 from "../assets/images/ClientLogos/3.png";
import logo4 from "../assets/images/ClientLogos/4.png";
import logo5 from "../assets/images/ClientLogos/5.png";
import logo6 from "../assets/images/ClientLogos/6.png";
import logo7 from "../assets/images/ClientLogos/7.png";
import logo8 from "../assets/images/ClientLogos/8.png";
import logo9 from "../assets/images/ClientLogos/9.png";
import logo10 from "../assets/images/ClientLogos/10.png";
import logo11 from "../assets/images/ClientLogos/11.png";
import logo12 from "../assets/images/ClientLogos/12.png";
import logo13 from "../assets/images/ClientLogos/13.png";
import logo14 from "../assets/images/ClientLogos/14.png";
import logo15 from "../assets/images/ClientLogos/15.png";
import logo16 from "../assets/images/ClientLogos/16.png";
import logo17 from "../assets/images/ClientLogos/17.png";
import logo18 from "../assets/images/ClientLogos/18.png";
import logo19 from "../assets/images/ClientLogos/19.png";

export default function ClientLogo() {
  // ----- EDIT your logos here -----
  const items = [
    { src: logo1, alt: "ag-logo" },
    { src: logo2, alt: "ar-logo" },
    { src: logo3, alt: "c-logo" },
    { src: logo4, alt: "cx-logo" },
    { src: logo5, alt: "g20-logo" },
    { src: logo6, alt: "lul-logo" },
    { src: logo7, alt: "mm-logo" },
    { src: logo8, alt: "rd-logo" },
    { src: logo9, alt: "rd-logo" },
    { src: logo10, alt: "rd-logo" },
    { src: logo11, alt: "rd-logo" },
    { src: logo12, alt: "rd-logo" },
    { src: logo13, alt: "rd-logo" },
    { src: logo14, alt: "rd-logo" },
    { src: logo15, alt: "rd-logo" },
    { src: logo16, alt: "rd-logo" },
    { src: logo17, alt: "rd-logo" },
    { src: logo18, alt: "rd-logo" },
    { src: logo19, alt: "rd-logo" },
  ];

  // speed & size controls
  const duration = 45; // slower speed (increase number = slower)
  const rowHeight = 90; // increased from 64 to 90

  // duplicate to make seamless
  const track = [...items, ...items, ...items];

  return (
    <section
      aria-label="Client logos"
      className="client-logos"
      style={{ background: "#f2f2f2", padding: "28px 0" }}
    >
      <div
        className="client-logos__container"
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          overflow: "hidden",
          padding: "0 16px",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="marquee"
          style={{
            "--marquee-duration": `${duration}s`,
            "--gap": "clamp(48px, 8vw, 120px)",
            "--h": `${rowHeight}px`,
          }}
        >
          <ul className="marquee__track">
            {track.map((logo, i) => (
              <li key={i} className="marquee__item">
                <img
                  src={logo.src}
                  alt={logo.alt || "Client logo"}
                  className="marquee__img"
                  loading="lazy"
                  height={rowHeight}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Component-scoped CSS */}
      <style>{`
        .marquee {
          position: relative;
          width: 100%;
        }

        .marquee__track {
          display: flex;
          align-items: center;
          gap: var(--gap);
          width: max-content;
          animation: marquee-x var(--marquee-duration) linear infinite;
          will-change: transform;
        }

        .marquee:hover .marquee__track {
          animation-play-state: paused;
        }

        .marquee__item {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .marquee__img {
          height: var(--h);
          width: auto;
          object-fit: contain;
          filter: grayscale(100%) contrast(90%) opacity(.85);
          transition: filter .2s ease, transform .2s ease;
        }

        .marquee__img:hover {
          filter: grayscale(0%) contrast(100%) opacity(1);
          transform: translateY(-1px);
        }

        /* Mobile: 2-3 logos visible */
        @media (max-width: 639px) {
          .marquee__img {
            height: calc(var(--h) * 1.1);
          }
        }

        /* Tablet: 4 logos visible */
        @media (min-width: 640px) and (max-width: 1023px) {
          .marquee__img {
            height: calc(var(--h) * 1.4);
          }
        }

        /* Desktop: 6 logos visible */
        @media (min-width: 1024px) {
          .marquee__img {
            height: calc(var(--h) * 1.7);
          }
          .marquee {
            --gap: clamp(80px, 10vw, 140px);
          }
        }

        /* Large Desktop: 6 logos visible with more space */
        @media (min-width: 1440px) {
          .marquee__img {
            height: calc(var(--h) * 2.0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee__track {
            animation: none;
          }
        }

        @keyframes marquee-x {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
