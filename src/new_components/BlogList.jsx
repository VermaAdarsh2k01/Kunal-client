import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Post1 from '../assets/images/post1.jpeg'
import Post2 from '../assets/images/post2.jpeg'
import Post3 from '../assets/images/post3.jpeg'

const BlogList = () => {
    
  return (
    <section
      className="w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pb-24 sm:pb-32 md:pb-44  lg:pb-10 lg:pt-32 xs:pt-24 min-h-screen overflow-hidden lg:px-10 xs:px-4 3xl:px-56 relative" 
      id="Blog_page"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] z-1" />
        <div className='flex items-start justify-between md:justify-center xl:justify-between md:gap-72 lg:gap-96 mx-6 xl:mx-64 3xl:mx-90 lg:mx-20 xs:mx-6 mt-32 xs:mt-20 lg:mt-20'>
            <h1 className="text-xl lg:text-4xl xs:text-xl font-bold lg:mb-12 xs:mb-24 text-white z-10">Blog & Articles</h1>
            <div className='z-20 flex flex-col items-end justify-center'>
                <div className='w-14 h-1 xs:w-20 xs:h-2 lg:2 bg-white mb-6 xs:mb-10 lg:mb-10'></div>
                <div className='flex'>  
                  <p className='text-white font-semibold text-lg xs:text-xl lg:text-xl'>All</p>
                  <FaArrowUp className='rotate-45 ms-2 text-white hidden lg:block' size={24}/>
                </div>
                <div className='flex'>  
                  <p className='text-white font-semibold text-lg xs:text-xl lg:text-xl'>Blogs</p>
                  <FaArrowUp className='rotate-45 ms-2 text-white hidden lg:block' size={24}/>
                </div>
                <div className='flex'>  
                  <p className='text-white font-semibold text-lg xs:text-xl lg:text-xl'>Articles</p>
                  <FaArrowUp className='rotate-45 ms-2 text-white hidden lg:block' size={24}/>
                </div>
            </div>
        </div>
       
        <div className="flex flex-col items-center justify-center flex-wrap mt-20  gap-10">


        <div className=" w-[90%] md:w-[70%] lg:w-[65%] xl:w-[50%] xs:w-[90%] lg:h-30 xs:h-30 p-4 rounded-lg shadow-lg text-white z-40 bg-[#2d333a]" >
            <a href={`/Blogs/first`} className='flex items-center justify-between gap-10'>
                <div className='w-2/3 lg:w-[45%] xs:w-[60%]'>
                    <p className="text-[#999999] font-bold ">March 18, 2024</p>
                    <h2 className="text-md lg:text-xl xs:text-xl font-bold mt-4">Guys 😍 really excited to share the release of my new Book ✨ 📖 📕 ✒ </h2>
                </div>
                <div className='w-1/3 xs:flex xs:items-center xs:justify-end'>
                    <img src={Post3.src} className="w-28 h-32 lg:w-full lg:h-48 xs:w-28 xs:h-32 object-cover rounded-lg" />
                </div>
            </a>
          </div>

          <div className=" w-[90%] md:w-[70%] lg:w-[65%] xl:w-[50%] xs:w-[90%] lg:h-30 xs:h-30 p-4 rounded-lg shadow-lg text-white z-40 bg-[#2d333a]" >
            <a href="/Blogs/second" className='flex items-center justify-between gap-10'>
                <div className='w-2/3 lg:w-[45%] xs:w-[60%]'>
                    <p className="text-[#999999] font-bold ">March 18, 2024</p>
                    <h2 className="text-md lg:text-xl xs:text-xl font-bold mt-4">The Best IDE’s and Code Editors for Developers in 2022</h2>
                </div>
                <div className='w-1/3 xs:flex xs:items-center xs:justify-end'>
                    <img src={Post1.src} className="w-28 h-32 lg:w-full lg:h-48 xs:w-28 xs:h-32 object-cover rounded-lg" />
                </div>
            </a>
          </div>

          <div className=" w-[90%] md:w-[70%] lg:w-[65%] xl:w-[50%] xs:w-[90%] lg:h-30 xs:h-30 p-4 rounded-lg shadow-lg text-white z-40 bg-[#2d333a]" >
            <a href="/Blogs/third" className='flex items-center justify-between gap-10'>
                <div className='w-2/3 lg:w-[45%] xs:w-[60%]'>
                    <p className="text-[#999999] font-bold ">March 18, 2024</p>
                    <h2 className="text-md lg:text-xl xs:text-xl font-bold mt-4">Honored and Grateful: Thank You for This Prestigious Award</h2>
                </div>
                <div className='w-1/3 xs:flex xs:items-center xs:justify-end'>
                    <img src={Post2.src} className="w-28 h-32 lg:w-full lg:h-48 xs:w-28 xs:h-32 object-cover rounded-lg" />
                </div>
            </a>
          </div>
          


      </div>
    </section>
  );
};

export default BlogList;