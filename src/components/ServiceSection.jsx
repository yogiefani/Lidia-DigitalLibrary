import Service from "../assets/Service.png";
import ServiceTwo from "../assets/ServiceTwo.png";
const Services = () => {
  return (
    <section className="max-w-[90%] mx-auto px-4 py-16">
      <div className="mb-12">
        <span className="text-[#4475F2] font-bold mb-4 block">SERVICES</span>
        <h2 className="text-5xl font-bold flex items-center gap-2">
          <span role="img" aria-label="rocket" className="text-3xl">
            🚀
          </span>
          <span>The Services for You</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="rounded-3xl overflow-hidden ">
          <img
            src={Service}
            alt="Grand Library Interior"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6 items-center lg:pt-8">
          <h3 className="text-4xl font-medium">
            <span className="text-[#4475F2]">Rent</span> your favorite book
            <br />
            fairly easy on <span className="text-[#4475F2]">Lidia</span>!
          </h3>

          <div className="space-y-8 text-[#5E6282]">
            <p>
              Viewing, rent, and organize your favorite books has
              <br /> never been easier. An integrated digital library rent
              <br /> thats simple to use, Lidia lets you spend less time
              <br />
              managing your work and more time actually doing it!
            </p>

            <p>
              Effortless rentals, personalized shelves—Lidia
              <br /> transforms book management, enhancing your
              <br /> reading experience~
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="space-y-6 items-center lg:pl-14">
          <h3 className="text-4xl font-medium">
            Quick Book Rentals:
            <br />
            <span className="text-[#4475F2]">Dive </span>Into
            <span className="text-[#4475F2]"> Reading </span>Instantly
          </h3>

          <div className="space-y-8 text-[#5E6282]">
            <p>
              Discover instant literary delight. Access a vast library,
              <br /> borrow your favorite reads, and dive into captivating
              <br /> stories within minutes. Reading made quick and easy,
              <br />
              just a click away!
            </p>

            <p>
              Unlock a world of stories effortlessly.
              <br /> Browse genres, choose, rent in minutes.
              <br /> Seamlessly manage your reading adventures <br />
              with our intuitive platform ~
            </p>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden ">
          <img
            src={ServiceTwo}
            alt="Grand Library Interior"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
