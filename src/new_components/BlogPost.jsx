import React from 'react'
import {urlFor} from "../api"


const BlogPost = ({post}) => {

  const formattedDate = new Date(post._createdAt).toLocaleDateString('en-US' ,{
    year: 'numeric',
    month: 'long',
    day : 'numeric'
  })


  return (
    <>
    <div>{post.slug.current}</div>
    <div className=" w-[90%] md:w-[70%] lg:w-[65%] xl:w-[50%] xs:w-[90%] lg:h-30 xs:h-30 p-4 rounded-lg shadow-lg text-white z-40 bg-[#2d333a]" >
            <a href={`/posts/${post.slug.current}`} className='flex items-center justify-between gap-10'>
                <div className='w-2/3 lg:w-[45%] xs:w-[60%]'>
                    <p className="text-[#999999] font-bold ">{formattedDate}</p>
                    <h2 className="text-md lg:text-xl xs:text-xl font-bold mt-4">{post.title}</h2>
                </div>
                <div className='w-1/3 xs:flex xs:items-center xs:justify-end'>
                    {
                      post.mainImage ? (
                      <img 
                      src={urlFor(post.mainImage).url()} 
                      alt={post.title}
                      className="w-28 h-32 lg:w-full lg:h-48 xs:w-28 xs:h-32 object-cover rounded-lg" />
                      ):<div>No pic</div>
                    } 
                </div>
            </a>
</div>
    </>
  )
}

export default BlogPost

{/* <div className=" w-[90%] md:w-[70%] lg:w-[65%] xl:w-[50%] xs:w-[90%] lg:h-30 xs:h-30 p-4 rounded-lg shadow-lg text-white z-40 bg-[#2d333a]" >
            <a href={`/Blogs/first`} className='flex items-center justify-between gap-10'>
                <div className='w-2/3 lg:w-[45%] xs:w-[60%]'>
                    <p className="text-[#999999] font-bold ">March 18, 2024</p>
                    <h2 className="text-md lg:text-xl xs:text-xl font-bold mt-4">{post.title}</h2>
                </div>
                <div className='w-1/3 xs:flex xs:items-center xs:justify-end'>
                    <img src={Post3.src} className="w-28 h-32 lg:w-full lg:h-48 xs:w-28 xs:h-32 object-cover rounded-lg" />
                </div>
            </a>
</div> */}