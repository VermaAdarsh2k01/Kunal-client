import React , { useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import signature from "../assets/images/signature.png"
// import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { GithubIcon } from "../assets/icons/GithubIcon";
import SvgButton from './SvgButton';

const navbarLinks = [
    { label: "Blog", href: "/Blogs", ariaLabel: "blog" },
    { label: "Achievements", href: "/achievement", ariaLabel: "Features" },
    { label: "Contact", href: "/Contact", ariaLabel: "contact" },
    { label: "Service", href: "/Service", ariaLabel: "service" },
    // { label: "Service", href: "/#FAQ", ariaLabel: "FAQ" },
  ];


export const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false)

  return (
    <nav
      className="w-screen xs:h-20 flex justify-center items-center fixed z-50 rounded-2xl  mt-0 lg:mt-5 xs:mt-2"
      aria-label="Main navigation"
    >
        <div className='2xl:w-[800px] xl:w-10/12 xs:w-[60%] lg:w-[83%] w-[100%] flex bg-[#161616] justify-between items-center relative lg:h-full  xs:py-2 rounded-full px-6 xs:px-10 lg:backdrop-blur-xl  drop-shadow-lg '>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            >
            <a href="/#home" aria-label="Home">
                <div className="flex justify-start items-center grow basis-0">
                
                <img src={signature.src} className="lg:w-24 xs:w-[70%] w-[60%] text-white" alt="logo"/>
                </div>
            </a>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
                >
                <div className="hidden lg:flex h-full pl-12 pb-2">
                    {navbarLinks.map(({ href, label, ariaLabel }) => (
                    <a
                        className="text-white lg:text-sm text-lg leading-6 mr-1 ml-1 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2"
                        href={href}
                        aria-label={ariaLabel}
                        key={label}
                        
                    >
                        {label}
                    </a>
                    ))}
                </div>
            </motion.div>
            <div
            className="lg:hidden flex flex-col rounded-md cursor-pointer "
            onClick={() => setIsOpen(!isOpen)}
            >
              <SvgButton/>
            </div>
        </div>
    <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-bgDark1 z-50 w-full h-screen  items-center gap-8 pb-10 border-y border-solid border-bgDark3 pt-10"
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="text-white lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300  pt-2"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                  target="_blank"
                >
                  {label}
                </a>
              ))}
              {/* <a
                className="outlined-button pl-6 pr-8 pt-2 pb-2  flex"
                href="https://github.com/matt765/Tidestream"
                target="_blank"
              >
                <GithubIcon />
                Source code
              </a> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        

    </nav>
  )
}

