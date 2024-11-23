/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";  // Make sure you have react-router-dom installed

const AboutUsOverview = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About Us
        </h2>
        
        {/* Short Description */}
        <p className="text-gray-600 text-lg mb-6">
          Introshop is your go-to destination for trendy and high-quality clothing. We offer fast delivery, great customer service, and products that meet the highest standards of quality. Our mission is to make fashion accessible and fun for everyone.
        </p>

        {/* Read More Link */}
        <Link
          to="/about" // Replace with the actual path of your About Us page
          className="text-primary font-semibold text-lg hover:text-gray-700"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default AboutUsOverview;
