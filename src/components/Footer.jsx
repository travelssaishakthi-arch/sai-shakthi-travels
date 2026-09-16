import { Mail, Phone, MapPin, ChevronRight, ArrowUp } from 'lucide-react';
import { PHONE_PRIMARY, PHONE_SECONDARY } from '../utils/whatsapp';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Packages', href: '#packages' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Pondicherry Cab Service',
  'Pondicherry Outstation Cabs',
  'Pondicherry Airport Taxi',
  'Pondicherry Tour Packages',
  'Customized Travel Itineraries',
  'Family & Group Trips',
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
];

function FooterLink({ href, children }) {
  const handleClick = (e) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        className="flex items-center gap-1.5 text-navy-300 hover:text-gold-400
          font-sans text-sm transition-colors duration-200 group"
      >
        <ChevronRight
          size={12}
          className="text-gold-600 shrink-0 group-hover:translate-x-0.5 transition-transform duration-200"
        />
        {children}
      </a>
    </li>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-white" role="contentinfo">
      {/* Top border accent */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <span className="block font-serif font-bold text-xl text-white tracking-wide leading-none">
                SAI SHAKTHI
              </span>
              <span className="block font-sans font-medium text-[10px] tracking-[0.22em] uppercase text-gold-400 mt-0.5">
                TRAVELS
              </span>
            </div>

            <p className="text-navy-300 font-sans text-sm leading-relaxed max-w-xs mb-6">
              SAI SHAKTHI TRAVELS provides cab, travel and tour services from Pondicherry / Puducherry for local trips, airport transfers, outstation journeys and customized travel.
            </p>

            {/* Contact details */}
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="flex flex-col text-sm text-navy-300">
                  <a href={`tel:${PHONE_PRIMARY}`} className="hover:text-gold-400 transition-colors font-medium">
                    +91 {PHONE_PRIMARY}
                  </a>
                  <a href={`tel:${PHONE_SECONDARY}`} className="hover:text-gold-400 transition-colors text-xs text-navy-400">
                    +91 {PHONE_SECONDARY}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href="mailto:travelssaishakthi@gmail.com"
                  className="text-navy-300 hover:text-gold-400 font-sans text-sm transition-colors duration-200 break-all"
                >
                  travelssaishakthi@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-navy-300 font-sans text-sm">
                  Pondicherry / Puducherry, India
                </span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-sans font-semibold text-sm tracking-widest uppercase text-gold-400 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans font-semibold text-sm tracking-widest uppercase text-gold-400 mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="flex items-center gap-1.5 text-navy-300 font-sans text-sm">
                    <ChevronRight size={12} className="text-gold-600 shrink-0" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Legal */}
          <div>
            <h3 className="font-sans font-semibold text-sm tracking-widest uppercase text-gold-400 mb-5">
              Plan Your Journey
            </h3>
            <p className="text-navy-300 font-sans text-sm leading-relaxed mb-5">
              Have a destination in mind? Contact our team for transparent pricing and immediate assistance.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#contact');
                if (target) {
                  const offset = 72;
                  const top = target.getBoundingClientRect().top + window.scrollY - offset;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="btn-primary text-xs px-5 py-2.5"
              id="footer-enquiry-btn"
            >
              Send an Enquiry
            </a>

            <ul className="mt-6 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-navy-500 hover:text-navy-300 font-sans text-xs transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5
          flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-navy-500 font-sans text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} SAI SHAKTHI TRAVELS. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1.5 text-navy-500 hover:text-gold-400
              font-sans text-xs transition-colors duration-200 group"
          >
            <ArrowUp
              size={13}
              className="group-hover:-translate-y-0.5 transition-transform duration-200"
            />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
