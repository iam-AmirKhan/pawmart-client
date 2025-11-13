import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import usePageTitle from "../components/usePageTitle";

const MyListings = () => {
  usePageTitle("my-listings | PawMart");

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = {
    email: "amir@example.com",
  };

  // Fetch user listings
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://pawmart-server-eight.vercel.app/api/my-listings?email=${user.email}`
        );
        const data = await res.json();
        setListings(data);
      } catch (err) {
        toast.error("Failed to load listings");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user.email]);

  //  Delete handler
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `https://pawmart-server-eight.vercel.app/api/listings/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success("Listing deleted!");
        setListings(listings.filter((item) => item._id !== id));
      } else {
        toast.error("Delete failed!");
      }
    } catch {
      toast.error("Server error!");
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        My Listings
      </h2>

      {listings.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven’t added any listings yet.
        </p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="table w-full">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((item) => (
                <tr key={item._id} className="hover:bg-orange-50">
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                  </td>
                  <td className="font-semibold">{item.name}</td>
                  <td>{item.category}</td>
                  <td>
                    {item.price === 0 ? (
                      <span className="text-green-600 font-bold">Free</span>
                    ) : (
                      <span className="text-orange-600 font-bold">
                        ৳{item.price}
                      </span>
                    )}
                  </td>
                  <td>{item.location}</td>
                  <td className="space-x-2">
                    <button
                      className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white"
                      onClick={() => toast("Update feature coming soon!")}
                    >
                      Update
                    </button>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyListings;
