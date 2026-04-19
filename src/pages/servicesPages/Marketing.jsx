// import React from "react";
import { useState } from "react";
import aboutHeroBg from "/src/assets/images/Home/bg-home2.png";
import ContactClients from "../../components/ContactClients";
// import { useState } from "react";
import faqBg from "/src/assets/images/Home/bg-home2.png";
// import PrimaryButton from "../components/PrimaryButton.jsx";
// import FAQSection from "../../components/FAQSection";
import { Link } from "react-router-dom";
function Marketing() {
  // SLIDER CARDS with relevant icons
  const sliderCards = [
    {
      title: "Build a Strong Digital Presence",
      desc: "Your brand deserves to be seen. We help you establish a powerful online identity with marketing strategies that keep you visible, relevant, and unforgettable.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      title: "Understand Your Audience Better",
      desc: "Make smarter decisions backed by insights. Through deep market and audience research, we help you uncover what works—so you can stay ahead of the competition",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Generate High-Quality Leads",
      desc: "Say goodbye to low-intent inquiries. Our targeted lead generation systems attract people who are genuinely interested and ready to convert.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Strengthen Brand Trust & Authority",
      desc: "Trust drives sales. We build credibility through consistent messaging, engaging content, and strong brand communication across all touchpoints.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Boost Reach & Brand Awareness",
      desc: "Make your brand hard to ignore. From social media buzz to creative campaigns, we ensure your brand captures attention and stays top-of-mind.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % sliderCards.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + sliderCards.length) % sliderCards.length);
  };

  // FAQ sections
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How do you create marketing strategies tailored to each brand?",
      a: "We start by understanding your goals, industry, competition, and audience behavior Our team analyzes data, identifies opportunities and then builds a custom strategy that fits your brand — not a generic template.",
    },
    {
      q: "How do you measure the success of campaigns?",
      a: "Success is measured using performance analytics — including reach, engagement, click-through rate, conversions, and ROI We provide clear reporting so you always know how your campaigns are performing.",
    },
    {
      q: "Do you manage social media accounts for brands?",
      a: "Absolutely We handle everything — content creation, posting, engagement, audience growth, and boosting Our team ensures your social presence stays active, relevant, and aligned with your brand voice.",
    },
    {
      q: "How do you stay updated with the latest marketing trends?",
      a: "Our team constantly studies industry trends, platform updates, audience behavior shifts, and new tools This allows us to implement fresh, effective strategies that keep your brand ahead of competitors.",
    },
    {
      q: "Can you handle ads for multiple platforms together?",
      a: "Yes — we run fully synchronized ad campaigns across Google, Meta, LinkedIn, YouTube, Pinterest, and more.This ensures better reach, stronger visibility, and higher conversion opportunities.",
    },
    {
      q: "How do you handle feedback or revisions from clients?",
      a: "We follow a collaborative workflow. Your feedback matters, and we make revisions quickly to ensure final results match your expectations and goals.",
    },
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* ---------------- HERO SECTION ---------------- */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutHeroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-24">
          {/* Breadcrumb */}
          <div className="border-t border-[#f4a702]/30 pt-6 sm:pt-8 mb-0">
            <div className="flex items-center justify-center gap-1 text-xs sm:text-sm">
              <a
                href="/"
                className="hover:text-[#f4a702] transition-colors font-medium text-gray-300"
              >
                HOME
              </a>
              <span className="text-gray-400">/</span>
              <span className="text-[#f4a702] font-medium">MARKETING</span>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] space-y-4 sm:space-y-6 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mt-4 sm:mt-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                Marketing
              </span>
            </h1>

            <p className="max-w-3xl text-center text-gray-200 text-xs sm:text-sm md:text-base px-2">
              We craft strategic, engaging, and performance-driven marketing
              solutions that strengthen your brand presence across every
              platform. Our data-backed approach blends creativity, technology,
              and innovation to ensure your business captures attention and
              thrives in today’s fast-moving digital world
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- SECOND SECTION ---------------- */}
      <div className="w-full bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Updated Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="text-white">Complete Digital Marketing</span>
            <span className="text-[#f4a702]">
              {" "}
              Solutions for Every Business
            </span>
          </h2>

          {/* Marketing Services List */}
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 overflow-hidden divide-y divide-gray-800">
            {[
              { name: "Ads And Campaigns", url: "/services/ads-and-campaigns" },
              {
                name: "Social Media Management",
                url: "/services/social-media-marketing",
              },
              { name: "SEO Optimizing", url: "/services/seo-optimizing" },
              {
                name: "Ecommerce Account Management",
                url: "/services/e-commerce-account-management",
              },
            ].map((service, idx) => (
              <Link
                key={idx}
                to={service.url}
                className="group block hover:border-[#f4a702] transition-all duration-300"
              >
                <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 group-hover:bg-gradient-to-r group-hover:from-[#f4a702] group-hover:via-orange-400 group-hover:to-[#f4a702] transition-all duration-300">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-base sm:text-lg lg:text-xl font-semibold text-gray-400 group-hover:text-black transition-colors duration-300">
                      {`0${idx + 1}`}
                    </span>
                    <span className="text-base sm:text-lg lg:text-xl font-semibold text-white group-hover:text-black transition-colors duration-300">
                      {service.name}
                    </span>
                  </div>
                  <span className="text-lg sm:text-xl text-white group-hover:text-black transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* ---------------- THIRD SECTION ---------------- */}
      {/* SLIDER SECTION - Infinite Loop */}
      <div className="w-full bg-black py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              <span className="text-white">
                Strategic Marketing Solutions Designed to
              </span>
              <span className="text-[#f4a702]"> Accelerate Your Growth</span>
            </h2>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 border border-gray-700 hover:bg-[#f4a702] hover:text-black hover:border-[#f4a702] transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f4a702] border border-[#f4a702] text-black hover:bg-orange-500 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * (100 / 4)}%)`,
              }}
            >
              {/* Triple the cards for infinite loop effect */}
              {[...sliderCards, ...sliderCards, ...sliderCards].map(
                (card, i) => (
                  <div
                    key={i}
                    className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                  >
                    <div className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-8 h-full hover:border-[#f4a702]/50 hover:shadow-lg hover:shadow-[#f4a702]/20 transition-all duration-300 group">
                      <div className="w-14 h-14 rounded-xl bg-[#f4a702]/10 border border-[#f4a702]/30 text-[#f4a702] flex items-center justify-center mb-6 group-hover:bg-[#f4a702] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        {card.icon}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4a702] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {sliderCards.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === index % sliderCards.length
                    ? "bg-[#f4a702] w-8"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- FOURTH SECTION ---------------- */}
      <div className="w-full bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-white">Marketing That Moves </span>
              <span className="text-[#f4a702]">Your Business Forward</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              We blend strategy, creativity, and performance-driven marketing to
              amplify your reach, attract the right audience, and turn
              engagement into measurable business growth.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - Featured */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-8 sm:p-10 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702] via-orange-400 to-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                  Data-Driven Strategies — Designed to Perform
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  We don’t just run ads — we craft intelligent marketing
                  strategies backed by data, psychology, and industry insights.
                  Every move we make is optimized to maximize ROI and drive
                  meaningful growth
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  Fast, Effective & Result-Oriented Execution
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  From planning to live campaigns, everything is executed with
                  precision. No delays, no wasted budget — just impactful
                  marketing delivered at the speed your business needs.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  Complete Marketing Support, End-to-End
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  From performance ads to social media management, content
                  marketing, SEO, and creative production — we handle everything
                  required to position your brand as a market leader.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  Scalable Marketing for Long-Term Growth
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  Your business will grow, and your marketing should grow with
                  it. We create adaptable, future-ready marketing systems that
                  keep your brand competitive year after year.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  Campaigns that Connect & Convert
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  YWe create storytelling-driven campaigns that spark emotion,
                  drive engagement, and convert cold audiences into loyal
                  customers — across every digital touchpoint.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  A Dedicated Team That Works Like Your Own
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  We partner closely with you — aligning with your goals,
                  understanding your customers, and delivering marketing
                  strategies that accelerate your business at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Four  SECTION ---------------- */}
      <div className="w-full bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-white">The Brandmingo</span>
              <span className="text-[#f4a702]">Marketing Blueprint</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-3xl">
              We follow a creative-driven, strategy-backed process to craft
              designs that are visually powerful, emotionally engaging, and
              built to strengthen your brand identity.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line - Hidden on mobile, shown on larger screens */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>

            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-12">
              {/* Step 1 */}
              <div className="relative flex items-start md:items-center gap-4 md:gap-8 group">
                <div className="hidden md:block absolute left-0 w-3 h-3 bg-[#f4a702] rounded-full -translate-x-[5px] group-hover:scale-150 transition-transform duration-300"></div>
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#f4a702] to-orange-500 flex items-center justify-center text-white font-bold text-sm md:text-base md:ml-8">
                  1
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-[#f4a702]/50 hover:shadow-lg hover:shadow-[#f4a702]/20 transition-all duration-300 group-hover:translate-x-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Market Research & Audience Analysis
                    </h3>
                    <svg
                      className="w-5 h-5 text-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We begin by understanding your market landscape, audience
                    behavior, competitors, and customer intent. These insights
                    allow us to craft campaigns that reach the right people at
                    the right time with the right message.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start md:items-center gap-4 md:gap-8 group">
                <div className="hidden md:block absolute left-0 w-3 h-3 bg-[#f4a702] rounded-full -translate-x-[5px] group-hover:scale-150 transition-transform duration-300"></div>
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#f4a702] to-orange-500 flex items-center justify-center text-white font-bold text-sm md:text-base md:ml-8">
                  2
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-[#f4a702]/50 hover:shadow-lg hover:shadow-[#f4a702]/20 transition-all duration-300 group-hover:translate-x-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Strategy Planning & Campaign Roadmapping
                    </h3>
                    <svg
                      className="w-5 h-5 text-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Next, we develop a clear marketing roadmap — defining goals,
                    messaging frameworks, campaign angles, audience segments,
                    and channel strategy to ensure every step aligns with your
                    business objectives.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start md:items-center gap-4 md:gap-8 group">
                <div className="hidden md:block absolute left-0 w-3 h-3 bg-[#f4a702] rounded-full -translate-x-[5px] group-hover:scale-150 transition-transform duration-300"></div>
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#f4a702] to-orange-500 flex items-center justify-center text-white font-bold text-sm md:text-base md:ml-8">
                  3
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-[#f4a702]/50 hover:shadow-lg hover:shadow-[#f4a702]/20 transition-all duration-300 group-hover:translate-x-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Creative Development & Ad Concepting
                    </h3>
                    <svg
                      className="w-5 h-5 text-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We create compelling ad visuals, persuasive copy, marketing
                    content, and scroll-stopping creatives that grab attention
                    instantly and encourage users to take action.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start md:items-center gap-4 md:gap-8 group">
                <div className="hidden md:block absolute left-0 w-3 h-3 bg-[#f4a702] rounded-full -translate-x-[5px] group-hover:scale-150 transition-transform duration-300"></div>
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#f4a702] to-orange-500 flex items-center justify-center text-white font-bold text-sm md:text-base md:ml-8">
                  4
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-[#f4a702]/50 hover:shadow-lg hover:shadow-[#f4a702]/20 transition-all duration-300 group-hover:translate-x-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Campaign Setup & Technical Integration
                    </h3>
                    <svg
                      className="w-5 h-5 text-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Our team handles complete ad setup — including pixel
                    installation, event tracking, conversion optimization, A/B
                    testing structures, and platform integrations to ensure
                    accurate performance monitoring.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex items-start md:items-center gap-4 md:gap-8 group">
                <div className="hidden md:block absolute left-0 w-3 h-3 bg-[#f4a702] rounded-full -translate-x-[5px] group-hover:scale-150 transition-transform duration-300"></div>
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#f4a702] to-orange-500 flex items-center justify-center text-white font-bold text-sm md:text-base md:ml-8">
                  5
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-[#f4a702]/50 hover:shadow-lg hover:shadow-[#f4a702]/20 transition-all duration-300 group-hover:translate-x-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Optimization, Scaling & Performance Refinement
                    </h3>
                    <svg
                      className="w-5 h-5 text-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We continuously analyze campaign data, refine targeting,
                    optimize bidding, adjust creatives, and scale top-performing
                    ads to maximize results while maintaining cost efficiency.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="relative flex items-start md:items-center gap-4 md:gap-8 group">
                <div className="hidden md:block absolute left-0 w-3 h-3 bg-[#f4a702] rounded-full -translate-x-[5px] group-hover:scale-150 transition-transform duration-300"></div>
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#f4a702] to-orange-500 flex items-center justify-center text-white font-bold text-sm md:text-base md:ml-8">
                  6
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-[#f4a702]/50 hover:shadow-lg hover:shadow-[#f4a702]/20 transition-all duration-300 group-hover:translate-x-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Reporting, Insights & Ongoing Support
                    </h3>
                    <svg
                      className="w-5 h-5 text-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We provide transparent reports, performance breakdowns, and
                    strategic insights — giving you clarity on what’s working
                    and what needs improvement. Our team stays with you
                    throughout to ensure long-term success and consistent
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Five SECTION - The Blueprint ---------------- */}
      {/* NEW SECTION - What Makes BrandMingo Different */}
      <div className="w-full bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-white">
                Turning Strategy Into Impact — Experience{" "}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                Marketing That Drives Real Growth
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              We craft data-driven marketing strategies that amplify your reach,
              attract the right customers, and strengthen your brand across
              every digital touchpoint. From ads to social media campaigns, we
              ensure each move delivers measurable results and long-term impact.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* CARD 1 – Precision Targeting */}
            <div
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black
                      border border-gray-800 p-6 sm:p-8 hover:border-[#f4a702] transition-all duration-500
                      hover:shadow-2xl hover:shadow-[#f4a702]/30"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/10 via-orange-400/10
                        to-[#f4a702]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f4a702]/20 to-orange-500/10
                          border border-[#f4a702]/30 text-[#f4a702] flex items-center justify-center mb-6
                          group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#f4a702]
                          group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent
                          transition-all duration-500 group-hover:rotate-6"
                >
                  {/* 🎯 Target Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4a702]">
                  Reach the Right Audience With Precision Targeting
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300">
                  We use advanced audience insights and behavioral analytics to
                  connect your brand with people who are most likely to convert
                  — ensuring zero wasted spend and maximum results.
                </p>
              </div>
            </div>

            {/* CARD 2 – High Impact Ads */}
            <div
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black
                      border border-gray-800 p-6 sm:p-8 hover:border-[#f4a702] transition-all duration-500
                      hover:shadow-2xl hover:shadow-[#f4a702]/30"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/10 via-orange-400/10
                        to-[#f4a702]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f4a702]/20 to-orange-500/10
                          border border-[#f4a702]/30 text-[#f4a702] flex items-center justify-center mb-6
                          group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#f4a702]
                          group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent
                          transition-all duration-500 group-hover:rotate-6"
                >
                  {/* 📢 Megaphone Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5l6-2v18l-6-2m0-14H6a2 2 0 00-2 2v4a2 2 0 002 2h5"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4a702]">
                  High-Impact Ads That Deliver Real Results
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300">
                  We create conversion-focused ad campaigns with compelling
                  visuals and persuasive messaging — driving profitable clicks
                  across Google, Meta, LinkedIn, and more.
                </p>
              </div>
            </div>

            {/* CARD 3 – Smart Content */}
            <div
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black
                      border border-gray-800 p-6 sm:p-8 hover:border-[#f4a702] transition-all duration-500
                      hover:shadow-2xl hover:shadow-[#f4a702]/30"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/10 via-orange-400/10
                        to-[#f4a702]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f4a702]/20 to-orange-500/10
                          border border-[#f4a702]/30 text-[#f4a702] flex items-center justify-center mb-6
                          group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#f4a702]
                          group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent
                          transition-all duration-500 group-hover:rotate-6"
                >
                  {/* ✍️ Content Creation Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V10l-6-6zm3 8H9m6 4H9m3-12v6h6"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4a702]">
                  Stronger Engagement Through Smart Content
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300">
                  From social media posts to campaign storytelling, we produce
                  high-impact content that builds trust, sparks conversations,
                  and strengthens brand loyalty.
                </p>
              </div>
            </div>

            {/* CARD 4 – Optimization */}
            <div
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black
                      border border-gray-800 p-6 sm:p-8 hover:border-[#f4a702] transition-all duration-500
                      hover:shadow-2xl hover:shadow-[#f4a702]/30"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/10 via-orange-400/10
                        to-[#f4a702]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f4a702]/20 to-orange-500/10
                          border border-[#f4a702]/30 text-[#f4a702] flex items-center justify-center mb-6
                          group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#f4a702]
                          group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent
                          transition-all duration-500 group-hover:rotate-6"
                >
                  {/* 📈 Growth Optimization Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 17l6-6 4 4 8-8M13 7h8v8"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4a702]">
                  Grow Faster With Data-Driven Optimization
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300">
                  We continuously monitor, test, and optimize your campaigns
                  using real-time insights — improving performance and scaling
                  your growth efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full py-24 px-4 sm:px-8 lg:px-12 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${faqBg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12">
            <span className="text-white">Everything You Need to Know </span>
            <span className="text-[#f4a702]">About Growing Your Brand</span>
          </h2>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                {/* Question Row - Slim Height */}
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-3.5 flex justify-between items-center text-left text-white font-medium hover:text-[#f4a702] transition"
                >
                  <span className="text-sm sm:text-base">{item.q}</span>
                  <span className="text-[#f4a702] text-2xl">
                    {openIndex === idx ? "−" : "+"}
                  </span>
                </button>

                {/* Answer Row - Slim Height */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === idx ? "max-h-28 py-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <FAQSection /> */}
      <div className="mb-8 md:mb-12">
        <ContactClients />
      </div>
    </div>
  );
}

export default Marketing;
