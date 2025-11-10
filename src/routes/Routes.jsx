import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

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
        element:<Register></Register>
        
      },
      {
        path: "/login",
        element:<Login></Login>
        
      },
    ],
  },
]);

export default router;
