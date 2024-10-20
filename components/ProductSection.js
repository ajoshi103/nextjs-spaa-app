// components/ProductSection.js

import Image from "next/image";
export default function ProductSection() {
  return (
    <section className="bg-green-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Top Section with Call to Action */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-6">Visit Our Store and Get Our Product</h2>
            <p className="mb-8 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. 
              Donec tincidunt, quam vestibulum ultricies egestas, elit sapien fermentum est, ut risus viverra.
            </p>
            <button className="bg-white text-green-900 px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
              Shop Now
            </button>
          </div>
          {/* Placeholder for the image or graphic */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="bg-gray-200 h-80 w-64  rounded-t-full  "></div>
            <div className="flex justify-center gap-4 mt-4">
              <div className="w-20 h-20 bg-white rounded-t-full"></div>
              <div className="w-20 h-20 bg-white rounded-t-full"></div>
              <div className="w-20 h-20 bg-white rounded-t-full"></div>
              <div className="w-20 h-20 bg-white rounded-t-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Logos */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl mb-8">Our Product Also Available At</h3>
          <div className="flex justify-center items-center gap-12">
            <Image src="/images/image2.png" alt="Intelo" className="h-12" width={150}
            height={200}/>
            <Image src="/images/image3.png" alt="Bourton" className="h-12" width={250}
            height={200}/>
            <Image src="/images/image4.png" alt="United" className="h-12" width={200}
            height={200}/>
            <Image src="/images/image5.png" alt="McKlein" className="h-12" width={200}
            height={200}/>
          </div>
        </div>
      </div>
    </section>
  );
}
