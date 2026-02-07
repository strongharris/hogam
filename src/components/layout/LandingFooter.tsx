/**
 * Footer for the public landing page.
 * Simplified design with logo, tagline, and essential links.
 */
export function LandingFooter() {
  return (
    <footer className="bg-forest text-paper py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 items-start">
          {/* Logo & tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/hogam-logo.png"
                alt="Hogam logo"
                className="w-16 h-16 object-contain"
              />
              <span className="font-serif font-bold text-2xl text-white">
                Hogam
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              We don't teach Korean. We make it unforgettable.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
