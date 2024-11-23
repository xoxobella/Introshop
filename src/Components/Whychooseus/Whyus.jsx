/* eslint-disable no-unused-vars */
import React from "react";
import { FaShippingFast, FaStar, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShippingFast size={40} className="text-gray-800" />,
      title: "Fast Delivery",
      description: "We ensure quick and efficient delivery for all your orders.",
    },
    {
      icon: <FaStar size={40} className="text-gray-800" />,
      title: "Quality Products",
      description: "Our products are made with the finest materials and care.",
    },
    {
      icon: <FaHeadset size={40} className="text-gray-800" />,
      title: "Customer Support",
      description: "We’re available 24/7 to answer your questions and assist you.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Why Choose Us
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Discover why our customers love shopping with us.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
    