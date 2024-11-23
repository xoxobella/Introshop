/* eslint-disable no-unused-vars */
import React from 'react';

const Women = () => {
  const products = [
    {
      id: 1,
      title: 'Blue Coated Denim Tube Top',
      price: '299.00',
      image: 'https://images.bestsellerclothing.in/data/only/24-sep-2024/117068501_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', // Replace with actual image URL
      description: 'Get ready to turn heads in this edgy and chic fitted tube dress!',
      buyLink: 'https://example.com/buy-office-table', // Link to Buy Now
    },
    {
      id: 2,
      title: 'Black Jacquard Shimmer Jumpsuit',
      price: '499.00',
      image: 'https://images.bestsellerclothing.in/data/only/16-aug-2024/900874201_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', // Replace with actual image URL
      description: ' while the wide shoulder straps keep things comfy and stylish.',
      buyLink: 'https://example.com/buy-sofa', // Link to Buy Now
    },
  ];

  return (
    <div className="border-t border-gray-300 text-center">
    <div className="bg-secondary min-h-screen p-6">
      {/* Header Section */}
      <header className="text-center mb-8">
        <a href='#'>
        <h1 className="text-4xl font-bold text-gray-800">Women</h1>
        </a>      
      </header>


      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 "
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="object-cover rounded-lg mx-auto mb-4" 
            />

            {/* Product Info */}
            <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
            <p className="text-gray-500 mb-4">{product.description}</p>

            {/* Price and Buttons */}
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-800">${product.price}</span>
              <a
                href={product.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="text-right mr-10 mt-10">
        <a
          href="https://example.com/all-products" // Replace with your Explore More link
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold text-lg hover:underline decoration-black hover:text-gray-700"
        >
          Explore More
        </a>
      </div>
    </div>
    </div>
  );
};

export default Women;
