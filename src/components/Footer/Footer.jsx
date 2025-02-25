import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    
    <footer className="dark:bg-gray-950 dark:text-white duration-300 my-16 lg:mx-28 mx-8 lg:grid lg:grid-cols-5 rounded-md bg-gray-100">
  <div className="relative block h-32 lg:col-span-2 lg:h-full">
    <img
      src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
      alt=""
      className="absolute p-2 inset-0 h-full w-full object-cover"
    />
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p>
          
        <div className='flex gap-x-2 items-baseline'>
        <FaSquarePhone className='text-2xl text-red-600 mb-1'/>
        <strong className='text-2xl font-semibold'> Contact us </strong>
        </div>
          <a href="tel:+91-93112-76329" className="block  font-medium hover:opacity-75 ">
          +91-93112-76329 </a>
          <a href="tel:+91-92663-16112" className="block  font-medium hover:opacity-75 ">
          +91-92663-16112 </a>
          
          
        </p>

        <ul className="mt-8 space-y-1 text-sm">
          <li>Monday to Friday :  10am - 5pm</li>
          <li>Weekend :  10am - 3pm</li>
        </ul>

        <ul className="mt-8 flex gap-6">
          <li>
            <a
              href="https://www.facebook.com/share/1BGSEf1ty2/?mibextid=wwXIfr"
              rel="noreferrer"
              target="_blank"
              className="transition hover:brightness-125"
            >
              <span className="sr-only">Facebook</span>

              <FaFacebookSquare className='text-2xl text-red-600'/>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/socialzone.production?igsh=enJndHY3eHQxazV1&utm_source=qr"
              rel="noreferrer"
              target="_blank"
              className=" transition hover:brightness-125"
            >
              <span className="sr-only">Instagram</span>

              <FaInstagramSquare className='text-2xl text-red-600'/>
            </a>
          </li>

         

          <li>
            <a
              href="https://wa.me/9311276329"
              rel="noreferrer"
              target="_blank"
              className=" transition hover:brightness-125"
            >
              <span className="sr-only">Whatsapp</span>

              <FaWhatsappSquare className='text-2xl text-red-600'/>
            </a>
          </li>

          <li>
            <a
              href="mailto:socialzoneproduction@gmail.com"
              rel="noreferrer"
              target="_blank"
              className=" transition hover:brightness-125"
            >
              <span className="sr-only">Mail</span>
              <IoMdMail className='text-2xl text-red-600'/>
              
            </a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium text-xl">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className=" transition hover:opacity-75"> Social Media Management </a>
            </li>

            <li>
              <a href="#" className=" transition hover:opacity-75"> Website Design & Development </a>
            </li>

            <li>
              <a href="#" className=" transition hover:opacity-75"> Paid Advertisement </a>
            </li>

            <li>
              <a href="#" className=" transition hover:opacity-75"> Google my Business </a>
            </li>

            <li>
              <a href="#" className=" transition hover:opacity-75"> Branding & Design </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-xl">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className=" transition hover:opacity-75"> About </a>
            </li>

            <li>
              <a href="#" className=" transition hover:opacity-75"> Meet the Team </a>
            </li>

            <li>
              <a href="#" className=" transition hover:opacity-75"> Accounts Review </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-12">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
          <li>
            <a href="#" className=" transition hover:opacity-75"> Terms & Conditions </a>
          </li>

          <li>
            <a href="#" className=" transition hover:opacity-75"> Privacy Policy </a>
          </li>

          <li>
            <a href="#" className=" transition hover:opacity-75"> Cookies </a>
          </li>
        </ul>

        <p className="mt-8 text-xs  sm:mt-0">
          &copy; 2025. SocialZone. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
