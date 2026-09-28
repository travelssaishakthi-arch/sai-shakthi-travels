import { useState, useMemo, useRef, useEffect } from 'react';
import { Maximize2, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { galleryItems } from '../data/gallery';
import Lightbox from '../components/Lightbox';
import ImageWithFallback from '../components/ImageWithFallback';
import { useScrollReveal } from '../hooks/useScrollReveal';

const INITIAL_LIMIT = 6;

export default function Gallery() {
  const sectionRef = useScrollReveal();
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedItems = useMemo(() => {
    if (showAll || galleryItems.length <= INITIAL_LIMIT) {
      return galleryItems;
    }
    return galleryItems.slice(0, INITIAL_LIMIT);
  }, [showAll]);

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
  }, [displayedItems]);

  const handleToggleShowAll = () => {
    if (showAll) {
      setShowAll(false);
      const target = document.querySelector('#gallery');
      if (target) {
        const offset = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } else {
      setShowAll(true);
    }
  };

  const hasMore = galleryItems.length > INITIAL_LIMIT;

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="reveal section-label mb-3 block">
            TRAVEL MOMENTS
          </span>
          <h2
            id="gallery-heading"
            className="reveal reveal-delay-1 section-heading mb-4"
          >
            Glimpses of Journeys{' '}
            <span className="italic text-gold-600">We Create</span>
          </h2>
          <span className="reveal reveal-delay-2 gold-line mb-4 block" />
          <p className="reveal reveal-delay-2 section-subheading mx-auto">
            From the serene heritage boulevards of Pondicherry to peaceful coastal escapes
            and misty hilltops, explore moments from the journeys we craft for our travelers.
          </p>
        </div>

        {/* Editorial Photo Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedItems.map((item, index) => {
            const isFeatured = index === 0 || index === 5 || (showAll && index === 6);
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`reveal reveal-delay-${(index % 4) + 1} group relative rounded-xl overflow-hidden cursor-pointer
                  bg-navy-950 shadow-md hover:shadow-2xl transition-all duration-500 ease-out
                  ${isFeatured ? 'sm:col-span-2 aspect-[16/10]' : 'aspect-square sm:aspect-[4/5]'}`}
              >
                {/* Image */}
                <ImageWithFallback
                  src={item.image}
                  fallback={item.fallback}
                  alt={`${item.title} — ${item.location}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out
                    group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent
                    opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                />

                {/* Top badge */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <span
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full
                      bg-navy-950/60 backdrop-blur-md border border-white/10
                      font-sans text-[11px] font-medium text-white/90"
                  >
                    <MapPin size={11} className="text-gold-400" />
                    {item.location}
                  </span>

                  <span
                    className="w-8 h-8 rounded-full bg-navy-950/60 backdrop-blur-md border border-white/10
                      flex items-center justify-center text-white/80 group-hover:text-gold-400
                      group-hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <Maximize2 size={13} />
                  </span>
                </div>

                {/* Bottom content info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-sans text-[11px] font-semibold text-gold-400 tracking-wider uppercase mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-white leading-snug group-hover:text-gold-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-white/70 line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>

                {/* Subtle border highlight */}
                <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none group-hover:border-gold-400/40 transition-colors duration-300" />
              </div>
            );
          })}
        </div>

        {/* ── View Full Gallery Toggle ── */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              id="gallery-toggle-all-btn"
              onClick={handleToggleShowAll}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg
                bg-navy-50 hover:bg-navy-900 text-navy-800 hover:text-white font-sans text-sm font-semibold tracking-wide
                border border-navy-200 hover:border-navy-900 shadow-sm hover:shadow-md
                transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-gold-400"
              aria-expanded={showAll}
            >
              {showAll ? (
                <>
                  <span>Show Fewer Photos</span>
                  <ChevronUp size={16} aria-hidden="true" />
                </>
              ) : (
                <>
                  <span>View Full Gallery ({galleryItems.length})</span>
                  <ChevronDown size={16} aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal — accessible to all gallery items */}
      {selectedItem && (
        <Lightbox
          item={selectedItem}
          items={galleryItems}
          onClose={() => setSelectedItem(null)}
          onSelect={setSelectedItem}
        />
      )}
    </section>
  );
}
