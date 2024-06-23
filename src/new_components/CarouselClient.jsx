import client1 from "../assets/images/client1.png"
import client2 from "../assets/images/client2.png"
import client3 from "../assets/images/client3.png"
import client4 from "../assets/images/client4.png"
import client5 from "../assets/images/cleint5.png"
import client6 from "../assets/images/client6.png"
import client7 from "../assets/images/client7.png"
import client8 from "../assets/images/client8.png"
import client9 from "../assets/images/client9.png"
import React from "react"
import useEmblaCarousel from 'embla-carousel-react'
import  Autoplay  from "embla-carousel-autoplay"

export function CarouselClient() {
  const [emblaRef] = useEmblaCarousel({loop:true} , [Autoplay({delay:2000})])

  return (
    <div className="embla lg:w-[60%] xs:w-full" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide flex items-center justify-center gap-10">
          <img src={client1.src} className="lg:w-40 xs:w-20 "/>
          <img src={client2.src} className="lg:w-40 xs:w-20"/>
          <img src={client3.src} className="lg:w-40 xs:w-20"/>
        </div>
        <div className="embla__slide flex items-center justify-center gap-10">
          <img src={client4.src} className="lg:w-40 xs:w-20"/>
          <img src={client5.src} className="lg:w-40 xs:w-20"/>
          <img src={client6.src} className="lg:w-24 xs:w-20"/>
        </div>
        <div className="embla__slide flex items-center justify-center gap-10">
          <img src={client7.src} className="lg:w-40 xs:w-20"/>
          <img src={client8.src} className="lg:w-40 xs:w-20"/>
          <img src={client9.src} className="lg:w-40 xs:w-20"/>
        </div>
      </div>
    </div>
  ) 
}
