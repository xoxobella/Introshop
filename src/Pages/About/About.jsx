// AboutUs.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar.jsx'

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <div className="bg-white px-4 md:px-12 lg:px-24 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-gray-600 mt-2">Learn, grow, and dress with confidence at Introshop</p>
      </div>

      {/* Our Vision */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 md:pr-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 mt-4">
            At Introshop, we aim to empower individuals with trendy, comfortable, 
            and sustainable clothing. We believe fashion should not just be stylish 
            but also a reflection of personality and values.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="https://via.placeholder.com/500"
            alt="Team discussion"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Our Approach */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-12">
        <div className="md:w-1/2 md:pl-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Approach</h2>
          <p className="text-gray-600 mt-4">
            Our approach combines creativity, quality craftsmanship, and ethical 
            production. We collaborate with top designers and manufacturers to deliver 
            exceptional clothing to our customers.
          </p>
          <ul className="list-disc text-gray-600 pl-5 mt-4">
            <li>Customer-first designs</li>
            <li>High-quality fabrics</li>
            <li>Eco-friendly packaging</li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="https://via.placeholder.com/500"
            alt="Comfortable clothing"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Our Process */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Process</h2>
          <p className="text-gray-600 mt-4">
            From concept to delivery, we ensure every step of our process reflects 
            our commitment to quality and sustainability. Our process includes:
          </p>
          <ul className="list-disc text-gray-600 pl-5 mt-4">
            <li>Designing with innovation</li>
            <li>Sourcing responsibly</li>
            <li>Delivering with care</li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="https://via.placeholder.com/500"
            alt="Stylish clothing"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
