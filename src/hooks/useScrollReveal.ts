import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to all `.reveal` elements and adds
 * the `visible` class when they enter the viewport.
 *
 * @param dep - Optional dependency that re-runs the observer (e.g. route param).
 */
export function useScrollReveal(dep?: unknown): void {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep]);
}
