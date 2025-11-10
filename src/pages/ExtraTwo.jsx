import { motion } from 'framer-motion';

const ExtraTwo = () => {

    const heroes = [
    {
      name: "Sarah Ahmed",
      role: "Dog Rescuer",
      image: "https://i.pravatar.cc/300?img=1",
      pets: 15,
      story: "Rescued and rehomed over 15 dogs in the last 2 years. Passionate about giving strays a second chance.",
      location: "Dhaka"
    },
    {
      name: "Karim Hassan",
      role: "Cat Foster Parent",
      image: "https://i.pravatar.cc/300?img=13",
      pets: 12,
      story: "Foster parent to 12+ cats. Believes every cat deserves warmth, food, and endless love.",
      location: "Chittagong"
    },
    {
      name: "Nadia Rahman",
      role: "Pet Care Volunteer",
      image: "https://i.pravatar.cc/300?img=5",
      pets: 20,
      story: "Volunteer at local shelters for 3 years. Helped find homes for 20+ abandoned pets.",
      location: "Sylhet"
    },
    {
      name: "Imran Khan",
      role: "Animal Rights Activist",
      image: "https://i.pravatar.cc/300?img=12",
      pets: 18,
      story: "Fighting for animal welfare and spreading awareness about responsible pet ownership.",
      location: "Rajshahi"
    }
  ];

    return (
        <section className="mt-16 mb-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Pet Heroes 🦸‍♂️
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            These amazing people have dedicated their time and love to rescue, 
            foster, and find forever homes for countless pets in need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {heroes.map((hero, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Hero Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-bold text-xl">{hero.name}</h3>
                  <p className="text-orange-300 text-sm">{hero.role}</p>
                </div>
              </div>

              {/* Hero Info */}
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                    🐾 {hero.pets} Pets Helped
                  </span>
                  <span className="text-gray-500 text-sm">📍 {hero.location}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {hero.story}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default ExtraTwo;