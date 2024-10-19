import Navbar from '../components/Navbar'

import BeautySection from '../components/BeautySection';
import Section  from '../components/Section';
import SpecialService from '../components/SpecialService';
import OurStorySection  from '../components/OurStorySection';
import CustomerReviewSection from '../components/CustomerReviewSection';
import SkincareSection from '../components/SkincareSection';
import ProductSection from '../components/ProductSection';
import BlogSection from '../components/BlogSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';



export default function Home() {
  return (
    <>
   
      <Navbar />
      
      <BeautySection />
      <Section/>
      <SpecialService/>
      <OurStorySection/>
      <CustomerReviewSection/>
      <SkincareSection/>
      <ProductSection/>
      <BlogSection/>
      <Newsletter/>
      <Footer/>
      


      
      
      
    </>
  )
}
