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
        className="mx-auto mt-8 max-w-5xl focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-teal-600 dark:focus-visible:outline-teal-300"
      >
        <div className="overflow-hidden">
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
              className="mx-auto block w-full cursor-grab active:cursor-grabbing lg:w-10/12 xl:w-4/5"
            >
              <img
                src={activeCertificate.image}
                alt=""
                width="1600"
                height="1190"
                loading="lazy"
                decoding="async"
                className="block h-auto w-full rounded border border-gray-200 object-contain dark:border-white/10"
              />
            </Motion.button>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => changeSlide(-1)}
            className="rounded border border-gray-300 p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:border-white/15 dark:text-gray-200 dark:hover:bg-white/10"
            aria-label="Previous certificate"
          >
            <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
          </button>

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-gray-600 dark:text-gray-400" aria-live="polite">
              {activeIndex + 1} / {CERTIFICATIONS.length}
            </p>
            <div className="flex items-center" role="group" aria-label="Choose a certificate">
              {CERTIFICATIONS.map((certificate, index) => (
                <button
                  key={certificate.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Show ${certificate.title}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                  className="group flex h-8 w-6 items-center justify-center"
                >
                  <span
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === activeIndex
                        ? 'bg-gray-900 dark:bg-gray-100'
                        : 'bg-gray-300 group-hover:bg-gray-400 dark:bg-gray-700 dark:group-hover:bg-gray-500'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => changeSlide(1)}
            className="rounded border border-gray-300 p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:border-white/15 dark:text-gray-200 dark:hover:bg-white/10"
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
                className="relative w-full max-w-5xl transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0"
              >
                <DialogTitle className="sr-only">{selectedCertificate.title}</DialogTitle>
                <button
                  type="button"
                  onClick={closeCertificate}
                  className="absolute top-2 right-2 rounded bg-black/60 p-1.5 text-white transition-colors hover:bg-black/80"
                  aria-label="Close certificate"
                >
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  width="1600"
                  height="1190"
                  loading="lazy"
                  decoding="async"
                  className="mx-auto max-h-[85vh] w-auto max-w-full object-contain"
                />
              </DialogPanel>
            )}
          </div>
        </div>
      </Dialog>
    </section>
  );
}