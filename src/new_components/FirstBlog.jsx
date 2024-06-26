import React from 'react'
import Post3 from "../assets/images/post3.jpeg"

const firstBlog = () => {
  return (
    <section 
        className="w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pb-24 sm:pb-32 md:pb-44  lg:pb-10 lg:pt-32 xs:pt-24 min-h-screen overflow-hidden lg:px-10 xs:px-4 relative" 
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] z-1" />
    <div className=" min-h-screen text-white mt-8 relative">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-8">
      <div className="md:w-[50%] lg:w-[50%] xl:w-[40%] w-[90%] mx-auto  shadow-md overflow-hidden flex flex-col items-center justify-center">
        <div className=" md:w-[100%] lg:w-[100%] 3xl:h-full sm:h-96 flex items-center justify-center">
          <img
            src={Post3.src}
            alt="post image"
            className="inset-0 w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="p-6 text-center">
          <h1 className="text-xl sm:text-4xl md:text-2xl lg:text-3xl  font-bold text-white mb-2">
            Guys 😍 really excited to share the release of my new Book ✨ 📖 📕 ✒ 
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
            🙏 Firstly, want to #thankyou each and every one of you for being connected & making a difference by #addingvalue in someway or other. 

        💎 I have too tried to add value and make a difference in the lives of my #clients , #leaders , #ceos . #cfos , #Facility, #realestate & #procurement heads along with all #workingprofessionals & #spacedesign at the #workplace with my 24 years of working experience through this #book 

        ✨The books covers most relatable insights & researches on working professional at workplace and what and how you can make changes that affects #engagement and your productivity directly. Needless to say that #productivity affects #profitability & #revenue 💰 

        💹 I'm proud to present a solution that addresses the common issues experienced by working professionals, enhancing #productivity , ensures #safety and #profitability at Workplace. With this you can now say goodbye to low productivity and welcome high profitability with good ergonomically designed furniture💲

        Order Now👇 Sit & Grow Rich https://lnkd.in/gwnWxHzZ 

        🔔 Please circulate it in your collogues, clients, friends, vendors & partners so that they could also avail the benefits. I assure you it’s going to be a completely new insight on your #wellbeing along with other crucial factors like #returnoninvestment before planning your workplace.
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