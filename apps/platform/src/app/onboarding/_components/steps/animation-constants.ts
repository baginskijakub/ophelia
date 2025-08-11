import { Transition, Variants } from "framer-motion";

// Common spring transition settings
export const SPRING_TRANSITION: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 1,
};

// Animation durations
export const DURATIONS = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
} as const;

// Common delays
export const DELAYS = {
  initial: 1.3,
  blade: 0.07,
  stagger: 0.1,
  slow: 0.7,
} as const;

// Reusable animation variants
export const SLIDE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 100, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: DURATIONS.fast,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    scale: 0.95,
    transition: {
      duration: DURATIONS.fast,
      ease: "easeInOut",
    },
  },
};

export const FADE_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: DELAYS.initial,
      staggerChildren: DELAYS.stagger,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: DURATIONS.normal,
      ...SPRING_TRANSITION,
    },
  },
};

export const TEXT_SLIDE_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Logo-specific animation variants
export const createBladeVariants = (bladeRotations: number[]): Variants => ({
  hidden: (i: number) => ({
    opacity: 0,
    scaleY: 1,
    rotate: (i - 1) * (360 / 8),
  }),
  visible: (i: number) => ({
    opacity: 1,
    scaleY: 1,
    rotate: bladeRotations[i],
    transition: {
      ...SPRING_TRANSITION,
      delay: i * DELAYS.blade,
    },
  }),
});

export const LOGO_SCALE_VARIANTS: Variants = {
  initial: { scale: 2 },
  scaledDown: {
    scale: 1,
    transition: {
      ...SPRING_TRANSITION,
      delay: DELAYS.slow,
    },
  },
};

export const ROTATING_LOGO_VARIANTS: Variants = {
  initial: { rotate: 0 },
  spinning: {
    rotate: 360,
    transition: {
      duration: 2,
      ease: "easeOut",
      repeat: Infinity,
    },
  },
};
