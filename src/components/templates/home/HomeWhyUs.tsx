// HomeWhyUs.tsx

import React from 'react';

const HomeWhyUs: React.FC = () => {
  return (
    <section className="p-4 bg-gray-100 w-full mb-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Why Choose EasyTruck?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex items-center mb-4">
            <div className="bg-yellow-500 text-gray-800 rounded-full p-3 mr-4">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Real-Time Tracking</h3>
              <p>Stay informed with our advanced real-time tracking system, ensuring visibility and control over your shipments throughout the journey.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center mb-4">
            <div className="bg-yellow-500 text-gray-800 rounded-full p-3 mr-4">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Estimated Time of Arrival</h3>
              <p>Plan effectively with our precise estimated time of arrival predictions, enabling you to optimize schedules and resources.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center mb-4">
            <div className="bg-yellow-500 text-gray-800 rounded-full p-3 mr-4">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Security Checks</h3>
              <p>We go beyond tracking by implementing rigorous checks on luggage seals and monitoring driver vitals, ensuring the safety and security of your cargo.</p>
            </div>
          </div>

          {/* Add more features as needed */}
        </div>
      </div>
    </section>
  );
};

export default HomeWhyUs;
