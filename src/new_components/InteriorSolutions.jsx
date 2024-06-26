import { motion } from "framer-motion";
import Collage1 from "../assets/images/collage1.png";
import Collage2 from "../assets/images/collage2.png";
import Collage3 from "../assets/images/collage3.png";
import Collage4 from "../assets/images/collage4.png";
import Collage5 from "../assets/images/collage5.png";
import Collage6 from "../assets/images/collage6.png";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { Testimonials } from "../components/Testimonials";
import { Footer } from "../components/Footer";
import intai1 from "../assets/images/interai1.jpg"
import intai2 from "../assets/images/interai2.jpg"
import intai3 from "../assets/images/interai3.jpg"
import intai4 from "../assets/images/interai4.jpg"
import intai5 from "../assets/images/interai5.jpg"




const BusinessConsultancy = () => {
  return (
    <section className="w-screen bg-black pb-24 sm:pb-32 md:pb-44 lg:pb-0 pt-36 min-h-screen overflow-hidden lg:px-10 relative" id="service">
      {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] z-10 flex" /> */}
      
      {/* Flex container for responsive layout */}
      <div className="relative z-40 xs:px-8 lg:px-2 xl:px-40 flex flex-col lg:flex-row 2xl:flex-row items-center justify-center">
        
        {/* Collage Images Section */}
        <div className="relative xs:w-[100%] lg:w-[55%] lg:ml-6 xl:ml-12">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black to-100% blur-[0.5px] z-40"></div>
          
          <div className="relative w-full lg:mt-0 xl:mt-6 flex items-center justify-center lg:gap-6 gap-2 lg:px-2 px-5 z-20">
            {/* First Column of Images with Motion */}
            <motion.div
              initial={{ opacity: 0, y: '-10%' }}
              animate={{ opacity: 1, y: '0%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="flex flex-col lg:gap-6 gap-2 relative mb-10"
            >
              <img
                src={intai1.src}
                alt="Collage 1"
                className="w-60 rounded-3xl"
              />
              <img
                src={intai2.src}
                alt="Collage 2"
                className="w-60 rounded-3xl"
              />
              <img
                src={intai3.src}
                alt="Collage 3"
                className="w-60 rounded-3xl hidden md:block"
              />
            </motion.div>
            
            {/* Second Column of Images with Motion */}
            <motion.div
              initial={{ opacity: 0, y: '10%' }}
              animate={{ opacity: 1, y: '0%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="flex flex-col lg:gap-6 gap-2 relative md:mt-20 mt-10"
            >
              <img
                src={intai4.src}
                alt="Collage 4"
                className="w-60 rounded-3xl"
              />
              <img
                src={intai5.src}
                alt="Collage 5"
                className="w-60 rounded-3xl"
              />
              <img
                src={intai1.src}
                alt="Collage 6"
                className="w-60 rounded-3xl hidden md:block"
              />
            </motion.div>
          </div>
        </div>

        {/* Business Consultancy Section */}
        <div className="xs:w-[100%] lg:w-[45%] mt-20 xl:mt-32 lg:mt-0 md:mt-0 xs:mt-24 lg:pt-24 xl:pt-16 px-4 lg:px-0 lg:h-screen flex-col items-start mb-0 md:mb-8">
          <p className="text-white font-extrabold text-2xl xs:text-2xl lg:text-4xl xl:text-5xl text-nowrap">Interior Specialist</p>
          <p className="mt-10 xs:mt-10 lg:mt-12 text-sm lg:text-base text-gray-400">
            As a seasoned interior specialist with over 25 years of expertise, I specialize in driving growth and expanding market presence across diverse industries including furniture, luxury home interiors, and construction. My consultancy focuses on strategic planning, market expansion, and innovative business solutions tailored to achieve sustainable success and enhance brand resilience in competitive markets.
          </p>
          <button className="rounded-xl px-6 py-4 mt-10 text-white bg-gradient-to-r from-[#27252F] to-[#3B3947] bg-opacity-50 backdrop-filter backdrop-blur-2xl">
            Book a call
          </button>
        </div>
      </div>
      
      {/* Services Offered Section */}
      <div className="px-1 xs:px-8 lg:px-0 xl:px-24">
        <p className="text-white mt-40 font-extrabold text-2xl md:text-4xl mb-20 px-4">Services Offered</p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-1 lg:gap-10 px-6 md:px-0 lg:px-0">
          <div className="flex flex-col items-start justify-center text-gray-400 lg:text-xl font-bold gap-2 xs:gap-6 lg:gap-2 w-64 md:w-80 lg:w-96 xl:md:w-80">
            <div className="flex items-center justify-center">
              <CheckArrowIcon />
              <p>Leadership Development</p>
            </div>
            <div className="flex items-center justify-center">
              <CheckArrowIcon />
              <p>Strategic Planning</p>
            </div>
            <div className="flex items-center justify-center">
              <CheckArrowIcon />
              <p>Training</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center text-gray-400 lg:text-xl font-bold gap-2 xs:gap-6 lg:gap-2 w-64 md:w-80 lg:w-96 xl:md:w-80">
            <div className="flex items-center justify-center">
              <CheckArrowIcon />
              <p>Executive Coaching</p>
            </div>
            <div className="flex items-center justify-center">
              <CheckArrowIcon />
              <p>Life Coaching</p>
            </div>
            <div className="flex items-center justify-center">
              <CheckArrowIcon />
              <p>Management Consulting</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center text-gray-400 lg:text-xl font-bold gap-2 xs:gap-6 lg:gap-2 w-64 md:w-80 lg:w-96 xl:md:w-80">
            <div className="flex items-center justify-center">
              <CheckArrowIcon />
              <p>Project Management</p>
            </div>
            <div className="flex items-center justify-center">
              <CheckArrowIcon />
              <p>Business Consultancy</p>
            </div>
            <div className="flex items-center justify-center">
              <CheckArrowIcon />
              <p>Brand Consulting</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonial Section */}
      <div className="text-white mt-32 flex-col items-center justify-center">
        <p className="text-2xl md:text-4xl px-4 xl:px-24 lg:px-4 md:px-10 font-black">Word of the clients</p>
        <Testimonials />
      </div>
      <Footer />
    </section>
  );
};

export default BusinessConsultancy;