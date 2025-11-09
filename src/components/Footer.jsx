import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
      
        <div>
          <h2 className="text-2xl font-bold text-orange-400 flex items-center gap-2">
            🐾 PawMart
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            PawMart connects local pet owners and buyers for adoption and pet care products.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Useful Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
            <li><Link to="/terms" className="hover:text-orange-400">Terms & Conditions</Link></li>
          </ul>
        </div>


        <div className="flex flex-col justify-center text-sm">
          <p>© {new Date().getFullYear()} PawMart. All rights reserved.</p>
          <p className="mt-2">Designed with ❤️ by Amir Khan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
