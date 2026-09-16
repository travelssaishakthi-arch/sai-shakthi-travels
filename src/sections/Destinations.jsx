import { useState, useMemo, useEffect, useRef } from 'react';
import { destinations } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';
import CategoryFilter from '../components/CategoryFilter';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Destinations() {
  const headerRef = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('all');
  const [visible, setVisible] = useState(true);
  const prevCat = useRef('all');

  // Filter destinations by category
  const filtered = useMemo(
    () =>
      activeCategory === 'all'
        ? destinations
        : destinations.filter((d) => d.category === activeCategory),
    [activeCategory]
  );

  // Fade-out → swap → fade-in when category changes
  const handleCategoryChange = (catId) => {
    if (catId === prevCat.current) return;
    setVisible(false);
    setTimeout(() => {
      setActiveCategory(catId);
      prevCat.current = catId;
      setVisible(true);
    }, 200);
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
        { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
      );
      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 80);
    return () => clearTimeout(timer);
  }, [filtered]);

  return (
    <section
      id="destinations"
      className="py-20 lg:py-28 bg-navy-950"
      aria-labelledby="destinations-heading"
    >
      {/* ── Section header ── */}
      <div ref={headerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="reveal section-label text-gold-400 mb-3 block">
            EXPLORE FROM PONDICHERRY
          </span>
          <h2
            id="destinations-heading"
            className="reveal reveal-delay-1 section-heading-light max-w-3xl mx-auto"
          >
            Discover Beautiful Destinations From Pondicherry
          </h2>
          <span className="reveal reveal-delay-2 gold-line mx-auto mt-5 mb-5" />
          <p className="reveal reveal-delay-2 text-navy-300 font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            From peaceful coastal escapes to heritage towns and hill stations, plan
            your next journey with SAI SHAKTHI TRAVELS.
          </p>

          {/* Filter buttons */}
          <div className="reveal reveal-delay-3">
            <CategoryFilter
              active={activeCategory}
              onChange={handleCategoryChange}
            />
          </div>
        </div>
      </div>

      {/* ── Card grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5
            transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
          aria-live="polite"
          aria-label={`Destinations: showing ${filtered.length} result${filtered.length !== 1 ? 's' : ''}`}
        >
          {filtered.map((dest, i) => (
            <DestinationCard
              key={dest.slug}
              destination={dest}
              delay={(i % 4) + 1}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-navy-400 font-sans text-sm py-16">
            No destinations found for this category.
          </p>
        )}
      </div>
    </section>
  );
}
