import React from 'react';

const SkincareSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f9f6f4] p-8 cormo">
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Image Placeholder */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <div className="w-full h-40 bg-gray-300 rounded-tl-[100px] rounded-bl-[100px] relative">
            <div className="absolute top-[-30px] left-[-30px] w-20 h-20 bg-green-900 clip-half-circle"></div>
          </div>
          <div className="w-full h-40 bg-gray-300 rounded-full flex items-center justify-center">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-green-900">
            Expert Skincare for Your <span className="underline decoration-green-600">Beautiful</span> Skin
          </h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in
            pretium. Donec tincidunt, quam vestibulum ultricies egestas, dolor sem laoreet orci, quis
            finibus justo quam at nibh.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-green-600">✔</span>
              <span>Cnsectetur adipiscing elit.</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-600">✔</span>
              <span>Proin lobortis sed sapien.</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-600">✔</span>
              <span>Donec tincidunt, quam.</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-600">✔</span>
              <span>dolor sem laoreet orci, quis.</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-600">✔</span>
              <span>Vestibulum ipsum tortor.</span>
            </li>
          </ul>
          <button className="bg-green-900 text-white px-6 py-2 rounded-full flex items-center space-x-2">
            <span>LEARN MORE</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkincareSection;
