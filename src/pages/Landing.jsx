import BackgroundHeader from "../components/BackgroundHeader";
import Features from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
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
      </div>
    </div>
  );
};

export default Landing;
