import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from "../assets/img1.jpg"

const Home = () => {

  const categories = [
    { name: "Pets (Adoption)", icon: "🐶", color: "bg-orange-100" },
    { name: "Pet Food", icon: "🍖", color: "bg-green-100" },
    { name: "Accessories", icon: "🧸", color: "bg-blue-100" },
    { name: "Care Products", icon: "💊", color: "bg-pink-100" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">

      {/* ========== Banner Section ========== */}
   <section className="relative flex flex-col-reverse md:flex-row items-center justify-between mt-10 bg-gradient-to-r from-orange-100 to-white rounded-2xl overflow-hidden p-6 md:p-10 shadow-md">
  {/* Left side (text) */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="md:w-1/2 text-center md:text-left"
  >
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
    >
      Find Your <span className="text-orange-500">Furry Friend</span> Today!
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="mt-4 text-gray-600 text-lg"
    >
      Adopt, Don’t Shop — Give a Pet a Home.  
      Because every pet deserves love and care 🐾
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="mt-6 flex justify-center md:justify-start gap-4"
    >
      <Link
        to="/pets-supplies"
        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:scale-105 transform transition font-semibold shadow-md"
      >
        Browse Pets
      </Link>
      <Link
        to="/about"
        className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition font-semibold shadow-md"
      >
        Learn More
      </Link>
    </motion.div>
  </motion.div>

  {/* Right side (image) */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 120 }}
    className="md:w-1/2 flex justify-center"
  >
    <motion.img
      src={img}
      alt="Pet Banner"
      className="w-full md:w-10/12 object-contain drop-shadow-2xl rounded-xl"
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
    />
  </motion.div>

  {/* Decorative shapes */}
  <div className="absolute top-0 left-0 w-20 h-20 bg-orange-200 rounded-br-full opacity-60"></div>
  <div className="absolute bottom-0 right-0 w-20 h-20 bg-orange-200 rounded-tl-full opacity-60"></div>
</section>


      {/* ========== Category Section ========== */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Explore by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-xl shadow-md ${cat.color} text-center cursor-pointer transition`}
            >
              <p className="text-5xl">{cat.icon}</p>
              <h3 className="text-lg font-semibold mt-3">{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
