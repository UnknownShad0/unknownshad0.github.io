import { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NAVIGATION_ITEMS } from '../data/portfolio';

const THEME_MODES = ['auto', 'light', 'dark'];

function getInitialTheme() {
  try {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    return THEME_MODES.includes(savedTheme) ? savedTheme : 'auto';
  } catch {
    return 'auto';
  }
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [themeMode, setThemeMode] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const themeColor = document.querySelector('meta[name="theme-color"]');

    const applyTheme = () => {
      const isDark = themeMode === 'dark' || (themeMode === 'auto' && systemTheme.matches);
      root.classList.toggle('dark', isDark);
      root.dataset.theme = themeMode;
      root.style.colorScheme = isDark ? 'dark' : 'light';
      themeColor?.setAttribute('content', isDark ? '#07110f' : '#f5f8f7');
    };

    applyTheme();
    systemTheme.addEventListener('change', applyTheme);

    return () => systemTheme.removeEventListener('change', applyTheme);
  }, [themeMode]);

  const cycleTheme = () => {
    const nextTheme = THEME_MODES[(THEME_MODES.indexOf(themeMode) + 1) % THEME_MODES.length];
    const root = document.documentElement;

    root.classList.add('theme-transition');
    window.setTimeout(() => root.classList.remove('theme-transition'), 320);
    try {
      window.localStorage.setItem('portfolio-theme', nextTheme);
    } catch {
      // The theme still works for this visit when storage is unavailable.
    }
    setThemeMode(nextTheme);
  };

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 16);

      if (window.scrollY < 80) {
        setActiveSection('');
      }
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  useEffect(() => {
    const sectionIds = NAVIGATION_ITEMS.map((item) => item.link.slice(1));
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);

    const updateFromHash = () => {
      const sectionId = window.location.hash.slice(1);
      if (sectionIds.includes(sectionId)) {
        setActiveSection(sectionId);
        window.requestAnimationFrame(() => {
          document
            .getElementById(sectionId)
            ?.scrollIntoView({ behavior: 'instant', block: 'start' });
        });
      }
    };

    updateFromHash();

    const observer = new IntersectionObserver(
      (entries) => {
        const currentSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)[0];

        if (currentSection) setActiveSection(currentSection.target.id);
      },
      {
        rootMargin: '-28% 0px -62% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener('hashchange', updateFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', updateFromHash);
    };
  }, []);

  return (
    <header
      id="top"
      className={`sticky top-0 z-40 border-b bg-white/90 backdrop-blur-md transition-all duration-300 dark:bg-[#0b1714]/90 ${
        isScrolled ? 'border-gray-200 shadow-sm dark:border-teal-900/70' : 'border-transparent'
      }`}
    >
      <nav
        aria-label="Global"
        className="relative mx-auto flex max-w-sm items-center justify-between p-6 sm:max-w-3xl lg:max-w-6xl lg:justify-center lg:px-8"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="font-play hidden lg:flex lg:gap-x-12">
          {NAVIGATION_ITEMS.map((item) => {
            const sectionId = item.link.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.link}
                href={item.link}
                aria-current={isActive ? 'location' : undefined}
                onClick={() => setActiveSection(sectionId)}
                className={`relative rounded text-sm/6 font-semibold transition-colors after:absolute after:right-0 after:-bottom-1 after:left-0 after:h-0.5 after:origin-center after:rounded-full after:bg-teal-600 after:transition-transform after:duration-200 ${
                  isActive
                    ? 'text-accent after:scale-x-100 dark:text-teal-300'
                    : 'hover:text-accent-hover text-gray-900 after:scale-x-0 dark:text-gray-100 dark:hover:text-teal-300'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </PopoverGroup>
        <div className="ml-auto flex items-center lg:absolute lg:right-8 lg:ml-0">
          <button
            type="button"
            onClick={cycleTheme}
            data-theme-mode={themeMode}
            aria-label={`Theme: ${themeMode}. Activate to switch theme.`}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-teal-800/15 bg-white/70 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-teal-700/30 hover:shadow-md dark:border-teal-300/15 dark:bg-[#10201c]/80"
          >
            <span className="theme-orb" aria-hidden="true" />
            <span className="pointer-events-none absolute top-full right-0 mt-2 translate-y-1 rounded-full bg-gray-950 px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] text-white uppercase opacity-0 shadow-lg transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 dark:bg-teal-100 dark:text-teal-950">
              {themeMode}
            </span>
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        transition
        className="relative z-50 transition duration-200 ease-out data-closed:opacity-0 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/20 transition-opacity duration-200 data-closed:opacity-0 dark:bg-black/55"
        />
        <DialogPanel
          transition
          className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-white p-6 shadow-xl transition duration-300 ease-out data-closed:translate-x-full sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-[#0b1714] dark:text-gray-100 dark:sm:ring-teal-200/10"
        >
          <div className="flex items-center justify-between">
            <a href="#top" className="-m-1.5 rounded p-1.5">
              <span className="sr-only">Back to the top</span>
              <img alt="JM logo" src="/jm.png" width="32" height="32" className="h-8 w-8" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-teal-100/10">
              <div className="space-y-2 py-6">
                {NAVIGATION_ITEMS.map((item) => {
                  const sectionId = item.link.slice(1);
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={item.link}
                      href={item.link}
                      aria-current={isActive ? 'location' : undefined}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold transition-colors ${
                        isActive
                          ? 'bg-teal-50 text-teal-800 dark:bg-teal-300/10 dark:text-teal-200'
                          : 'hover:text-accent-hover text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-white/5 dark:hover:text-teal-300'
                      }`}
                      onClick={() => {
                        setActiveSection(sectionId);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
