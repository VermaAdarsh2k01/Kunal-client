import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import Hero2 from "../assets/images/Hero2.png"
import { FaArrowUp } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";


export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/your-profile", icon:<FacebookIcon />, ariaLabel: "Facebook" },
  { label: "Twitter", href: "https://twitter.com/your-profile", icon: <TwitterIcon />, ariaLabel: "Twitter" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-profile", icon: <InstagramIcon />, ariaLabel: "LinkedIn" },
  // Add more social links here
];


const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    
    <section
      className="w-screen lg:h-screen xs:min-h-screen flex justify-center items-center bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pb-24 sm:pb-32 md:pb-44 lg:pb-0 lg:pt-36 xs:pt-32 xs:pb-0 overflow-hidden  px-10 relative" 
      id="home"
    >
      
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full" />
       <motion.div>
        <div className='xs:order-1 lg:order-1 w-full h-full  max-xs:flex-col max-xs:gap-20 lg:flex relative lg:pt-32'>
          <div className='xs:w-[100%] lg:w-[25%] text-white flex flex-col items-start justify-center h-[80%] lg:pt-16 z-10'>
              <div className='lg:w-[40%] lg:h-2 bg-white lg:mb-20 xs:w-[20%] xs:h-2'></div>
              <div>
                <p className='xs:text-[30px] lg:text-[65px] whitespace-nowrap font-bold z-40 xs:mt-10 lg:mt-0'>I'am Kunel Trehan</p>
                <div className='xs:text-[12px] lg:text-[13px] w-[80%] xs:w-[100%] xs:mt-6 lg:mt-0 text-gray-400 z-20'>I am Kunal Trehan, a strategic leader with over 25 years of experience in driving business growth and expanding market reach. My expertise lies in unlocking business potential through innovative strategies and visionary leadership. Throughout my career, I have successfully navigated complex market dynamics, establishing prominent brands and achieving double-digit growth.</div>
              </div>
          </div>
          <div className=' xs:order-3 lg:order-2 lg:w-[50%] xs:hidden text-white lg:flex items-center justify-center  z-10 '>
              <img src={Hero2.src} className='w-[500px] overflow-hidden lg:pt-2' alt='picture' />
          </div>
          <div className='xs:order-2 lg:order-3 lg:w-[25%] h-[90%] text-white flex flex-col max-xs:gap-12 items-start justify-center z-10 xs:w-[100%] xs:mt-6 lg:mt-0 '>
            <div className='xs:flex lg:flex-col xs:gap-6 '>
              <div className='h-[33%] w-full xs:mt-4 lg:mt-0 flex flex-col items-start justify-between '>
                <p className='lg:text-[32px] font-semibold xs:text-[20px]'>About me</p>
                <p className='xs:text-[10px] lg:text-[13px] mt-2 xs:h-20 lg:full text-gray-400'>I am  a strategic leader specializing in driving growth, unlocking business potential, and expanding markets internationally in the furniture, luxury home interiors, and construction industries.</p>
                <div className='mt-8 mb-4 text-[#a8a8a8] flex items-center justify-center border-gray-500 border-b'>
                  <a 
                    href="#about_me"
                    className=''>Learn More</a>
                  <FaArrowUp className='rotate-45 ms-2'/>
                </div>
              </div>
              <div className='h-[33%] w-full mt-4 flex flex-col items-start justify-between' >
                <p className='lg:text-[32px] xs:text-[20px] font-semibold'>My Work</p>
                <p className='lg:text-[13px] mt-2 xs:text-[10px] xs:h-20 lg:h-full text-gray-400'>I drive growth, unlock business potential, and expand markets internationally in the furniture, luxury home interiors, and construction industries.</p>
                <div className='mt-8 mb-4 text-[#a8a8a8] flex items-center justify-center border-gray-500 border-b'>
                  <a 
                    href="#work"
                    className=''>Learn More</a>
                  <FaArrowUp className='rotate-45 ms-2'/>
                </div>
              </div>
            </div>
            <div className='h-[33%] w-full flex flex-col items-start gap-5 mt-6 lg:text-[32px] xs:text-[20px] font-semibold '>
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
          <div className='lg:hidden w-full flex items-center justify-center text-white mt-8'>
            <img src={Hero2.src} className='w-[50%]'/>
          </div>
        </div>
        </motion.div>
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

export default Hero;


