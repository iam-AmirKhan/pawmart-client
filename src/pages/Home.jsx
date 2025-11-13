import { motion } from "framer-motion";
import Banner from "./Banner";
import RecentLists from "./RecentLists";
import ExtraOne from "./ExtraOne";
import ExtraTwo from "./ExtraTwo";
import usePageTitle from "../components/usePageTitle";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

import { useNavigate } from "react-router-dom";

const Home = () => {
  usePageTitle("Home | PawMart");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  //  handleCategoryClick function
  const handleCategoryClick = (categoryName) => {
    navigate(`/pets-supplies?category=${categoryName}`);
  };

  const categories = [
    {
      name: "Pets (Adoption)",
      icon: "🐶",
      color: "bg-orange-100",
      categoryName: "Pets",
    },
    {
      name: "Pet Food",
      icon: "🍖",
      color: "bg-green-100",
      categoryName: "Food",
    },
    {
      name: "Accessories",
      icon: "🧸",
      color: "bg-blue-100",
      categoryName: "Accessories",
    },
    {
      name: "Care Products",
      icon: "💊",
      color: "bg-pink-100",
      categoryName: "Care Products",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Banner></Banner>

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
              //  Add onClick handler
              onClick={() => handleCategoryClick(cat.categoryName)}
              className={`p-6 rounded-xl shadow-md ${cat.color} text-center cursor-pointer transition`}
            >
              <p className="text-5xl">{cat.icon}</p>
              <h3 className="text-lg font-semibold mt-3">{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <RecentLists></RecentLists>
      <ExtraOne></ExtraOne>
      <ExtraTwo></ExtraTwo>
    </div>
  );
};

export default Home;
