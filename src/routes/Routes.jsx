import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

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
        path: "/",
      },
    ],
  },
]);

export default router;
