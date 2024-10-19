export default function Section() {
    return (
      <div>
        {/* Other sections of your homepage */}
  
        {/* New Product Section */}
        <section className="bg-green-900 text-white py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-left md:pr-10 mdd">
              <h2 className="text-4xl font-bold mb-4">Our Product</h2>
              <p className="text-lg mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="#"
                className="inline-block bg-white text-green-900 py-3 px-6 rounded-full font-semibold hover:bg-gray-300 transition"
              >
                Shop Now
                <span className="ml-2">→</span>
              </a>
            </div>
  
            {/* Product Image Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
              {/* Placeholder for products */}
              <div className="flex space-x-6">
                <div className="bg-gray-300 h-40 w-20 rounded-t-full"></div>
                <div className="bg-gray-300 h-40 w-20 rounded-t-full"></div>
                <div className="bg-gray-300 h-40 w-20 rounded-t-full"></div>
              </div>
            </div>
          </div>
  
          {/* Arrows for navigation */}
          <div className="text-center mt-10">
            <button className="text-white p-2 mr-4">
              ←
            </button>
            <button className="text-white p-2">
              →
            </button>
          </div>
        </section>
  
        {/* Other sections can go here */}
      </div>
    );
  }
  