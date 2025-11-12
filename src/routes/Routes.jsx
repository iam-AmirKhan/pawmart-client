import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllData from "../pages/AllData";
import DetailsPage from "../pages/DetailsPage";
import AddListing from "../pages/AddListing";
import ProtectedRoute from "../components/ProtectedRoute";
import MyListings from "../pages/MyListings";
import MyOrders from "../pages/MyOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const res = await fetch("http://localhost:5000/api/listings/recent");
          const data = await res.json();
          return { recentListings: data };
        },
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/pets-supplies",
        element: <AllData></AllData>,
        loader: async () => {
          const res = await fetch("http://localhost:5000/api/listings");
          const data = await res.json();
          return { listings: data };
      
        },
      },
      {
        path: "/listing/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/listings/${params.id}`),
      },

      {
        path: "/add-listing",
        element: (
          <ProtectedRoute>
            <AddListing></AddListing>
          </ProtectedRoute>
        ),
      },

      {
        path: "/my-listings",
        element: (
          <ProtectedRoute>
            <MyListings />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <ProtectedRoute>
            <MyOrders></MyOrders>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
