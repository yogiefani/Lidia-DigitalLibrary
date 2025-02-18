import FeatureCard from "../components/Card/FeatureCard";
import featuresDummy from "../data/featuresDummy";
const Features = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <span className="text-[#4475F2] font-bold mb-4 block">FEATURES</span>
        <h2 className="text-4xl font-bold flex items-center gap-2">
          <span role="img" aria-label="thinking face" className="text-3xl">
            🤔
          </span>
          <span>What You Can Do?</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {featuresDummy.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
