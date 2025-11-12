import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider"; 
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext); 
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); 

 const navLinks = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `transition ${isActive ? "text-orange-500 font-semibold" : "text-gray-700 hover:text-orange-500"}`
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/pets-supplies"
      className={({ isActive }) =>
        `transition ${isActive ? "text-orange-500 font-semibold" : "text-gray-700 hover:text-orange-500"}`
      }
    >
      Pets & Supplies
    </NavLink>

    {user && (
      <>
        <NavLink
          to="/add-listing"
          className={({ isActive }) =>
            `transition ${isActive ? "text-orange-500 font-semibold" : "text-gray-700 hover:text-orange-500"}`
          }
        >
          Add Listing
        </NavLink>

        <NavLink
          to="/my-listings"
          className={({ isActive }) =>
            `transition ${isActive ? "text-orange-500 font-semibold" : "text-gray-700 hover:text-orange-500"}`
          }
        >
          My Listings
        </NavLink>

        <NavLink
          to="/my-orders"
          className={({ isActive }) =>
            `transition ${isActive ? "text-orange-500 font-semibold" : "text-gray-700 hover:text-orange-500"}`
          }
        >
          My Orders
        </NavLink>
      </>
    )}
  </>
);


  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/"); 
      })
      .catch(err => console.log(err));
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

      
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
             
              <span className="font-semibold">{user?.displayName || "User"}</span>

              {/* Logout button */}

              <button
                onClick={handleLogout}
                className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition"
              >
                Logout
              </button>
              <ThemeToggle />
            </>
          ) : (
            <>
              {/* Show Login/Register only if not logged in */}


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
              <Link
                to="/register"
                className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout} 
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
