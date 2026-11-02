import { useEffect, useState } from 'react';

// Temporary slow-motion mode for animation testing. Restore this to 1 for production.
export const MOTION_TEST_MULTIPLIER = 4;
export const scaleMotionTime = (seconds) => seconds * MOTION_TEST_MULTIPLIER;

export const MOTION_VARIANTS = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  },
};

export const STAGGER_VARIANTS = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: scaleMotionTime(0.12),
    },
  },
};

export const DEFAULT_VIEWPORT = {
  once: true,
  amount: 0.2,
};

export const EASE_OUT = [0.16, 1, 0.3, 1];

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const updateMatch = () => setIsDesktop(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener('change', updateMatch);

    return () => mediaQuery.removeEventListener('change', updateMatch);
  }, []);

  return isDesktop;
}

export const getResponsiveViewport = (isDesktop) => ({
  once: true,
  amount: isDesktop ? 0.2 : 0.12,
});

export const getRevealTransition = (isDesktop, delay = 0) => ({
  duration: scaleMotionTime(isDesktop ? 0.55 : 0.38),
  delay: scaleMotionTime(delay),
  ease: EASE_OUT,
});

export const getSlideUpVariants = (isDesktop, desktopDistance = 24, mobileDistance = 12) => ({
  hidden: { opacity: 0, y: isDesktop ? desktopDistance : mobileDistance },
  visible: { opacity: 1, y: 0 },
});

export const DIALOG_TRANSITION = {
  duration: scaleMotionTime(0.22),
  ease: EASE_OUT,
};
