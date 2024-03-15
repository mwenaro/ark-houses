// HomeAboutUs.tsx

import React from "react";

const HomeAboutUs: React.FC = () => {
  return (
    <section className="p-4 w-full mb-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>

        <div className="mb-6">
          <p>
            EasyTruck is dedicated to revolutionizing the trucking industry by
            providing cutting-edge solutions for logistics and cargo management.
            With a focus on reliability and precision, we understand the
            critical role that transportation plays in your business operations.
            Our commitment is to deliver certainty through state-of-the-art
            tracking, ensuring real-time updates on your truck&apos;s location
            and providing estimated time of arrival predictions for effective
            planning. Going beyond traditional tracking services, we incorporate
            rigorous checks on luggage seals and driver vitals, prioritizing the
            safety and security of your cargo.
          </p>
        </div>

        {/* Motto, Mission, and Vision */}
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-xl font-bold mb-2">Our Motto</h3>
          <p className="mb-4">
            &quot;Driving Certainty, Delivering Reliability.&quot;
          </p>

          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="mb-4">
            &quot;At EasyTruck, our mission is to revolutionize the trucking
            industry by providing cutting-edge solutions that redefine
            reliability, precision, and safety in cargo transportation. We are
            committed to delivering certainty to our clients through real-time
            tracking, estimated time of arrival predictions, and a comprehensive
            approach to cargo and driver management. Our focus is on ensuring
            the seamless, secure, and timely delivery of every shipment
            entrusted to us, setting new standards for excellence in the
            logistics landscape.&quot;
          </p>

          <h3 className="text-xl font-bold mb-2">Our Vision</h3>
          <p>
            &quot;Our vision at EasyTruck is to be the foremost leader in
            innovative trucking solutions, setting the benchmark for reliability
            and safety in cargo transportation. We envision a future where
            businesses can trust EasyTruck as the go-to partner for their
            logistics needs, confident in our ability to provide real-time
            visibility, precise predictions, and unwavering commitment to the
            security and timely delivery of their valuable cargo. Through
            technological advancements and a relentless pursuit of excellence,
            we aim to reshape the trucking industry and contribute to the
            success and growth of our clients.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
