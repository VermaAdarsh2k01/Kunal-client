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
import SitAndGrow from "../assets/images/siteAndgrow.jpg"

export const Features3 = () => (
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
        <div className="w-screen min-h-screen px-32 pt-10">
            <div className="flex items-center justify-start gap-2">
                <span className=" text-[#075FE4] font-black text-2xl">/</span>
                <p className=" text-2xl font-bold text-white">About me</p>
            </div>
            <div className="flex items-center justify-between mt-20 gap-20">
                <div className="w-[60%]">
                    <img src={SitAndGrow.src} className="w-[90%]"/>
                </div>
                <div className="w-[40%] flex flex-col items-start justify-center gap-20">
                    <p className="text-white text-4xl font-black">Site And Grow Rich</p>
                    <p className="text-white">In "Sit and Get Rich," I unveil actionable strategies derived from my extensive experience in business and market expansion. This book empowers readers to harness passive income and strategic investments, paving the way to financial independence and enduring wealth. Ideal for aspiring entrepreneurs and seasoned investors seeking tangible growth and prosperity.</p>
                </div>
            </div>
        </div>
      </motion.div>
  </section>
);
