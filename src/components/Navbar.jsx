import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Packages', href: '#packages' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-navy-100'
            : 'bg-gradient-to-b from-navy-950/80 via-navy-950/40 to-transparent'
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between"
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex flex-col leading-none focus-visible:outline-gold-400 group py-1"
            aria-label="SAI SHAKTHI TRAVELS — home"
          >
            <span
              className={`font-serif font-bold text-lg sm:text-xl tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-navy-900 group-hover:text-gold-600' : 'text-white group-hover:text-gold-300'
              }`}
            >
              SAI SHAKTHI
            </span>
            <span
              className={`font-sans font-semibold text-[10px] tracking-[0.24em] uppercase transition-colors duration-300 ${
                isScrolled ? 'text-gold-600' : 'text-gold-300'
              }`}
            >
              TRAVELS
            </span>
          </a>

          {/* Desktop nav links */}
          <ul
            className="hidden lg:flex items-center gap-0.5 xl:gap-1.5"
            role="list"
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-md font-sans font-medium text-[13px] xl:text-sm tracking-wide
                    transition-colors duration-200
                    ${isScrolled
                      ? 'text-navy-700 hover:text-gold-600 hover:bg-navy-50/60'
                      : 'text-white/90 hover:text-gold-300 hover:bg-white/10'
                    }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary text-xs xl:text-sm px-5 py-2.5 min-h-[40px] shadow-sm"
              id="navbar-enquire-btn"
            >
              Book a Cab
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={`lg:hidden w-11 h-11 flex items-center justify-center rounded-lg transition-colors duration-200 ${
              isScrolled
                ? 'text-navy-900 hover:bg-navy-100/70'
                : 'text-white hover:bg-white/15'
            }`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        style={{ background: 'rgba(9, 15, 39, 0.65)', backdropFilter: 'blur(4px)' }}
      />

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[min(320px,85vw)]
          bg-navy-950 border-l border-navy-800/80 flex flex-col shadow-2xl
          transition-transform duration-300 ease-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-navy-800">
          <div className="flex flex-col">
            <span className="font-serif text-white font-bold text-base">SAI SHAKTHI</span>
            <span className="font-sans text-gold-400 text-[9px] tracking-[0.2em] uppercase font-semibold">TRAVELS</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center rounded-lg text-white/70 hover:text-white hover:bg-navy-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Panel links */}
        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto py-2">
          <ul role="list">
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-6 py-3.5
                    font-sans font-medium text-sm text-white/85 hover:text-gold-300
                    hover:bg-navy-900 border-b border-navy-900/50 transition-colors duration-150 group"
                  style={{ transitionDelay: menuOpen ? `${i * 25}ms` : '0ms' }}
                >
                  <span>{link.label}</span>
                  <ChevronRight
                    size={14}
                    className="text-gold-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Panel CTA */}
        <div className="p-6 border-t border-navy-800 space-y-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-primary w-full justify-center text-sm py-3.5"
            id="mobile-enquire-btn"
          >
            Book a Cab / Enquire
          </a>
        </div>
      </div>
    </>
  );
}
