import Cover from "../assets/Cover.png";

const BackgroundHeader = () => {
  return (
    <div className="absolute top-0 -z-10 w-full">
      <div className="container mx-auto relative">
        <img
          src={Cover}
          alt="background cover"
          className="absolute right-0 w-[55%]"
        />
      </div>
    </div>
  );
};

export default BackgroundHeader;
