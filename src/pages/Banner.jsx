import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";


import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Find Your Furry Friend Today!",
      description: "Thousands of loving pets are waiting for their forever home. Start your adoption journey today.",
      image: img1, 
      buttonText: "Browse Pets",
      buttonLink: "/pets-supplies"
    },
    {
      title: "Adopt, Don't Shop — Give a Pet a Home",
      description: "Every adoption saves a life and brings joy to your family. Make a difference today.",
      image: img2, 
      buttonText: "See Available Pets",
      buttonLink: "/pets-supplies"
    },
    {
      title: "Because Every Pet Deserves Love and Care",
      description: "Join our community of caring pet parents. Find your perfect companion and give them the love they deserve.",
      image: img3,
      buttonText: "Start Adoption",
      buttonLink: "/pets-supplies"
    }
  ];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between mt-10 bg-gradient-to-r from-orange-100 to-white rounded-2xl overflow-hidden p-6 md:p-10 shadow-md min-h-[500px]">
      
      {/* Left side (text with animation) */}
      <div className="md:w-1/2 text-center md:text-left relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
            >
              {slides[currentSlide].title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={word === "Furry" || word === "Friend" || word === "Adopt," || word === "Shop" || word === "Pet" || word === "Love" || word === "Care" ? "text-orange-500" : ""}
                >
                  {word}{" "}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-gray-600 text-lg"
            >
              {slides[currentSlide].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex justify-center md:justify-start gap-4"
            >
              <Link
                to={slides[currentSlide].buttonLink}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:scale-105 transform transition font-semibold shadow-md hover:bg-orange-600"
              >
                {slides[currentSlide].buttonText}
              </Link>
              <Link
                to="/add-listing"
                className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition font-semibold shadow-md"
              >
                Add Listing
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right side (image with animation) */}
      <div className="md:w-1/2 flex justify-center relative h-96">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt="Pet Banner"
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 3 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            className="w-full md:w-10/12 h-full object-cover drop-shadow-2xl rounded-xl"
          />
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-orange-500 p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-orange-500 p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

     
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-orange-500 w-8"
                : "bg-gray-400 w-2 hover:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

   
      <div className="absolute top-0 left-0 w-20 h-20 bg-orange-200 rounded-br-full opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-orange-200 rounded-tl-full opacity-60"></div>
    </section>
  );
};

export default Banner;