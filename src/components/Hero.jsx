import { ArrowRight, ChevronDown, Heading1, Home, Phone, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [])

  // Slideshow images (served from Vite `public` folder at /images/...)
  const images = [
    "/images/PHOTO-2025-12-15-22-45-25-bg.jpg",
    "/images/PHOTO-2025-12-15-15-13-43.jpg",
    "/images/PHOTO-2025-12-15-15-13-42.jpg",
    "/images/PHOTO-2025-12-15-15-11-18.jpg",
    "/images/pexels-curtis-adams-1694007-7168105.webp",
    "/images/IMG_1410.jpeg",
    "/images/7326651c-3887-4967-8e9e-31ba9a0d7691.jpg",
    "/images/634c953b-f5a2-4490-8065-10ab51718914.jpg",
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((s) => (s + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        // Original background
        // background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, #fbbf24, #1e293b)`
        // Trial background
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, #fbbf24, #1e293b, transparent 40%)`
        // Trial background end
      }} />

      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"/>
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"/>
      {/* Ignore in property prduction */}
  <div className="max-w-7xl mx-auto text-center relative w-full">
    <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative">
      {/* Text Section in Header Start */}
      <div>
        <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-white text-sm sm:text-base font-medium mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
          <Sparkles className="w-4 h-4 text-blue-400"/>
          <span className="text-xs sm:text-sm text-blue-300">Welcome to Eventus <b className="text-yellow-400">Estates</b></span>
        </div>

        <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">Discover your perfect home or commercial space</span>
          {/* Consider adding bottom span content to footer */}
          {/* <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">Expert sourcing, tailored to your needs</span> */}
        </h1>
        <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
          Your trusted partner in real estate, connecting you with the best properties to suit your lifestyle and business needs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
          <a href="#properties" className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-yellow-400 via-orange-400 to-red-400 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 rounded-full flex items-center justify-center space-x-2">
            <span>Browse Listings</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
          </a>
          {/* Change Icon on second button */}
          
          <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 rounded-full flex items-center justify-center space-x-2 border border-white/20">
            <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-white"/>
            </div>
            <a href="#contact">
            <span>Get in touch</span>
            </a>
          </button>
         
        </div>
      </div>
      {/* Text Section in Header end */}

      <div className="relative order-2 w-full">
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-3 sm:p-4 shadow-2xl border border-white/10">
          <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-white/5 relative">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Property ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === slideIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              />
            ))}

            <button
              onClick={() => setSlideIndex((s) => (s - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 p-2 rounded-full text-white"
              aria-label="Previous"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>

            <button
              onClick={() => setSlideIndex((s) => (s + 1) % images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 p-2 rounded-full text-white"
              aria-label="Next"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  className={`w-2 h-2 rounded-full ${i === slideIndex ? 'bg-white' : 'bg-white/40'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
                             {/* Code for browser screen replica */}

      {/* <div className="relative order-2 w-full">
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-3 sm:p-4 shadow-2xl border border-white/10"> */}
{/* <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-white/5"> */}
  {/* Properties Header */}
    {/* <div className="flex items-center sm:space-x-2">
      <div className="flex items-center space-x-1 sm:space-x-2">
      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"/>
      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"/>
      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"/>
    </div>
    <span className="text-xs sm:text-sm text-gray-300">
      Eventus Estates
    </span>
    </div>
    <ChevronDown className="w-3 h-3 sm:h-4 sm:w-4 text-gray-300"/>
  </div> */}
        {/* </div>
      </div> */}
    </div>
  </div>
      {/* Ignore in property production end */}
    </section>
  );
}