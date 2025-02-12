import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="dark:bg-gray-950 dark:text-white duration-300 py-8">
      <div className="container mx-auto px-12 justify-between flex flex-wrap md:flex-row md:px-16  gap-5 space-y-4">
        {/* Left Section: Paragraph */}
        <div className="space-y-4 text-left  w-full  text-sm">
          <h1 className="text-3xl font-semibold text-primary">Social Zone</h1>
          <p className=" font-medium leading-relaxed">
            We help businesses unlock their digital potential. <br /> Contact us today to grow your brand! Social Zone is now <br />your destination for professional event management. <br /> <strong className='text-lg'>Let's Work Together!</strong>
          </p>
        </div>

        {/* Right Section: Contact Details */}
        <div className="space-y-4 text-right md:w-1/2 w-full">
          <div className="flex items-center space-x-3">
            <AiOutlinePhone className="text-primary text-2xl" />
            <div className="flex gap-2 underline">
              <p className="text-sm cursor-pointer">+91 9311276329</p>
              <p className="text-sm cursor-pointer">+91 9266316112</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <AiOutlineMail className="text-primary text-2xl" />
            <a
              href="mailto:socialzoneproduction@gmail.com"
              className="text-sm text-primary hover:underline"
            >
              Mail us
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaInstagram className="text-primary text-2xl" />
            <a
              href="https://www.instagram.com/socialzone.production"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Follow us on Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;