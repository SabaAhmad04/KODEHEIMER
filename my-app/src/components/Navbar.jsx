import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { LuAlignJustify } from "react-icons/lu";
import logo from "../assets/logo.png"

const Navbar = () => {
    const[isOpen,setIsOpen] = useState(false);
    const[isVisible,setIsVisible] = useState(true);
    
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
           const checkVisibility = () => {
                   const isMobile = window.innerWidth < 880;
                   setIsVisible(!isMobile);
           };

           checkVisibility();
           window.addEventListener("resize",checkVisibility);
           return () => {
               window.removeEventListener("resize",checkVisibility);
           }
    },[])

    return(
        <div className="w-full flex justify-center items-center">
                  <div 
        ref={navRef}
        className={`flex flex-row items-center justify-between text-xl w-[90%] font-semibold
         ${isOpen ? "h-[180px]" : "h-[70px]"}`}>
            <div className="flex flex-row gap-x-3 items-center justify-center h-full">
                <img  className="md:w-[50px] md:h-[50px] w-[30px] h-[30px]" src={logo}/>
                <div className="text-white font-bold ">
                    <Link to="/" className="md:font-bold font-medium">
                         THECODECRAFTS
                    </Link>
                </div>
            </div>
            <div className="flex">
                <div className="">
                    <button onClick={() => setIsOpen(!isOpen)} 
                    className={`${!isOpen && !isVisible ? "flex" : "hidden"} flex justify-items-end`}>
                        <LuAlignJustify className="font-extrabold text-xl text-white cursor-pointer"/>
                    </button>
                </div>
                <div className={`${isOpen || isVisible ? "flex" : "hidden"} w-full flex-col gap-y-1 font-semibold text-white 
                ${isVisible ? "flex flex-row gap-x-16" : "flex"}`}>
                    <button><Link to = {'/'} onClick={ () => setIsOpen(!isOpen)}>Home</Link></button>
                    <button><Link to = {'/about'} onClick={ () => setIsOpen(!isOpen)}>About</Link></button>
                    <button><Link to = {'/services'} onClick={ () => setIsOpen(!isOpen)}>Services</Link></button>
                    <button className={`${isVisible ? "bg-blue-700 rounded-full p-1 px-2 hover:bg-gray-400" : ""}`}><Link to = {'/contactus'} onClick={ () => setIsOpen(!isOpen)}>Contact Us</Link></button>
                    {/* <button><Link to = {'/blog'} onClick={ () => setIsOpen(!isOpen)}>Blog</Link></button> */}
                </div>
            </div>
        </div>
        </div>
    )
}
export default Navbar;