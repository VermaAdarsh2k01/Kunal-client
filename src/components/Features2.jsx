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

export const Features2 = () => (
  <section className="w-full bg-gradient-to-b from-[#1B1F24] to-[#282E36] via-[#1B1F24] mb-12  lg:mb-24 pt-4">
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
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16 mb-20 ">
          <div className="w-full mb-12 lg:mb-0 h-full">
            <div className="mx-auto lg:mx-auto w-[70%] sm:w-4/5 md:w-3/4 lg:w-[85%] min-h-screen flex flex-col jsutify-center mb-20 ">
              <p className="text-3xl text-white font-black mt-20">Professional Journey</p>
              <div className="w-full px-36 flex mt-20 items-start justify-between">
                <img src={Feat2_1.src} className="w-[50%] rounded-3xl"/>
                <div className="w-[40%]  flex flex-col items-start justify-between mt-14 ">
                  <p className="text-white text-2xl font-bold"> <span className=" text-[#075FE4] font-black text-2xl">/</span> How i started</p>
                  <p className="text-white mt-3">My journey began with a passion for transforming spaces and creating functional yet elegant environments. Starting as a junior sales executive in the furniture industry, I quickly climbed the ranks by consistently delivering innovative solutions and driving significant sales growth. </p>
                </div>
              </div>
              <div className="w-full px-36 flex flex-row-reverse mt-10 items-start justify-between">
                <img src={Feat2_2.src} className="w-[50%] rounded-3xl"/>
                <div className="w-80  flex flex-col items-start justify-between mt-32 ">
                  <p className="text-white text-2xl font-bold"> <span className=" text-[#075FE4] font-black text-2xl mr-1">/</span>My Journey</p>
                  <p className="text-white  mt-3">Over the years, I honed my skills in strategic planning, leadership, and market expansion, ultimately establishing myself as a specialist in the furniture, luxury home interiors, and construction industries.</p>
                </div>
              </div>
            </div>
            <div className="w-full border-b-2 border-white/50"></div>
            <div className=" w-full flex items-center justify-between py-20">
              <p className="text-3xl font-bold text-white">Previously worked with</p>
              <div className="flex items-center justify-center gap-12">
                <img src={client1.src} className="w-40 mix mix-blend-multiply"/>
                <img src={client2.src} className="w-40"/>
                <img src={client3.src} className="w-40 mix-blend-multiply"/>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
  </section>
);
