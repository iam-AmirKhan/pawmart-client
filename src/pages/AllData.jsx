import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Tag, Search } from "lucide-react";

const AllData = () => {
  const { listings } = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter logic
  const filteredListings = listings?.filter((listing) => {
    const matchesSearch = listing.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || listing.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Pets", "Food", "Accessories", "Care Products"];


  const getCategoryCount = (category) => {
    if (category === "All") return listings?.length || 0;
    return listings?.filter((l) => l.category === category).length || 0;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
    
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Pets & Supplies 🐾
        </h1>
        <p className="text-gray-600 text-lg">
          Browse all available pets for adoption and pet supplies
        </p>
      </motion.div>

      {/* Search & Filter Section */}
      <div className="mb-8 space-y-4">
     
        <div className="relative max-w-xl mx-auto">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex gap-3 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat} ({getCategoryCount(cat)})
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-center">
        <p className="text-gray-600">
          Showing{" "}
          <span className="font-bold text-orange-500">
            {filteredListings?.length}
          </span>{" "}
          listings
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Listings Grid - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {filteredListings?.map((listing, index) => (
          <motion.div
            key={listing._id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
           
            <div className="relative h-56 overflow-hidden">
              <img
                src={listing.image}
                alt={listing.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                {listing.category}
              </div>
            </div>

          
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                {listing.name}
              </h3>

              <div className="flex items-center text-gray-600 mb-3">
                <MapPin size={16} className="mr-1 flex-shrink-0" />
                <span className="text-sm line-clamp-1">{listing.location}</span>
              </div>

              <div className="flex items-center text-gray-700 mb-4">
                <Tag size={16} className="mr-1 text-orange-500 flex-shrink-0" />
                <span className="text-lg font-bold">
                  {listing.price === 0 ? (
                    <span className="text-green-600">Free for Adoption</span>
                  ) : (
                    <span className="text-orange-600">৳{listing.price}</span>
                  )}
                </span>
              </div>

              <Link
                to={`/listing/${listing._id}`}
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-lg font-semibold transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                See Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredListings?.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-4">😢</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">
            No listings found
          </h3>
          <p className="text-gray-500">Try adjusting your search or filter</p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
            className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Clear Filters
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default AllData;
