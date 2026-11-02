import { motion as Motion } from 'framer-motion';
import { SectionHeading } from '../components';
import { CAREER, EDUCATION } from '../data/portfolio';
import { DEFAULT_VIEWPORT, EASE_OUT, STAGGER_VARIANTS } from '../config/motion';

const timelineItemVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
};

function TimelineItem({ item }) {
  return (
    <Motion.li variants={timelineItemVariant} className="relative pb-8 pl-6 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute top-[5px] -left-[5.5px] h-2.5 w-2.5 rounded-full bg-gray-400 dark:bg-gray-500"
      />
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
    </Motion.li>
  );
}

function Timeline({ items }) {
  return (
    <Motion.ol
      variants={STAGGER_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      className="ml-1 border-l border-gray-300 dark:border-white/15"
    >
      {items.map((item) => (
        <TimelineItem key={`${item.institution}-${item.year}`} item={item} />
      ))}
    </Motion.ol>
  );
}

export default function Experience() {
  return (
    <section id="career" className="p-4">
      <SectionHeading className="mb-12">Education and Career</SectionHeading>

      <div className="mx-auto mt-8 grid max-w-5xl gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="mb-6 border-t border-gray-300 pt-3 text-lg font-medium text-gray-900 dark:border-white/15 dark:text-gray-50">
            Education
          </h3>
          <Timeline items={EDUCATION} />
        </div>

        <div>
          <h3 className="mb-6 border-t border-gray-300 pt-3 text-lg font-medium text-gray-900 dark:border-white/15 dark:text-gray-50">
            Career
          </h3>
          <Timeline items={CAREER} />
        </div>
      </div>
    </section>
  );
}