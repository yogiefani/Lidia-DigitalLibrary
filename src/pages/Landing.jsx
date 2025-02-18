import BackgroundHeader from "../components/BackgroundHeader";
import Features from "../components/FeatureSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Location from "../components/LocationSection";
import Navbar from "../components/Navbar";
import Reviews from "../components/ReviewsSection";
import Services from "../components/ServiceSection";

const Landing = () => {
  return (
    <div className="font-['Plus_Jakarta_Sans'] min-h-screen">
      <BackgroundHeader />
      <div className="relative">
        <Navbar />
        <HeroSection />
        <Features />
        <Services />
        <Reviews />
        <Location />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
