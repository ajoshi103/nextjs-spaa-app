import Head from 'next/head';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chloro</title>
      </Head>
      <main className="min-h-screen bg-green-900 text-white">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-10 py-5">
          <Image src = "/images/image1.png" alt='Chloro' width={100} height={100}/>
          <ul className="flex space-x-8">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Pages</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
           
          </ul>
        <ul className='flex space-x-5'>
          <Image src="/images/search.png" alt='png' width={20} height={20}/>
          <Image src="/images/section.png" alt='png' width={20} height={20}/>
          </ul>
        
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col justify-center items-start px-10 py-20">
          <h1 className="text-6xl font-light">
            A whole <span className="font-bold underline decoration-emerald-500">new</span> world, <br />
            a whole <span className="font-bold underline decoration-emerald-500">new</span> look
          </h1>
          <p className="mt-5 text-lg text-gray-300 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum.
          </p>
          <a href="#" className="mt-8 inline-block bg-white text-green-900 px-6 py-3 rounded-lg text-lg font-semibold">
            DISCOVER MORE
          </a>
        </section>

        {/* Shapes Section */}
        <section className="relative mt-10">
          <div className="flex justify-center space-x-10">
            <div className="w-52 h-80 bg-gray-400 rounded-t-full"></div>
            <div className="w-52 h-80 bg-gray-400 rounded-t-full"></div>
            <div className="w-52 h-80 bg-gray-400 rounded-t-full"></div>
          </div>
          <div className="absolute left-0 bottom-0">
            <div className="w-20 h-20 bg-green-700 rounded-full"></div>
          </div>
          <div className="absolute right-0 bottom-0">
            <div className="w-20 h-20 bg-green-500 rounded-full"></div>
          </div>
        </section>
      </main>
    </>
  );
}
