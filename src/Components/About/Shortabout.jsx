/* eslint-disable no-unused-vars */
import React from 'react';

const AboutUs = () => {
  return (
    <div className="border-t border-gray-300 text-center">
    <div className="bg-secondary min-h-screen flex flex-col items-center justify-center px-6">
      {/* Main About Us Section */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 max-w-7xl">
        {/* Left Section: About Us Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            And produce say the ten moments parties. Simple innate summer fat
            appear basket his desire joy. Outward clothes promise at gravity do
            excited. Sufficient particular impossible by reasonable oh
            expression is. Yet preference connection unpleasant yet melancholy
            but end appearance.
          </p>
        </div>

        {/* Right Section: Stats */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-gray-800">1000+</h3>
            <p className="text-gray-500 mt-2">Completed Projects</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-gray-800">250+</h3>
            <p className="text-gray-500 mt-2">On-Going Projects</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-gray-800">500+</h3>
            <p className="text-gray-500 mt-2">Happy Clients</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-gray-800">25</h3>
            <p className="text-gray-500 mt-2">Offices Throughout Globe</p>
          </div>
        </div>
      </div>

      {/* Explore More Button */}
      <div className="mt-10">
  <button className="text-primary font-semibold text-lg hover:underline decoration-black hover:text-gray-700">
    Explore More
  </button>
</div>
</div>
</div>
  );
};

export default AboutUs;
