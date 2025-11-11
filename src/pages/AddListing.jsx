import { useState } from "react";
import toast from "react-hot-toast";

const AddListing = () => {
  const [loading, setLoading] = useState(false);

  const handleAddListing = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = category === "Pets" ? 0 : parseFloat(form.price.value);
    const location = form.location.value;
    const description = form.description.value;
    const image = form.image.value;
    const date = form.date.value;
    const email = form.email.value;

    const newListing = {
      name,
      category,
      price,
      location,
      description,
      image,
      date,
      email,
    };

    try {
      const res = await fetch("https://your-server.vercel.app/listings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newListing),
      });

      const data = await res.json();

      if (data.insertedId) {
        toast.success("Listing added successfully");
        form.reset();
      } else {
        toast.error("Failed to add listing");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-10 bg-white shadow-lg p-8 rounded-xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
         Add New Listing
      </h2>

      <form onSubmit={handleAddListing} className="space-y-5">
        {/* Product/Pet Name */}
        <div>
          <label className="block font-semibold mb-1">Product/Pet Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-orange-400"
            placeholder="Enter name"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select
            name="category"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-orange-400"
          >
            <option value="">Select Category</option>
            <option value="Pets">Pets (Adoption)</option>
            <option value="Pet Food">Pet Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Products">Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-1">Price</label>
          <input
            type="number"
            name="price"
            step="0.01"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-orange-400"
            placeholder="Enter price (0 for pets)"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-orange-400"
            placeholder="Enter location"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            required
            rows="3"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-orange-400"
            placeholder="Write a short description..."
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-semibold mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-orange-400"
            placeholder="https://example.com/pet.jpg"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block font-semibold mb-1">Pick Up Date</label>
          <input
            type="date"
            name="date"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-orange-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={"user@gmail.com"} // পরে Firebase user email auto বসবে
            readOnly
            className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-gray-600"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
          >
            {loading ? "Adding..." : "Add Listing"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddListing;
