import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const DetailsPage = () => {
  const listing = useLoaderData();
  const [showModal, setShowModal] = useState(false);

  
  const user = {
    displayName: "Amir Khan",
    email: "amir@gmail.com",
  };

  // 🛒 Order Submit
  const handleOrder = async (e) => {
    e.preventDefault();
    const form = e.target;

    const newOrder = {
      buyerName: user.displayName,
      email: user.email,
      productId: listing._id,
      productName: listing.name,
      quantity: listing.category === "Pets" ? 1 : parseInt(form.quantity.value),
      price: listing.price,
      address: form.address.value,
      date: form.date.value,
      phone: form.phone.value,
      notes: form.notes.value,
    };

    try {
      const res = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });

      const data = await res.json();

      if (data.insertedId) {
        toast.success("Order placed successfully");
        form.reset();
        setShowModal(false);
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      toast.error("Server Error!");
    }
    console.log(newOrder);

  };

  return (
    <div className="max-w-5xl mx-auto my-12 bg-white p-6 md:p-10 rounded-xl shadow-lg">
      <div className="grid md:grid-cols-2 gap-10">
     
        <img
          src={listing.image}
          alt={listing.name}
          className="w-full h-80 object-cover rounded-xl shadow-md"
        />

      
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {listing.name}
          </h2>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Category:</span> {listing.category}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Owner Email:</span> {listing.email}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Location:</span> {listing.location}
          </p>
          <p className="text-orange-500 font-bold mt-2">
            Price:{" "}
            {listing.price === 0 ? "Free for Adoption" : `৳${listing.price}`}
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            {listing.description}
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition font-semibold"
          >
             Adopt / Order Now
          </button>
        </div>
      </div>

    
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Confirm Your Order
            </h3>
            <form onSubmit={handleOrder} className="space-y-4">
              <input
                type="text"
                value={user.displayName}
                readOnly
                className="w-full border p-2 rounded bg-gray-100"
              />
              <input
                type="email"
                value={user.email}
                readOnly
                className="w-full border p-2 rounded bg-gray-100"
              />
              <input
                type="text"
                value={listing._id}
                readOnly
                className="w-full border p-2 rounded bg-gray-100"
              />
              <input
                type="text"
                value={listing.name}
                readOnly
                className="w-full border p-2 rounded bg-gray-100"
              />

              {listing.category !== "Pets" && (
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  defaultValue="1"
                  className="w-full border p-2 rounded"
                  placeholder="Quantity"
                />
              )}

              <input
                type="text"
                value={listing.price}
                readOnly
                className="w-full border p-2 rounded bg-gray-100"
              />
              <input
                type="text"
                name="address"
                required
                placeholder="Address"
                className="w-full border p-2 rounded"
              />
              <input
                type="date"
                name="date"
                required
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="phone"
                required
                placeholder="Phone number"
                className="w-full border p-2 rounded"
              />
              <textarea
                name="notes"
                rows="2"
                placeholder="Additional notes"
                className="w-full border p-2 rounded"
              ></textarea>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
