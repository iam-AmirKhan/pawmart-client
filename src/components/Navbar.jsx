import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink to="/" className="hover:text-orange-500 transition">Home</NavLink>
      <NavLink to="/pets-supplies" className="hover:text-orange-500 transition">Pets & Supplies</NavLink>
      {user && (
        <>
          <NavLink to="/add-listing" className="hover:text-orange-500 transition">Add Listing</NavLink>
          <NavLink to="/my-listings" className="hover:text-orange-500 transition">My Listings</NavLink>
          <NavLink to="/my-orders" className="hover:text-orange-500 transition">My Orders</NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

        {/* Left: Logo */}

        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-orange-600">
          🐾 <span>PawMart</span>
        </Link>

       
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navLinks}
        </div>

        {/* Right: Login/Register or Profile */}

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <img
                src={user?.photoURL || "https://i.ibb.co/9bK8B5P/avatar.png"}
                alt="profile"
                className="w-8 h-8 rounded-full border-2 border-orange-400"
              />
              <button
                onClick={() => setUser(null)}
                className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-orange-500 font-semibold">Login</Link>
              <Link
                to="/register"
                className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

     
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl text-black hover:text-orange-500 transition">
          ☰
        </button>
      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-3 pb-3 text-gray-700 font-medium bg-white shadow-lg">
          {navLinks}
          {!user ? (
            <>
              <Link to="/login" className="text-gray-700 hover:text-orange-500 font-semibold">Login</Link>
              <Link to="/register" className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition">
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={() => setUser(null)}
              className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
