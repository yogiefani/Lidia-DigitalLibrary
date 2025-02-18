import BackgroundHeader from "../components/BackgroundHeader";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <div className="font-['Plus_Jakarta_Sans'] min-h-screen">
      <BackgroundHeader />
      <div className="relative">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default Landing;
