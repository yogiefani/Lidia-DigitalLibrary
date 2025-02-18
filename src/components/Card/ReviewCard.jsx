const ReviewCard = ({ image, review, name, role }) => {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg">
      <div className="flex flex-col items-center text-center space-y-4">
        <img src={image} alt={name} className="w-24 h-24 rounded-full" />
        <p className="text-gray-600">{review}</p>
        <div>
          <h4 className="text-[#4737FF] font-medium">{name}</h4>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
