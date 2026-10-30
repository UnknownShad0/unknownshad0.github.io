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
          className="absolute top-5 -bottom-5 left-[15px] w-0.5 bg-gray-300"
        />
      )}

      <div
        aria-hidden="true"
        className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center"
      >
        <span className="h-3 w-3 rounded-full bg-gray-800 ring-4 ring-white" />
      </div>

      <Motion.article variants={timelineItemVariant} className="ml-3 min-w-0 flex-1 pb-8 sm:ml-6">
        <Motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="rounded-2xl bg-white p-4 shadow transition-shadow duration-300 hover:shadow-lg sm:p-6"
        >
          <h3 className="mt-2 font-semibold text-gray-800">{item.institution}</h3>
          {item.title && <p className="mt-2 text-xs text-gray-800">{item.title}</p>}
          <p className="mt-2 text-xs font-semibold text-gray-800">{item.year}</p>
          {item.description && (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-xs text-gray-600">
              {item.description.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>
          )}
        </Motion.div>
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
        <div className="grid grid-cols-1 rounded-3xl border border-gray-200 bg-white p-4 shadow-2xl sm:grid-cols-2 sm:gap-10 sm:p-8">
          <div className="mb-12">
            <div className="mb-8 flex justify-center text-4xl lg:justify-start">
              <div className="rounded-2xl bg-gray-50 p-5">
                <span className="sr-only">Education</span>
                <FaGraduationCap aria-hidden="true" />
              </div>
            </div>
            <Timeline items={EDUCATION} />
          </div>

          <div>
            <div className="mb-8 flex justify-center text-3xl lg:justify-start">
              <div className="rounded-2xl bg-gray-50 p-5">
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
