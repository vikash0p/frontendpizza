import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { BsFacebook, BsTwitter, BsInstagram,BsYoutube } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-bgColor2 py-10 px-5">
      <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex-shrink-0 hidden lg:block ">
            <Image
              src={"/logo.png"}
              alt="logo image "
              width={500}
              height={250}
              className=" w-64 h-full  "
              priority={true}
              sizes="(min-width: 1280px) 256px, calc(2.73vw + 198px)"
            />
          </div>
          <p>
            Sizzling slices of pepperoni dance atop a blanket of melted
            mozzarella, kissed by the fiery embrace of jalapenos.
          </p>
        </div>

        {/* Address Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Our Address</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2" />
              +00 123 456 789
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              837, South Margarete, MD 35137
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              support@example.com
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Working Hours</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FiClock className="mr-2" />
              Monday - Friday: 09:00 - 22:00
            </li>
            <li className="flex items-center">
              <FiClock className="mr-2" />
              Saturday: 11:00 - 00:00
            </li>
            <li className="flex items-center">
              <FiClock className="mr-2" />
              Sunday: 11:00 - 23:00
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Newsletter</h2>
          <div className="flex flex-col space-y-3">
            <input
              type="email"
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
            />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-4 w-4 text-red-600 border-gray-300 accent-red-600 rounded focus:ring-red-500"
              />
              <span>I agree with the terms & conditions</span>
            </label>
            <button className="bg-red-600 text-white hover:bg-red-700 transition-colors duration-300 py-2 px-4 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="container mx-auto mt-10 border-t border-gray-600 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">©Hot Pizza all rights Reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <BsFacebook className="hover:text-blue-500 transition duration-300 transform hover:scale-110" />
          <BsTwitter className="hover:text-blue-400 transition duration-300 transform hover:scale-110" />
          <BsInstagram className="hover:text-pink-500 transition duration-300 transform hover:scale-110" />
          <BsYoutube className="hover:text-red-500 transition duration-300 transform hover:scale-110" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
