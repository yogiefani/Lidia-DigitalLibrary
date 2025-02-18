import Book from "../assets/book.png";

const HeroSection = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl lg:text-7xl font-bold mb-4 text-[#181E4B]">
            Search & review <br /> your
            <span className="text-[#4475F2]"> fav book</span>
            <br /> effortlessly
          </h1>
          <p className="text-gray-600 mb-8">
            Embark on a literary journey like never before with our <br />
            revolutionary library application! Introducing a seamless experience
            <br />
            that transcends traditional boundaries, where you can effortlessly
            <br />
            search your favorite books.✨
          </p>
          <button className="px-8 py-3 bg-[#4475F2] text-white rounded-lg w-fit hover:bg-[#3b6ce7]">
            Start now →
          </button>
        </div>
        <div className="relative">
          <img src={Book} alt="Book showcase" className="rounded-lg" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
