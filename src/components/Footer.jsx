import { ArrowDownTrayIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';
import { NAVIGATION_ITEMS } from '../data/portfolio';

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.link}>
                  <a href={item.link} className="transition-colors hover:text-gray-900">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Resume</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="/CV-Anunciado-March-2026.pdf"
                  download="Anunciado-CV-2026.pdf"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gray-900"
                >
                  <ArrowDownTrayIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                  Download CV
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Get in touch</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="mailto:johnmark.anunciado.dev@gmail.com"
                  className="inline-flex min-w-0 items-start gap-2 transition-colors hover:text-gray-900"
                >
                  <EnvelopeIcon aria-hidden="true" className="h-5 w-5 shrink-0 text-gray-400" />
                  <span className="break-all">johnmark.anunciado.dev@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center border-t border-gray-200 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="mt-4 flex sm:mt-0">
            <a
              href="https://github.com/unknownshad0"
              target="_blank"
              rel="noreferrer"
              className="rounded text-gray-400 transition-colors hover:text-gray-600 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub aria-hidden="true" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
