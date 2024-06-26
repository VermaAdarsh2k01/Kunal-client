import React from 'react'
import Post1 from "../assets/images/post1.jpeg"

const firstBlog = () => {
  return (
    <section 
        className="w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pb-24 sm:pb-32 md:pb-44  lg:pb-10 lg:pt-32 xs:pt-24 min-h-screen overflow-hidden lg:px-10 xs:px-4 relative" 
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] z-1" />
    <div className=" min-h-screen text-white mt-8 relative">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-8">
      <div className="md:w-[50%] lg:w-[50%] w-[90%] mx-auto  shadow-md overflow-hidden flex flex-col items-center justify-center">
        <div className=" md:w-[100%] lg:w-[50%] 3xl:h-full sm:h-96 flex items-center justify-center">
          <img
            src={Post1.src}
            alt="post image"
            className="inset-0 w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="p-6 text-center">
          <h1 className="text-xl sm:text-4xl md:text-2xl lg:text-3xl  font-bold text-white mb-2">
            Really exiceted to present my book 
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mb-4">March 18, 2024</p>
          <div className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-4">
            {/* Your additional content here */}
          </div>
          <div className="flex justify-center gap-2">
            {/* Add your tags here */}
            <span className="bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200">
              #Tag1
            </span>
            <span className="bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200">
              #Tag2
            </span>
            <span className="bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200">
              #Tag3
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#27252F] to-[#3B3947]  bg-opacity-50 backdrop-filter backgrop-blur-2xl rounded-lg shadow-md overflow-hidden p-6 md:p-6">
        <h2 className="text-sm sm:text-3xl md:text-xl lg:text-xl text-white mb-4">
        Recently got this opportunity to present my book 📕 Sit & grow rich Sit & Grow Rich : The Secret to Earning through Smart Furniture Choices https://amzn.in/d/imS673z to hashtag#Architect, hashtag#entrepreneur, hashtag#Ironman Maneck Khanna 

Your journey has always been an inspiration for me & many others my friend 😊

Trust me when I say that, since you were amongst the few who came to my mind while I was writing this book. Your views & perception on providing value to the customer has always intrigued me with the numerous discussions we have had! 

With all my positive intentions, I hope this book brings value to hashtag#architectural hashtag#corporate hashtag#wellbeing hashtag#consulting hashtag#industry 

Keep inspiring Maneck Khanna 👍

Material Matters EDGE Studios Pvt. Ltd. 
hashtag#workplace hashtag#strategy hashtag#productivity hashtag#leadership hashtag#gratitude hashtag#workplacestrategy
        </h2>
        <div className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-4">
          {/* Additional content goes here */}
        </div>
      </div>
    </div>
  </div>
  </section>

  )
}

export default firstBlog