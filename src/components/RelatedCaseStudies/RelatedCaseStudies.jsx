import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const CaseStudyCard = ({ study }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-[300px] md:w-[380px] h-[450px] flex-shrink-0 rounded-[2rem] border border-gray-800 bg-gradient-to-br from-gray-900/80 to-black overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        borderColor: "#f4a702",
        scale: 1.02,
        boxShadow: "0 0 40px rgba(244, 167, 2, 0.15)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f4a702] to-orange-500 opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

      {/* Sliding Tags (Marquee Effect) */}
      <div className="absolute top-6 w-full overflow-hidden z-20 pointer-events-none">
        <motion.div
          className="flex whitespace-nowrap gap-3 px-4"
          animate={{ x: [0, -100] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {[...study.tags, ...study.tags, ...study.tags].map((tag, index) => (
            <span
              key={index}
              className="bg-[#f4a702]/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full border border-[#f4a702]/20 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {!isHovered ? (
          /* Default State: Logo View */
          <motion.div
            key="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full flex items-center justify-center p-12"
          >
            <div className="flex items-center justify-center w-full h-full">
              <img
                src={study.logo}
                alt={study.title}
                className="max-w-[180px] max-h-[60px] w-auto h-auto object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        ) : (
          /* Hover State: Image & Center Button */
          <motion.div
            key="image"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image - Fixed sizing */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Dark Overlay with Blur */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 backdrop-blur-[1px] z-10" />

            {/* Centered Action Button */}
            <motion.a
              href={study.link}
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.1,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         bg-gradient-to-br from-white to-gray-100 text-black
                         w-20 h-20 rounded-full flex items-center justify-center
                         shadow-[0_0_40px_rgba(244,167,2,0.4)]
                         hover:shadow-[0_0_60px_rgba(244,167,2,0.6)]
                         hover:bg-gradient-to-br hover:from-[#f4a702] hover:to-orange-500
                         hover:scale-110 hover:rotate-90
                         transition-all duration-300 z-30 group/btn"
            >
              <ArrowUpRight className="w-8 h-8 group-hover/btn:text-white transition-colors" />
            </motion.a>

            {/* Bottom Label */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-8 left-8 right-8 z-20"
            >
              <h3 className="text-white text-2xl font-bold tracking-tight drop-shadow-lg">
                {study.title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const RelatedCaseStudies = ({ caseStudies }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      // Scroll by one card width (300px on mobile, 380px on desktop) + gap (24px)
      const scrollAmount = window.innerWidth >= 768 ? 380 + 24 : 300 + 24;
      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-black py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Related{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4a702] to-orange-400">
                Case Studies
              </span>
            </h2>
            <p className="text-gray-400 mt-3 text-sm md:text-base">
              Explore our success stories and transformative projects
            </p>
          </div>

          {/* Navigation Buttons - Always visible */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-gray-800 bg-gray-900/50
                         flex items-center justify-center text-white
                         hover:border-[#f4a702] hover:bg-[#f4a702]/10
                         transition-all duration-300 group backdrop-blur-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 group-hover:text-[#f4a702] transition-all" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-[#f4a702]
                         bg-gradient-to-br from-[#f4a702] to-orange-500
                         flex items-center justify-center text-black
                         hover:shadow-lg hover:shadow-[#f4a702]/30
                         hover:scale-105 transition-all duration-300 group"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Cards Container - Always Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {caseStudies.map((study, index) => (
            <div key={index} className="snap-center">
              <CaseStudyCard study={study} />
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {caseStudies.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-800 hover:bg-[#f4a702]/50 transition-colors cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Custom Scrollbar Styling */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default RelatedCaseStudies;
