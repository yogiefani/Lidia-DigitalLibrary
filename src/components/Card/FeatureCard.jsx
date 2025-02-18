const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-[#4475F2] p-6 rounded-2xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 max-w-xs">{description}</p>
    </div>
  );
};

export default FeatureCard;
