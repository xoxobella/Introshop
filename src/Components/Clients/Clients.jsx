/* eslint-disable no-unused-vars */
import React from "react";
import { FaTwitter } from "react-icons/fa"; // React Icons for Twitter

const HappyClients = () => {
  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      username: "@john_doe",
      message: "Absolutely love the quality and service! Highly recommend.",
      date: "Nov 20, 2024",
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "@jane_smith",
      message: "Fast delivery and amazing designs! My go-to clothing brand!",
      date: "Nov 18, 2024",
    },
    {
      id: 3,
      name: "Michael Brown",
      username: "@michael_b",
      message: "Customer support is top-notch. Thank you for a great experience!",
      date: "Nov 15, 2024",
    },
  ];

  return (
    <section className="bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Our Happy Clients
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              {/* Header with Twitter icon and name */}
              <div className="flex items-center space-x-4 mb-4">
                <FaTwitter className="text-blue-500 text-xl" />
                <div>
                  <p className="text-gray-800 font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.username}</p>
                </div>
              </div>

              {/* Message */}
              <p className="text-gray-700 mb-4">{testimonial.message}</p>

              {/* Date */}
              <p className="text-gray-400 text-sm">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
