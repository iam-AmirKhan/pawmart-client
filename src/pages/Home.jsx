import { motion } from "framer-motion";
import Banner from "./Banner";
import RecentLists from "./RecentLists";
import ExtraOne from "./ExtraOne";
import ExtraTwo from "./ExtraTwo";
import usePageTitle from "../components/usePageTitle";
const Home = () => {
  usePageTitle("Home | PawMart");
  const categories = [
    { name: "Pets (Adoption)", icon: "🐶", color: "bg-orange-100" },
    { name: "Pet Food", icon: "🍖", color: "bg-green-100" },
    { name: "Accessories", icon: "🧸", color: "bg-blue-100" },
    { name: "Care Products", icon: "💊", color: "bg-pink-100" },
  ];
  


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
