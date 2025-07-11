import React from 'react';
import { FaInstagram, FaFacebookSquare, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left - Brand Name */}
        <span className="font-bold text-sm">LOJA</span>

        {/* Center - Terms */}
        <span className="text-sm font-semibold text-gray-800">Terms & Conditions</span>

        {/* Right - Social Icons */}
        <div className="flex gap-3">
          <a href="#" aria-label="Instagram">
            <FaInstagram className="text-pink-600 w-5 h-5" />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookSquare className="text-blue-600 w-5 h-5" />
          </a>
          <a href="#" aria-label="Pinterest">
            <FaPinterest className="text-red-600 w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
