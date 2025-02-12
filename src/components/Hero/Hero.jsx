import React from "react";
import hero from "../../assets/website/team.png";

const Hero = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={hero}
              alt=""
              className="w-full sm:max-w-[380px] md:max-w-[500px] "
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-2 md:bottom-1 -right-6 mr-5 px-4 py-2 rounded-xl  bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm ">⭐Projects</p>
              <h1 className="font-bold">
                600+ <span className="font-normal">Done</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Your Brand’s Journey Begins in the <br />{" "}
              <div className="flex flex-col">
                <span className="text-primary">Social Zone</span>
                <p className="text-sm px-1 dancing-script md:text-xl "> Be simple Be social</p>
              </div>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="md:text-xl">
              Social Zone is a full-service digital marketing
              agency that helps businesses grow their
              online presence. We offer tailored solutions
              for small to medium-sized businesses,
              ensuring maximum reach, engagement, and
              conversions. From social media management
              to performance marketing, we’ve got you
              covered!
            </p>
            <a href="" target="_blank"> 
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn mt-3"
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
