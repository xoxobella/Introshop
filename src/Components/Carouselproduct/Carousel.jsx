/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaShoppingCart } from "react-icons/fa";

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(null);
  const autoPlayInterval = useRef(null);

  const products = [
    {
      id: 1,
      name: "Classic Denim Jacket",
      price: 89.99,
      description: "Timeless denim jacket with modern styling",
      image: "images.unsplash.com/photo-1516762689617-e1cffcef479d"
    },
    {
      id: 2,
      name: "Cotton Summer Dress",
      price: 59.99,
      description: "Light and breezy summer dress perfect for warm days",
      image: "images.unsplash.com/photo-1515886657613-9f3515b0c78f"
    },
    {
      id: 3,
      name: "Wool Blend Coat",
      price: 149.99,
      description: "Elegant winter coat made from premium wool blend",
      image: "images.unsplash.com/photo-1539533113208-f6df8cc8b543"
    },
    {
      id: 4,
      name: "Linen Shirt",
      price: 45.99,
      description: "Comfortable linen shirt for casual occasions",
      image: "images.unsplash.com/photo-1598033129183-c4f50c736f10"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayInterval.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(autoPlayInterval.current);
  }, [currentSlide, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div
        className="relative overflow-hidden rounded-lg shadow-xl"
        role="region"
        aria-label="Product carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full flex-shrink-0"
              role="group"
              aria-roledescription="slide"
            >
              <div className="relative group">
                <img
                  src={`https://${product.image}`}
                  alt={product.name}
                  className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f";
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-6 transform transition-transform duration-300">
                  <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                  <p className="text-gray-200 mb-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-white text-black px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-200 transition-colors duration-300"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <FaShoppingCart />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition-all duration-300"
          aria-label="Previous slide"
        >
          <FaArrowLeft className="text-black text-xl" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition-all duration-300"
          aria-label="Next slide"
        >
          <FaArrowRight className="text-black text-xl" />
        </button>

        <div className="absolute bottom-28 left-0 right-0 flex justify-center space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 bg-white bg-opacity-50 px-3 py-1 rounded-full text-sm hover:bg-opacity-75 transition-all duration-300"
        >
          {isAutoPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
