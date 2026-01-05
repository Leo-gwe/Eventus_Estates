export default function About() {
  return (
    <section id="about" className="relative bg-sky-900/80 text-white overflow-hidden">
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-cyan-400/8 rounded-full blur-3xl" />

      {/* Removed separator gradient — about uses a simpler darker background */}

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 rounded-2xl shadow-xl overflow-hidden border border-white/10 backdrop-blur-sm">
          <div className="lg:flex">
            <div className="lg:w-1/2 p-8 sm:p-12">
              <span className="inline-block px-3 py-1 bg-yellow-400 text-sky-900 font-semibold rounded-full mb-4">About Eventus Estates</span>

              <h2 className="text-3xl font-bold text-white sm:text-4xl">About Us</h2>

              <p className="mt-4 text-base leading-relaxed text-sky-100/90 sm:text-lg">
                At Eventus Estates, we are dedicated to helping you find the
                perfect property to match your goals. With a carefully curated
                selection of residential and commercial opportunities, our
                experienced team guides you through every stage of the real
                estate journey. Whether you are buying, selling, or renting,
                you can trust Eventus Estates to deliver an exceptional service.
              </p>

              <ul className="mt-6 space-y-2 text-sky-100/90">
                <li>• Curated residential & commercial listings</li>
                <li>• Personalised sourcing and advisory</li>
                <li>• Professional support through every transaction</li>
              </ul>

              <div className="mt-6">
                <a href="/#contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-b from-yellow-400 via-orange-400 to-red-400 text-white font-semibold rounded-full hover:scale-102">Contact us</a>
              </div>
            </div>

            <div className="lg:w-1/2 p-6 flex items-center justify-center">
              <div className="w-full max-w-md rounded-xl bg-white/5 p-6 shadow-lg border border-white/10 text-center">
                <img src="/IMG_0142_logo.jpeg" alt="Eventus Estates logo" className="mx-auto w-32 h-32 object-contain" />
                <p className="mt-4 text-sm text-sky-100/80">Trusted partner in residential and commercial property.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}