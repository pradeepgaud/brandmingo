import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BrandmingoLoader from "./components/BrandmingoLoader";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import WebDevelopement from "./pages/servicesPages/WebDevelopement";
import Design from "./pages/servicesPages/Design";
import Marketing from "./pages/servicesPages/Marketing";
import ECommerce from "./pages/servicesPages/subWebDevelopmentServices/ECommerce";
import WordpressWebsite from "./pages/servicesPages/subWebDevelopmentServices/WordpressWebsite";
import Shopify from "./pages/servicesPages/subWebDevelopmentServices/Shopify";
import ReactWebsite from "./pages/servicesPages/subWebDevelopmentServices/ReactWebsite";
import PhpWebsite from "./pages/servicesPages/subWebDevelopmentServices/PhpWebsite";
import AdsAndCampaign from "./pages/servicesPages/subMarketing/AdsAndCampaign";
import SocialMediaMarketing from "./pages/servicesPages/subMarketing/SocialMediaMarketing";
import SeoOptimizing from "./pages/servicesPages/subMarketing/SeoOptimizing";
import EcommerceAccountManagement from "./pages/servicesPages/subMarketing/EcommerceAccountManagement";
import WhatsAppButton from "./components/WhatsAppButton";
// import PhoneButton from "./components/PhoneButton";
import PortfolioSlider from "./pages/PortfolioSlider";
import CaseStudies from "./pages/CaseStudies";
import Aureialondon from "./pages/caseStudiesProjectPages/Aureialondon/Aureialondon";

function App() {
  const [loading, setLoading] = useState(true);

  // Loader effect
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Time change kar sakte ho
  }, []);

  // Show loader until loading = false
  if (loading) {
    return <BrandmingoLoader />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/webdevelopment" element={<WebDevelopement />} />
        <Route path="/services/design" element={<Design />} />
        <Route path="/services/e-commerce" element={<ECommerce />} />
        <Route path="/services/react-website" element={<ReactWebsite />} />
        <Route path="/services/php-website" element={<PhpWebsite />} />
        <Route
          path="/services/wordpress-website"
          element={<WordpressWebsite />}
        />
        <Route path="/services/shopify" element={<Shopify />} />
        <Route path="/services/marketing" element={<Marketing />} />
        <Route
          path="/services/ads-and-campaigns"
          element={<AdsAndCampaign />}
        />
        <Route
          path="/services/social-media-marketing"
          element={<SocialMediaMarketing />}
        />
        <Route path="/services/seo-optimizing" element={<SeoOptimizing />} />
        <Route
          path="/services/e-commerce-account-management"
          element={<EcommerceAccountManagement />}
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/portfolio" element={<PortfolioSlider />} />
        <Route path="/case-study/aureialondon" element={<Aureialondon />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppButton />
      {/* <PhoneButton /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
