
 import Image  from "next/image";

const Footer = () => {
    return (
      <footer className="bg-green-900 text-white p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div>
          <Image src = "/images/image1.png" alt='Chloro' width={100} height={100}/>
            <p className="text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis est sapien in pretium.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-gray-300"> 
                {/* Insert an icon or an image for the logo */}
                <i className="fab fa-facebook-f"></i> 
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-300"> 
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-300"> 
                <i className="fab fa-instagram"></i> 
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
  
          {/* Product Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul>
              <li><a href="#" className="hover:underline">Skincare</a></li>
              <li><a href="#" className="hover:underline">Make Up</a></li>
              <li><a href="#" className="hover:underline">Shampoo</a></li>
            </ul>
          </div>
  
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul>
              <li><a href="#" className="hover:underline">Our Shop</a></li>
              <li><a href="#" className="hover:underline">Career</a></li>
              <li><a href="#" className="hover:underline">Specialist</a></li>
            </ul>
          </div>
  
          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Help</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          Copyright © 2018 ASG Project
        </div>
      </footer>
    );
  };
  
  export default Footer;
  