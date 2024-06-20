import React from 'react';
import {blogData} from "../data/blogData"

const BlogList = ({ blogData }) => {
    console.log
  return (
    <section
      className="w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pb-24 sm:pb-32 md:pb-44 lg:pb-0 pt-36 min-h-screen overflow-hidden px-10 relative" 
      id="home"
    >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] z-1" />
        <div className='flex items-center justify-between mx-20 mt-20 '>
            <h1 className="text-4xl font-bold mb-8 text-white z-10">Blog & Articles</h1>
            <div className='z-20 flex flex-col items-end justify-center'>
                <div className='w-20 h-2 bg-white mb-10'></div>
                <p className='text-white font-semibold text-xl'>All</p>
                <p className='text-white font-semibold text-xl'>Blogs</p>
                <p className='text-white font-semibold text-xl'>Articles</p>
            </div>
        </div>
       
        <div className="flex flex-col items-center justify-center flex-wrap mt-20 min-h-screen gap-10">
        {blogData.map((post) => (
          <div key={post.slug} className="border w-[50%] h-30 p-4 rounded-lg shadow-lg text-white z-40 bg-[#2d333a]" >
            <a href={`/blogs/${post.slug}`} className='flex items-center justify-between'>
                <div className='w-[45%]'>
                    <p className="text-[#999999] font-bold ">{post.date}</p>
                    <h2 className="text-xl font-bold mt-4">{post.title}</h2>
                </div>
                <div className='w-1/3'>
                    <img src={post.image.src} className="w-full h-48 object-cover rounded-t-lg" />
                </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogList;