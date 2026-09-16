import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

/**
 * Lightbox modal for viewing high-res gallery items.
 * Supports keyboard navigation (Escape, ArrowLeft, ArrowRight) and backdrop click.
 */
export default function Lightbox({ item, items, onClose, onSelect }) {
  const currentIndex = items.findIndex((i) => i.id === item?.id);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelect(items[currentIndex - 1]);
    } else {
      onSelect(items[items.length - 1]); // Loop back to last
    }
  }, [currentIndex, items, onSelect]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onSelect(items[currentIndex + 1]);
    } else {
      onSelect(items[0]); // Loop back to first
    }
  }, [currentIndex, items, onSelect]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, handlePrev, handleNext]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo view: ${item.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8
        bg-navy-950/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      {/* Container to prevent backdrop click closing when clicking modal content */}
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-navy-900/90 rounded-2xl overflow-hidden
          border border-white/10 shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-navy-950/50">
          <div className="flex items-center gap-2 text-gold-400 font-sans text-xs tracking-wider uppercase">
            <MapPin size={14} className="text-gold-400 shrink-0" />
            <span>{item.location}</span>
            <span className="text-white/30">•</span>
            <span className="text-white/60">{item.category}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-sans text-xs text-white/50">
              {currentIndex + 1} / {items.length}
            </span>
            <button
              onClick={onClose}
              aria-label="Close photo modal"
              className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Image container */}
        <div className="relative flex-1 min-h-[300px] max-h-[68vh] flex items-center justify-center bg-black/40 overflow-hidden">
          <ImageWithFallback
            src={item.image}
            fallback={item.fallback}
            alt={`${item.title} — ${item.location}`}
            className="w-full h-full object-contain max-h-[68vh]"
          />

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full
              bg-navy-950/70 border border-white/15 text-white/80 hover:text-white hover:bg-navy-950
              flex items-center justify-center transition-all duration-200 hover:scale-105"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full
              bg-navy-950/70 border border-white/15 text-white/80 hover:text-white hover:bg-navy-950
              flex items-center justify-center transition-all duration-200 hover:scale-105"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Bottom caption */}
        <div className="px-6 py-4 bg-navy-950/80 border-t border-white/10">
          <h3 className="font-serif text-lg sm:text-xl font-semibold text-white mb-1">
            {item.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
