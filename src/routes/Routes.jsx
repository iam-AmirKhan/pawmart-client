import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path:"/",
           
        },
        {
            path:"/",
            
        },

    ]
  },
]);

export default router