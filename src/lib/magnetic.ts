import { gsap } from './gsap';

/**
 * Magnetic pull effect for buttons and elements using GSAP quickTo.
 * Recreates high-end magnetic button feel (Lovable / Bolt.new) smoothly at 60fps.
 */
export function initMagneticElements(selector = '.magnetic-btn') {
  if (typeof window === 'undefined') return;

  const elements = document.querySelectorAll<HTMLElement>(selector);
  elements.forEach((el) => {
    if (el.dataset.magneticInit === 'true') return;
    el.dataset.magneticInit = 'true';

    const strength = parseFloat(el.dataset.strength || '0.3');
    const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      xTo(x * strength);
      yTo(y * strength);
    });

    el.addEventListener('mouseleave', () => {
      xTo(0);
      yTo(0);
    });
  });
}

/**
 * 3D Tilt effect for cards on hover.
 */
export function initTiltCards(selector = '.tilt-card') {
  if (typeof window === 'undefined') return;

  const elements = document.querySelectorAll<HTMLElement>(selector);
  elements.forEach((el) => {
    if (el.dataset.tiltInit === 'true') return;
    el.dataset.tiltInit = 'true';

    const rotX = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power2.out' });
    const rotY = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power2.out' });

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      rotX(-y * 8);
      rotY(x * 8);
    });

    el.addEventListener('mouseleave', () => {
      rotX(0);
      rotY(0);
    });
  });
}
