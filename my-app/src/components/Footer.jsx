import { Link } from "react-router"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
         return(
            <div className="w-full h-[150px] bg-slate-700/50 flex flex-col  items-center z-200">
                  <p className="mt-4 text-gray-300 text-center">© Copyright  2025   |   All Rights Reserved   | <Link className="text-white" to="https://policies.google.com/terms?hl=en">Captcha Terms</Link></p>
                  <div className="flex mt-6 gap-x-4">
                      <Link to="https://www.facebook.com/share/1CSfaNMJCR" target="_blank" rel="noopener noreferrer"  className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                           <FaFacebookF className="text-blue-400 text-xl"/>
                      </Link>
                      <Link to="https://www.instagram.com/the.codecrafts?utm_source=qr&igsh=MXdraDFrbzB3NXlpcQ%3D%3D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                           <FaInstagram className="text-blue-400 text-xl" />
                      </Link>
                  </div>
            </div>
         )
}

export default Footer