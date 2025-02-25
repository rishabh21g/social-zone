import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandsLogo from "./components/BrandsLogo/BrandsLogo.jsx";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in",
      delay: 80,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandsLogo />
      <Services />
      <Testimonial />
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;
