// eslint-disable-next-line no-unused-vars
import React from 'react';

const MarqueeText = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex space-x-16 animate-marquee">
        <p className="whitespace-nowrap flex h-10 items-center justify-center px-4 text-sm font-medium text-black sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>
        <p className="whitespace-nowrap flex h-10 items-center justify-center px-4 text-sm font-medium text-black sm:px-6 lg:px-8">
          20% off on all accessories. Limited time only!
        </p>
        <p className="whitespace-nowrap flex h-10 items-center justify-center px-4 text-sm font-medium text-black sm:px-6 lg:px-8">
          New arrivals are here! Check out the latest styles.
        </p>
      </div>
    </div>
  );
};

export default MarqueeText;
