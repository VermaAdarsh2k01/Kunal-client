import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import HeroImg from "../assets/images/Hero.png"
import downArrou from "../../public/downArrow.png"
import { FaArrowUp } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/your-profile", icon: <FaFacebook size={24} />, ariaLabel: "Facebook" },
  { label: "Twitter", href: "https://twitter.com/your-profile", icon: <FaTwitter size={24} />, ariaLabel: "Twitter" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-profile", icon: <FaLinkedin size={24} />, ariaLabel: "LinkedIn" },
  // Add more social links here
];


const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    
    <section
      className="w-screen flex justify-center items-center bg-gradient-to-b from-[#1B1F24] to-[#282E36] via-[#1B1F24] via-20% pb-24 sm:pb-32 md:pb-44 lg:pb-0 pt-36 h-screen overflow-hidden px-10" 
      id="home"
    >
        <div className='w-[25%] text-white flex flex-col items-start justify-evenly h-[80%] z-10'>
            <div className='w-[60%] h-4 bg-white mb-20'></div>
            <div className='mb-10'>
              <p className='text-[75px] whitespace-nowrap font-grotesk font-bold z-40'>I'am Kunel Trehan</p>
              <div className='text-[15px] w-[80%]'>Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida. Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida. Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida.</div>
            </div>
            <div className='w-20 h-20 bg-[#075FE4] rounded-full'>
              <img src={downArrou.src}/>
            </div>
        </div>
        <div className='w-[50%] text-white flex items-center justify-center '>
            <img src={HeroImg.src} className='w-[700px] overflow-hidden pt-20' alt='picture' />
        </div>
        <div className='w-[25%] h-[90%]  text-white flex flex-col items-start justify-center '>
          <div className='h-[33%] w-full flex flex-col items-start justify-between border-b border-gray-500 '>
            <p className='text-[32px] font-semibold'>About me</p>
            <p className='text-[16px] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci</p>
            <div className='mt-8 mb-4 text-[#a8a8a8] flex items-center justify-center'>
              <p className=''>Learn More</p>
              <FaArrowUp className='rotate-45 ms-2' />
            </div>
          </div>
          <div className='h-[33%] w-full mt-4 flex flex-col items-start justify-between border-b border-gray-500 ' >
            <p className='text-[32px] font-semibold'>My Work</p>
            <p className='text-[16px] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci</p>
            <div className='mt-10 mb-4 text-[#a8a8a8] flex items-center justify-center'>
              <p className=''>Learn More</p>
              <FaArrowUp className='rotate-45 ms-2' />
            </div>
          </div>
          <div className='h-[33%] w-full flex flex-col items-start gap-5 mt-6 text-4xl semibold '>
            <p>Follow me</p>
            <div className='flex items-center justify-start gap-2'>
                {socialLinks.map(({ href, icon, ariaLabel }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={ariaLabel}
                  className="text-white hover:scale-110 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      {/* <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-secondaryColor text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold">
            Discover new data flow
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-primaryText  px-8 sm:px-8 md:px-20 lg:px-4">
            <h1 className="inline md:hidden">Analytics</h1>
            <h1 className="hidden md:inline">Analytic tools suite</h1>
          </div>
          <h1 className="mt-2 sm:mt-2 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-primaryText  px-8 sm:px-20 md:px-24 lg:px-24">
            for developers
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            Experience seamless business integrations and powerful insights with
            our cutting-edge analytic tools.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <button
              className="contained-button w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
              onClick={() => setIsModalOpen(true)}
              aria-label="Get started"
            >
              Get Started
            </button>
            <button
              className="w-64 sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid  flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-primaryColor transition"
              onClick={() => setIsModalOpen(true)}
              aria-label="Live demo"
            >
              Live demo
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-screen flex justify-center ">
            <img
              src={dashboard.src}
              alt="Dashboard image"
              className="w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl main-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
            />
          </div>
        </motion.div>
        <div className="relative w-screen flex justify-center ">
          <div className="shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="bg-bgDark2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill bg-bgDark1  fill-bgDark1"
              ></path>
            </svg>
          </div>
        </div>
      </div> */}

      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  )
}

export default Hero
