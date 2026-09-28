import { useState, useMemo, useEffect, useRef } from 'react';
import { MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

const INITIAL_LIMIT = 4;

function scrollToContact() {
  const target = document.querySelector('#contact');
  if (target) {
    const offset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Services() {
  const sectionRef = useScrollReveal();
  const [showAll, setShowAll] = useState(false);

  const displayedServices = useMemo(() => {
    if (showAll || services.length <= INITIAL_LIMIT) {
      return services;
    }
    return services.slice(0, INITIAL_LIMIT);
  }, [showAll]);

  const handleToggleShowAll = () => {
    if (showAll) {
      setShowAll(false);
      const target = document.querySelector('#services');
      if (target) {
        const offset = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } else {
      setShowAll(true);
    }
  };

  // Trigger reveal on newly rendered cards
  const gridRef = useRef(null);
  useEffect(() => {
    if (!gridRef.current) return;
    const elements = gridRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => el.classList.remove('visible'));
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      );
      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 60);
    return () => clearTimeout(timer);
  }, [displayedServices]);

  const hasMore = services.length > INITIAL_LIMIT;

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="reveal section-label mb-3 block">
            OUR SERVICES
          </span>
          <h2
            id="services-heading"
            className="reveal reveal-delay-1 section-heading max-w-2xl mx-auto"
          >
            Travel Services Designed Around You
          </h2>
          <span className="reveal reveal-delay-2 gold-line mx-auto mt-4 mb-4" />
          <p className="reveal reveal-delay-2 text-navy-500 font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            From everyday travel to memorable getaways, we provide comfortable
            and flexible travel solutions for every journey.
          </p>
        </div>

        {/* ── Card grid ── */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedServices.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={(i % 4) + 1}
            />
          ))}
        </div>

        {/* ── View All Services Toggle ── */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              id="services-toggle-all-btn"
              onClick={handleToggleShowAll}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg
                bg-navy-50 hover:bg-navy-900 text-navy-800 hover:text-white font-sans text-sm font-semibold tracking-wide
                border border-navy-200 hover:border-navy-900 shadow-sm hover:shadow-md
                transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-gold-400"
              aria-expanded={showAll}
            >
              {showAll ? (
                <>
                  <span>Show Fewer Services</span>
                  <ChevronUp size={16} aria-hidden="true" />
                </>
              ) : (
                <>
                  <span>View All Services ({services.length})</span>
                  <ChevronDown size={16} aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        )}

        {/* ── Inline CTA ── */}
        <div className="reveal mt-12 sm:mt-14">
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-6
              bg-navy-50 border border-navy-100 rounded-xl px-8 py-7"
          >
            <div className="text-center sm:text-left">
              <p className="font-serif font-semibold text-lg text-navy-900 leading-snug mb-1">
                Need a Custom Travel Plan?
              </p>
              <p className="font-sans text-sm text-navy-500 leading-relaxed">
                Tell us your requirements and we&apos;ll help you plan your journey.
              </p>
            </div>
            <button
              id="services-enquire-btn"
              onClick={scrollToContact}
              className="btn-primary shrink-0 w-full sm:w-auto"
              aria-label="Enquire about a custom travel plan"
            >
              <MessageCircle size={15} aria-hidden="true" />
              Enquire Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
