import { motion } from "framer-motion";

import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import AboutPic from "../assets/images/aboutPic.png"
import Feat2_1 from "../assets/images/feat2_1.png"
import Feat2_2 from "../assets/images/feat2_2.jpg"
import client1 from "../assets/images/client1.png"
import client2 from "../assets/images/client2.png"
import client3 from "../assets/images/client3.png"
import {CarouselClient} from "../new_components/CarouselClient.jsx"

export const Features2 = () => (
  <section id="work" className="w-full bg-[#0A0A0A] xs:mb-0 pt-4 md:pt-32">
    {/* <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={feature5.src}
                alt="Feature image 5"
                className="rounded-xl  main-border-gray"
              />
            </div>
            <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
              <img
                src={feature6.src}
                alt="Feature image 6"
                className="rounded-xl  main-border-gray"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="block-subtitle">Make Data-Driven Decisions</span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Issue tracking you’ll enjoy using
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
              Monitor and track data issues with ease using our intuitive and
              efficient issue tracking system. Stay ahead of potential problems
              and improve your workflow.
            </p>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Collaborative environment</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Smart issue categorization</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Customizable notifications</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div> */}
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16 xs:mb-0">
          <div className="w-full lg:mb-0 h-full">
            <div className="mx-2 lg:mx-auto xs:mx-2 w-[100%] xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[85%] min-h-screen flex flex-col xs:items-start jsutify-center mb-20 ">
              <p className="text-2xl  xs:text-2xl lg:text-3xl text-white font-black lg:mt-20 xs:mt-0 mb-10 xs:mb-10 lg:mb-0">Professional Journey</p>
              <div className="w-full lg:px-10 xs:px-0 flex flex-col xs:flex-row mt-12 lg:mt-24 xs:mt-12 items-center xs:items-start justify-center gap-8 xs:gap-8 lg:gap-10">
                <img src={Feat2_1.src} className="w-[45%] xs:w-[45%] lg:w-[40%] rounded-3xl"/>
                <div className="w-[100%] xs:w-[40%] flex flex-col items-start justify-between lg:mt-14 xs:mt-0 ">
                  <p className="text-white lg:text-2xl xs:text-lg md:text-2xl font-bold"> <span className=" text-[#075FE4] font-black text-2xl">/</span> How i started</p>
                  <p className=" mt-3 lg:leading-[20px] text-[14px] xs:text-[14px] lg:text-base md:text-[16px] text-gray-400">My journey began with a passion for transforming spaces and creating functional yet elegant environments. Starting as a junior sales executive in the furniture industry, I quickly climbed the ranks by consistently delivering innovative solutions and driving significant sales growth. </p>
                </div>
              </div>
              <div className="w-full lg:px-10 xs:px-0 flex flex-col xs:flex-row-reverse mt-20 lg:mt-10 xs:mt-20  items-center xs:items-start justify-center gap-8 xs:gap-8 lg:gap-10">
                <img src={Feat2_2.src} className="w-[45%] xs:w-[45%] lg:w-[40%] rounded-3xl"/>
                <div className="w-[100%] xs:w-80  flex flex-col items-start justify-between lg:mt-16 xl:mt-32 xs:mt-0">
                  <p className="text-white lg:text-2xl xs:text-lg font-bold md:text-2xl"> <span className=" text-[#075FE4] font-black text-2xl mr-1">/</span>My Journey</p>
                  <p className="mt-3 lg:leading-[20px] text-[14px] xs:text-[14px] lg:text-base md:text-[16px] text-gray-400">Over the years, I honed my skills in strategic planning, leadership, and market expansion, ultimately establishing myself as a specialist in the furniture, luxury home interiors, and construction industries.</p>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="w-[100%] lg:w-[80%] xl:w-[50%] xs:w-[100%] border-b border-white/50"></div>
            </div>
            <div className=" w-full flex flex-col lg:flex xs:flex-col items-center justify-between py-10 lg:py-20 pt-8 lg:pt-8 xs:pt-8 xs:gap-10 xs:mb-5 lg:mb-0">
              <p className="text-2xl lg:text-3xl xs:text-2xl font-bold text-white ">Previously worked with</p>
              <CarouselClient />
            </div>
          </div>
        </div>
      </motion.div>
  </section>
);
