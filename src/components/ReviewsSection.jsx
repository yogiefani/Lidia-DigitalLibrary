import ReviewCard from "../components/Card/ReviewCard";
import reviewsDummy from "../data/reviewsDummy";
const Reviews = () => {
  return (
    <section className="max-w-[90%] mx-auto px-4 py-16">
      <div className="mb-12">
        <span className="text-[#4737FF] font-semibold mb-4 block">REVIEWS</span>
        <h2 className="text-4xl font-bold flex items-center gap-2">
          <span role="img" aria-label="chat" className="text-3xl">
            💬
          </span>
          <span>Reviews of Others</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviewsDummy.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
