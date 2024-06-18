import { motion } from "framer-motion";

import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import AboutPic from "../assets/images/aboutPic.png"

export const Features1 = () => {
  return (
    <section
      className="w-full bg-gradient-to-t  to-[#282E36]  from-[#1B1F24] pt-24 -mt-8  mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0  md:pt-[12vw] lg:pt-16"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16 h-screen font-grotesk">
          <div className="w-full lg:w-2/3 mb-12 lg:mb-0 h-full">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <div className="flex items-center justify-start gap-2">
                <span className="font-grotesk text-[#075FE4] font-black text-2xl">/</span>
                <p className="font-grotesk text-2xl font-bold text-white">About me</p>
              </div>
              <h2 className="mt-32 mb-8 text-4xl lg:text-5xl block-big-title w-[80%]">
                I'am a Business & Workplace Specialist
              </h2>
              <p className="mb-10 text-secondaryText text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
              </p>
              <div className="w-full h-1 border-b-2 border-white/20"></div>
                <div className="flex w-full mt-20 gap-8">
                  <div className="flex w-1/2  items-center justify-center gap-2">
                    <p className="font-black text-white text-6xl">25</p>
                    <span className="font-black text-[#075FE4] text-6xl">+</span>
                    <p className="font-semibold text-white text-xl">years of experience</p>
                  </div>
                  <div className="flex w-1/2  items-center justify-center gap-2">
                    <p className="font-black text-white text-6xl">125</p>
                    <span className="font-black text-[#075FE4] text-6xl">+</span>
                    <p className="font-semibold text-white text-xl">Successful projects</p>
                  </div>
                </div>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/3 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center items-start lg:pl-4 xl:px-8 h-full">
            <img src={AboutPic.src} alt="about pic" className=""/>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
