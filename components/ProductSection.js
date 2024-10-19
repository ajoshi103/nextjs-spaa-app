import React from 'react';

const ProductSection = () => {
  return (
    <section className="bg-green-900 py-16 flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section (Text & Button) */}
        <div className="text-white text-left max-w-sm mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Product
            <span className="block w-16 h-1 bg-white mt-2"></span>
          </h2>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a href="#" className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full font-semibold">
            SHOP NOW
            <span className="ml-2">→</span>
          </a>
        </div>

        {/* Right Section (Product Images) */}
        <div className="flex space-x-6 overflow-x-auto">
          <div className="w-40 h-60 bg-gray-300 rounded-t-full"></div>
          <div className="w-40 h-60 bg-gray-300 rounded-t-full"></div>
          <div className="w-40 h-60 bg-gray-300 rounded-t-full"></div>
          <div className="w-40 h-60 bg-gray-300 rounded-t-full"></div>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute bottom-8 flex space-x-8">
        <span className="text-white cursor-pointer">←</span>
        <span className="text-white cursor-pointer">→</span>
      </div>
    </section>
  );
};

export default ProductSection;
