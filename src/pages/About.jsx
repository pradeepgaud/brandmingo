import React from "react";

// Import your hero background image
import aboutHeroBg from "/src/assets/images/Home/bg-home2.png";
import WhyUs from "../components/WhyUs";
import ContactClients from "../components/ContactClients";

function About() {
  // Client logos array
  const clients = [
    {
      name: "1",
      logo: "/src/assets/images/ClientLogos/1.png",
    },
    {
      name: "2",
      logo: "/src/assets/images/ClientLogos/2.png",
    },
    {
      name: "3",
      logo: "/src/assets/images/ClientLogos/3.png",
    },
    {
      name: "4",
      logo: "/src/assets/images/ClientLogos/4.png",
    },
    {
      name: "5",
      logo: "/src/assets/images/ClientLogos/5.png",
    },
    {
      name: "6",
      logo: "/src/assets/images/ClientLogos/6.png",
    },
    {
      name: "7",
      logo: "/src/assets/images/ClientLogos/7.png",
    },
    {
      name: "8",
      logo: "/src/assets/images/ClientLogos/8.png",
    },
    {
      name: "9",
      logo: "/src/assets/images/ClientLogos/9.png",
    },
    {
      name: "10",
      logo: "/src/assets/images/ClientLogos/10.png",
    },
    {
      name: "11",
      logo: "/src/assets/images/ClientLogos/11.png",
    },
    {
      name: "12",
      logo: "/src/assets/images/ClientLogos/12.png",
    },
    {
      name: "13",
      logo: "/src/assets/images/ClientLogos/13.png",
    },
    {
      name: "14",
      logo: "/src/assets/images/ClientLogos/14.png",
    },
    {
      name: "15",
      logo: "/src/assets/images/ClientLogos/15.png",
    },
    {
      name: "16",
      logo: "/src/assets/images/ClientLogos/16.png",
    },
    {
      name: "17",
      logo: "/src/assets/images/ClientLogos/17.png",
    },
    {
      name: "18",
      logo: "/src/assets/images/ClientLogos/18.png",
    },
    {
      name: "19",
      logo: "/src/assets/images/ClientLogos/19.png",
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
              <span className="text-[#f4a702] font-medium">ABOUT US</span>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] space-y-4 sm:space-y-6 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mt-4 sm:mt-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                About Us
              </span>
            </h1>

            <p className="max-w-3xl text-center text-gray-200 text-xs sm:text-sm md:text-base px-2">
              Our team of skilled professionals combines strategic thinking,
              creative expertise, and the latest industry insights to develop
              effective digital marketing strategies that resonate with your
              target market.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- WHO ARE WE SECTION ---------------- */}
      <div className="relative bg-black">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/5 via-black to-orange-900/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-24 lg:py-32">
          {/* Section Header */}
          <div className="text-left mb-12 sm:mb-16 md:mb-10">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 text-white">
              Who Are We?
            </h3>

            <p className="max-w-4xl text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Welcome to Brandmingo Media Private Limited, your trusted 360°
              digital marketing partner. We blend creativity, technology, and
              strategy to help brands grow, connect, and make an impact in the
              digital world
            </p>
          </div>

          {/* Mission Vision Cards Section */}
          <section className="py-8 sm:py-12 md:py-10">
            <div className="max-w-7xl mx-auto">
              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Mission Card */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#f4a702]/0 via-[#f4a702]/0 to-[#f4a702]/0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:from-[#f4a702]/30 group-hover:via-orange-500/30 group-hover:to-[#f4a702]/30 group-hover:opacity-100 blur-xl transition-all duration-700"></div>

                  <div className="relative h-full min-h-[350px] sm:min-h-[400px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900/50 to-black border border-gray-700/50 overflow-hidden transition-all duration-700 hover:border-[#f4a702]/60">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 group-hover:from-amber-900/50 group-hover:via-yellow-800/40 group-hover:to-orange-900/50 transition-all duration-700"></div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-[#f4a702]/0 group-hover:bg-[#f4a702]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                    <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                      <div className="mb-4 sm:mb-6">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-[#f4a702]/30 flex items-center justify-center text-[#f4a702] shadow-lg transition-all duration-700 group-hover:scale-110 group-hover:bg-[#f4a702] group-hover:text-white group-hover:shadow-[#f4a702]/60 group-hover:shadow-2xl group-hover:border-[#f4a702] group-hover:rotate-3">
                          <svg
                            className="w-7 h-7 sm:w-8 sm:h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="2"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#f4a702] transition-colors duration-700">
                        Mission
                      </h3>

                      <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-700">
                        Our mission is to empower businesses to build strong
                        digital identities and achieve measurable growth through
                        smart, creative, and result-driven marketing solutions.
                      </p>

                      <div className="mt-auto pt-4 sm:pt-6">
                        <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-[#f4a702] to-orange-500 rounded-full group-hover:w-24 sm:group-hover:w-32 transition-all duration-700"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#f4a702]/0 via-[#f4a702]/0 to-[#f4a702]/0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:from-[#f4a702]/30 group-hover:via-orange-500/30 group-hover:to-[#f4a702]/30 group-hover:opacity-100 blur-xl transition-all duration-700"></div>

                  <div className="relative h-full min-h-[350px] sm:min-h-[400px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900/50 to-black border border-gray-700/50 overflow-hidden transition-all duration-700 hover:border-[#f4a702]/60">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 group-hover:from-amber-900/50 group-hover:via-yellow-800/40 group-hover:to-orange-900/50 transition-all duration-700"></div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-[#f4a702]/0 group-hover:bg-[#f4a702]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                    <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                      <div className="mb-4 sm:mb-6">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-[#f4a702]/30 flex items-center justify-center text-[#f4a702] shadow-lg transition-all duration-700 group-hover:scale-110 group-hover:bg-[#f4a702] group-hover:text-white group-hover:shadow-[#f4a702]/60 group-hover:shadow-2xl group-hover:border-[#f4a702] group-hover:rotate-3">
                          <svg
                            className="w-7 h-7 sm:w-8 sm:h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#f4a702] transition-colors duration-700">
                        Vision
                      </h3>

                      <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-700">
                        To become a global digital leader, helping every brand —
                        big or small — make a powerful online presence and stand
                        out with confidence.
                      </p>

                      <div className="mt-auto pt-4 sm:pt-6">
                        <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-[#f4a702] to-orange-500 rounded-full group-hover:w-24 sm:group-hover:w-32 transition-all duration-700"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cultural Values Card */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#f4a702]/0 via-[#f4a702]/0 to-[#f4a702]/0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:from-[#f4a702]/30 group-hover:via-orange-500/30 group-hover:to-[#f4a702]/30 group-hover:opacity-100 blur-xl transition-all duration-700"></div>

                  <div className="relative h-full min-h-[350px] sm:min-h-[400px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900/50 to-black border border-gray-700/50 overflow-hidden transition-all duration-700 hover:border-[#f4a702]/60">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 group-hover:from-amber-900/50 group-hover:via-yellow-800/40 group-hover:to-orange-900/50 transition-all duration-700"></div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-[#f4a702]/0 group-hover:bg-[#f4a702]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                    <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                      <div className="mb-4 sm:mb-6">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-[#f4a702]/30 flex items-center justify-center text-[#f4a702] shadow-lg transition-all duration-700 group-hover:scale-110 group-hover:bg-[#f4a702] group-hover:text-white group-hover:shadow-[#f4a702]/60 group-hover:shadow-2xl group-hover:border-[#f4a702] group-hover:rotate-3">
                          <svg
                            className="w-7 h-7 sm:w-8 sm:h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#f4a702] transition-colors duration-700">
                        Cultural Values
                      </h3>

                      <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-700">
                        At Brandmingo, we value creativity, teamwork, and
                        integrity. We keep innovation at the heart of everything
                        we do — because a passionate team creates extraordinary
                        results.
                      </p>

                      <div className="mt-auto pt-4 sm:pt-6">
                        <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-[#f4a702] to-orange-500 rounded-full group-hover:w-24 sm:group-hover:w-32 transition-all duration-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Us Component */}
          <WhyUs />

          {/* ---------------- CLIENTS SECTION (MARQUEE) ---------------- */}
          <section className="py-16 sm:py-20 md:py-16">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-sm sm:text-base text-gray-400 mb-3">
                Trusted by Industry Leaders
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Our{" "}
                <span className="bg-gradient-to-r from-[#f4a702] to-orange-500 bg-clip-text text-transparent">
                  Brand Partners
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                Join the ranks of successful brands who've chosen Brandmingo to
                elevate their digital presence
              </p>
            </div>

            {/* Infinite Scroll Marquee */}
            <div className="relative overflow-hidden">
              {/* Top Row - Left to Right */}
              {/* Note: speed is controlled via 'animate-scroll-left' class in CSS/Tailwind config */}
              <div className="flex overflow-hidden select-none gap-4 mb-8 hover:[&>div]:pause-animation">
                <div className="flex animate-scroll-left">
                  {[...clients, ...clients].map((client, index) => (
                    <div
                      key={index}
                      className="group flex-shrink-0 mx-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black border border-gray-700/50 hover:border-[#f4a702]/60 transition-all duration-300 w-[220px] h-[140px] flex items-center justify-center"
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        /* Height increased from max-h-20 to max-h-24 */
                        className="w-auto h-auto max-w-full max-h-24 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 group-hover:scale-110 transition-all duration-300"
                        onError={(e) => {
                          e.target.style.display = "none";
                          console.log("Logo not found:", client.logo);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row - Right to Left */}
              <div className="flex overflow-hidden select-none gap-4 hover:[&>div]:pause-animation">
                <div className="flex animate-scroll-right">
                  {[
                    ...clients.slice().reverse(),
                    ...clients.slice().reverse(),
                  ].map((client, index) => (
                    <div
                      key={index}
                      className="group flex-shrink-0 mx-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black border border-gray-700/50 hover:border-[#f4a702]/60 transition-all duration-300 w-[220px] h-[140px] flex items-center justify-center"
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        /* Height increased from max-h-20 to max-h-24 */
                        className="w-auto h-auto max-w-full max-h-24 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 group-hover:scale-110 transition-all duration-300"
                        onError={(e) => {
                          e.target.style.display = "none";
                          console.log("Logo not found:", client.logo);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Minimal CSS for Animations Only */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .pause-animation {
          animation-play-state: paused !important;
        }
      `}</style>
      <div className="mb-8 md:mb-12">
        <ContactClients />
      </div>
    </div>
  );
}

export default About;
