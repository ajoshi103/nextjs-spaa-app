const Newsletter = () => {
    return (
      <section className="bg-green-800 text-white p-8 cormo ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-6 ">
            Get the latest update about our products and services
          </h2>
          <form className="flex justify-center items-center">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="px-4 py-2 w-64 md:w-96 text-black rounded-l-lg outline-none" 
              required 
            />
            <button 
              type="submit" 
              className="bg-white text-black px-6 py-2 rounded-r-lg hover:bg-gray-200 transition">
              SUBSCRIBE &rarr;
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Newsletter;
  