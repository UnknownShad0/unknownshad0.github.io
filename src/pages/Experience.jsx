import { motion as Motion } from 'framer-motion';
import { SectionHeading } from '../components';
import { CAREER, EDUCATION } from '../data/portfolio';
import {
  EASE_OUT,
  getResponsiveViewport,
  getRevealTransition,
  scaleMotionTime,
  useIsDesktop,
} from '../config/motion';

function TimelineItem({ item, variants, dotVariants, contentVariants }) {
  return (
    <Motion.li variants={variants} className="relative pb-8 pl-6 last:pb-0">
      <Motion.span
        variants={dotVariants}
        aria-hidden="true"
        className="absolute top-[5px] -left-[5.5px] h-2.5 w-2.5 rounded-full bg-gray-400 dark:bg-gray-500"
      />
      <Motion.div variants={contentVariants}>
        <p className="text-sm text-gray-500 dark:text-gray-400">{item.year}</p>
        <h4 className="mt-1 font-semibold text-gray-900 dark:text-gray-100">{item.institution}</h4>
        {item.title && (
          <p className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            {item.title}
          </p>
        )}
        {item.description && (
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {item.description.map((description) => (
              <li key={description}>{description}</li>
            ))}
          </ul>
        )}
      </Motion.div>
    </Motion.li>
  );
}

function Timeline({ items, isDesktop }) {
  const itemVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: scaleMotionTime(isDesktop ? 0.06 : 0.04),
      },
    },
  };
  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: scaleMotionTime(isDesktop ? 0.24 : 0.18),
        ease: EASE_OUT,
      },
    },
  };
  const contentVariants = {
    hidden: { opacity: 0, y: isDesktop ? 10 : 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: scaleMotionTime(isDesktop ? 0.4 : 0.3),
        ease: EASE_OUT,
      },
    },
  };
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: scaleMotionTime(isDesktop ? 0.14 : 0.09),
      },
    },
  };

  return (
    <Motion.ol
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={getResponsiveViewport(isDesktop)}
      className="ml-1 border-l border-gray-300 dark:border-white/15"
    >
      {items.map((item) => (
        <TimelineItem
          key={`${item.institution}-${item.year}`}
          item={item}
          variants={itemVariants}
          dotVariants={dotVariants}
          contentVariants={contentVariants}
        />
      ))}
    </Motion.ol>
  );
}

export default function Experience() {
  const isDesktop = useIsDesktop();
  const viewport = getResponsiveViewport(isDesktop);
  const educationVariants = {
    hidden: { opacity: 0, x: isDesktop ? -28 : 0, y: isDesktop ? 0 : 12 },
    visible: { opacity: 1, x: 0, y: 0 },
  };
  const careerVariants = {
    hidden: { opacity: 0, x: isDesktop ? 28 : 0, y: isDesktop ? 0 : 12 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <section id="career" className="p-4">
      <SectionHeading className="mb-12">Education and Career</SectionHeading>

      <div className="mx-auto mt-8 grid max-w-5xl gap-12 md:grid-cols-2 md:gap-16">
        <Motion.div
          variants={educationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={getRevealTransition(isDesktop)}
        >
          <h3 className="mb-6 border-t border-gray-300 pt-3 text-lg font-medium text-gray-900 dark:border-white/15 dark:text-gray-50">
            Education
          </h3>
          <Timeline items={EDUCATION} isDesktop={isDesktop} />
        </Motion.div>

        <Motion.div
          variants={careerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={getRevealTransition(isDesktop, isDesktop ? 0.08 : 0.03)}
        >
          <h3 className="mb-6 border-t border-gray-300 pt-3 text-lg font-medium text-gray-900 dark:border-white/15 dark:text-gray-50">
            Career
          </h3>
          <Timeline items={CAREER} isDesktop={isDesktop} />
        </Motion.div>
      </div>
    </section>
  );
}
