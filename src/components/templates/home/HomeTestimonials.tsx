// SocialProof.tsx

import React from "react";

const SocialProof: React.FC = () => {
  return (
    <section className="w-full p-4 bg-gray-100 mb-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-md shadow-md mb-4">
            <p className="text-gray-600 mb-4">
              &quot;EasyTruck has transformed the way we manage our logistics.
              The real-time tracking and security checks ensure the safety of
              our shipments, and the estimated time of arrival predictions have
              been incredibly accurate.&quot;
            </p>
            <p className="text-gray-800 font-semibold">
              - Jane Doe, Logistics Manager
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-md shadow-md mb-4">
            <p className="text-gray-600 mb-4">
              &quot;Choosing EasyTruck was a game-changer for our business. The
              reliability and precision they offer have enhanced our operations,
              and the security measures provide peace of mind. Highly
              recommended!&quot;
            </p>
            <p className="text-gray-800 font-semibold">- John Smith, CEO</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-md shadow-md mb-4">
            <p className="text-gray-600 mb-4">
              &quot;We have been impressed with EasyTruck&apos;s commitment to
              excellence. Their real-time tracking system and efficient services
              have streamlined our logistics, making them an invaluable partner
              in our supply chain.&quot;
            </p>
            <p className="text-gray-800 font-semibold">
              - Emily Johnson, Operations Director
            </p>
          </div>

          {/* Add more testimonials or social proof as needed */}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
