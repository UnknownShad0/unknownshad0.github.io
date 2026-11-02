import { motion as Motion } from 'framer-motion';
import {
  getResponsiveViewport,
  getRevealTransition,
  getSlideUpVariants,
  useIsDesktop,
} from '../config/motion';

export default function SectionHeading({ children, className = '' }) {
  const isDesktop = useIsDesktop();

  return (
    <Motion.h2
      variants={getSlideUpVariants(isDesktop, 18, 8)}
      initial="hidden"
      whileInView="visible"
      viewport={getResponsiveViewport(isDesktop)}
      transition={getRevealTransition(isDesktop)}
      className={`font-play text-center text-3xl font-bold text-gray-500 sm:text-5xl lg:text-8xl dark:text-gray-400 ${className}`}
    >
      {children}
    </Motion.h2>
  );
}
