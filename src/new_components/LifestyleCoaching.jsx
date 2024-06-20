import Collage from "../assets/images/collage.png"
import Collage2 from "../assets/images/collage2.png"
import Collage3 from "../assets/images/collage3.png"

const LifestyleCoaching = () => {
  return (
    <section
      className="w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pb-24 sm:pb-32 md:pb-44 lg:pb-0 pt-36 min-h-screen overflow-hidden px-10 relative" 
      id="service"
    >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] z-10 flex" />
        <div className="relative  z-40 px-40 flex items-center justify-center">
            <div className="w-[55%] ">
                <div className="w-full mt-20 flex gap-2 px-10">
                    <div className="flex flex-col gap-2">
                        <img src={Collage.src} className=" w-60 rounded-3xl "/>
                        <img src={Collage2.src} className=" w-60 rounded-3xl "/>
                    </div>
                    <div className="flex flex-col-reverse gap-2 mt-20 ">
                        <img src={Collage3.src} className=" w-60 rounded-3xl "/>
                        <img src={Collage2.src} className=" w-60 rounded-3xl "/>
                    </div>
                </div>
            </div>
            <div className="w-[45%] mt-40">
                <p className="text-white font-extrabold text-4xl text-nowrap">Lifestyle Coaching</p>
                <p className="mt-20 text-white">As a seasoned business consultant with over 25 years of expertise, I specialize in driving growth and expanding market presence across diverse industries including furniture, luxury home interiors, and construction. My consultancy focuses on strategic planning, market expansion, and innovative business solutions tailored to achieve sustainable success and enhance brand resilience in competitive markets.</p>
            </div>
        </div>
        <div className="px-48">
            <p className="text-white mt-40  font-extrabold text-4xl mb-20">Services Offered</p>
            <div className="flex items-center justify-between ">
                <div className="flex flex-col gap-2 text-gray-400 text-xl font-bold">
                    <p>Leadership Development</p>
                    <p>Strategic Planning</p>
                    <p>Training</p>
                </div>
                <div className="flex flex-col gap-2 text-gray-400 text-xl font-bold">
                    <p>Executive Coaching</p>
                    <p>Life Coaching</p>
                    <p>Management Consulting</p>
                </div>
                <div className="flex flex-col gap-2 text-gray-400 text-xl font-bold">
                    <p>Project Management</p>
                    <p>Business Consultancy</p>
                    <p>Brand Consulting</p>
                </div>
            </div>
        </div>
        <div className="text-white mt-20">
            Testimonail section
        </div>
        
    
    
    
    
    </section>
  )
}

export default LifestyleCoaching
