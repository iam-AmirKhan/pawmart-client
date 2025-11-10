
import { motion } from 'framer-motion';
import { Heart, Home, Shield, Users } from 'lucide-react';

const ExtraOne = () => {
      const reasons = [
    {
      icon: <Heart className="w-12 h-12 text-orange-500" />,
      title: "Save a Life",
      description: "Every adoption saves a life and gives a deserving pet a second chance at happiness."
    },
    {
      icon: <Home className="w-12 h-12 text-orange-500" />,
      title: "Find Your Perfect Match",
      description: "We help connect you with pets that suit your lifestyle and family needs."
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-500" />,
      title: "Verified & Healthy",
      description: "All our pets are health-checked, vaccinated, and come from trusted sources."
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Community Support",
      description: "Join a caring community of pet parents ready to help and share experiences."
    }
  ];

    return (
         <section className="mt-20 mb-16 bg-gradient-to-br from-orange-50 to-white py-16 px-6 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Adopt from PawMart? 🐾
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Adopting a pet is one of the most rewarding decisions you'll ever make. 
            Instead of buying, give a loving home to a pet in need and experience unconditional love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-700 font-semibold italic"
          >
            "Adopt, Don't Shop — Because Every Pet Deserves a Loving Home 💕"
          </motion.p>
        </div>
      </div>
    </section>
    );
};

export default ExtraOne;