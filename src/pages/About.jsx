import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  ComputerDesktopIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  FolderIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion as Motion } from 'framer-motion';
import profile from '../assets/profile.PNG';
import { SectionHeading } from '../components';
import { MOTION_VARIANTS, DEFAULT_VIEWPORT, EASE_OUT } from '../config/motion';

// Paste your LinkedIn profile URL here to show the LinkedIn button.
const LINKEDIN_URL = '';

const CAPABILITIES = [
  {
    label: 'Simplify manual workflows',
    icon: <DocumentTextIcon aria-hidden="true" className="h-7 w-7" />,
  },
  {
    label: 'Make information easier to act on',
    icon: <ChartBarIcon aria-hidden="true" className="h-7 w-7" />,
  },
  {
    label: 'Build responsive, usable interfaces',
    icon: <ComputerDesktopIcon aria-hidden="true" className="h-7 w-7" />,
  },
  {
    label: 'Document systems for smooth handover',
    icon: <ClipboardDocumentCheckIcon aria-hidden="true" className="h-7 w-7" />,
  },
];

const iconButtonClass =
  'flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 text-gray-800 transition-colors hover:bg-teal-50 hover:text-teal-700 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-teal-300/10 dark:hover:text-teal-300';

export default function About() {
  return (
    <section id="about" className="p-4">
      <SectionHeading>About</SectionHeading>

      <div className="mx-auto mt-8 grid max-w-7xl items-start gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.45fr)] lg:gap-12 xl:gap-16">
        <Motion.aside
          variants={MOTION_VARIANTS.fade}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          transition={{ duration: 0.65, ease: EASE_OUT }}
          data-mouse-tilt
          className="mx-auto w-full max-w-md rounded-2xl border border-gray-200 bg-white p-4 shadow-xl will-change-transform sm:p-6 lg:sticky lg:top-24 dark:border-teal-100/10 dark:bg-[#0e1c18] dark:shadow-black/25"
        >
          <img
            src={profile}
            alt="John Mark Anunciado"
            loading="lazy"
            decoding="async"
            className="mx-auto w-full max-w-xs rounded-xl bg-gray-100 object-cover object-top dark:bg-white/5"
          />

          <div className="mt-5">
            <h3 className="font-play text-2xl font-bold text-gray-950 sm:text-3xl dark:text-gray-50">
              John Mark B. Anunciado
            </h3>
            <p className="mt-1 text-lg text-gray-500 dark:text-gray-400">Web Developer</p>
          </div>

          <div className="mt-5 space-y-3 border-t border-gray-200 pt-5 text-sm text-gray-700 dark:border-white/10 dark:text-gray-300">
            <p className="flex items-start gap-3">
              <MapPinIcon
                aria-hidden="true"
                className="text-accent mt-0.5 h-5 w-5 shrink-0 dark:text-teal-300"
              />
              <span>City of San Jose del Monte, Bulacan.</span>
            </p>
            <a
              href="mailto:johnmark.anunciado.dev@gmail.com"
              className="hover:text-accent-hover flex min-w-0 items-start gap-3 transition-colors dark:hover:text-teal-300"
            >
              <EnvelopeIcon
                aria-hidden="true"
                className="text-accent mt-0.5 h-5 w-5 shrink-0 dark:text-teal-300"
              />
              <span className="min-w-0 break-all">johnmark.anunciado.dev@gmail.com</span>
            </a>
          </div>

          <div className="mt-5 flex gap-3">
            <a
              href="https://github.com/unknownshad0"
              target="_blank"
              rel="noreferrer"
              aria-label="View GitHub profile"
              className={iconButtonClass}
            >
              <FaGithub aria-hidden="true" className="h-5 w-5" />
            </a>
            {LINKEDIN_URL && (
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="View LinkedIn profile"
                className={iconButtonClass}
              >
                <FaLinkedinIn aria-hidden="true" className="h-5 w-5" />
              </a>
            )}
            <a
              href="mailto:johnmark.anunciado.dev@gmail.com"
              aria-label="Send an email"
              className={iconButtonClass}
            >
              <EnvelopeIcon aria-hidden="true" className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-5 grid gap-3">
            {/* <a
              href="#projects"
              className="bg-accent hover:bg-accent-hover inline-flex items-center justify-center gap-3 rounded-lg px-5 py-3 font-semibold text-white transition-colors dark:bg-teal-400 dark:text-teal-950 dark:hover:bg-teal-300"
            >
              <FolderIcon aria-hidden="true" className="h-5 w-5" />
              <span>View Projects</span>
              <ArrowRightIcon aria-hidden="true" className="ml-auto h-5 w-5" />
            </a> */}
            <a
              href="/CV-Anunciado-March-2026.pdf"
              download="Anunciado-CV-2026.pdf"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-teal-700/40 px-5 py-3 font-semibold text-gray-900 transition-colors hover:bg-teal-50 dark:border-teal-300/30 dark:text-gray-100 dark:hover:bg-teal-300/10"
            >
              <ArrowDownTrayIcon aria-hidden="true" className="h-5 w-5" />
              <span>Download CV</span>
            </a>
          </div>
        </Motion.aside>

        <Motion.div
          variants={MOTION_VARIANTS.slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          transition={{ duration: 0.65, delay: 0.1, ease: EASE_OUT }}
          className="min-w-0 py-2 lg:py-8"
        >
          <div className="flex items-center gap-5">
            <p className="text-accent shrink-0 text-sm font-bold tracking-[0.28em] uppercase dark:text-teal-300">
              How I work
            </p>
            <span className="h-px w-full max-w-64 bg-teal-700/30 dark:bg-teal-300/20" />
          </div>

          <h3 className="font-play mt-7 max-w-4xl text-4xl leading-tight font-bold text-gray-950 sm:text-5xl lg:text-6xl dark:text-gray-50">
            I start with the problem, not the programming language.
          </h3>

          <div className="mt-8 max-w-4xl space-y-5 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
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
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {CAPABILITIES.map(({ label, icon }) => (
              <li
                key={label}
                className="flex min-h-28 items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-lg shadow-gray-950/5 dark:border-teal-100/10 dark:bg-[#0e1c18] dark:shadow-black/20"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-300/10 dark:text-teal-300">
                  {icon}
                </span>
                <span className="text-lg leading-snug font-bold text-gray-900 dark:text-gray-100">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </Motion.div>
      </div>
    </section>
  );
}
