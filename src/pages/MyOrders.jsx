import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import usePageTitle from "../components/usePageTitle";
const MyOrders = () => {
  usePageTitle("my-orders | PawMart");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = { email: "amir@gmail.com" };

  // Fetch user orders from backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/my-orders?email=${user.email}`
        );
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load orders!");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [user.email]);

  // Generate PDF report
  const handleDownloadPDF = () => {
    if (!orders.length) {
      toast.error("No orders to export!");
      return;
    }

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("My Orders Report", 14, 20);
    doc.setFontSize(12);
    doc.text(`User: ${user.email}`, 14, 30);

    const tableColumn = [
      "Product Name",
      "Buyer Name",
      "Price",
      "Quantity",
      "Address",
      "Date",
      "Phone",
    ];

    // Table rows
    const tableRows = orders.map((order) => [
      order.productName || "N/A",
      order.buyerName || "N/A",
      order.price === 0 ? "Free" : `৳${order.price}`,
      order.quantity || 1,
      order.address || "N/A",
      order.date ? new Date(order.date).toLocaleDateString() : "N/A",
      order.phone || "N/A",
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 40,
      theme: "grid",
      styles: {
        fontSize: 10,
        cellPadding: 4,
        halign: "center",
      },
      headStyles: {
        fillColor: [255, 140, 0],
        textColor: 255,
        fontStyle: "bold",
      },
      alternateRowStyles: {
        fillColor: [255, 248, 240],
      },
    });

    // Save PDF
    doc.save("My_Orders_Report.pdf");
    toast.success("Report downloaded successfully!");
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
        <h2 className="text-3xl font-bold text-gray-800">My Orders</h2>
        {orders.length > 0 && (
          <button
            onClick={handleDownloadPDF}
            className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition font-semibold flex items-center gap-2"
          >
            Download Report (PDF)
          </button>
        )}
      </div>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          You haven’t placed any orders yet.
        </p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="table w-full">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th>Product</th>
                <th>Buyer</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Address</th>
                <th>Date</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-orange-50">
                  <td className="font-semibold">{order.productName}</td>
                  <td>{order.buyerName}</td>
                  <td className="text-orange-600 font-bold">
                    {order.price === 0 ? "Free" : `৳${order.price}`}
                  </td>
                  <td>{order.quantity}</td>
                  <td>{order.address}</td>
                  <td>
                    {order.date
                      ? new Date(order.date).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td>{order.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
