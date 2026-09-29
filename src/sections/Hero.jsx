import { ArrowRight, ChevronDown } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';
import { images, fallbacks } from '../data/images';

const highlights = [
  { label: 'Comfortable Travel' },
  { label: 'Reliable Service' },
  { label: 'Personalized Trips' },
];

function scrollTo(href) {
  const target = document.querySelector(href);
  if (target) {
    const offset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col"
      aria-label="Hero — Your Journey, Our Responsibility"
    >
      {/* Background image with resilient fallback */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <ImageWithFallback
          src={images.hero.pondicherry}
          fallback={fallbacks.hero}
          alt="SAI SHAKTHI TRAVELS Pondicherry cab and tour service"
          className="w-full h-full object-cover object-[12%_center] md:object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/65 to-navy-950/90" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_rgba(4,8,26,0.6)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center
        px-4 sm:px-6 lg:px-8 pt-28 pb-24 text-center">
        {/* Eyebrow / Tagline */}
        <div className="mb-5 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/80 backdrop-blur-md border border-gold-400/30 text-gold-300 font-sans font-semibold text-xs tracking-[0.18em] uppercase">
            YOUR JOURNEY, OUR RESPONSIBILITY
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white
            leading-[1.12] max-w-4xl text-shadow-lg tracking-tight
            animate-fade-up"
          style={{ animationDelay: '0.25s', animationFillMode: 'both' }}
        >
          Pondicherry Cabs,{' '}
          <span className="italic font-normal text-gold-300">Travels &amp; Tours</span>
        </h1>

        {/* Supporting text */}
        <p
          className="mt-5 text-white/90 font-sans text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed text-shadow-sm
            animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          Explore Pondicherry and travel across Tamil Nadu with reliable cab services,
          airport transfers, outstation trips and customized tour journeys.
        </p>

        {/* CTA buttons */}
        <div
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none
            animate-fade-up"
          style={{ animationDelay: '0.55s', animationFillMode: 'both' }}
        >
          <button
            id="hero-book-cab-btn"
            onClick={() => scrollTo('#contact')}
            className="btn-primary text-sm sm:text-base px-8 py-4 w-full sm:w-auto min-h-[48px] shadow-xl shadow-gold-500/25"
            aria-label="Book a Cab — scroll to booking form"
          >
            Book a Cab
            <ArrowRight size={18} aria-hidden="true" />
          </button>
          <button
            id="hero-explore-dest-btn"
            onClick={() => scrollTo('#destinations')}
            className="btn-outline text-sm sm:text-base px-7 py-4 w-full sm:w-auto min-h-[48px]"
            aria-label="Explore Destinations — view destinations"
          >
            Explore Destinations
          </button>
        </div>

        {/* Highlights row */}
        <div
          className="mt-16 flex flex-col sm:flex-row items-center gap-4 sm:gap-10
            animate-fade-up"
          style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
        >
          {highlights.map((item, i) => (
            <div key={item.label} className="flex items-center gap-3">
              {i > 0 && (
                <span
                  className="hidden sm:block w-px h-5 bg-white/25"
                  aria-hidden="true"
                />
              )}
              <span className="flex items-center gap-2 text-white/80 font-sans text-sm font-medium">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0"
                  aria-hidden="true"
                />
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative z-10 flex justify-center pb-8">
        <button
          onClick={() => scrollTo('#services')}
          aria-label="Scroll down to services"
          className="flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70
            transition-colors duration-200 group"
        >
          <span className="font-sans text-[10px] tracking-widest uppercase">Scroll</span>
          <ChevronDown
            size={18}
            className="group-hover:translate-y-0.5 transition-transform duration-300 animate-bounce"
            style={{ animationDuration: '2s' }}
          />
        </button>
      </div>
    </section>
  );
}
