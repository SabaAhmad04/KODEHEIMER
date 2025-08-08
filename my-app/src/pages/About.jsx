import { Link } from "react-router";
import about1 from "../assets/about1.png.jpg";
import { FaPlay } from "react-icons/fa";
import team from "../assets/team.jpg"
import MovableBackgroundSection from "../components/Move";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

const About = () => {
       
       const [isVisible,setIsVisible] = useState(true);
       const [isOpen,setIsOpen] = useState(true);

       useEffect(() => {
              const checkVisibility = () => {
                      const mobile = window.innerWidth < 919;
                      setIsVisible(!mobile); 
              };

              checkVisibility();
              window.addEventListener("resize",checkVisibility);
              return () => {
                   window.removeEventListener("resize",checkVisibility);
              };
       },[]);

       useEffect(() => {
               const checkScroll = () => {
                        const SCROLL_TRIGGER = 37;
                        const scrolledEnough = window.scrollY > SCROLL_TRIGGER;
                        setIsOpen(!scrolledEnough);
               };

               checkScroll();
               window.addEventListener("scroll",checkScroll);
               return () => {
                     window.removeEventListener("scroll",checkScroll);
               }
       },[]);

       return(
        <div className="min-h-screen">

                 <div 
                 style={{
                      backgroundImage:`url(${about1})`,
                      backgroundSize:"cover",
                      backgroundPosition:"center",
                      backgroundRepeat:"no-repeat",
                      height:"700px",
                      width:"100%",
                      position: "fixed",
                      zIndex:-50,
                      top:"0"
                 }} className={`${isVisible ? "block" : "hidden"}`}>  
                 </div>


                 <div className={`w-full h-[660px]  bg-[rgba(96,165,250,0.4)]  flex flex-col items-center ${isVisible ? "block" : "hidden"}`}>
                     <div className={`flex md:flex-row flex-col mx-auto items-center justify-between pt-6 w-[80%] text-white ${isOpen ? "block" : "hidden"}`}>
                              <div className="font-bold">
                                   <Link to="/">
                                          THECODECRAFTS
                                   </Link>
                              </div>
                              <div className={`flex gap-x-14 items-center`}>
                                  <Link to="/" className="font-bold">HOME</Link>
                                  <Link to="/about" className="font-bold">ABOUT</Link>
                                  <Link to="/services" className="font-bold">SERVICES</Link>
                                  <Link to="/contactus" className="p-2 px-6 bg-blue-400 rounded-full hover:bg-gray-400">CONTACT US</Link>
                                  {/* <Link to="/blog" className="font-bold">BLOG</Link> */}
                              </div>
                     </div>

                     <div className='flex fixed right-1 bottom-10 gap-1 z-300'>
                               <p className='text-gray-500 mt-2.5'>
                              <Link to="https://wa.me/917004109936" className='bg-slate-200 px-1 rounded-md py-1'>
                                 Message
                              </Link>
                            </p>
                               <a
                                 href='https://wa.me/917004109936'
                                 target="_blank"
                                 rel="noopener noreferrer" 
                                 className='text-white p-1 bg-green-500 rounded-full cursor-pointer'>
                                   <FaWhatsapp size={36}/>
                               </a>
                     </div>

                     <div className={`w-[50%] flex flex-col text-white items-center justify-center mt-40 fixed z-5 ${isVisible ? "block" : "hidden"}`}>
                                <h1 className="text-8xl font-bold drop-shadow-lg">Who We Are</h1>
                                <p className="w-full mt-4 text-xl mx-auto">An innovative, technology-focused, business-driven end-to-end IT Solutions Company with a specialization in providing cost-effective custom software solutions</p>
                                <Link to="/contactus" className="flex items-center p-2 px-4 bg-blue-400 hover:bg-gray-400 rounded-full gap-x-2 mt-6">
                                          <FaPlay />
                                          <p className="text-l">KNOW MORE</p>
                                </Link>
                        </div>
                 </div>

                 <div className="bg-white relative z-20 w-full flex flex-col items-center justify-center">
                            <div className="w-[80%] pt-32">
                                         <div className="flex lg:flex-row flex-col justify-between gap-y-6">
                                         <div className="lg:w-[45%] w-full">
                                                <h1 className="text-7xl font-bold text-slate-800/85">A Bit About Us</h1>
                                                <p className="mt-8 text-xl text-gray-500">Al Hadaba International FZC is an innovative, technology-focused, business-driven end-to-end IT Solutions Company with a specialization in providing cost-effective custom software solutions to clients based across the Middle East.</p>
                                                <p className="mt-8 text-xl text-gray-500">Since our inception in 2003, we have gained a great reputation as a software development company for offering cutting-edge solutions in all key verticals and horizontals which span a complete life cycle from planning, designing, innovation, development and testing to implementation, roll-out and maintenance.</p>
                                         </div>
                                         <img src={team} className="lg:w-[45%] w-full object-cover"></img>
                                         </div>
                                         <p className="mt-12 text-xl text-gray-500">Our approaches are always customer focused and competitively based on the latest emerging technologies of the time, non-compromising on the quality of the products which are vastly tested and yet at an affordable price.</p>
                                         <p className="mt-8 text-xl text-gray-500">We always remain innovative and exploit new capabilities enabled through new technologies. A cornerstone of our success is the trust and close collaboration of our clients.</p>
                            </div>

                              <MovableBackgroundSection></MovableBackgroundSection>

                              <Footer></Footer>

                 </div>
        </div>
       )
}

export default About