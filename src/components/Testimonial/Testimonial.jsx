import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Brand1 from "../../assets/brands/1NN.svg";
import Brand2 from "../../assets/brands/2NN.svg";
import Brand3 from "../../assets/brands/3NN.svg";
import Brand4 from "../../assets/brands/4NN.svg";
import Brand5 from "../../assets/brands/5NN.svg";


const testimonialData = [
  {
    id: 1,
    name: "Mehnoors Design",
    text: "Social Zone has transformed my business with their tailored digital marketing strategies. Their expertise in social media, SEO, and content creation has boosted my online presence and brought in more customers. Highly professional and results-driven – I highly recommend them!",
    img: Brand1,
  },
  {
    id: 2,
    name: "EduQuest Team",
    text: "Social Zone has been a fantastic partner for EduQuest. Their tailored digital marketing strategies have significantly boosted our engagement and conversions. The team is professional, knowledgeable, and results-driven. Highly recommend!",
    img: Brand2,
  },
  {
    id: 3,
    name: "Paanshala Team",
    text: "Partnering with Social Zone has been a game changer for Paanshala. Their expertise in digital marketing helped us increase our online presence and reach the right audience. The team’s creativity and dedication have delivered impressive results. Highly recommend their services!",
    img: Brand3,
  },
  {
    id: 4,
    name: "Divine Cafe",
    text: "Working with Social Zone has been a game-changer for Divine Cafe. Their digital marketing strategies helped us increase visibility and attract more customers. The team is professional, creative, and delivers great results. Highly recommend their services!",
    img: Brand4,
  },
  {
    id: 5,
    name: "Lets Learn Institute",
    text: "Social Zone has been a fantastic partner for Lets Learn Institute. Their digital marketing expertise has helped us reach a wider audience and grow our brand. The team is efficient, creative, and always focused on results. We highly recommend their services!",
    img: Brand5,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    adaptiveHeight: false
  };

  return (
    <div id="testimonial" className="py-10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-4xl text-primary font-extrabold mb-4"
        >
          What Our Clients Say
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-screen-xl mx-auto"
        >
          <Slider {...settings}>
            {testimonialData.map(({ id, name, text, img }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="my-6"
              >
                <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-6 mx-4 bg-white dark:bg-black dark:text-gray-200  relative">
                  <motion.img
                    src={img}
                    alt={name}
                    className="block mx-auto h-[200px] w-full  object-contain rounded-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  />
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  >
                    <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40 text-xl">
                      “{text}”
                    </p>
                    <h1 className="lg:text-5xl font-extrabold shadows-into-light-regular my-6 text-2xl dark:text-gray-200 opacity-75 ">{name}</h1>
                  </motion.div>
                  {/* <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                    ,,
                  </p> */}
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
