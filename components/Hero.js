import React from 'react'

const Hero = () => {
  return (
    <section className="bg-green-900 text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 container">
        <h2 className=" content text-4xl md:text-6xl font-bold mb-6">
          A <span className=" underline">whole new</span> world, <br />
          a whole <span className=" underline">new look</span>
        </h2>
        <p className="text-gray-300 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium.</p>
        <a href="#" className="bg-white text-green-900 px-6 py-2 rounded-full">Discover More &rarr;</a>
      </div>
      <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
        <div className="flex space-x-4 ">
          <div className="w-20 h-40 bg-gray-300 rounded-t-full"></div>
          <div className="w-20 h-40 bg-gray-300 rounded-t-full"></div>
          <div className="w-20 h-40 bg-gray-300 rounded-t-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
