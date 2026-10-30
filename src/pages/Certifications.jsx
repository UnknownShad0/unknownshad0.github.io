import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { SectionHeading } from '../components';
import { CERTIFICATIONS } from '../data/portfolio';
import { DEFAULT_VIEWPORT, EASE_OUT, MOTION_VARIANTS } from '../config/motion';

const slideVariants = {
  enter: (direction) => ({ opacity: 0, x: direction * 48 }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({ opacity: 0, x: direction * -48 }),
};

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeCertificate = CERTIFICATIONS[activeIndex];

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setIsCertificateOpen(true);
  };

  const closeCertificate = () => {
    setIsCertificateOpen(false);
  };

  const changeSlide = (step) => {
    setDirection(step);
    setActiveIndex((currentIndex) => {
      return (currentIndex + step + CERTIFICATIONS.length) % CERTIFICATIONS.length;
    });
  };

  const goToSlide = (index) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const handleCarouselKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      changeSlide(-1);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      changeSlide(1);
    }
  };

  const handleDragEnd = (...dragEndArguments) => {
    const info = dragEndArguments[1];

    if (info.offset.x < -50) changeSlide(1);
    if (info.offset.x > 50) changeSlide(-1);
  };

  return (
    <section id="certifications" className="p-4">
      <SectionHeading>Certifications</SectionHeading>

      <Motion.div
        variants={MOTION_VARIANTS.fade}
        initial="hidden"
        whileInView="visible"
        viewport={DEFAULT_VIEWPORT}
        transition={{ duration: 0.55, ease: EASE_OUT }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Certifications"
        tabIndex={0}
        onKeyDown={handleCarouselKeyDown}
        className="mx-auto mt-8 rounded-3xl p-4 shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-800 sm:p-6 lg:p-8"
      >
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <Motion.button
              key={activeCertificate.id}
              type="button"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: EASE_OUT }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              onTap={() => openCertificate(activeCertificate)}
              aria-roledescription="slide"
              aria-label={`${activeCertificate.title}, certificate ${activeIndex + 1} of ${CERTIFICATIONS.length}.`}
              className="group block w-full cursor-grab text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-gray-800 active:cursor-grabbing"
            >
              <span className="flex aspect-[4/3] w-full items-center justify-center p-3 sm:aspect-[16/10] sm:p-6 lg:p-8">
                <img
                  src={activeCertificate.image}
                  alt=""
                  decoding="async"
                  className="max-h-full max-w-full rounded-lg object-contain shadow-lg transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </span>
              <span className="block border-t border-gray-200 bg-white px-5 py-4 text-left sm:flex sm:items-center sm:justify-between">
                <span className="block font-semibold text-gray-900">{activeCertificate.title}</span>
                <span className="mt-1 block text-xs text-gray-500 sm:mt-0"></span>
              </span>
            </Motion.button>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => changeSlide(-1)}
            className="rounded-full border border-gray-200 bg-white p-2.5 text-gray-700 shadow-sm transition hover:-translate-x-0.5 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
            aria-label="Previous certificate"
          >
            <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
          </button>

          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-gray-600" aria-live="polite">
              {activeIndex + 1} / {CERTIFICATIONS.length}
            </p>
            <div className="flex items-center gap-2" role="group" aria-label="Choose a certificate">
              {CERTIFICATIONS.map((certificate, index) => (
                <button
                  key={certificate.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Show ${certificate.title}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                  className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 ${
                    index === activeIndex
                      ? 'w-8 bg-gray-800'
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => changeSlide(1)}
            className="rounded-full border border-gray-200 bg-white p-2.5 text-gray-700 shadow-sm transition hover:translate-x-0.5 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
            aria-label="Next certificate"
          >
            <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </Motion.div>

      <Dialog open={isCertificateOpen} onClose={closeCertificate} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/70 transition-opacity duration-200 data-closed:opacity-0"
        />
        <div className="fixed inset-0 overflow-y-auto p-4">
          <div className="flex min-h-full items-center justify-center">
            {selectedCertificate && (
              <DialogPanel
                transition
                className="relative w-full max-w-5xl rounded-2xl bg-white p-4 shadow-2xl transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0 sm:p-6"
              >
                <DialogTitle className="mb-4 pr-12 text-lg font-semibold text-gray-900">
                  {selectedCertificate.title}
                </DialogTitle>
                <button
                  type="button"
                  onClick={closeCertificate}
                  className="absolute top-2 right-2 rounded-full bg-white/90 p-1 text-gray-700 shadow transition hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2"
                  aria-label="Close certificate"
                >
                  <XMarkIcon aria-hidden="true" className="h-7 w-7" />
                </button>
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="mx-auto max-h-[78vh] w-auto max-w-full rounded-lg object-contain"
                />
              </DialogPanel>
            )}
          </div>
        </div>
      </Dialog>
    </section>
  );
}
