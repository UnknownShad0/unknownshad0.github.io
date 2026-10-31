import { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NAVIGATION_ITEMS } from '../data/portfolio';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'instant', block: 'start' });
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
      className={`sticky top-0 z-40 border-b bg-white/90 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'border-gray-200 shadow-sm' : 'border-transparent'
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-sm items-center p-6 sm:max-w-3xl lg:max-w-6xl lg:justify-center lg:px-8"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 transition-colors hover:text-gray-900"
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
                    ? 'text-accent after:scale-x-100'
                    : 'hover:text-accent-hover text-gray-900 after:scale-x-0'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        transition
        className="relative z-50 transition duration-200 ease-out data-closed:opacity-0 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/20 transition-opacity duration-200 data-closed:opacity-0"
        />
        <DialogPanel
          transition
          className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-white p-6 shadow-xl transition duration-300 ease-out data-closed:translate-x-full sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <a href="#top" className="-m-1.5 rounded p-1.5">
              <span className="sr-only">Back to the top</span>
              <img alt="JM logo" src="/jm.png" width="32" height="32" className="h-8 w-8" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 transition-colors hover:text-gray-900"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
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
                          ? 'bg-teal-50 text-teal-800'
                          : 'hover:text-accent-hover text-gray-900 hover:bg-gray-50'
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
