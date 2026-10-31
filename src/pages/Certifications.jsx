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
        className="mx-auto mt-8 rounded-3xl p-4 shadow-2xl sm:p-6 lg:p-8"
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
              className="group mx-auto block w-full cursor-grab active:cursor-grabbing lg:w-10/12 xl:w-4/5"
            >
              <img
                src={activeCertificate.image}
                alt=""
                width="1600"
                height="1190"
                loading="lazy"
                decoding="async"
                className="block h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </Motion.button>
          </AnimatePresence>
        </div>

        <p className="mt-4 text-center font-semibold text-gray-900">{activeCertificate.title}</p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => changeSlide(-1)}
            className="rounded-full border border-gray-200 bg-white p-2.5 text-gray-700 shadow-sm transition-all duration-300 hover:-translate-x-0.5 hover:bg-gray-50"
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
                  className="group flex h-8 w-8 items-center justify-center rounded-full"
                >
                  <span
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-accent w-8'
                        : 'w-2.5 bg-gray-300 group-hover:bg-gray-400'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => changeSlide(1)}
            className="rounded-full border border-gray-200 bg-white p-2.5 text-gray-700 shadow-sm transition-all duration-300 hover:translate-x-0.5 hover:bg-gray-50"
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
                  className="absolute top-2 right-2 rounded-full bg-white/90 p-1 text-gray-700 shadow transition-colors hover:text-black"
                  aria-label="Close certificate"
                >
                  <XMarkIcon aria-hidden="true" className="h-7 w-7" />
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
