import { Twitter, Instagram, Facebook } from "lucide-react";
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="w-full text-black">
      <div className="mx-auto px-4 py-8">
        <div className="container mx-auto">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-bold">Managed By</h2>
            <h2 className="text-2xl font-bold">Social Media</h2>
            <h2 className="text-2xl font-bold">Slogan</h2>
          </div>

          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-[#4169E1] rounded-full flex items-center justify-center">
                <img src={Logo} alt="Lidia Logo" className="w-20 h-20" />
              </div>
              <span className="text-6xl font-bold">Lidia</span>
            </div>

            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80">
                <Twitter size={50} />
              </a>
              <a href="#" className="hover:opacity-80">
                <Instagram size={50} />
              </a>
              <a href="#" className="hover:opacity-80">
                <Facebook size={50} />
              </a>
            </div>

            <div>
              <p className="text-xl font-regular">#RentFavBooks</p>
            </div>
          </div>
        </div>

        <div className="w-full text-center text-white bg-[#4169E1] mt-8 p-14">
          <p>© 2024 Lidia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
