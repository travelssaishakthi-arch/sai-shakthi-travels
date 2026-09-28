import { useEffect, useRef } from 'react';

/**
 * Custom hook that applies scroll-reveal behavior to a container ref.
 * All child elements with the `reveal` class become visible as they enter the viewport.
 * Automatically observes dynamically added elements via MutationObserver.
 */
export function useScrollReveal(deps = []) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

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

    const observeReveals = () => {
      const elements = container.querySelectorAll('.reveal');
      elements.forEach((el) => {
        if (!el.classList.contains('visible')) {
          observer.observe(el);
        }
      });
    };

    observeReveals();

    // Catch dynamically mounted elements (e.g., expanded card grids)
    const mutationObserver = new MutationObserver(() => {
      observeReveals();
    });

    mutationObserver.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, deps);

  return containerRef;
}
