import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero from "../../assets/website/hero.jpg";
import hero2 from "../../assets/website/hero2.jpg";
import hero3 from "../../assets/website/hero3.jpg"; 
import hero4 from "../../assets/website/hero4.webp"; 

const images = [hero, hero2, hero3 ,hero4];

const ImageSlider = ({ className }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); 

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); 
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative overflow-hidden w-full lg:h-auto md:h-auto sm:h-[308px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px]${className}`}>
      <div className="relative w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={index}
            src={images[index]}
            alt="Slider Image"
            className="w-full h-auto object-cover rounded-lg"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageSlider;
