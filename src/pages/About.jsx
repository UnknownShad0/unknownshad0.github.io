import profile from '../assets/profile.jpg';
import { FaDownload } from 'react-icons/fa';
import { motion as Motion } from 'framer-motion';
import { SectionHeading } from '../components';
import { MOTION_VARIANTS, DEFAULT_VIEWPORT, EASE_OUT } from '../config/motion';

export default function About() {
  return (
    <section id="about" className="p-4">
      <SectionHeading>About</SectionHeading>
      <div className="mx-auto mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Motion.div
          variants={MOTION_VARIANTS.fade}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          transition={{ duration: 0.65, ease: EASE_OUT }}
          className="min-w-0"
        >
          <div
            data-mouse-tilt
            className="grid h-full min-w-0 grid-cols-1 gap-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl will-change-transform sm:p-6 md:grid-cols-2 md:items-center lg:gap-8 dark:border-teal-100/10 dark:bg-[#0e1c18] dark:shadow-black/25"
          >
            <div className="min-w-0">
              <img
                src={profile}
                alt="John Mark Anunciado"
                width="650"
                height="792"
                loading="lazy"
                decoding="async"
                className="mx-auto h-auto w-full max-w-sm rounded-lg object-cover"
              />
            </div>
            <div className="flex min-w-0 items-center py-1">
              <dl className="min-w-0 space-y-4">
                <div className="space-y-1">
                  <dt className="text-sm font-semibold">Name:</dt>
                  <dd>John Mark B. Anunciado</dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-sm font-semibold">Position:</dt>
                  <dd>Web Developer</dd>
                </div>
                <div className="min-w-0 space-y-1">
                  <dt className="text-sm font-semibold">Email:</dt>
                  <dd>
                    <a
                      href="mailto:johnmark.anunciado.dev@gmail.com"
                      className="hover:text-accent-hover rounded break-words transition-colors hover:underline dark:hover:text-teal-300"
                    >
                      johnmark.anunciado.dev@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-sm font-semibold">Address:</dt>
                  <dd>City of San Jose del Monte, Bulacan.</dd>
                </div>
                <div className="pt-1">
                  <a
                    href="/CV-Anunciado-March-2026.pdf"
                    download="Anunciado-CV-2026.pdf"
                    className="hover:text-accent-hover inline-flex items-center gap-2 rounded text-sm font-semibold transition-colors hover:underline dark:hover:text-teal-300"
                  >
                    <span>Download CV</span>
                    <FaDownload aria-hidden="true" className="text-lg" />
                  </a>
                </div>
              </dl>
            </div>
          </div>
        </Motion.div>
        <Motion.div
          variants={MOTION_VARIANTS.slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          transition={{ duration: 0.65, delay: 0.1, ease: EASE_OUT }}
          className="flex h-full items-center rounded-2xl border border-gray-200 bg-white p-5 shadow-xl sm:p-8 lg:p-10 dark:border-teal-100/10 dark:bg-[#0e1c18] dark:shadow-black/25"
        >
          <div className="space-y-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <div>
              <p className="text-accent text-sm font-bold tracking-widest uppercase dark:text-teal-300">
                How I work
              </p>
              <h3 className="font-play mt-3 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-gray-50">
                I start with the problem, not the programming language.
              </h3>
            </div>
            <p>
              I translate day-to-day business needs into straightforward web tools. That means
              understanding the people, records, and decisions behind a workflow before deciding
              what to build.
            </p>
            <p>
              My experience spans both front-end and back-end development, API integration, user
              documentation, and technical support. I focus on solutions that are practical for the
              people who will actually use and maintain them.
            </p>
            <ul className="grid gap-3 text-sm sm:grid-cols-2">
              <li className="rounded-xl bg-white p-4 font-semibold text-gray-800 shadow-sm dark:bg-white/5 dark:text-gray-200 dark:ring-1 dark:ring-white/5">
                Simplify manual workflows
              </li>
              <li className="rounded-xl bg-white p-4 font-semibold text-gray-800 shadow-sm dark:bg-white/5 dark:text-gray-200 dark:ring-1 dark:ring-white/5">
                Make information easier to act on
              </li>
              <li className="rounded-xl bg-white p-4 font-semibold text-gray-800 shadow-sm dark:bg-white/5 dark:text-gray-200 dark:ring-1 dark:ring-white/5">
                Build responsive, usable interfaces
              </li>
              <li className="rounded-xl bg-white p-4 font-semibold text-gray-800 shadow-sm dark:bg-white/5 dark:text-gray-200 dark:ring-1 dark:ring-white/5">
                Document systems for smooth handover
              </li>
            </ul>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
