import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";
import AboutPic from "../assets/images/aboutPic.png"

const footerData = [
  {
    title: "Navigation",
    items: ["Blog", "Achievement", "Contact", "Services"],
  },
  {
    title: "Important Links",
    items: [
      "Organization Team",
      "Our Journeys",
      "Pricing Plans",
      "Roadmap",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Company",
    items: ["About Us", "Jobs", "Press", "Contact Us"],
  },
];

export const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <div className="pt-4 md:pt-10 lg:pt-20 lg:pb-8 bg-[#0A0A0A] ">
        <div className="container mx-auto w-[80%] md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3 ">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 lg:w-1/3 mb-20 lg:mb-0">
              <div className="flex justify-evenly md:justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-4 lg:mr-2 text-6xl">
                  <img src={AboutPic.src} className="w-24"/>
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Kunal Trehan
                </div>
              </div>
              
              <div className="w-36 mx-auto lg:flex lg:mx-0 mt-6">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] "
                  href="#"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] "
                  href="#"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] "
                  href="#"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-2/3 lg:pl-16 flex lg:flex justify-between md:justify-center ">
              <div className="w-full md:w-1/2 lg:w-1/3 mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold hidden md:flex lg:text-lg text-primaryText">Navigate to</h3>
                <ul>
                  {footerData[0].items.map((item, index) => (
                    <li key={`${item}-${index}`} className="mb-1 lg:mb-1">
                      <a
                        className="text-gray-400 hover:text-gray-300 text-sm"
                        href="#"
                        aria-label={item}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold hidden md:flex lg:text-lg text-primaryText">
                  Important Links
                </h3>
                <ul>
                  {footerData[1].items.map((item, index) => (
                    <li key={`${item}-${index}`} className="mb-1 lg:mb-1">
                      <a
                        className="text-gray-400 hover:text-gray-300 text-sm"
                        href="#"
                        aria-label={item}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-1/3 hidden lg:flex lg:flex-col">
                <h3 className="mb-6 text-2xl font-bold hidden md:flex lg:text-lg text-primaryText">Get In Touch</h3>
                <p className="text-gray-400 hover:text-gray-300">Email: kunal.trehan@gmail.com</p>
              
              </div>
              
            </div>
          </div>
          <div className="w-full flex items-center justify-center text-center mt-10">
            <p className="text-gray-400 text-[10px] w-full ">© Copyright 2024 Numeral — All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
