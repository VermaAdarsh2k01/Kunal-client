import arrow from "../../src/assets/images/arrow.png"


const Service = () => {
  return (
    <section
      className="w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pb-24 sm:pb-32 md:pb-44 lg:pb-0 pt-36 min-h-screen overflow-hidden lg:px-10 xs:px-0 relative" 
      id="home"
    >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] z-1" />
            <div className='lg:mt-20 xs:mt-10 lg:px-10 xs:px-0 relative'>
                <div className="flex flex-wrap items-center justify-center gap-10">
                    <a href="/Service/BusinessConsultancy"
                        className='w-[40vw] lg:w-[25%] xs:w-[40vw] h-[30vh] lg:h-[55vh] xs:h-[40vh] z-10 flex flex-col items-center justify-between py-4 lg:py-10 rounded-2xl bg-gray-600 xs:mb-6'>  
                        <div>
                        <p className='text-white text-wrap text-center lg:text-4xl xs:text-2xl font-bold'>
                            Business 
                        </p>
                        <p className='text-white text-wrap text-center lg:text-4xl xs:text-2xl font-bold'>
                            Consultancy 
                        </p>
                        </div>
                        <div className='flex items-center justify-center gap-2 '>
                        <p className='text-gray-400 font-bold lg:text-3xl xs:text-lg'>Learn More</p>
                            <img src={arrow.src} className="w-3 lg:w-5 xs:w-3"/>
                        </div>
                    </a>
                <a href="/Service/LifestyleCoaching"
                    className='w-[40vw] lg:w-[25%] xs:w-[40vw] h-[30vh] lg:h-[55vh] xs:h-[40vh]  z-10 flex flex-col items-center justify-between py-4 lg:py-10 rounded-2xl bg-gray-600 xs:mb-6'>
                    <div>
                    <p className='text-white text-wrap text-center lg:text-4xl xs:text-2xl font-bold'>
                        Lifestyle
                    </p>
                    <p className='text-white text-wrap text-center lg:text-4xl xs:text-2xl font-bold'>
                        Coaching
                    </p>
                    </div>
                    <div className='flex items-center justify-center gap-2 '>
                    <p className='text-gray-400 font-bold lg:text-3xl xs:text-lg'>Learn More</p>
                    <img src={arrow.src} className="w-3 lg:w-5 xs:w-3"/>
                    </div>
                </a>
                <a href="/Service/InteriorSolutions"
                    className=' w-[40vw] lg:w-[25%] xs:w-[45vw] h-[30vh] lg:h-[55vh] xs:h-[40vh]  z-10 flex flex-col items-center justify-between py-4 lg:py-10 rounded-2xl bg-gray-600 xs:mb-6'>
                    <div>
                    <p className='text-white text-wrap text-center lg:text-4xl xs:text-2xl font-bold'>
                        Interior
                    </p>
                    <p className='text-white text-wrap text-center lg:text-4xl xs:text-2xl font-bold'>
                        Solutions
                    </p>
                    </div>
                    <div className='flex items-center justify-center gap-2 '>
                    <p className='text-gray-400 font-bold lg:text-3xl xs:text-lg'>Learn More</p>
                    <img src={arrow.src} className="w-3 lg:w-5 xs:w-3"/>
                    </div>
                </a>
                </div>
            </div>
        <div className="  mt-20 lg:mt-40 xs:mt-20 px-2 lg:px-40 xs:px-6 mb-40 relative ">
            <div className="flex items-center justify-start gap-2 ">
                <span className=" text-[#075FE4] font-black text-2xl">/</span>
                <p className="text-xl lg:text-2xl font-bold text-white">Consultancy Philosophy</p>
            </div>
            <p className="mt-10 w-full text-sm lg:text-base text-gray-300">
                My consultancy is built on 25 years of strategic leadership in industries like furniture, luxury home interiors, and construction. I specialize in unlocking business potential and expanding market reach internationally. Grounded in innovation and visionary leadership, I empower organizations to achieve sustainable growth through robust strategic planning and effective market-entry strategies. My philosophy centers on driving transformative business insights and creating value through exceptional client partnerships. I am dedicated to fostering success by navigating challenges, seizing opportunities, and ensuring brands thrive in competitive landscapes. Let's collaborate to elevate your business to new heights.
            </p>
        </div>

    </section> 
  )
}

export default Service