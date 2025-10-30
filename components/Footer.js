import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";


export function Footer () {
  const year = new Date().getFullYear
    return(
      <footer className="bg-indigo-500 ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:pl-30 lg:grid-cols-4 lg:px-12 lg:pl-30">
        <div>
            <p className="text-white font-bold text-2xl mb-2">FastCash</p>
            <p className="font-thin text-gray-400">About us</p>
            <p className="font-thin text-gray-400">Contact us</p>
            <p className="font-thin text-gray-400">Location</p>
        </div>
        <div>
            <p className="text-white font-bold text-gray-400 mb-2">Financial service</p>
            <p className="font-thin text-gray-400">Loans</p>
            <p className="font-thin text-gray-400">Investment</p>
            <p className="font-thin text-gray-400">Bouunds</p>
        </div>
        <div>
            <p className="text-white font-bold text-2xl mb-2">Legal</p>
            <p className="font-thin text-gray-400">privacy policy</p>
            <p className="font-thin text-gray-400">cookies</p>
            <p className="font-thin text-gray-400">Terms of use</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-white mb-2">Socials</p>
          <div className="flex gap-5">
            <FaFacebookF className="text-2xl text-gray-400" />
            <FaInstagram className="text-2xl text-gray-400" />
            <FaWhatsapp className="text-2xl text-gray-400" />
            
          </div>
        </div>
        </div>
        <div className="border-t border-gray-400 pb-5">
          <h1 className="text-center text-gray-400 mt-3">&copy; FastCash</h1>
          
        </div>

      </footer>
    )
}