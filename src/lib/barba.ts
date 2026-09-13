import barba from '@barba/core';
import { gsap } from './gsap';

/**
 * Initializes Barba.js smooth page transitions with GSAP fade & slide animation.
 * Requires [data-barba="wrapper"] on layout and [data-barba="container"] on main content.
 */
export function initBarba() {
  if (typeof window === 'undefined') return;

  const wrapper = document.querySelector('[data-barba="wrapper"]');
  if (!wrapper) return;

  try {
    barba.init({
      preventRunning: true,
      transitions: [
        {
          name: 'default-transition',
          leave({ current }) {
            return gsap.to(current.container, {
              opacity: 0,
              y: -12,
              duration: 0.3,
              ease: 'power2.inOut',
            });
          },
          enter({ next }) {
            return gsap.from(next.container, {
              opacity: 0,
              y: 12,
              duration: 0.4,
              ease: 'power2.out',
            });
          },
        },
      ],
    });
  } catch (err) {
    // If already initialized or not applicable on current page
    console.warn('Barba.js init notice:', err);
  }
}

export { barba };
