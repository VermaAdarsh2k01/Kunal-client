import { Testimonials } from "../components/Testimonials"

const Contact = () => {
  return (
    <section
      className="w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pb-24 sm:pb-32 md:pb-44 lg:pb-0 pt-36 min-h-screen overflow-hidden lg:px-10 relative" 
      id="contact"
    >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] z-1" />
            <div className='w-full flex flex-col items-start justify-center px-4 lg:px-32'>
                <div className='w-16 lg:w-32 xs:w-24 h-2 bg-white mb-10 z-10'></div>
                    <p className='text-white text-2xl z-10 font-bold lg:text-3xl xs:text-2xl'>Let's Work Together</p>
                    <p className='text-gray-400 text-sm z-10 lg:mt-6 mt-2 xs:mt-2'>Complete the details below so we can process your request and then schedule a time to discuss your goals.</p>
                    <button className='bg-gradient-to-r from-[#27252F] to-[#3B3947] text-white bg-opacity-50 backdrop-filter backgrop-blur-2xl px-2 py-1 lg:px-4 lg:py-2 xs:px-2 xs:py-1 mt-8 rounded-full font-bold lg:text-lg xs:text-lg z-10' >Book a call</button>
                </div>
        <div className='h-full'>
            <Testimonials/>
        </div>
        <div className='w-full lg:flex lg:items-start justify-center gap-10 px-3 md:px-20 lg:px-32 mb-24 relative'>
            <div className='xs:w-full lg:w-1/2 '>
                <p className='text-white text-2xl lg:text-3xl z-10 font-bold'>Get in touch with me</p>
                <p className='text-gray-400 z-10 mt-6'>Explore my journey and expertise—connect for transformative business insights today!</p>
            </div>
            <div className='w-full lg:w-1/2 rounded-2xl px-1 py-1 md:px-24 lg:px-0 xl:px-10 mt-10 lg:mt-0 '>
            <form className="p-4 z-50">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">Enter Your Name</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Enter your name"
                    className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                    required 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">Enter Your Email</label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email"
                    className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400">Enter the Subject</label>
                    <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="Enter the subject"
                    className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">Write Your Message</label>
                    <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    placeholder="Write your message here"
                    className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                    ></textarea>
                </div>
                <div className="text-center">
                    <button 
                        type="submit"
                        className="inline-block px-3 py-3 font-bold text-sm bg-gradient-to-r from-[#27252F] to-[#3B3947] text-white bg-opacity-50 backdrop-filter backgrop-blur-2xl rounded-full "
                        >
                        Send Message
                    </button>
                </div>
            </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
