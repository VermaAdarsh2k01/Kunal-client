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
  <section className="w-full bg-[#0A0A0A] pb-10 lg:pb-0 md:pb-32 xs:pb-10 xs:pb-0pt-4">
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-screen  md:h-full  lg:px-16 px-6 xs:px-6 md:px-18 pt-10">
            <div className="flex items-center justify-start gap-2">
                <span className=" text-[#075FE4] font-black text-2xl">/</span>
                <p className=" text-2xl font-bold text-white">Author</p>
            </div>
            <div className="max-xs:flex-col lg:flex md:flex items-center lg:justify-between mt-20 gap-20  md:gap-10 lg:gap-10">
                <div className="sm:w-[100%] lg:w-[60%] xs:w-[100%] md:w-[60%]">
                    <img src={SitAndGrow.src} className=" w-[100%] md:w-[100%] lg:w-[90%] xs:w-[100%]"/>
                </div>
                <div className="w-[100%] lg:w-[40%] md:w-[40%] xs:w-[100%] flex flex-col items-center md:items-start xs:items-center justify-center mt-20 md:mt-0 lg:mt-0 xs:mt-20 gap-6 lg:gap-10 xs:gap-6">
                    <p className="text-white text-2xl md:text-2xl lg:text-2xl font-black">Sit And Grow Rich</p>
                    <p className="text-white text-sm lg:text-base md:text-sm xs:text-base">In "Sit and Grow Rich," I unveil actionable strategies derived from my extensive experience in business and market expansion. This book empowers readers to harness passive income and strategic investments, paving the way to financial independence and enduring wealth. Ideal for aspiring entrepreneurs and seasoned investors seeking tangible growth and prosperity.</p>
                </div>
            </div>
        </div>
      </motion.div>
  </section>
);
