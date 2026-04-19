import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ServicesMegaMenu from "./ServicesMegaMenu";
import logo from "../assets/images/BM-WHITE-logo.png";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  // { label: "Blog", to: "/blog" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Case-Studies", to: "/case-studies" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = isOpen ? "hidden" : "";
    return () => (root.style.overflow = "");
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-neutral-950/90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Logo */}
        <Link
          to="/"
          className={`inline-flex items-center gap-2 relative z-50 transition-opacity duration-300 ${
            isOpen
              ? "lg:opacity-100 opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
        >
          <img src={logo} alt="Brandmingo" className="h-9 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.slice(0, 2).map((item) => {
            const active = location.pathname === item.to;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    active ? "text-[#f4a702]" : "text-gray-200 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}

          {/* Services Mega Menu - 3rd Position */}
          <li>
            <ServicesMegaMenu />
          </li>

          {NAV_ITEMS.slice(2).map((item) => {
            const active = location.pathname === item.to;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    active ? "text-[#f4a702]" : "text-gray-200 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Let's Talk Button */}
        <div className="hidden lg:flex items-center">
          <button className="relative overflow-hidden text-black font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 group">
            <span className="absolute inset-0 bg-white rounded-full transition-all duration-300 group-hover:opacity-0"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] via-[#ff6900] to-[#ff4d00] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

            <span className="relative z-10 flex items-center gap-3 group-hover:text-white">
              <span className="text-xl">🔥</span>
              <span>Let's Talk</span>
              <svg
                className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="absolute inset-0 rounded-full border border-neutral-700 group-hover:border-transparent transition-all duration-300"></span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className={`lg:hidden relative h-10 w-12 z-50 transition-opacity duration-300 ${
            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <span
            className={`absolute left-2 top-[11px] block h-[2px] w-8 bg-white transition-all ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-2 top-[19px] block h-[2px] w-6 bg-white transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-2 top-[27px] block h-[2px] w-8 bg-white transition-all ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>

        {/* MOBILE MENU */}
        <div
          id="site-menu"
          className={`lg:hidden fixed inset-0 z-40 transform bg-white transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <img
              src="/src/assets/images/Group-8-1-768x150.png"
              alt="Brandmingo"
              className="h-9 w-auto"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Items */}
          <div className="px-6 py-6 overflow-y-auto max-h-[calc(100vh-80px)]">
            <ul className="space-y-2">
              {/* Home & About */}
              {NAV_ITEMS.slice(0, 2).map((item, i) => {
                const active = location.pathname === item.to;
                return (
                  <li
                    key={item.to}
                    style={{ transitionDelay: `${isOpen ? 40 * i : 0}ms` }}
                    className={`transform opacity-0 transition-all duration-300 ${
                      isOpen ? "translate-x-0 opacity-100" : "translate-x-4"
                    }`}
                  >
                    <Link
                      to={item.to}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                        active
                          ? "bg-[#f4a702] text-white"
                          : "text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      <span className="text-lg">{item.label}</span>
                    </Link>
                  </li>
                );
              })}

              {/* Mobile Services with Dropdown */}
              <li
                style={{ transitionDelay: `${isOpen ? 80 : 0}ms` }}
                className={`transform opacity-0 transition-all duration-300 ${
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-4"
                }`}
              >
                <details className="group">
                  <summary className="flex items-center justify-between px-4 py-3 rounded-lg font-medium text-gray-900 hover:bg-gray-100 cursor-pointer list-none">
                    <span className="text-lg">Services</span>
                    <svg
                      className="w-5 h-5 text-[#f4a702] transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <div className="mt-2 pl-4 space-y-2">
                    {/* Development */}
                    <details className="group/sub">
                      <summary className="flex items-center justify-between px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-orange-50 cursor-pointer list-none">
                        <span>💻 Development</span>
                        <svg
                          className="w-4 h-4 text-[#f4a702] transition-transform group-open/sub:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="mt-1 pl-4 space-y-1">
                        <span className="block px-3 py-2 text-sm text-gray-600">
                          WordPress Development
                        </span>
                        <span className="block px-3 py-2 text-sm text-gray-600">
                          Shopify Development
                        </span>
                        <span className="block px-3 py-2 text-sm text-gray-600">
                          E-Commerce Solutions
                        </span>
                        <span className="block px-3 py-2 text-sm text-gray-600">
                          React Development
                        </span>
                        <span className="block px-3 py-2 text-sm text-gray-600">
                          PHP Development
                        </span>
                      </div>
                    </details>

                    {/* Design */}
                    <details className="group/sub">
                      <summary className="flex items-center justify-between px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-orange-50 cursor-pointer list-none">
                        <span>🎨 Design</span>
                        <svg
                          className="w-4 h-4 text-[#f4a702] transition-transform group-open/sub:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="mt-1 pl-4 space-y-1">
                        <span className="block px-3 py-2 text-sm text-gray-600">
                          Branding
                        </span>
                        <span className="block px-3 py-2 text-sm text-gray-600">
                          UI/UX Design
                        </span>
                        <span className="block px-3 py-2 text-sm text-gray-600">
                          Web Design
                        </span>
                        <span className="block px-3 py-2 text-sm text-gray-600">
                          Mobile App Design
                        </span>
                      </div>
                    </details>

                    {/* Marketing */}
                    <details className="group/sub">
                      <summary className="flex items-center justify-between px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-orange-50 cursor-pointer list-none">
                        <span>📊 Marketing</span>
                        <svg
                          className="w-4 h-4 text-[#f4a702] transition-transform group-open/sub:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="mt-1 pl-4 space-y-1">
                        <span className="block px-3 py-2 text-sm text-gray-600">
                          Performance Marketing
                        </span>
                        <span className="block px-3 py-2 text-sm text-gray-600">
                          SEO
                        </span>
                        <span className="block px-3 py-2 text-sm text-gray-600">
                          Social Media Marketing
                        </span>
                        <span className="block px-3 py-2 text-sm text-gray-600">
                          Pay Per Click
                        </span>
                      </div>
                    </details>
                  </div>
                </details>
              </li>

              {/* Blog & Contact */}
              {NAV_ITEMS.slice(2).map((item, i) => {
                const active = location.pathname === item.to;
                return (
                  <li
                    key={item.to}
                    style={{
                      transitionDelay: `${isOpen ? 120 + 40 * i : 0}ms`,
                    }}
                    className={`transform opacity-0 transition-all duration-300 ${
                      isOpen ? "translate-x-0 opacity-100" : "translate-x-4"
                    }`}
                  >
                    <Link
                      to={item.to}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                        active
                          ? "bg-[#f4a702] text-white"
                          : "text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      <span className="text-lg">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Let's Talk Button */}
            <div
              className="mt-8 transform opacity-0 transition-all duration-300"
              style={{
                transitionDelay: `${isOpen ? 240 : 0}ms`,
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(1rem)",
              }}
            >
              <button className="relative w-full overflow-hidden text-white font-semibold text-base px-6 py-4 rounded-full group shadow-lg">
                <span className="absolute inset-0 bg-black rounded-full group-hover:opacity-0 transition-opacity duration-300"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] via-[#ff6900] to-[#ff4d00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                <span className="relative z-10 flex items-center gap-3">
                  <span className="text-xl">🔥</span>
                  <span>Let's Talk</span>
                  <svg
                    className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span className="absolute inset-0 rounded-full border border-neutral-800 group-hover:border-transparent transition-colors duration-300"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
