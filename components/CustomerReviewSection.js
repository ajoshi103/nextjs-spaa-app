import React from 'react';

const CustomerReviewSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0e3a1e] p-8">
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-6 bg-green-900 text-white rounded-lg shadow-lg flex flex-col space-y-6">
          <h2 className="text-3xl font-bold">Review From Our Customer</h2>
          <p className="text-sm italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed
            malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo urna,
            mattis non maximus.
          </p>
          <div>
            <p className="font-semibold">Nikky Kimso</p>
            <p className="text-xs">Customer</p>
          </div>
          <div className="flex space-x-4">
            <button className="text-white hover:text-gray-300">&larr;</button>
            <button className="text-white hover:text-gray-300">&rarr;</button>
          </div>
        </div>

        {/* Right Shape */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="w-[300px] h-[400px] bg-gray-300 rounded-tr-[150px] rounded-br-[150px]"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-green-700 clip-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewSection;
