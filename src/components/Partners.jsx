import React from "react";
import gradientBg from "/src/assets/images/Home/home-5.png";

function Partners() {
  const partners = [
    {
      image: "/src/assets/images/Partners/Shopify-agency.png",
      alt: "Shopify Partner",
    },
    {
      image: "/src/assets/images/Partners/partner3.png",
      alt: "Meta Business Partner",
    },
    {
      image: "/src/assets/images/Partners/Google-Partner-Logo.png",
      alt: "Google Partner",
    },
  ];

  return (
    <div
      className="relative py-20 px-4 overflow-hidden bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${gradientBg})` }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-3 tracking-wide">
              Authorized
            </h3>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Partners
            </h2>
            <p className="mt-6 text-white text-lg leading-relaxed">
              Trusted collaborations with industry leaders to deliver
              exceptional digital experiences.
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center justify-center gap-8 flex-wrap lg:flex-nowrap">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative flex-1 min-w-[150px] max-w-[250px]"
              >
                <div className="relative bg-zinc-900 rounded-2xl p-6 border-2 border-zinc-800 transition-all duration-500 hover:border-orange-500 cursor-pointer overflow-hidden">
                  {/* REMOVED orange bg glow overlay */}
                  {/* REMOVED orange image overlay */}

                  {/* Logo */}
                  <div className="relative flex items-center justify-center h-16">
                    <img
                      src={partner.image}
                      alt={partner.alt}
                      className="max-h-full w-auto object-contain filter brightness-0 invert transition-all duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Keep subtle decorations if you like */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-700"></div>
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
