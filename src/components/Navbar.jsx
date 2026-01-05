import { HomeIcon, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
               <a href="/#hero" className="flex items-center space-x-1 group">
                <div>
                    <img src="/IMG_0142_logo.jpeg" alt="Eventus Estates Logo" className="w-6 h-6 sm:w-8 sm:h-8"/>
                </div>
                <span className="text-lg sm:text-xl">
                    <span className="text-white">Eventus</span>
                    <span className="text-yellow-500 font-bold">Estates</span>
                </span>
            </a>
         
         {/* Navigation links/buttons */}
         <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#hero" className="text-white hover:text-yellow-500 transition text-sm lg:text-base">Home</a>
            <a href="#properties" className="text-white hover:text-yellow-500 transition text-sm lg:text-base">Properties</a>
            <a href="#about" className="text-white hover:text-yellow-500 transition text-sm lg:text-base">About</a>
            {/* <a href="#testimonials" className="text-white hover:text-yellow-500 transition text-sm lg:text-base">Testimonials</a> */}
            <a href="#contact" className="px-4 py-2 bg-yellow-500 text-slate-950 font-semibold rounded-lg hover:bg-yellow-600 transition text-sm lg:text-base">Contact Us</a>
         </div>
         
         <button className="md:hidden p-2" onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
            {mobileMenuIsOpen ? (<X />) : (
            // <Menu className="w-5 h-5 text-white sm:w-6 sm:h-6" />
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

  )
        }
         </button>
         </div>  
        </div>
    
        {mobileMenuIsOpen && (
            <div className="md:hidden bg-slate-900/95 backdrop-blur-lg px-4 pt-2 pb-4 space-y-1 border-t border-slate-800 animate-in slide-in-from-top duration-300">
                <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                <a href="#hero" onClick={() => setMobileMenuIsOpen(false)} className="block text-white hover:bg-slate-800"><HomeIcon /></a>
                <a href="/#properties" onClick={() => setMobileMenuIsOpen(false)} className="block text-white hover:bg-slate-800">Listings</a>
                <a href="#about" onClick={() => setMobileMenuIsOpen(false)} className="block text-white hover:bg-slate-800">About</a>
                {/* <a href="#testimonials" onClick={() => setMobileMenuIsOpen(false)} className="block text-white hover:bg-slate-800">Testimonials</a> */}
                <a href="#contact" onClick={() => setMobileMenuIsOpen(false)} className="block text-white hover:bg-slate-800">Contact Us</a>
                </div>
            </div>)}
    </nav>
  );
}