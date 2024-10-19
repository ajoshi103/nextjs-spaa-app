// components/BlogSection.js
export default function BlogSection() {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-green-900 mb-4">Blog and <span className="underline">News</span></h2>
          <p className="text-lg text-gray-600 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sod sapien in pretium. Donec tincidunt, quam.
          </p>
  
          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {/* Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg rounded-t-full">
              <div className="bg-gray-300 h-48 rounded-t-lg"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">
                  A photographer shows the beauty transition
                </h3>
                <a href="#" className="text-green-900 font-semibold flex items-center hover:underline">
                  Read More <span className="ml-2">&rarr;</span>
                </a>
              </div>
            </div>
  
            {/* Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg rounded-t-full">
              <div className="bg-gray-300 h-48 rounded-t-lg"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">
                  Natural look: The evolution of implants
                </h3>
                <a href="#" className="text-green-900 font-semibold flex items-center hover:underline">
                  Read More <span className="ml-2">&rarr;</span>
                </a>
              </div>
            </div>
  
            {/* Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg rounded-t-full">
              <div className="bg-gray-300 h-48 rounded-t-lg"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">
                  Russian prosecutor seeks to Dolce and Gabbana
                </h3>
                <a href="#" className="text-green-900 font-semibold flex items-center hover:underline">
                  Read More <span className="ml-2">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  