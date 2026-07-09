export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white/70 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-serif tracking-wider text-white mb-6">
              ASTRA
              <span className="block text-[0.6rem] tracking-[0.2em] font-sans uppercase mt-1 text-[var(--color-gold-light)]">
                Medicare
              </span>
            </div>
            <p className="max-w-sm leading-relaxed text-sm">
              Calicut's premier destination for luxury dental and aesthetic
              care. We combine advanced medical expertise with a calming,
              spa-like environment.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-[var(--color-gold-light)] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[var(--color-gold-light)] transition-colors"
                >
                  Treatments
                </a>
              </li>
              <li>
                <a
                  href="#doctor"
                  className="hover:text-[var(--color-gold-light)] transition-colors"
                >
                  Our Specialists
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-[var(--color-gold-light)] transition-colors"
                >
                  The Clinic
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--color-gold-light)] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--color-gold-light)] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--color-gold-light)] transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Astra Medicare. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
