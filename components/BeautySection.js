
import React from 'react';


const BeautySection = () => {
  return (
    <section className="bg-[#FFF6F3] py-16 flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Image Section */}
        <div className="relative flex-shrink-0 mb-8 md:mb-0">
          <div className="w-64 h-80 bg-gray-300 rounded-tl-full"></div>
          <div className="absolute top-0 left-0 w-24 h-24 bg-green-700 rounded-full -translate-x-10 -translate-y-10"></div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left px-4 md:px-16 max-w-lg">
          <p className="text-green-900 text-sm mb-4">Alive every moment</p>
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Beauty is all about <span className="relative text-green-700">you.
              <span className="absolute inset-x-0 bottom-0 h-4 border-b-4 border-green-700 -mb-2"></span>
            </span>
          </h1>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative flex-shrink-0">
          <div className="w-64 h-80 bg-gray-300 rounded-tr-full"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-900 rounded-full translate-x-10 translate-y-10"></div>
        </div>
      </div>
    </section>
  );
};

export default BeautySection;
