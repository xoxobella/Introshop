/* eslint-disable no-unused-vars */
import React from 'react';

const Men = () => {
  const products = [
    {
      id: 1,
      title: 'Slim Fit Jacket',
      price: '2000.00',
      image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fee%2F85%2Fee85b3d8d04069d72069a7dd2e32e1625c41d7ea.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]', // Replace with actual image URL
      description: 'Modern office Suit.',
      buyLink: 'https://example.com/buy-office-table', // Link to Buy Now
    },
    {
      id: 2,
      title: 'Regular Fit Tailored trousers',
      price: '1999.00',
      image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff0%2Fcb%2Ff0cbe3e88c38ef495d337258faddd7918e1a697a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]', // Replace with actual image URL
      description: 'Comfortable and stylish Clothes for you.',
      buyLink: 'https://example.com/buy-sofa', // Link to Buy Now
    },
  ];

  return (
    <div className="border-t border-gray-300 text-center">
    <div className="bg-secondary min-h-screen p-6">
      {/* Header Section */}
      <header className="text-center mb-8">
      <a href='#'>
        <h1 className="text-4xl font-bold text-gray-800">Men</h1>
        </a>   
      </header>

      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4">
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="object-cover rounded-lg mx-auto mb-4" // Set image to 250x250
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

export default Men;
