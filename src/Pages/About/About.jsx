/* eslint-disable no-unused-vars */
// AboutUs.js
// eslint-disable-next-line no-unused-vars
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import React, { useState } from "react";

const AboutUs = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Check if both fields are filled
  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };
  return (
    <>
    <Navbar />
    <div className="bg-secondary px-4 md:px-12 lg:px-24 py-12">
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
            src="https://images.pexels.com/photos/4620619/pexels-photo-4620619.jpeg?auto=compress&cs=tinysrgb&w=600"
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
            src="https://images.pexels.com/photos/4622398/pexels-photo-4622398.jpeg?auto=compress&cs=tinysrgb&w=600"
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
            src="https://images.pexels.com/photos/4622227/pexels-photo-4622227.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Stylish clothing"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="bg-white py-12 mt-10" >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 px-6">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Our Company"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Join With Us
          </h2>
          <p className="text-gray-600 mb-6">
            Become part of our amazing community! Sign up now to get updates,
            exclusive offers, and much more.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
                required
              />
            </div>

            {/* Sign Up Button */}
            <div>
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-2 px-4 rounded-md transition ${
                  isFormValid
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;
