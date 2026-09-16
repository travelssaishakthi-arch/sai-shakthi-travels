import { useState } from 'react';
import { Maximize2, MapPin } from 'lucide-react';
import { galleryItems } from '../data/gallery';
import Lightbox from '../components/Lightbox';
import ImageWithFallback from '../components/ImageWithFallback';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const sectionRef = useScrollReveal();

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
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
          <span className="reveal reveal-delay-2 gold-line mb-5 block" />
          <p className="reveal reveal-delay-2 section-subheading mx-auto">
            From the serene heritage boulevards of Pondicherry to peaceful coastal escapes
            and misty hilltops, explore moments from the journeys we craft for our travelers.
          </p>
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => {
            const isFeatured = index === 0 || index === 4;
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
      </div>

      {/* Lightbox Modal */}
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
