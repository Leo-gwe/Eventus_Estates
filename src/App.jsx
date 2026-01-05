import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Properties from './components/Properties.jsx'
import About from './components/About.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      {/* About was below properties incase of any bugs */}
      <About />
      <Properties />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
