import { Route } from "react-router"
import { Routes } from "react-router"
import About from "./pages/About"
import Services from "./pages/Services"
import Navbar from "./components/Navbar"
import { useState,useEffect } from "react"
import MiniNav from "./components/MiniNav"
import Footer from "./components/Footer"
import ContactUs from "./pages/ContactUs"
import Home from "./pages/Home"

function App() {

  const [isVisible,setIsVisible] = useState(false);
  const [isMobile,setIsMobile] = useState(false);

  useEffect(() => {
        const checkVisibility = () => {
            const scrolled = window.scrollY > 35;
            const mobile = window.innerWidth < 919;
            setIsMobile(mobile && !scrolled);
            setIsVisible(scrolled || mobile);
        };

        checkVisibility();

        window.addEventListener("scroll", checkVisibility);
        window.addEventListener("resize", checkVisibility);

        return () => {
            window.removeEventListener("scroll", checkVisibility);
            window.removeEventListener("resize", checkVisibility);
        };
    }, []);

  return (
     <div className="min-h-screen">
              <MiniNav></MiniNav>
              <div
               className={`fixed top-0 w-full mx-auto bg-blue-400/70 z-[100] transition-all duration-500 ease-in-out
               ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"} ${isMobile ? "mt-[40px]" : "mt-0"}`}
              >
                 <Navbar/>
             </div>
              <Routes>
                      <Route path="/" element={<Home></Home>}></Route>
                      <Route path="/about" element={<About></About>}></Route>
                      <Route path="/services" element={<Services></Services>}></Route>
                      <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
              </Routes>
              {/* <Footer></Footer> */}
     </div>
  )
}

export default App
