import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[70vh] bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-16 h-16 rounded-full border-4 border-t-transparent border-orange-500 shadow-[0_0_30px_rgba(255,140,0,0.5)]"
      ></motion.div>

      {/* Glowing circle effect */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.4, 0.8] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="absolute w-20 h-20 rounded-full bg-orange-400 blur-xl opacity-40"
      ></motion.div>
    </div>
  );
};

export default Loader;
