export default function SpecialService() {
  const services = [
    { title: 'Face Scrub', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', },
    { title: 'Face Massage', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Body Massage', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Botox Filler', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Pedicure', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Face Cleanser', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <section className="py-16 ">
      <div className="text-center mb-12  ">
        <h2 className="text-3xl font-semibold">
          Special Service from <span className="text-black">Chloro</span>
        </h2>
        <p className="mt-4 text-gray-600 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem sapien in pretium.
        </p>
      </div>
      {/* Grid for services */}
      <div className=" flex justify-center space-x-6 py-20 ">
        {services.map((service, index) => (
          <div key={index} className="  bg-gray-300  w-40 h-60 rounded-b-full shadow-lg p-6 text-center">
            <div className=" mb-4"></div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <a href="#" className="inline-block mt-4 text-green-500 font-semibold hover:underline">
              Learn More &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
