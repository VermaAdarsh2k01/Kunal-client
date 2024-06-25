import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero2 from '../assets/images/Hero2.png';
import { FaArrowUp, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FacebookIcon } from '../assets/icons/FacebookIcon';
import { InstagramIcon } from '../assets/icons/InstagramIcon';
import { TailcastLogo } from '../assets/logos/TailcastLogo';
import { TwitterIcon } from '../assets/icons/TwitterIcon';

export const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com/your-profile', icon: <FacebookIcon />, ariaLabel: 'Facebook' },
  { label: 'Twitter', href: 'https://twitter.com/your-profile', icon: <TwitterIcon />, ariaLabel: 'Twitter' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile', icon: <InstagramIcon />, ariaLabel: 'LinkedIn' },
  // Add more social links here
];

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen lg:h-screen xs:min-h-screen flex justify-center items-center bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pb-10 sm:pb-0 md:pb-0 lg:pb-0 pt-32 lg:pt-24 xl:pt-32 xs:pt-32 xs:pb-0 overflow-hidden px-4 xs:px-10 relative"
      id="home"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <motion.div>
        <div className="w-full h-full max-xs:flex-col max-xs:gap-20 lg:flex relative lg:pt-16">
          <div className="xs:order-1 xs:flex lg:order-2 lg:w-[50%] xl:w-[50%] text-white lg:flex items-center justify-center z-10">
            <div className="relative w-full flex justify-center items-center pb-6">
                <img src={Hero2.src} className="w-[210px] lg:w-[400px] xl:w-[500px] 2xl:[500px] overflow-hidden lg:pt-2" alt="picture" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent " />
            </div>
          </div>
          <div className="xs:order-2 xs:flex xs:w-[100%] lg:w-[25%] xl:w-[25%] lg:order-1 text-white flex flex-col items-start justify-center h-[80%] lg:pt-16 xl:pt-24 z-10">
            <div className="w-[20%] xs:w-[20%] lg:w-[40%] h-2 lg:h-2 bg-white xs:mb-2 lg:mb-10 mb-6 xs:h-2 xs:mt-0 lg:mt-20"></div>
            <div>
              <p className="text-[30px] xs:text-[30px] lg:text-[40px] xl:text-[65px] md:text-4xl whitespace-nowrap font-bold z-40 xs:mt-10 lg:mt-0">I'm Kunal Trehan</p>
              <div className="text-[12px] xs:text-[12px] lg:text-[12px] xl:text-[13px] md:text-[13px] w-[100%] xs:w-[100%] lg:w-[90%] mt-6 xs:mt-6 lg:mt-6 xl:mt-10 text-gray-400 z-20">
                I am Kunal Trehan, a strategic leader with over 25 years of experience in driving business growth and expanding market reach. My expertise lies in unlocking business potential through innovative strategies and visionary leadership. Throughout my career, I have successfully navigated complex market dynamics, establishing prominent brands and achieving double-digit growth.
              </div>
            </div>
          </div>
          <div className="xs:order-3 lg:order-3 lg:w-[25%] xl:w-[20%] h-[90%] text-white flex flex-col lg:gap-0 max-xs:gap-0 items-start justify-center z-10 xs:w-[100%] mt-10 xs:mt-6 lg:mt-0">
            <div className="flex xs:flex lg:flex-col gap-4 lg:gap-0 xs:gap-6">
              <div className="h-[33%] w-full xs:mt-4 lg:mt-0 flex flex-col items-start justify-between">
                <p className="text-[20px] xs:text-[20px] lg:text-[20px] xl:text-[32px] font-semibold">About me</p>
                <p className="text-[10px] xs:text-[10px] 2xl:text-[14px] lg:text-[12px] md:text-[13px] mt-2 h-20 xs:h-20 lg:full text-gray-400">
                  Specializing in driving growth, unlocking business potential, and expanding markets internationally in the furniture, luxury home interiors, and construction industries.
                </p>
                <div className="mt-8 mb-4 lg:mt-8 lg:mb-4 text-[#a8a8a8] flex items-center justify-center border-gray-500 border-b">
                  <a href="#about_me" className="">
                    Learn More
                  </a>
                  <FaArrowUp className="rotate-45 ms-2" />
                </div>
              </div>
              <div className="h-[33%] w-full xs:mt-4 flex flex-col items-start justify-between">
                <p className="text-[20px] xs:text-[20px] lg:text-[20px] xl:text-[32px] font-semibold">My Work</p>
                <p className="text-[10px] xs:text-[10px] lg:text-[12px] md:text-[13px] mt-2 h-20 xs:h-20 lg:h-full text-gray-400">
                  I drive growth, unlock business potential, and expand markets internationally in the furniture, luxury home interiors, and construction industries.
                </p>
                <div className="mt-8 mb-4 text-[#a8a8a8] flex items-center justify-center border-gray-500 border-b">
                  <a href="#work" className="">
                    Learn More
                  </a>
                  <FaArrowUp className="rotate-45 ms-2" />
                </div>
              </div>
            </div>
            <div className="h-[33%] w-full flex flex-col items-start gap-5 mt-6 text-[20px] lg:text-[20px] xl:text-[32px] xs:text-[20px] font-semibold">
              <p>Follow me</p>
              <div className="flex items-center justify-start gap-2 lg:gap-5">
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
          {/* <div className="lg:hidden w-full flex items-center justify-center text-white mt-8">
            <img src={Hero2.src} className="w-[50%]" />
          </div> */}
        </div>
      </motion.div>
      {isModalOpen && <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
    </section>
  );
};

export default Hero;
