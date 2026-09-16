import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * BackToTop button — floats unobtrusively on screen after scrolling down.
 * Positioned on bottom-left on desktop (or bottom-right above/beside WhatsApp on mobile).
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      id="back-to-top-btn"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className="fixed bottom-20 left-4 md:bottom-6 md:left-6 z-30
        w-11 h-11 rounded-full bg-navy-900/90 text-white/90
        border border-navy-700/50 shadow-lg backdrop-blur-sm
        flex items-center justify-center
        hover:bg-gold-500 hover:text-navy-950 hover:border-gold-400
        transition-all duration-300 ease-out hover:scale-105 active:scale-95
        animate-fade-in"
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}
