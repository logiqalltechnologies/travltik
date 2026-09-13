import SplitType from 'split-type';
import { gsap } from './gsap';

/**
 * Initializes the text shine and reveal animation on elements matching the selector
 * Uses SplitType to split words and GSAP ScrollTrigger for smooth blur-to-clear & green shine.
 * NOTE: Text is never rotated, only smoothed with subtle blur fade and gradient shine.
 */
export function initTextShine(target: string | HTMLElement = '.animate-heading') {
  if (typeof window === 'undefined') return null;

  const elements = typeof target === 'string' ? document.querySelectorAll<HTMLElement>(target) : [target];
  if (!elements || elements.length === 0) return null;

  const instances: { split: SplitType; cleanup: () => void }[] = [];

  elements.forEach((el) => {
    // Avoid double-splitting
    if (el.dataset.splitInitialized === 'true') return;
    el.dataset.splitInitialized = 'true';

    try {
      const split = new SplitType(el, { types: 'words' });
      const words = split.words;

      if (words && words.length > 0) {
        // Fade in + blur to clear reveal
        const revealTween = gsap.from(words, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          opacity: 0,
          y: 20,
          filter: 'blur(8px)',
          stagger: 0.08,
          duration: 1,
          ease: 'power3.out',
        });

        // Chamak / Shine effect (green highlight moving across gradient)
        const shineTween = gsap.to(words, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          backgroundPosition: '200% center',
          duration: 1.5,
          stagger: 0.08,
          ease: 'power2.out',
        });

        instances.push({
          split,
          cleanup: () => {
            revealTween.scrollTrigger?.kill();
            revealTween.kill();
            shineTween.scrollTrigger?.kill();
            shineTween.kill();
            split.revert();
            delete el.dataset.splitInitialized;
          },
        });
      }
    } catch (err) {
      console.warn('SplitType initialization error:', err);
    }
  });

  return () => {
    instances.forEach((inst) => inst.cleanup());
  };
}
