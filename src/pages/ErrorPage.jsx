import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../assets/error-404.png"; 

const ErrorPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-screen bg-orange-50 text-center px-4"
    >
      <img src={img} alt="404" className="w-80 mb-6" />

      <h1 className="text-6xl font-bold text-orange-500 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-3">
        Oops! Page Not Found 😢
      </h2>
      <p className="text-gray-500 mb-6 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
      >
        Back to Home
      </Link>
    </motion.div>
  );
};

export default ErrorPage;
