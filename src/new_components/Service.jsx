import arrow from "../../src/assets/images/arrow.png"

const Service = () => {
  return (
    <section
      className="w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pb-24 sm:pb-32 md:pb-44 lg:pb-0 pt-36 min-h-screen overflow-hidden px-10 relative" 
      id="home"
    >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] z-1" />
        <div className='flex items-center justify-center gap-10 mt-20 px-10'>
            <a  href="/Service/BusinessConsultancy"
                className='w-[25%] h-[55vh] border-2 z-10 flex flex-col items-center justify-between py-10 rounded-2xl bg-gray-600'>
                    
                    <div>
                        <p className='text-white text-wrap  text-center text-4xl font-bold'>
                        Business 
                        </p>
                        <p className='text-white text-wrap  text-center text-4xl font-bold'>
                        Consultancy 
                        </p>
                    </div>
                <div className='flex  items-center justify-center gap-2'>
                    <p className='text-gray-400 font-bold text-3xl'>Learn More</p>
                    <img src={arrow.src} className="w-5"/>
                </div>
            </a>
            <a  href="/Service/LifestyleCoaching"
                className='w-[25%] h-[55vh] border-2 z-10 flex flex-col items-center justify-between py-10 rounded-2xl bg-gray-600'>
                    <div>
                        <p className='text-white text-wrap  text-center text-4xl font-bold'>
                        Lifestyle
                        </p>
                        <p className='text-white text-wrap  text-center text-4xl font-bold'>
                        Coaching
                        </p>
                    </div>
                <div className='flex  items-center justify-center gap-2'>
                    <p className='text-gray-400 font-bold text-3xl'>Learn More</p>
                    <img src={arrow.src} className="w-5"/>
                </div>
            </a>
            <a  href="/Service/InteriorSolutions"
                className='w-[25%] h-[55vh] border-2 z-10 flex flex-col items-center justify-between py-10 rounded-2xl bg-gray-600'>
                    <div>
                        <p className='text-white text-wrap  text-center text-4xl font-bold'>
                        Interior
                        </p>
                        <p className='text-white text-wrap  text-center text-4xl font-bold'>
                        Solutions
                        </p>
                    </div>
                <div className='flex  items-center justify-center gap-2'>
                    <p className='text-gray-400 font-bold text-3xl'>Learn More</p>
                    <img src={arrow.src} className="w-5"/>
                </div>
            </a>
        </div>
        <div className="mt-40 px-40 mb-40">
            <div className="flex items-center justify-start gap-2 ">
                <span className=" text-[#075FE4] font-black text-2xl">/</span>
                <p className=" text-2xl font-bold text-white">Consultancy Philosophy</p>
            </div>
            <p className="text-white mt-10">
            My consultancy is built on 25 years of strategic leadership in industries like furniture, luxury home interiors, and construction. I specialize in unlocking business potential and expanding market reach internationally. Grounded in innovation and visionary leadership, I empower organizations to achieve sustainable growth through robust strategic planning and effective market-entry strategies. My philosophy centers on driving transformative business insights and creating value through exceptional client partnerships. I am dedicated to fostering success by navigating challenges, seizing opportunities, and ensuring brands thrive in competitive landscapes. Let's collaborate to elevate your business to new heights.
            </p>
        </div>
    </section>
  )
}

export default Service