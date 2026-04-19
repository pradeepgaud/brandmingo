import React, { useState } from "react";
import gradientBg from "/src/assets/images/Home/bg-home2.png";

function ContactClients() {
  const logos = import.meta.glob(
    "../assets/images/ClientLogos/*.{png,jpg,jpeg,webp}",
    { eager: true },
  );

  const getLogo = (name) => {
    return (
      logos[`../assets/images/ClientLogos/${name}.png`]?.default ||
      logos[`../assets/images/ClientLogos/${name}.jpg`]?.default ||
      logos[`../assets/images/ClientLogos/${name}.webp`]?.default
    );
  };
  const [formData, setFormData] = useState({
    fullName: "",
    service: "",
    phone: "",
    email: "",
    project: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const clients = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
    { name: "7" },
    { name: "8" },
    { name: "9" },
    { name: "10" },
    { name: "11" },
    { name: "12" },
    { name: "13" },
    { name: "14" },
    { name: "15" },
    { name: "16" },
    { name: "17" },
    { name: "18" },
    { name: "19" },
  ];
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Validation
    if (
      !formData.fullName ||
      !formData.service ||
      !formData.email ||
      !formData.project
    ) {
      setSubmitMessage("Please fill all required fields!");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "0c159908-14a1-4a23-9ebf-d1ce627796b3",
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone ? `+91 ${formData.phone}` : "",
          service: formData.service,
          message: formData.project,
          subject: `New Project Inquiry from ${formData.fullName}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage(
          "✅ Message sent successfully! We'll contact you soon.",
        );
        // Reset form
        setFormData({
          fullName: "",
          service: "",
          phone: "",
          email: "",
          project: "",
        });
      } else {
        setSubmitMessage("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage("❌ Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="relative min-h-screen py-16 px-4 overflow-hidden bg-center bg-cover bg-no-repeat pb-24 -mb-24"
      style={{
        backgroundImage: `url(${gradientBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔳 Multi-layer black transparent overlays for depth */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

      {/* 🟠 Decorative glow orbs - slightly more visible */}
      <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-[#f4a702] rounded-full opacity-[0.15] blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/5 w-[500px] h-[500px] bg-[#f4a702] rounded-full opacity-[0.15] blur-3xl animate-pulse-slow-delayed"></div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading with enhanced shadow */}
        <div className="text-center mb-12">
          <div className="flex items-start justify-center gap-4 mb-2 flex-wrap">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Let's Create
            </h2>
            <span className="inline-block mt-1 sm:mt-2 md:mt-3">
              <div className="loader-icon"></div>
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            Greatness Together!
          </h3>
        </div>

        {/* Form + Clients Section - Enhanced glass effect */}
        <div className="bg-black/60 backdrop-blur-lg rounded-3xl border border-white/20 p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* LEFT - Form */}
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-8 drop-shadow-lg">
                Discuss Your Project With Us
              </h4>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-black/80 border border-white/30 rounded-full px-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none focus:ring-2 focus:ring-[#f4a702]/30 transition-all duration-300 shadow-lg"
                  />
                  <input
                    type="text"
                    name="service"
                    placeholder="Service *"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-black/80 border border-white/30 rounded-full px-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none focus:ring-2 focus:ring-[#f4a702]/30 transition-all duration-300 shadow-lg"
                  />
                </div>

                {/* Phone + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none z-10">
                      <span className="text-xl">🇮🇳</span>
                      <span className="text-gray-300 text-sm font-medium">
                        +91
                      </span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black/80 border border-white/30 rounded-full pl-20 pr-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none focus:ring-2 focus:ring-[#f4a702]/30 transition-all duration-300 shadow-lg"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/80 border border-white/30 rounded-full px-6 py-3.5 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none focus:ring-2 focus:ring-[#f4a702]/30 transition-all duration-300 shadow-lg"
                  />
                </div>

                {/* Project */}
                <textarea
                  name="project"
                  placeholder="About Your Project *"
                  value={formData.project}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-black/80 border border-white/30 rounded-3xl px-6 py-4 text-white placeholder-gray-400 focus:border-[#f4a702] focus:outline-none focus:ring-2 focus:ring-[#f4a702]/30 transition-all duration-300 resize-none shadow-lg"
                ></textarea>

                {/* Privacy + Submit */}
                <p className="text-xs text-gray-300 leading-relaxed">
                  By sending this form, I confirm that I have read & accept the{" "}
                  <a
                    href="#"
                    className="text-white underline hover:text-[#f4a702] transition-colors font-medium"
                  >
                    privacy policy
                  </a>
                  .
                </p>

                {/* Submit Message */}
                {submitMessage && (
                  <div
                    className={`text-sm p-3 rounded-lg ${
                      submitMessage.includes("✅")
                        ? "bg-green-500/20 text-green-300"
                        : "bg-red-500/20 text-red-300"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="group relative bg-white text-black font-semibold px-8 py-3.5 rounded-full flex items-center gap-3 hover:bg-[#f4a702] hover:text-white transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[#f4a702]/60 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Sending..." : "Send A Message"}
                  </span>
                  <svg
                    className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"
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
                </button>
              </div>
            </div>

            {/* RIGHT - Client Logos */}
            <div className="flex flex-col mt-8 lg:mt-0">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                Driven by Trust, Backed by Results
              </h4>
              <p className="text-white/95 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
                Our work speaks through the trust placed in us by top names
                across the globe.
              </p>

              <div className="overflow-y-auto custom-scrollbar max-h-[400px] pr-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {clients.map((client, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-[#f4a702]/60 transition-all duration-300 aspect-square flex items-center justify-center cursor-pointer hover:bg-white shadow-lg hover:shadow-xl hover:shadow-[#f4a702]/30 hover:scale-105"
                    >
                      <img
                        src={getLogo(client.name)}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/0 to-[#f4a702]/0 group-hover:from-[#f4a702]/10 group-hover:to-transparent rounded-xl transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ⬇️ Enhanced fade band to merge into next section */}
      <div className="pointer-events-none absolute left-0 right-0 -bottom-16 h-24 bg-gradient-to-b from-transparent via-black/60 to-black z-20"></div>

      {/* Style block */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.08); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(244,167,2,0.5); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #f4a702; }

        .loader-icon { width: 32px; height: 32px; position: relative; display: inline-block; vertical-align: middle; }
        @media (min-width:640px){.loader-icon{width:40px;height:40px;}}
        @media (min-width:768px){.loader-icon{width:48px;height:48px;}}
        @media (min-width:1024px){.loader-icon{width:56px;height:56px;}}
        .loader-icon:before{content:'';width:100%;height:5px;background:#f4a702;position:absolute;top:125%;left:0;border-radius:50%;animation:shadow324 0.5s linear infinite;filter:drop-shadow(0 0 8px #f4a702);}
        .loader-icon:after{content:'';width:100%;height:100%;background:#f4a702;position:absolute;top:0;left:0;border-radius:50%;animation:jump7456 0.5s linear infinite;filter:drop-shadow(0 0 12px #f4a702);}
        @keyframes jump7456{15%{border-bottom-right-radius:50%;}25%{transform:translateY(9px)rotate(22.5deg);}50%{transform:translateY(18px)scale(1,.9)rotate(45deg);border-bottom-right-radius:40px;}75%{transform:translateY(9px)rotate(67.5deg);}100%{transform:translateY(0)rotate(90deg);}}
        @keyframes shadow324{0%,100%{transform:scale(1,1);}50%{transform:scale(1.2,1);}}

        @keyframes pulse-slow{0%,100%{opacity:0.15;}50%{opacity:0.25;}}
        @keyframes pulse-slow-delayed{0%,100%{opacity:0.15;}50%{opacity:0.25;}}
        .animate-pulse-slow{animation:pulse-slow 4s ease-in-out infinite;}
        .animate-pulse-slow-delayed{animation:pulse-slow-delayed 4s ease-in-out infinite 2s;}
      `}</style>
    </div>
  );
}

export default ContactClients;
