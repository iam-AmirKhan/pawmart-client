import { motion } from "framer-motion";
import { Link, useLoaderData } from 'react-router-dom';

const RecentLists = () => {
     const { recentListings } = useLoaderData();
    return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
         Latest Listings
      </h1>

      {recentListings.length === 0 ? (
        <p className="text-center text-gray-500">No listings found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recentListings.map((listing, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={listing.image || "https://placehold.co/600x400?text=No+Image"}
                alt={listing.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5 space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">
                  {listing.name}
                </h2>

                <p className="text-sm text-gray-500">
                  Category: <span className="font-medium">{listing.category}</span>
                </p>

                <p className="text-sm text-gray-600">
                  Location: {listing.location || "Unknown"}
                </p>

                <p className="text-lg font-semibold text-green-600">
                  {listing.price
                    ? `$${listing.price}`
                    : "Free for Adoption "}
                </p>

                <Link
                  to={`/listing/${listing._id}`}
                  className="inline-block mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  See Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
    );
};

export default RecentLists;



