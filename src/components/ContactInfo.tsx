import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

const ContactInfo: React.FC = () => {
  return (
    <div className="w-full  p-4 ">
      <h2 className="text-xl font-semibold mb-2 text-center">Contact Us:</h2>
      <div className='flex justify-between px-20'><p className="mb-1" title='Call +254700430157'>
        <a href="tel:254700430157"><FaPhone className="inline mr-2" /> Call</a>
      </p>
        <p className="mb-1" title='email us at macsweeny@lifenity.ae'>
          <a href="mailto:macsweeny@lifenity.ae"><FaEnvelope className="inline mr-2" /> Email</a>
        </p>
        <p>
          <FaMapMarker className="inline mr-2" /> Address: Mombasa, Kenya
        </p></div>

    </div>
  );
};

export default ContactInfo;
