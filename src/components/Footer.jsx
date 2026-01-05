// Social icons use Font Awesome classes; ensure Font Awesome CSS is loaded in your HTML

export default function Footer() {
  const email = 'Eventus.estates@outlook.com';

  return (
    <footer className="bg-[#071030] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3 items-start">
          <div>
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm text-gray-300 max-w-md">
              Whether you’re looking to buy, sell or invest, our team offers practical advice, discreet marketing
              and real-world expertise to help you achieve the best outcome.
            </p>
            {/*
            <a className="mt-4 inline-flex items-center gap-2 rounded bg-yellow-400 px-4 py-2 text-[#162E52] font-semibold" href={`mailto:${email}`}>
              <Mail className="w-4 h-4" />
              {email}
            </a>
            */}
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold">Follow</h3>
            <p className="mt-2 text-sm text-gray-300">Find property highlights and updates on our channels</p>

            <div className="mt-4 flex items-center space-x-3">
              <a href="https://www.instagram.com/eventus_estates/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-full bg-white/5 hover:bg-white/10">
                <i className="fa-brands fa-instagram text-xl" aria-hidden="true"></i>
              </a>

              <a href="https://www.facebook.com/profile.php?id=61565704351983" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-full bg-white/5 hover:bg-white/10">
                <i className="fa-brands fa-facebook-f text-xl" aria-hidden="true"></i>
              </a>

              <a href="https://www.tiktok.com/@eventusestates" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="p-2 rounded-full bg-white/5 hover:bg-white/10">
                <i className="fa-brands fa-tiktok text-xl" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="text-sm text-gray-300">
            <h3 className="text-lg font-semibold">About Eventus Estates</h3>
            <p className="mt-2">Eventus Estates specialises in matching buyers and sellers of commercial property and businesses across the UK. We focus on clear, honest advice and practical marketing.</p>

            <p className="mt-6 text-xs">Website powered by <span className="font-semibold text-white">GW</span></p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Eventus Estates. All rights reserved.
        </div>
      </div>
    </footer>
  );
}