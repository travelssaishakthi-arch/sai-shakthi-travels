import { useState, useMemo, useEffect, useRef } from 'react';
import { packages } from '../data/packages';
import PackageCard from '../components/PackageCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Compass, ChevronDown, ChevronUp } from 'lucide-react';

const INITIAL_LIMIT = 3;

function scrollToContactWithPrefill(name) {
  window.dispatchEvent(
    new CustomEvent('prefill-enquiry', { detail: { packageName: name } })
  );
  const target = document.querySelector('#contact');
  if (target) {
    const offset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Packages() {
  const sectionRef = useScrollReveal();
  const [showAll, setShowAll] = useState(false);

  const displayedPackages = useMemo(() => {
    if (showAll || packages.length <= INITIAL_LIMIT) {
      return packages;
    }
    return packages.slice(0, INITIAL_LIMIT);
  }, [showAll]);

  const handleToggleShowAll = () => {
    if (showAll) {
      setShowAll(false);
      const target = document.querySelector('#packages');
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
  }, [displayedPackages]);

  const hasMore = packages.length > INITIAL_LIMIT;

  return (
    <section
      id="packages"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-navy-50"
      aria-labelledby="packages-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="reveal section-label mb-3 block">
            TRAVEL PACKAGES
          </span>
          <h2
            id="packages-heading"
            className="reveal reveal-delay-1 section-heading max-w-2xl mx-auto"
          >
            Journeys Designed Around You
          </h2>
          <span className="reveal reveal-delay-2 gold-line mx-auto mt-4 mb-4" />
          <p className="reveal reveal-delay-2 text-navy-500 font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Choose a destination or tell us what you have in mind. We can help
            plan a comfortable journey from Pondicherry.
          </p>
        </div>

        {/* ── Package cards ── */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPackages.map((pkg, i) => (
            <PackageCard
              key={pkg.slug}
              pkg={pkg}
              delay={(i % 3) + 1}
            />
          ))}
        </div>

        {/* ── View All Packages Toggle ── */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              id="packages-toggle-all-btn"
              onClick={handleToggleShowAll}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg
                bg-white hover:bg-navy-900 text-navy-800 hover:text-white font-sans text-sm font-semibold tracking-wide
                border border-navy-200 hover:border-navy-900 shadow-sm hover:shadow-md
                transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-gold-400"
              aria-expanded={showAll}
            >
              {showAll ? (
                <>
                  <span>Show Fewer Packages</span>
                  <ChevronUp size={16} aria-hidden="true" />
                </>
              ) : (
                <>
                  <span>Explore All Packages ({packages.length})</span>
                  <ChevronDown size={16} aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        )}

        {/* ── Bottom CTA ── */}
        <div className="reveal mt-12 sm:mt-14">
          <div
            className="bg-navy-950 rounded-xl px-8 py-8
              flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-navy-950/10"
          >
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                <Compass size={16} className="text-gold-400" aria-hidden="true" />
                <span className="font-sans text-[11px] font-semibold tracking-widest uppercase text-gold-400">
                  Custom Journey
                </span>
              </div>
              <p className="font-serif font-semibold text-xl text-white leading-snug mb-1.5">
                Can&apos;t find the right package?
              </p>
              <p className="font-sans text-sm text-navy-300 leading-relaxed max-w-sm">
                Tell us what kind of journey you have in mind and we&apos;ll help
                you create a customized travel plan.
              </p>
            </div>

            <button
              id="packages-custom-trip-btn"
              onClick={() => scrollToContactWithPrefill('Custom Travel Plan')}
              className="btn-primary shrink-0 w-full sm:w-auto"
              aria-label="Plan a custom trip — scroll to enquiry form"
            >
              Plan a Custom Trip
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
