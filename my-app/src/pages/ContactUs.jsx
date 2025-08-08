import { Link } from "react-router";
import about1 from "../assets/about1.png.jpg";
import { FaPlay } from "react-icons/fa";
import Footer from "../components/Footer";
import { useEffect, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaWhatsapp } from "react-icons/fa6";
import logo from "../assets/logo.png"

const ContactUs = () => {
         const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q5lq92j', 'template_73fjq6l', form.current, {
        publicKey: 'hikQRv9nIQUWowDls',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
       
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
                              <div className="font-bold flex items-center justify-center">
                                                                 <img  className="w-[30px] h-[30px]" src={logo}/>
                                                                 <Link to="/">
                                                                        THECODECRAFTS
                                                                 </Link>
                                                            </div>
                              <div className={`flex gap-x-14 items-center`}>
                                  <Link to="/" className="font-bold hover:cursor-pointer">HOME</Link>
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
                                <h1 className="text-8xl font-bold drop-shadow-lg">Contact Us</h1>
                                <p className="mt-4 text-xl mx-auto">Get in touch with us for any quiries you have</p>
                                <Link to="/contactus" className="flex items-center p-2 px-4 bg-blue-400 hover:bg-gray-400 rounded-full gap-x-2 mt-6">
                                          <FaPlay />
                                          <p className="text-l">VIEW OUR PRODUCTS</p>
                                </Link>
                        </div>
                 </div>

                 <div className="bg-white relative z-20  flex flex-col items-center justify-center w-full">

                             <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.6863772192432!2d86.14154107508409!3d22.77701737934658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4daa475a5cd%3A0xd87b53fadcd771a1!2sNational%20Institute%20of%20Technology%20Jamshedpur%20(NIT%20Jamshedpur)!5e0!3m2!1sen!2sin!4v1754332322155!5m2!1sen!2sin"
                              width="80%"
                              height="400"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              className="mt-18"/>

                              <div className="flex md:flex-row flex-col md:justify-between justify-center mx-auto gap-y-8 md:w-[80%] w-full mt-14 mb-16">
                                     <div>
                                           <h3 className="text-3xl text-gray-600 font-medium">Send us your queries</h3>
                                           <p className="mt-6 text-xl text-gray-400">THECODECRAFTS</p>
                                           <p className="mt-1 text-xl text-gray-400">Jamshedpur, INDIA</p>
                                           <p className="mt-1 text-xl text-gray-400">T:<span className="text-blue-400">+917004109936</span></p>
                                           <p className="mt-1 text-xl text-gray-400">E:<span className="text-blue-400">thecodecrafts07@gmail.com</span></p>
                                     </div>
                                     <form ref={form} onSubmit={sendEmail}>
                                            <div className="flex md:flex-row flex-col gap-x-5 gap-y-5">
                                                  <input type="text" required placeholder="Full Name" name="user_name" className="md:w-[160px] w-full h-[50px] border-[1px] border-gray-300 bg-gray-200 pl-3 rounded-md"></input>
                                                  <input type="email" required placeholder="Email" name="user_email" className="md:w-[160px]  w-full h-[50px] border-[1px] border-gray-300 bg-gray-200 pl-3 rounded-md"></input>
                                                  <input type="tel"  required pattern="[0-9]{10}" 
                                                  title="Enter a valid 10-digit phone number"
                                                  placeholder="Phone Number" name="user_phone" className="md:w-[160px] w-full h-[50px] border-[1px] border-gray-300 bg-gray-200 pl-3 rounded-md"></input>
                                            </div>
                                            <textarea placeholder="How Can We Help You?" required name="message" className='w-full bg-gray-200 border-[1px] border-gray-300 mt-5 h-35 pl-3 rounded-md'></textarea>
                                            <button className='mt-7 bg-blue-700/70 rounded-full p-2 px-7 text-white text-xl hover:cursor-pointer'>SEND</button>
                                     </form>
                              </div>

                              <Footer></Footer>

                 </div>
                 
        </div>
       )
}

export default ContactUs