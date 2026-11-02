import { ArrowDownTrayIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';
import { motion as Motion } from 'framer-motion';
import { NAVIGATION_ITEMS } from '../data/portfolio';
import {
  getResponsiveViewport,
  getRevealTransition,
  getSlideUpVariants,
  useIsDesktop,
} from '../config/motion';

export default function Footer() {
  const isDesktop = useIsDesktop();

  return (
    <footer className="border-t border-gray-200 bg-white/90 backdrop-blur-md dark:border-teal-100/10 dark:bg-[#0b1714]/90">
      <Motion.div
        variants={getSlideUpVariants(isDesktop, 18, 10)}
        initial="hidden"
        whileInView="visible"
        viewport={getResponsiveViewport(isDesktop)}
        transition={getRevealTransition(isDesktop)}
        className="mx-auto max-w-7xl px-6 py-12 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.link}>
                  <a
                    href={item.link}
                    className="hover:text-accent-hover rounded transition-colors dark:hover:text-teal-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Resume</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="/CV-Anunciado-March-2026.pdf"
                  download="Anunciado-CV-2026.pdf"
                  className="hover:text-accent-hover inline-flex items-center gap-2 rounded transition-colors dark:hover:text-teal-300"
                >
                  <ArrowDownTrayIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-400 dark:text-gray-500"
                  />
                  Download CV
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Get in touch</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="mailto:johnmark.anunciado.dev@gmail.com"
                  className="hover:text-accent-hover inline-flex min-w-0 items-start gap-2 rounded transition-colors dark:hover:text-teal-300"
                >
                  <EnvelopeIcon aria-hidden="true" className="h-5 w-5 shrink-0 text-gray-400" />
                  <span className="break-all">johnmark.anunciado.dev@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center border-t border-gray-200 pt-8 sm:flex-row sm:justify-between dark:border-teal-100/10">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="mt-4 flex sm:mt-0">
            <a
              href="https://github.com/unknownshad0"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-hover rounded text-gray-400 transition-colors dark:text-gray-500 dark:hover:text-teal-300"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub aria-hidden="true" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </Motion.div>
    </footer>
  );
}
