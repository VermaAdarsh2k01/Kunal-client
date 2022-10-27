import { motion } from "framer-motion";

import { AmazonLogo } from "../assets/logos/AmazonLogo";
import { DropboxLogo } from "../assets/logos/DropboxLogo";
import { NetflixLogo } from "../assets/logos/NetflixLogo";
import { SlackLogo } from "../assets/logos/SlackLogo";
import { SpotifyLogo } from "../assets/logos/SpotifyLogo";
import { StripeLogo } from "../assets/logos/StripeLogo";

export const Brands = () => (
  <section class="py-24 bg-customDarkBg1 w-full mt-16 mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div class="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div class="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div class="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div class="flex flex-col">
              <h2 class="mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-white">
                Trusted by brands
              </h2>
              <h2 class=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
                all over the world
              </h2>
            </div>
          </div>
          <div class="w-11/12 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
            <div class="flex flex-wrap -m-4">
              <div class="w-1/2 sm:w-1/3 py-6 flex justify-center">
                <AmazonLogo />
              </div>
              <div class="w-1/2 sm:w-1/3 py-6 flex  justify-center">
                <DropboxLogo />
              </div>
              <div class="w-1/2 sm:w-1/3 py-6 flex  justify-center">
                <NetflixLogo />
              </div>
              <div class="w-1/2 sm:w-1/3 py-6 flex justify-center">
                <StripeLogo />
              </div>

              <div class="w-1/2 sm:w-1/3 py-6 flex justify-center">
                <SpotifyLogo />
              </div>
              <div class="w-1/2 sm:w-1/3  py-6 flex  justify-center">
                <SlackLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);