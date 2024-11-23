// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const CategoryCards = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Men Category Card */}
          <Link to="/men" className="group relative block bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img
              src="https://www.easybuyindia.com/wp-content/uploads/2024/01/mens-outfit-ptag-1.jpg"
              alt="Men Category"
              className="object-cover w-full h-64"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-xl font-semibold bg-black bg-opacity-50 group-hover:bg-opacity-75">
              Men
            </div>
          </Link>

          {/* Women Category Card */}
          <Link to="/women" className="group relative block bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img
              src="https://images.bestsellerclothing.in/data/only/29-july-2024/900880001_g0.jpg?width=488&height=650&mode=fill&fill=blur&format=autohttps://via.placeholder.com/400x300?text=Women+Category"
              alt="Women Category"
              className="object-cover w-full h-64"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-xl font-semibold bg-black bg-opacity-50 group-hover:bg-opacity-75">
              Women
            </div>
          </Link>

          {/* Hoodie Category Card */}
          <Link to="/hoodie" className="group relative block bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img
              src="https://img.shopstyle-cdn.com/sim/17/9e/179ece4da8c6d5c08a69906d45fb70e0_best/hoodie.jpg"
              alt="Hoodie Category"
              className="object-cover w-full h-64"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-xl font-semibold bg-black bg-opacity-50 group-hover:bg-opacity-75">
              Hoodie
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
