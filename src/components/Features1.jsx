import { motion } from "framer-motion";

import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import AboutPic from "../assets/images/aboutPic.png"
import Interior from "../assets/images/Mask group (1).png"
import divider from "../assets/images/Vector17.png"

export const Features1 = () => {
  return (
    <section
      className="w-full bg-[#0A0A0A] pt-24 -mt-8  sm:-mt-8  xl:-mt-8 2xl:mt-0  md:pt-[18vw] lg:pt-16 xs:pt-18 min-h-screen "
      id="about_me"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="lg:flex max-xs:flex-col-reverse items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16 h-full ">
          <div className="w-full lg:w-2/3 xs:w-full  lg:mb-0 h-full">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <div className="flex items-center justify-start gap-2">
                <span className=" text-[#075FE4] font-black text-2xl">/</span>
                <p className=" text-2xl xl:text-4xl font-bold text-white">About me</p>
              </div>
              <h2 className="mt-16 xs:mt-20 lg:mt-32 w-[80%] mb-8 text-xl lg:text-3xl xs:text-[24px] xl:text-4xl font-extrabold text-white">
                I'am a Business & Workplace Specialist
              </h2>
              <p className="mb-10 text-secondaryText text-sm lg:text-lg xs:text-sm md:text-lg md:leading-6">
              As a Business and Workspace Specialist, I excel in driving growth and expanding markets internationally. With expertise in furniture, luxury home interiors, and construction industries, I unlock business potential through strategic planning, robust leadership, and innovative market-entry strategies, delivering exceptional results in highly competitive environments.
              </p>
              <img src={divider.src}></img>
              {/* <div className="w-full h-1 border-b-2 border-white/20"></div> */}
                <div className="flex w-full mt-12 lg:mt-20 xs:mt-12 gap-2 xs:gap-8">
                  <div className="flex w-1/2  items-center justify-center gap-2">
                    <p className="font-black text-white text-3xl lg:text-5xl xl:text-6xl xs:text-4xl md:text-6xl">25</p>
                    <span className="font-black text-[#075FE4] text-2xl  xs:text-4xl">+</span>
                    <p className="font-semibold text-white text-[12px] lg:text-xl xs:text-sm md:text-base">years of experience</p>
                  </div>
                  <div className="flex w-1/2  items-center justify-center gap-2">
                    <p className="font-black text-white text-3xl lg:text-5xl xl:text-6xl xs:text-4xl md:text-6xl">125</p>
                    <span className="font-black text-[#075FE4] text-2xl lg:text-5xl xl:text-6xl xs:text-4xl">+</span>
                    <p className="font-semibold text-white text-[12px] lg:text-xl xs:text-sm md:text-base">Successful projects</p>
                  </div>
                </div>
            </div>
          </div>
          <div className="hidden w-3/4 mx-auto lg:w-1/3 lg:flex flex-wrap lg:-mx-4  sm:pr-8 lg:pr-0  lg:pl-0 lg:pt-10 justify-center items-start  xl:px-8 h-full">
            <img src={Interior.src} alt="about pic" className="mt-20"/>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
