import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { motion as Motion } from 'framer-motion';
import { SectionHeading } from '../components';
import { CAREER, EDUCATION } from '../data/portfolio';
import { DEFAULT_VIEWPORT, EASE_OUT, STAGGER_VARIANTS } from '../config/motion';

const timelineItemVariant = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

function TimelineItem({ item, isLast }) {
  return (
    <div className="relative flex items-start">
      {!isLast && (
        <div
          aria-hidden="true"
          className="absolute top-5 -bottom-5 left-4 w-0.5 -translate-x-1/2 bg-gray-300 dark:bg-teal-800/70"
        />
      )}

      <div
        aria-hidden="true"
        className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center"
      >
        <span className="bg-accent h-3 w-3 rounded-full ring-4 ring-white dark:bg-teal-300 dark:ring-[#0b1714]" />
      </div>

      <Motion.article variants={timelineItemVariant} className="ml-3 min-w-0 flex-1 pb-8 sm:ml-6">
        <div
          data-mouse-tilt
          className="rounded-2xl bg-white p-4 shadow will-change-transform sm:p-6 dark:bg-white/[0.045] dark:ring-1 dark:shadow-black/20 dark:ring-white/5"
        >
          <h3 className="mt-2 font-semibold text-gray-800 dark:text-gray-100">
            {item.institution}
          </h3>
          {item.title && (
            <p className="mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-300">
              {item.title}
            </p>
          )}
          <p className="mt-2 text-sm leading-relaxed font-semibold text-gray-800 dark:text-teal-200">
            {item.year}
          </p>
          {item.description && (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {item.description.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>
          )}
        </div>
      </Motion.article>
    </div>
  );
}

function Timeline({ items }) {
  return (
    <Motion.div
      variants={STAGGER_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      className="space-y-0"
    >
      {items.map((item, index) => (
        <TimelineItem
          key={`${item.institution}-${item.year}`}
          item={item}
          isLast={index === items.length - 1}
        />
      ))}
    </Motion.div>
  );
}

export default function Experience() {
  return (
    <section id="career" className="p-4">
      <SectionHeading className="mb-12">Education and Career</SectionHeading>

      <div className="mx-auto mt-8">
        <div className="grid grid-cols-1 rounded-3xl border border-gray-200 bg-white p-4 shadow-2xl sm:p-8 md:grid-cols-2 md:gap-10 dark:border-teal-100/10 dark:bg-[#0b1714] dark:shadow-black/30">
          <div className="mb-12 md:mb-0">
            <div className="mb-8 flex justify-center text-4xl lg:justify-start">
              <div className="rounded-2xl bg-gray-50 p-5 dark:bg-teal-300/10 dark:text-teal-200">
                <span className="sr-only">Education</span>
                <FaGraduationCap aria-hidden="true" />
              </div>
            </div>
            <Timeline items={EDUCATION} />
          </div>

          <div>
            <div className="mb-8 flex justify-center text-3xl lg:justify-start">
              <div className="rounded-2xl bg-gray-50 p-5 dark:bg-teal-300/10 dark:text-teal-200">
                <span className="sr-only">Career</span>
                <FaBriefcase aria-hidden="true" />
              </div>
            </div>
            <Timeline items={CAREER} />
          </div>
        </div>
      </div>
    </section>
  );
}
