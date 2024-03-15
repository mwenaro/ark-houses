// HomeContactUs.tsx

import React from 'react';
import { Formik, } from 'formik';
import * as Yup from 'yup';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const HomeContactUs: React.FC = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    message: Yup.string().required('Required'),
  });

  const onSubmit = (values: any) => {
    // Handle form submission logic here
    console.log('Form submitted:', values);
  };

  return (
    <section className="w-full p-4 bg-gray-100 mb-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
           
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-4">Reach Us</h3>
            <p className="text-gray-600 mb-2"> EasyTruck Way</p>
            <p className="text-gray-600 mb-2">CBD, Mombasa, Kenya</p>
            <p className="text-gray-600 mb-2">Phone: +254 7xx -xxx -xxx</p>
            <p className="text-gray-600 mb-2">Email: info@easytruck.com</p>

            {/* Social Icons */}
            <div className="flex mt-4">
              <a href="#" className="mr-4">
                <FaFacebook className="text-blue-600 hover:text-blue-800 h-6 w-6" />
              </a>
              <a href="#" className="mr-4">
                <FaTwitter className="text-blue-400 hover:text-blue-600 h-6 w-6" />
              </a>
              <a href="#" className="mr-4">
                <FaLinkedin className="text-blue-500 hover:text-blue-700 h-6 w-6" />
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactUs;
