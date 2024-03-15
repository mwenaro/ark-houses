// AboutUs.tsx

import React from 'react';

const HomeAboutUs: React.FC = () => {
  return (
    <section className="p-4 w-full">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About EasyTruck</h2>

        <p className="mb-4">
          EasyTruck is dedicated to revolutionizing the trucking industry by providing cutting-edge solutions
          for logistics and cargo management. With a focus on reliability and precision, we understand the
          critical role that transportation plays in your business operations.
        </p>

        <p className="mb-4">
          Our state-of-the-art tracking system ensures that you have real-time updates on your truck&apos;s location,
          and our estimated time of arrival predictions offer you the certainty you need for effective planning.
          We go beyond traditional tracking services by incorporating rigorous checks on luggage seals and driver
          vitals, prioritizing the safety and security of your cargo.
        </p>

        <p className="mb-4">
          At EasyTruck, we believe in accountability and excellence. Our rating system evaluates drivers and trucks
          based on timely deliveries, completion of journeys, and overall performance. This commitment to quality
          ensures that your shipments are in reliable hands every step of the way.
        </p>
      </div>
    </section>
  );
};

export default HomeAboutUs;
