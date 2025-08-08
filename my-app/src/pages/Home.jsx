import ImageSlider from '../components/ImageSlider'
import Cards from '../components/Cards'
import MovableImage from '../components/MovableImage'
import { HiCode } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import { LuChevronsDown } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa6";
import MovableBackgroundSection from '../components/Move'
import Footer from '../components/Footer'
import { Link } from "react-router";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png"

const Home = () => {

  const navigate = useNavigate();
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

  return (

    <div className='flex flex-col items-center justify-center w-full'>
      <div className='w-full flex flex-col'>
        <div className='flex fixed right-1 bottom-10 gap-1 z-3000'>
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
        
        <div className=' md:block relative hidden w-full'>
          <ImageSlider/>
        </div>

         <div className={`flex flex-row  mx-auto items-center justify-between pt-6 w-[80%] text-white lg:ml-36 ml-24 z-300 absolute
          ${isOpen && isVisible ? "block" : "hidden"}`}>
                              <div className="font-bold flex items-center justify-center">
                                                                 <Link to="/">
                                                                                     <img  className="md:w-[50px] md:h-[50px] w-[30px] h-[30px]" src={logo}/>
                                                                                 </Link>
                                                                 <Link to="/">
                                                                        THECODECRAFTS
                                                                 </Link>
                                                            </div>
                              <div className="flex gap-x-14 items-center">
                                  <Link to="/" className="font-bold">HOME</Link>
                                  <Link to="/about" className="font-bold">ABOUT</Link>
                                  <Link to="/services" className="font-bold">SERVICES</Link>
                                  <Link to="/contactus" className="p-2 px-6 bg-blue-400 rounded-full hover:bg-gray-400">CONTACT US</Link>
                              </div>
         </div>

      </div>

      <div className='w-full pt-20 flex flex-col place-items-center '>
        <h1 className='w-[90%] font-bold text-6xl flex items-center justify-center text-center'>
          Our Products
        </h1>
        <p className='w-[85%] text-2xl mt-10 text-center'>
          Customer focused and competitively based Softare solutions on the latest emerging technologies of the time, non-compromising on the quality
          of the products which are vastly tested and yet at an affordable price.
        </p>
        <div className='w-[90%] flex flex-wrap max-w-[1200px] -mt-60'>
          <Cards/>
        </div>
        <div>
          <MovableImage/>
        </div>

        <div className='w-full pt-36 flex flex-col items-center justify-center'>
          <h1 className='w-[70%] font-bold text-6xl text-center'>WHAT WE DO</h1>
          <p className='w-[70%] text-xl mt-8 text-center'>
            We offer cutting-edge solutions in all key verticals and horizontals which span a complete life cycle from planning, designing, innovation, development, and testing to implementation, roll-out and maintenance.
          </p>
        </div>

        {/* BADA ICON WALA SECTION */}

        <div className='w-[80%] flex-wrap lg:flex-nowrap  flex flex-col lg:flex lg:flex-row gap-y-16 justify-center lg:justify-between items-center pt-28 '>

          {/* ICON 1 */}

          <div className='flex flex-col place-items-center justify-center'>
            <div className='border-2 w-32 h-32 border-blue-400 rounded-full flex item-center justify-center text-blue-400'>
              <HiCode size={64} className='hover:animate-ping mt-7 duration-75 '/>
            </div>
            <p className='mt-4  font-semibold text-xl'>Software Development</p>
            <div className='mt-18  text-blue-400 '> <LuChevronsDown size={40}/> </div>

            <div className='mt-6  w-[95%]'>
              <div className='bg-gray-500 border-[1px]'></div>
              <p className='text-gray-500 mt-2'>
                Software development is a process of writing and maintaining the source code
              </p>
              <div className='bg-black border-[1px] mt-2'></div>
            </div>
            
          </div>

          {/* ICON 2 */}

          <div className='flex flex-col place-items-center justify-center'>
            <div className='border-2 w-32 h-32 border-blue-400 rounded-full flex item-center justify-center text-blue-400'>
              <FaPencil size={56} className='hover:animate-ping mt-7.5 duration-75'/>
            </div>
            <p className='mt-4  font-semibold text-xl'>Content Writing</p>
            <div className='mt-18  text-blue-400'> <LuChevronsDown size={40}/> </div>

            <div className='mt-6  w-[95%]'>
              <div className='bg-gray-500 border-[1px]'></div>
              <p className='text-gray-500 mt-2'>
                Software development is a process of writing and maintaining the source code
              </p>
              <div className='bg-black border-[1px] mt-2'></div>
            </div>
          </div>



          {/* ICON 3 */}

          <div className='flex flex-col place-items-center justify-center '>
            <div className='border-2 w-32 h-32 border-blue-400 rounded-full flex item-center justify-center text-blue-400'>
              <FaCartShopping size={56} className='hover:animate-ping mt-8 duration-75'/>
            </div>
            <p className='mt-4  font-semibold text-xl'>Ecommerce development</p>
            <div className='mt-18  text-blue-400'> <LuChevronsDown size={40}/> </div>

            <div className='mt-6  w-[95%]'>
              <div className='bg-gray-500 border-[1px] '></div>
              <p className='text-gray-500 mt-2'>
                Software development is a process of writing and maintaining the source code
              </p>
              <div className='bg-black border-[1px] mt-2'></div>
            </div>
          </div>
          
          
        </div>

        <div className='mt-12 '>
          <button 
            onClick={() => navigate("/services")}  
            className='py-2 px-5 bg-blue-500 rounded-full text-xl text-white cursor-pointer'>
             VIEW ALL SERVICES
          </button>
        </div>

        <div className='mt-16 w-full'>
          < MovableBackgroundSection />
        </div>

        <div className='w-full'>
          <Footer/>  
        </div>        
      </div>
    </div>
    
  )
}

export default Home