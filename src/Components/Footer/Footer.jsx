/* eslint-disable no-unused-vars */
import React from "react";
import Logo from '../../assets/icons/Intro-logo.png'
import { FaFacebookF, FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Subscribe Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">
          <img
                    alt=""
                    src={Logo}
                    className="h-40 w-40"
                  />
          </h2>
          <p className="text-sm text-gray-600">Feel Free to Shop</p>
          <div className="mt-6">
            <p className="font-semibold text-gray-800">Subscribe Now</p>
            <div className="flex items-center mt-2">
              <input
                type="email"
                placeholder="Enter your Email"
                className="border border-gray-300 px-3 py-2 rounded-l-md w-full focus:outline-none"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Information Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Information
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>About Us</li>
            <li>More Search</li>
            <li>Blog</li>
            <li>Testimonials</li>
            <li>Events</li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Helpful Links
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>Services</li>
            <li>Supports</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>Brands list</li>
            <li>Order</li>
            <li>Return & Exchange</li>
            <li>Fashion list</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Contact Us
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              📞 +91 9999 999 999
            </li>
            <li>
              ✉️ youremailid.com
            </li>
          </ul>
          <div className="flex space-x-4 mt-4 text-gray-600">
            <a href="#" className="hover:text-black text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-black text-xl">
              <FaGoogle />
            </a>
            <a href="#" className="hover:text-black text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-black text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-center">
        <p className="text-sm text-gray-600">
          © 2024 company.Ltd. | All Rights Reserved
        </p>
        <div className="flex justify-center space-x-4 text-sm text-gray-600 mt-2">
          <a href="#" className="hover:text-black">FAQ</a>
          <a href="#" className="hover:text-black">Privacy</a>
          <a href="#" className="hover:text-black">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
