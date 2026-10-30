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
      staggerChildren: 0.12,
    },
  },
};

export const DEFAULT_VIEWPORT = {
  once: true,
  amount: 0.2,
};

export const EASE_OUT = [0.16, 1, 0.3, 1];

export const DIALOG_TRANSITION = {
  duration: 0.22,
  ease: EASE_OUT,
};
