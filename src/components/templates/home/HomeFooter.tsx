// HomeFooter.tsx

import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const HomeFooter: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="max-w-3xl mx-auto">
        {/* Site Links */}
        <div className="flex justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-1">
                <a href="#">Home</a>
              </li>
              <li className="mb-1">
                <a href="#">About Us</a>
              </li>
              <li className="mb-1">
                <a href="#">Services</a>
              </li>
              <li className="mb-1">
                <a href="#">Contact</a>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-xl font-bold mb-2">Connect with Us</h3>
            <div className="flex space-x-4">
              <a href="#">
                <FaFacebook className="text-blue-600 hover:text-blue-800 h-6 w-6" />
              </a>
              <a href="#">
                <FaTwitter className="text-blue-400 hover:text-blue-600 h-6 w-6" />
              </a>
              <a href="#">
                <FaLinkedin className="text-blue-500 hover:text-blue-700 h-6 w-6" />
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p className="text-gray-600 mb-2"> EasyTruck Way</p>
          <p className="text-gray-600 mb-2">CBD, Mombasa, Kenya</p>
          <p className="text-gray-600 mb-2">Phone: +254 7xx -xxx -xxx</p>
          <p className="text-gray-600 mb-2">Email: info@easytruck.com</p>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500">
          <p>&copy; 2024 EasyTruck. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
