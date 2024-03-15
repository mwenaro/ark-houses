// Header.tsx

import Link from 'next/link';
import React from 'react';
import { FaTruck } from 'react-icons/fa';


const HomeHeader: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 w-full ">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <FaTruck className="inline-block mr-2" />
          EasyTruck
        </Link>

        <div className="flex flex-col items-end">
          {/* <p className="text-sm mb-1">Delivering Certainty with Reliable Tracking and Arrival Predictions</p> */}

          {/* <nav className="flex space-x-4">
            <Link href="/about" className="hover:text-yellow-500">
              About
            </Link>
            <Link href="/services" className="hover:text-yellow-500">
              Services
            </Link>
            <Link href="/contact" className="hover:text-yellow-500">
              Contact
            </Link>
            <Link href="/testimonials" className="hover:text-yellow-500">
              Testimonials
            </Link>
          </nav> */}
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
