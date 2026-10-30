import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NAVIGATION_ITEMS } from '../data/portfolio';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header id="top" className="bg-white">
      <nav aria-label="Global" className="mx-auto flex items-center p-6 lg:justify-center lg:px-8">
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="font-play hidden lg:flex lg:gap-x-12">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className="text-sm/6 font-semibold text-gray-900 transition-opacity hover:opacity-60 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {item.name}
            </a>
          ))}
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
            <a href="#top" className="-m-1.5 p-1.5">
              <span className="sr-only">Back to the top</span>
              <img alt="JM logo" src="/jm.png" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {NAVIGATION_ITEMS.map((item) => (
                  <a
                    key={item.link}
                    href={item.link}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
