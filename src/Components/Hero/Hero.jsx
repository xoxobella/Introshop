// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "https://images.bestsellerclothing.in/live/image/catalog/brandstore/bestseller/banners/1920-x-640px-Only-Basic-On-Repeat-HP-web_25092024.jpg",
      text: "Welcome to Our Website",
      link: "#explore1"
    },
    {
      src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/home_Page_1.jpg?format=webp&w=1366&dpr=1.0",
      text: "Shop the Latest Trends",
      link: "#explore2"
    },
    {
      src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/HOMPAGE.jpg?format=webp&w=1366&dpr=1.0",
      text: "Free Delivery on Orders Over $100",
      link: "#explore3"
    }
  ];

  // Automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full z-10 h-96 overflow-hidden">
      <div className="absolute inset-0 flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img src={image.src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white p-4">
              <h2 className="text-3xl font-semibold">{image.text}</h2>
            </div> */}
            
            {/* Right-Center Box with Explore Link */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">{image.text}</h3>
              <a href={image.link} className="mt-2 inline-block text-indigo-600 hover:text-indigo-800 text-sm font-medium">Explore</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
