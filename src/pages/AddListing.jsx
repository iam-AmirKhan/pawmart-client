import { useState } from "react";
import toast from "react-hot-toast";
import usePageTitle from "../components/usePageTitle";
import Loader from "../components/Loader";

const AddListing = () => {
 usePageTitle("add-listing | PawMart");
  const [loading, setLoading] = useState(false);

  // user info
  const user = {
    email: "amir@example.com",
  };

  const handleAddListing = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const listingData = {
      name: form.name.value,
      category: form.category.value,
      price: form.category.value === "Pets" ? 0 : parseFloat(form.price.value),
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      date: form.date.value,
      email: user.email,
      createdAt: new Date(),
    };

    try {
      const res = await fetch("http://localhost:5000/api/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(listingData),
      });

      const data = await res.json();

      if (data.insertedId) {
        toast.success(" Listing added successfully!");
        form.reset();
      } else {
        toast.error(" Something went wrong!");
      }
    } catch (err) {
      toast.error(" Server error!");
    } finally {
      setLoading(false);
    }
  };

 if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg my-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Add a New Listing
      </h2>

      <form onSubmit={handleAddListing} className="space-y-5">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Product or Pet Name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
          required
        />

        {/* Category */}
        <select
          name="category"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
          required
        >
          <option value="">Select Category</option>
          <option value="Pets">Pets (Adoption)</option>
          <option value="Food">Food</option>
          <option value="Accessories">Accessories</option>
          <option value="Care Products">Care Products</option>
        </select>

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price (0 for pets)"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
          required
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Write description..."
          rows="3"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
          required
        ></textarea>

        {/* Image URL */}
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
          required
        />

        {/* Date */}
        <input
          type="date"
          name="date"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
          required
        />

        {/* Email (readonly) */}
        <input
          type="email"
          name="email"
          value={user.email}
          readOnly
          className="w-full p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Add Listing
        </button>
      </form>
    </div>
  );
};

export default AddListing;
