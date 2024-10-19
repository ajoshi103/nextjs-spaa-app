import React from 'react';

const OurStorySection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f8f5f2] p-8">
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start">
        {/* Left Shape */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="w-[300px] h-[400px] bg-gray-300 rounded-tl-[150px] rounded-bl-[150px]"></div>
          <div className="absolute top-4 left-4 w-20 h-20 bg-green-800 clip-half-circle"></div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 p-6 bg-green-900 text-white rounded-lg shadow-lg flex flex-col space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed
            malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo urna,
            mattis non maximus.
          </p>
          <button className="mt-4 px-6 py-2 bg-white text-green-900 rounded-full font-semibold flex items-center w-fit">
            READ MORE <span className="ml-2">&rarr;</span>
          </button>
        </div>

        {/* Bottom Statistic Section */}
        <div className="absolute bottom-4 md:bottom-0 right-0 flex flex-col md:flex-row md:justify-end md:items-center space-y-4 md:space-y-0 md:space-x-8 mt-8">
          <div className="text-center">
            <span className="text-3xl font-bold text-green-800">955+</span>
            <p className="text-sm text-green-800">Happy Customer</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-green-800">240+</span>
            <p className="text-sm text-green-800">Happy Customer</p>
          </div>
        </div>

        {/* Bottom Shape */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-700 clip-half-circle-rotate"></div>
      </div>
    </div>
  );
};

export default OurStorySection;
