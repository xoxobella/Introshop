/* eslint-disable no-unused-vars */
import React from "react";

const SupplierLogos = () => {
  const logos = [
    "../../assets/icons/ACDC.png", // Corrected paths from the public directory
    "../../assets/icons/ACDC.png",
    "../../assets/icons/ACDC.png",
    "../../assets/icons/ACDC.png",
    "../../assets/icons/ACDC.png",
  ];

  return (
    <div className="w-full bg-white py-12">
      {/* Centered "Our Supplier" text */}
      <div className="text-center mb-8">
        <h1 className="font-bold text-2xl md:text-3xl text-gray-800">
          Our Supplier
        </h1>
      </div>

      {/* Fixed logos with hover effect */}
      <div className="flex justify-center items-center space-x-8">
        {logos.map((logo, index) => (
          <div key={index} className="relative group">
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="h-12 transition-transform duration-300 transform group-hover:scale-110"
            />
            {/* Hover background overlay */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplierLogos;
