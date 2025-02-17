const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          <span className="text-xl font-bold">Lidia</span>
        </div>
        <button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-100">
          Login
        </button>
      </nav>
    </>
  );
};

export default Navbar;
