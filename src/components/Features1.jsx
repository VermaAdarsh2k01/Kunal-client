import { motion } from "framer-motion";

import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import AboutPic from "../assets/images/aboutPic.png"
import Interior from "../assets/images/Mask group (1).png"

export const Features1 = () => {
  return (
    <section
      className="w-full bg-gradient-to-t  to-[#282E36]  from-[#1B1F24] pt-24 -mt-8  sm:-mt-8  xl:-mt-8 2xl:mt-0  md:pt-[12vw] lg:pt-16 xs: xs:pt-18 min-h-screen "
      id="about_me"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="lg:flex max-xs:flex-col-reverse items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16 h-full ">
          <div className="w-1/4 lg:w-2/3 xs:w-full mb-12 lg:mb-0 h-full">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <div className="flex items-center justify-start gap-2">
                <span className=" text-[#075FE4] font-black text-2xl">/</span>
                <p className=" text-2xl font-bold text-white">About me</p>
              </div>
              <h2 className="mt-32 mb-8 xs:mt-20 lg:text-5xl w-[80%] xs:text-[24px] font-extrabold text-white">
                I'am a Business & Workplace Specialist
              </h2>
              <p className="mb-10 text-secondaryText lg:text-lg xs:text-sm">
              As a Business and Workspace Specialist, I excel in driving growth and expanding markets internationally. With expertise in furniture, luxury home interiors, and construction industries, I unlock business potential through strategic planning, robust leadership, and innovative market-entry strategies, delivering exceptional results in highly competitive environments.
              </p>
              <div className="w-full h-1 border-b-2 border-white/20"></div>
                <div className="flex w-full lg:mt-20 xs:mt-12 gap-8">
                  <div className="flex w-1/2  items-center justify-center gap-2">
                    <p className="font-black text-white lg:text-6xl xs:text-4xl">25</p>
                    <span className="font-black text-[#075FE4] lg:text-6xl xs:text-4xl">+</span>
                    <p className="font-semibold text-white lg:text-xl xs:text-sm">years of experience</p>
                  </div>
                  <div className="flex w-1/2  items-center justify-center gap-2">
                    <p className="font-black text-white text-6xl xs:text-4xl">125</p>
                    <span className="font-black text-[#075FE4] ;g:text-6xl xs:text-4xl">+</span>
                    <p className="font-semibold text-white lg:text-xl xs:text-sm">Successful projects</p>
                  </div>
                </div>
            </div>
          </div>
          <div className="xs:hidden w-3/4 mx-auto lg:w-1/3 lg:flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center items-start lg:pl-4 xl:px-8 h-full">
            <img src={Interior.src} alt="about pic" className="mt-20"/>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
