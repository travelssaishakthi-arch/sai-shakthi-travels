import { ArrowRight, Mail, Phone, Calendar } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { fallbacks } from '../data/images';
import { PRIMARY_PHONE, SECONDARY_PHONE } from '../utils/whatsapp';

export default function CTABanner() {
  const sectionRef = useScrollReveal();

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="cta-heading"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-navy-950"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={fallbacks.hero}
          alt=""
          className="w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-950/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900/80 border border-gold-400/30 text-gold-300 font-sans font-semibold text-xs tracking-[0.16em] uppercase mb-4">
            START PLANNING
          </span>

          <h2
            id="cta-heading"
            className="reveal reveal-delay-1 section-heading-light mb-4"
          >
            Ready to Start{' '}
            <span className="italic text-gold-300">Your Journey?</span>
          </h2>

          <span className="reveal reveal-delay-2 gold-line mb-5 block" />

          <p className="reveal reveal-delay-2 text-white/80 font-sans text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            Tell us where you want to go. We&apos;ll help you plan the journey —
            from the first mile to the last.
          </p>

          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
            <button
              id="cta-send-enquiry-btn"
              onClick={handleScrollToContact}
              className="btn-primary text-sm sm:text-base px-8 py-3.5 min-h-[48px] w-full sm:w-auto shadow-lg shadow-gold-500/20"
            >
              <Calendar size={17} aria-hidden="true" />
              <span>Book a Cab / Enquire</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>

            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="btn-outline text-sm sm:text-base px-6 py-3.5 min-h-[48px] w-full sm:w-auto text-center"
              aria-label={`Call ${PRIMARY_PHONE}`}
            >
              <Phone size={15} aria-hidden="true" />
              <span>Call {PRIMARY_PHONE}</span>
            </a>
          </div>

          <div className="reveal reveal-delay-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/60">
            <a
              href="mailto:travelssaishakthi@gmail.com"
              className="hover:text-gold-300 font-sans transition-colors duration-200 inline-flex items-center gap-1.5 underline underline-offset-4"
            >
              <Mail size={13} aria-hidden="true" />
              travelssaishakthi@gmail.com
            </a>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span>Alt: +91 {SECONDARY_PHONE}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
