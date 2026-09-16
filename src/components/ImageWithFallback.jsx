import { useState, useEffect } from 'react';
import defaultLocalFallback from '../assets/images/hero/hero-pondicherry.png';

/**
 * ImageWithFallback — resilient image component.
 * If the local image fails to load, it automatically switches to a high-quality fallback.
 * Prevents broken image icons and preserves layout & aspect ratios.
 *
 * @param {string} src - primary image source (e.g. local asset)
 * @param {string} fallback - backup image source (e.g. curated travel fallback)
 * @param {string} alt - accessible description
 * @param {string} className - styling classes
 * @param {string} loading - 'lazy' (default) or 'eager'
 */
export default function ImageWithFallback({
  src,
  fallback,
  alt = '',
  className = 'w-full h-full object-cover',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  ...props
}) {
  const initialSource = src || fallback || defaultLocalFallback;
  const [currentSrc, setCurrentSrc] = useState(initialSource);
  const [attemptStage, setAttemptStage] = useState(0); // 0: primary, 1: fallback, 2: defaultLocal

  useEffect(() => {
    setCurrentSrc(src || fallback || defaultLocalFallback);
    setAttemptStage(0);
  }, [src, fallback]);

  const handleError = () => {
    if (attemptStage === 0 && fallback && fallback !== currentSrc) {
      setAttemptStage(1);
      setCurrentSrc(fallback);
    } else if (attemptStage < 2 && defaultLocalFallback && defaultLocalFallback !== currentSrc) {
      setAttemptStage(2);
      setCurrentSrc(defaultLocalFallback);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      onError={handleError}
      className={className}
      {...props}
    />
  );
}
