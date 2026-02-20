import { type Variants, type Transition } from "framer-motion";

/**
 * Animation presets matching iOS native feel.
 * These mirror SwiftUI's spring animations:
 * - standard: UIKit's default
 * - snappy: Quick response, minimal overshoot
 * - bouncy: Playful, noticeable spring
 */

// Transition presets
export const transitions = {
  standard: {
    type: "spring",
    stiffness: 300,
    damping: 30,
  } as Transition,
  snappy: {
    type: "spring",
    stiffness: 400,
    damping: 30,
  } as Transition,
  bouncy: {
    type: "spring",
    stiffness: 300,
    damping: 15,
  } as Transition,
  gentle: {
    type: "spring",
    stiffness: 200,
    damping: 20,
  } as Transition,
  quick: {
    duration: 0.2,
    ease: "easeOut",
  } as Transition,
};

// Fade variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

// Scale variants
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

// Slide variants
export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Word stagger for headlines
export const wordStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const wordChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.snappy,
  },
};

// Card hover effects
export const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: transitions.snappy,
  },
};

// Button press effect
export const buttonPress: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};
