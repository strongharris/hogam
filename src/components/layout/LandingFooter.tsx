/**
 * Footer for the public landing page.
 * Forest-green background with company links and large Hogam watermark.
 */
export function LandingFooter() {
  return (
    <footer className="bg-forest text-paper pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1">
            <img src="/hogam-logo.png" alt="Hogam logo" className="w-24 h-24 mb-6 object-contain" />
            <p className="text-white/60 text-sm leading-relaxed">
              Hogam turns vocabulary lists into <br /> visual memories.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Product</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="hover:text-white cursor-pointer">Download</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Methodology</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Legal</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="hover:text-white cursor-pointer">Privacy</li>
              <li className="hover:text-white cursor-pointer">Terms</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs">&copy; 2024 Hogam Inc. Seoul, Korea.</p>
          <div className="flex gap-6">
            <div className="w-5 h-5 rounded-full bg-white/20"></div>
            <div className="w-5 h-5 rounded-full bg-white/20"></div>
            <div className="w-5 h-5 rounded-full bg-white/20"></div>
          </div>
        </div>

        <div className="mt-20">
          <h1 className="text-[12vw] leading-none font-serif text-center text-white/10 font-bold tracking-tight select-none pointer-events-none">
            Hogam
          </h1>
        </div>
      </div>
    </footer>
  );
}
