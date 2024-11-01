import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-10">
          {/* Logo & Description */}
          <div className="flex-shrink-0 text-center sm:text-left w-full sm:w-auto">
            <h1 className="text-xl sm:text-2xl font-bold mb-2">Divine Fragrance</h1>
            <p className="text-gray-400 text-sm sm:text-base">
              Discover the essence of beauty with our curated collection of perfumes, bringing you the best fragrances from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-shrink-0 flex flex-wrap justify-between sm:justify-start space-x-8">
            <div>
              <h2 className="text-sm sm:text-lg font-semibold mb-2">Quick Links</h2>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm sm:text-lg font-semibold mb-2">Support</h2>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-400">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-gray-400">Order Status</a></li>
                <li><a href="#" className="hover:text-gray-400">Payment Methods</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex-shrink-0 text-center sm:text-left">
            <h2 className="text-sm sm:text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; 2024 Divine Fragrance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
