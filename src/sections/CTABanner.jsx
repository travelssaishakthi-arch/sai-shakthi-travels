import { ArrowRight, Mail } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CTA_BG =
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80';

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
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={CTA_BG}
          alt=""
          className="w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/60" />
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="reveal section-label text-gold-400 mb-5 block">
            Start Planning
          </span>

          <h2
            id="cta-heading"
            className="reveal reveal-delay-1 section-heading-light mb-5"
          >
            Ready to Start{' '}
            <span className="italic text-gold-300">Your Journey?</span>
          </h2>

          <span className="reveal reveal-delay-2 gold-line mb-6 block" />

          <p className="reveal reveal-delay-2 text-white/70 font-sans text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            Tell us where you want to go. We'll help you plan the journey —
            from the first mile to the last.
          </p>

          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              id="cta-send-enquiry-btn"
              onClick={handleScrollToContact}
              className="btn-primary text-sm px-8 py-4 w-full sm:w-auto"
            >
              <Mail size={16} aria-hidden="true" />
              Send an Enquiry
              <ArrowRight size={15} aria-hidden="true" />
            </button>

            <a
              href="mailto:travelssaishakthi@gmail.com"
              className="text-white/60 hover:text-gold-300 font-sans text-sm
                transition-colors duration-200 underline underline-offset-4"
            >
              travelssaishakthi@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
