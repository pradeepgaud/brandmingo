import React from "react";

export default function WhatWeDo() {
  const ACCENT = "#f4a702"; // brand color

  const SERVICES = [
    {
      title: "360° Marketing",
      desc: "Build a connected growth engine across every channel. We plan and run SEO, paid ads, social, content, email/automation, and CRO as one strategy—so creative, targeting, and measurement all work together to drive ROI",
      href: "/services/branding",
    },
    {
      title: "Web Development",
      desc: "Fast, secure, and SEO-ready websites that convert. From landing pages and corporate sites to headless CMS and eCommerce, we ship responsive UI, clean code, strong performance scores, and accessibility by default",
      href: "/services/web",
    },
    {
      title: "Market Place Management",
      desc: "Launch and scale your brand on leading marketplaces. We handle catalog & listing optimisation, A+ content, storefront design, ads (PPC), promotions, inventory hygiene, and review strategy—with dashboards that track sales and share of voice",
      href: "/services/marketing",
    },
    {
      title: "Graphic Design",
      desc: "Distinctive visuals that people remember. We craft brand identity, social & campaign creatives, pitch decks, print collateral, packaging, and motion graphics—all consistent with your voice and built to perform across platforms",
      href: "/services/consulting",
    },
  ];

  return (
    <section
      id="what-we-do"
      className="relative bg-black text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f4a702]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f4a702]/5 rounded-full blur-3xl"></div>

      <div
        className="mx-auto max-w-[1200px] px-6 py-14 lg:px-8 lg:py-20 relative z-10"
        style={{ ["--accent"]: ACCENT }}
      >
        {/* Eyebrow */}
        <div className="mb-8 flex items-center gap-6">
          <div className="rounded-full border border-white/20 px-4 py-1 text-sm text-white/80 backdrop-blur-sm bg-white/5">
            Experts in 360° marketing, web, marketplace, and design that drive
            growth
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-white/15 to-transparent md:block" />
        </div>

        {/* Headings */}
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <img
              src="/src/assets/images/2.jpg"
              alt="Team brainstorming"
              className="h-12 w-28 rounded-full object-cover ring-2 ring-[#f4a702]/30 shadow-lg shadow-[#f4a702]/20 md:h-14 md:w-36 lg:h-16 lg:w-40"
            />
            <h2 className="m-0 p-0 text-left font-medium leading-tight tracking-tight text-[34px] sm:text-[46px] md:text-[56px]">
              <span className="font-semibold">Services </span>That Power
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[auto_1fr_auto]">
            <h2 className="m-0 p-0 text-left font-medium leading-tight tracking-tight text-[34px] sm:text-[46px] md:text-[56px]">
              <span className="font-semibold">Brand </span>{" "}
              <span className="font-light">Growth.</span>
            </h2>
            <div className="hidden md:block" />
            <a
              href="/services"
              className="justify-self-start md:justify-self-end group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl hover:shadow-[#f4a702]/50 transition-all hover:scale-105"
              style={{ backgroundColor: ACCENT, color: "#111" }}
            >
              Our Services
              <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-white transition-transform group-hover:translate-x-1">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div
          id="what-we-do-grid"
          className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 md:gap-7 md:grid-cols-2 xl:grid-cols-4"
        >
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="relative border border-white/30 hover:border-[#f4a702] bg-white/[0.02] p-6 text-left transition-all duration-500 backdrop-blur-sm rounded-lg"
            >
              {/* Top accent line */}
              <span className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-white/40 to-white/5 group-hover:from-[#f4a702] group-hover:to-orange-600 rounded-t-lg transition-colors duration-500" />

              {/* Title */}
              <h3 className="pr-12 text-lg font-semibold leading-snug sm:text-xl mb-4 text-[#f4a702]">
                {s.title}
              </h3>

              {/* Content (always visible) */}
              <div className="grid gap-4">
                <p className="text-sm text-white/70 leading-relaxed">
                  {s.desc}
                </p>

                <a
                  href={s.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#f4a702] hover:text-white transition-colors"
                >
                  <span>See Portfolio</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/30 hover:border-[#f4a702] transition-all hover:bg-[#f4a702] hover:text-black">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative corners */}
      <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 border-l border-t border-white/5 rounded-tl-3xl md:h-52 md:w-52" />
      <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 border-r border-t border-white/5 rounded-tr-3xl md:h-52 md:w-52" />
    </section>
  );
}
