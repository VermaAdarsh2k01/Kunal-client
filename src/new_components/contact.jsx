
const Contact = () => {
  return (
    <section
      className="w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pb-24 sm:pb-32 md:pb-44 lg:pb-0 pt-36 min-h-screen overflow-hidden px-10 relative" 
      id="contact"
    >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] z-1" />
            <div className='w-full flex flex-col items-start justify-center px-32'>
                <div className='w-32 h-2 bg-white mb-10 z-10'></div>
                <p className='text-white text-5xl z-10 font-bold'>Let's Work Together</p>
                <p className='text-gray-400 z-10 mt-6'>Complete the details below so we can process your request and then schedule a time to discuss your goals.</p>
                <button className='bg-white px-4 py-2 mt-8 rounded-full font-bold text-2xl z-10' >Book a call</button>
            </div>
        <div className='h-[50vh]'>
            {/* client testimonials */}
        </div>
        <div className='w-full flex items-start justify-center gap-10 px-32 mb-24'>
                <div className='w-1/2'>
                    <p className='text-white text-5xl z-10 font-bold'>Get in touch with me</p>
                    <p className='text-gray-400 z-10 mt-6'>Explore my journey and expertise—connect for transformative business insights today!</p>
                </div>
                <div className='w-1/2 rounded-2xl px-16 py-14 bg-[#2d343f]'>
                <form >
                    <div class="mb-4">
                        <input type="text" id="name" name="name" placeholder="Enter your name"
                            className="mt-1 px-3 py-2 block w-full  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required 
                        />
                    </div>
                    <div class="mb-4">
                       
                        <input type="email" id="email" name="email" placeholder="Enter your email"
                            className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        
                        <input type="text" id="subject" name="subject" placeholder="Enter the subject"
                            className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div class="mb-4">
                        
                        <textarea id="message" name="message" rows="4" placeholder="Write your message here"
                            className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required></textarea>
                    </div>
                    <div class="text-center">
                        <button type="submit"
                            className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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
