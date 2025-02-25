import React from "react";
import ImageSlider from "./ImageSlider";
import { Typewriter } from 'react-simple-typewriter'


const Hero = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 mx-auto">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">

            <ImageSlider></ImageSlider>

          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 w-full ">
            <div className="lg:flex-row flex">
              <div
                data-aos="fade-up"
                className="max-w-full text-5xl sm:text-5xl lg:text-6xl font-extrabold gabarito"
                style={{ lineHeight: 1.1 }}
              >
                <p className="inline lg:block">
                  Be Simple Be Social with{" "}
                  <span className="text-primary font-extrabold gabarito block sm:inline lg:inline">
                    <Typewriter
                      words={["SocialZone"]}
                      loop={Infinity}
                      cursor
                      cursorStyle="|"
                      typeSpeed={50}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </span>
                </p>
              </div>


            </div>
            <p data-aos="fade-up" data-aos-delay="300" className="md:text-lg lg:text-xl lg:min-w-full">
              Social Zone is a full-service digital marketing
              agency that helps businesses grow their
              online presence. We offer tailored solutions
              for small to medium-sized businesses,
              ensuring maximum reach, engagement, and
              conversions. From social media management
              to performance marketing, we’ve got you
              covered!
            </p>
            <a href="https://drive.google.com/file/d/117b9jOxS5my6YMp977NxTlErWJMnqPB1" target="_blank">
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="0"
                className="primary-btn mt-5 font-semibold"
              >
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
