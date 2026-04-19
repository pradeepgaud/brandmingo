import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const images = import.meta.glob(
  "../assets/images/PortfolioImages/**/*.{png,jpg,jpeg}",
  { eager: true },
);

const getImage = (path) => {
  return images[`../assets/images/${path}`]?.default;
};

const HeroPortfolioSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("all");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [popupImageIndex, setPopupImageIndex] = useState(0);
  const cardsToShow = 3; // Show 3 cards at a time

  const allPortfolioItems = [
    {
      id: 1,
      title: "E-Commerce Platform",
      subtitle: "Boosting Sales & Conversions",
      description: "Discover how we transformed...",
      image: getImage("PortfolioImages/develpment/aureialondon.png"),
      category: "development",
      images: [
        getImage("PortfolioImages/develpment/aureialondon.png"),
        getImage("PortfolioImages/develpment/aureialondon/1.png"),
        getImage("PortfolioImages/develpment/aureialondon/2.png"),
        getImage("PortfolioImages/develpment/aureialondon/3.png"),
      ],
    },

    {
      id: 2,
      title: "Brand Identity Design",
      subtitle: "Creating Memorable Impressions",
      description: "Explore our branding solution...",
      image: getImage("PortfolioImages/design/Frame_6[1].png"),
      category: "design",
      images: [],
    },

    {
      id: 3,
      title: "Mobile App Development",
      subtitle: "Innovation in Your Pocket",
      description: "See how we developed...",
      image: getImage("PortfolioImages/develpment/Thumbnail.png"),
      category: "development",
      images: [],
    },

    {
      id: 4,
      title: "Social Media Campaign",
      subtitle: "Viral Growth & Engagement",
      description: "Discover our strategy...",
      image: getImage("PortfolioImages/marketing/marketing1.png"),
      category: "marketing",
      images: [],
    },

    {
      id: 5,
      title: "Custom Web Application",
      subtitle: "Streamlined Business Operations",
      description: "Learn how our app...",
      image: getImage("PortfolioImages/develpment/vishalimitations.png"),
      category: "development",
      images: [],
    },
  ];

  const portfolioItems =
    activeTab === "all"
      ? allPortfolioItems
      : allPortfolioItems.filter((item) => item.category === activeTab);

  const maxIndex = Math.max(0, portfolioItems.length - cardsToShow);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const openPopup = (project) => {
    setSelectedProject(project);
    setPopupImageIndex(0);
    setIsPopupOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
    setPopupImageIndex(0);
    document.body.style.overflow = "auto";
  };

  const nextPopupImage = () => {
    if (
      selectedProject &&
      popupImageIndex < selectedProject.images.length - 1
    ) {
      setPopupImageIndex(popupImageIndex + 1);
    }
  };

  const prevPopupImage = () => {
    if (popupImageIndex > 0) {
      setPopupImageIndex(popupImageIndex - 1);
    }
  };

  const isLastSlide = currentIndex === maxIndex;

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <div className="w-full bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2">
                <span className="text-white">Our Work, </span>
                <span className="text-[#f4a702]">Your Success Stories</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg mt-4 max-w-2xl">
                Explore our finest projects crafted with strategy, creativity,
                and performance at the core.
              </p>
            </div>

            {/* Navigation Buttons - Desktop */}
            <div className="hidden md:flex gap-3">
              {isLastSlide ? (
                <a
                  href="/portfolio"
                  className="flex items-center gap-2 bg-[#f4a702] hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <span>View All</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              ) : (
                <>
                  <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      currentIndex === 0
                        ? "bg-gray-900 border-gray-800 text-gray-600 cursor-not-allowed"
                        : "bg-gray-900 border-gray-800 hover:border-[#f4a702] hover:bg-[#f4a702] text-white hover:text-black"
                    }`}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={currentIndex === maxIndex}
                    className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      currentIndex === maxIndex
                        ? "bg-gray-900 border-gray-800 text-gray-600 cursor-not-allowed"
                        : "bg-[#f4a702] border-[#f4a702] text-black hover:bg-orange-500 hover:border-orange-500"
                    }`}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            <button
              onClick={() => handleTabChange("all")}
              className={`px-8 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-[#f4a702] text-white shadow-lg shadow-[#f4a702]/30 scale-105"
                  : "bg-transparent border-2 border-gray-700 text-gray-300 hover:border-[#f4a702] hover:text-white"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => handleTabChange("development")}
              className={`px-8 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
                activeTab === "development"
                  ? "bg-[#f4a702] text-white shadow-lg shadow-[#f4a702]/30 scale-105"
                  : "bg-transparent border-2 border-gray-700 text-gray-300 hover:border-[#f4a702] hover:text-white"
              }`}
            >
              Development
            </button>
            <button
              onClick={() => handleTabChange("design")}
              className={`px-8 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
                activeTab === "design"
                  ? "bg-[#f4a702] text-white shadow-lg shadow-[#f4a702]/30 scale-105"
                  : "bg-transparent border-2 border-gray-700 text-gray-300 hover:border-[#f4a702] hover:text-white"
              }`}
            >
              Design
            </button>
            <button
              onClick={() => handleTabChange("marketing")}
              className={`px-8 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
                activeTab === "marketing"
                  ? "bg-[#f4a702] text-white shadow-lg shadow-[#f4a702]/30 scale-105"
                  : "bg-transparent border-2 border-gray-700 text-gray-300 hover:border-[#f4a702] hover:text-white"
              }`}
            >
              Marketing
            </button>
          </div>

          {/* Slider Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / cardsToShow)
                  }%)`,
                }}
              >
                {portfolioItems.map((item) => (
                  <div
                    key={item.id}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                  >
                    <div className="bg-gradient-to-br from-gray-900/80 to-black border-2 border-gray-800 rounded-2xl overflow-hidden hover:border-[#f4a702]/50 hover:shadow-2xl hover:shadow-[#f4a702]/20 transition-all duration-500 group h-full">
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden bg-gray-900">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#f4a702] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <h4 className="text-base text-[#f4a702] font-semibold mb-3">
                          {item.subtitle}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                          {item.description}
                        </p>

                        {/* CTA Button */}
                        <button
                          onClick={() => openPopup(item)}
                          className="inline-flex items-center gap-2 bg-white text-black font-bold py-2 px-5 rounded-full hover:bg-[#f4a702] transition-all duration-300 text-sm group/btn"
                        >
                          <span>Dive Deeper</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation & View All */}
          <div className="flex md:hidden justify-center gap-3 mt-8">
            {isLastSlide ? (
              <a
                href="/portfolio"
                className="flex items-center gap-2 bg-[#f4a702] hover:bg-orange-500 text-black font-bold py-3 px-6 rounded-full transition-all duration-300"
              >
                <span>View All</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            ) : (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    currentIndex === 0
                      ? "bg-gray-900 border-gray-800 text-gray-600"
                      : "bg-gray-900 border-gray-800 hover:border-[#f4a702] text-white"
                  }`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentIndex === maxIndex}
                  className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    currentIndex === maxIndex
                      ? "bg-gray-900 border-gray-800 text-gray-600"
                      : "bg-[#f4a702] border-[#f4a702] text-black hover:bg-orange-500"
                  }`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <span className="text-gray-400 text-sm">
              {currentIndex + 1} / {maxIndex + 1}
            </span>
          </div>
        </div>

        {/* Popup Modal - Optimized for Laptop */}
        {isPopupOpen && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-3 overflow-y-auto">
            <div className="relative w-[75%] max-w-3xl my-3 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-2xl overflow-hidden">
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-900/80 hover:bg-[#f4a702] text-white hover:text-black rounded-full transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
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

              {/* Image Slider */}
              <div className="relative">
                <div className="relative h-[260px] sm:h-[330px] lg:h-[380px] bg-gray-900">
                  <img
                    src={selectedProject.images[popupImageIndex]}
                    alt={`${selectedProject.title} - Image ${
                      popupImageIndex + 1
                    }`}
                    className="w-full h-full object-contain"
                  />

                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevPopupImage}
                        disabled={popupImageIndex === 0}
                        className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                          popupImageIndex === 0
                            ? "bg-gray-900/50 border-gray-800 text-gray-600 cursor-not-allowed"
                            : "bg-gray-900/80 border-gray-700 hover:border-[#f4a702] hover:bg-[#f4a702] text-white hover:text-black"
                        }`}
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextPopupImage}
                        disabled={
                          popupImageIndex === selectedProject.images.length - 1
                        }
                        className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                          popupImageIndex === selectedProject.images.length - 1
                            ? "bg-gray-900/50 border-gray-800 text-gray-600 cursor-not-allowed"
                            : "bg-gray-900/80 border-gray-700 hover:border-[#f4a702] hover:bg-[#f4a702] text-white hover:text-black"
                        }`}
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                    {popupImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-3 sm:p-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                    {selectedProject.title}
                  </h3>
                  <h4 className="text-sm sm:text-base text-[#f4a702] font-semibold mb-1.5">
                    {selectedProject.subtitle}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-2.5">
                    {selectedProject.description}
                  </p>

                  {/* Thumbnail Navigation */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                      {selectedProject.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setPopupImageIndex(idx)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            idx === popupImageIndex
                              ? "border-[#f4a702] scale-105"
                              : "border-gray-700 hover:border-gray-500"
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroPortfolioSlider;
