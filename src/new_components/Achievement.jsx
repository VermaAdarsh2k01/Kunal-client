import React from 'react'
import achieve from "../assets/images/achieve.png"
import { FaFireFlameCurved } from "react-icons/fa6";
import { GiGreatPyramid } from "react-icons/gi";
import { SiGooglescholar } from "react-icons/si";
import { FaRegEye } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";


const Achievement = () => {
  return (
    <section
      className="w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pb-24 sm:pb-32 md:pb-44 lg:pb-0 pt-36 min-h-screen overflow-hidden lg:px-10 relative" 
      id="contact"
    >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] z-1" />
        <div className='w-full min-h-screen relative'>
            <div className='flex flex-col gap-6 mt-5 px-6 lg:px-24 xs:px-10 '>
                <p className='text-2xl xs:text-2xl lg:text-4xl text-white font-bold'>Achievements</p>
                <p className='text-[13px] xs:text-[14px] lg:text-[20px]  text-gray-300' >Recognized for transformative leadership, driving double-digit growth, and expanding global market presence across multiple industries</p>
            </div>
            <div className='flex items-center justify-center xl:px-60 lg:px-16 xs:px-32 sm:px-16 px-14 mt-10 '>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 ">
                    <div className="bg-gradient-to-r from-[#27252F] to-[#3B3947]  bg-opacity-50 backdrop-filter backgrop-blur-2xl px-4 py-6 rounded-lg shadow-lg flex flex-col items-start justify-between gap-10  " >
                        <div className='w-12 h-12 xs:w-12 xs:h-12 bg-white rounded-xl flex items-center justify-center'>
                            <GiGreatPyramid size={24}/>
                            
                        </div>
                        <div className='flex flex-col gap-8 md:gap-4 text-white'>
                            <p className='text-xl leading-7 lg:text-4xl xs:text-2xl font-bold'>Excellence in Corporate Award</p>
                            <p className='text-sm xs:text-sm leading-none'>Ignites creativity and motivates teams towards exceptional achievement</p>

                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#27252F] to-[#3B3947]  bg-opacity-50 backdrop-filter backgrop-blur-2xl px-4 py-6 rounded-lg shadow-lg flex flex-col items-start justify-between gap-10 ">
                        <div className='w-12 h-12  xs:w-12 xs:h-12 bg-white rounded-xl flex items-center justify-center'>
                            <FaFireFlameCurved size={24}/>
                        </div>
                        <div className='flex flex-col gap-8 md:gap-4 text-white'>
                            <p className='text-2xl leading-7 lg:text-4xl xs:text-2xl font-bold'>Hall of fame</p>
                            <p className='text-sm xs:text-sm leading-none'>Innovates and leads industry breakthroughs and new methodologies.</p>

                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#27252F] to-[#3B3947]  bg-opacity-50 backdrop-filter backgrop-blur-2xl px-4 py-6 rounded-lg shadow-lg flex flex-col items-start justify-between gap-10 ">
                        <div className='w-12 h-12  xs:w-12 xs:h-12 bg-white rounded-xl flex items-center justify-center'>
                            <SiGooglescholar size={24}/>
                        </div>
                        <div className='flex flex-col gap-8 md:gap-4 text-white'>
                            <p className='text-2xl leading-7 lg:text-4xl xs:text-2xl font-bold'>Entrepreneur of the Year</p>
                            <p className='text-sm xs:text-sm leading-none'>Guides and empowers teams to surpass business objectives effectively.</p>

                        </div>
                        </div>
                    <div className="bg-gradient-to-r from-[#27252F] to-[#3B3947]  bg-opacity-50 backdrop-filter backgrop-blur-2xl px-4 py-6 rounded-lg shadow-lg flex flex-col items-start justify-between gap-10 ">
                        <div className='w-12 h-12 xs:w-12 xs:h-12 bg-white rounded-xl flex items-center justify-center'>
                        <FaRegEye size={24}/>  
                        </div>
                        <div className='flex flex-col gap-8 md:gap-4 text-white'>
                            <p className='text-2xl leading-7 lg:text-4xl xs:text-2xl font-bold'>Visionary</p>
                            <p className='text-sm xs:text-sm leading-none'>Foresees trends and drives transformative strategies for future success.</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className='px-2 my-32 xs:px-16 lg:px-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-col-2 lg:grid-cols-2 gap-4 md:gap-0'>
                    <div class=" p-2 w-full sm:p-4 rounded-lg shadow-lg">
                        <div className=" px-4 py-6 flex flex-col items-start justify-between gap-10">
                            <div className='w-12 h-12 lg:w-16 lg:h-16  bg-white rounded-xl flex items-center justify-center'>
                            <FaDollarSign size={28}/>    
                            </div>
                            <div className='flex flex-col gap-2 text-white'>
                                <p className='text-xl font-bold xl:text-2xl '>Business Leader of the Year Award</p>
                                <p className='text-sm md:text-[12px] text-gray-400 leading-none xl:text-base '>Received the prestigious Business Leader of the Year Award for outstanding contributions to industry growth and innovation.</p>

                            </div>
                        </div>
                    </div>
                    <div class=" p-2 w-full sm:p-4 rounded-lg shadow-lg">
                        <div className=" px-4 py-6  flex flex-col items-start justify-between gap-10">
                            <div className='w-12 h-12 lg:w-16 lg:h-16  bg-white rounded-xl flex items-center justify-center'>
                            <FaGlobeAmericas size={28}/>   
                            </div>
                            <div className='flex flex-col gap-2 text-white'>
                                <p className='text-xl font-bold xl:text-2xl'>Global Entrepreneurship Excellence Award</p>
                                <p className='text-sm md:text-[12px] text-gray-400 leading-none xl:text-base'>Received the prestigious Business Leader of the Year Award for outstanding contributions to industry growth and innovation.</p>

                            </div>
                        </div>
                    </div>
                    <div class=" p-2 w-full sm:p-4 rounded-lg shadow-lg">
                        <div className=" px-4 py-6  flex flex-col items-start justify-between gap-10">
                            <div className='w-12 h-12 lg:w-16 lg:h-16  bg-white rounded-xl flex items-center justify-center'>
                                <HiOutlineLightBulb size={30}/>
                            </div>
                            <div className='flex flex-col gap-2 text-white'>
                                <p className='text-xl font-bold xl:text-2xl'>Innovation Champion Award</p>
                                <p className='text-sm md:text-[12px] text-gray-400 leading-none xl:text-base'>Received the prestigious Business Leader of the Year Award for outstanding contributions to industry growth and innovation.</p>

                            </div>
                        </div>
                    </div>
                    <div class=" p-2 w-full sm:p-4 rounded-lg shadow-lg">
                        <div className=" px-4 py-6  flex flex-col items-start justify-between gap-10">
                            <div className='w-12 h-12 lg:w-16 lg:h-16  bg-white rounded-xl flex items-center justify-center'>
                                <FaStarOfLife size={28}/>
                            </div>
                            <div className='flex flex-col gap-2 text-white'>
                                <p className='text-xl font-bold xl:text-2xl'>Lifetime Achievement Award</p>
                                <p className='text-sm md:text-[12px] text-gray-400 leading-none xl:text-base'>Received the prestigious Business Leader of the Year Award for outstanding contributions to industry growth and innovation.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-6 lg:px-20 xs:px-10 py-8 lg:py-16 flex max-xs:flex-col md:flex-row lg:flex items-center justify-between sm:gap-10 xl:gap-0 gap-8'>
                <div className='w-[100%] lg:w-[50%] xs:w-[100%] flex items-center justify-center'>
                    <img src={achieve.src} className='rounded-xl w-64 lg:w-80 xs:w-60 xl:w-96'/>
                </div>
                <div className='w-[100%] xs:w-[100%] lg:w-[50%] flex flex-col items-start justify-between gap-10 lg:gap-10 xs:gap-10 mt-10 xs:mt-10 lg:mt-0' >
                    <p className=' text-white font-bold text-2xl xl:text-3xl'>BNI recognition</p>
                    <p className='text-white'>I am deeply honored to receive the prestigious BNI Recognition Award, a testament to my dedication in fostering invaluable business connections and driving substantial growth. This accolade underscores my commitment to strategic networking and leadership, which have propelled both personal and professional achievements to new heights within the industry.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Achievement
