import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { SectionHeading } from '../components';
import { PROJECTS } from '../data/portfolio';
import {
  DEFAULT_VIEWPORT,
  DIALOG_TRANSITION,
  EASE_OUT,
  MOTION_VARIANTS,
  STAGGER_VARIANTS,
} from '../config/motion';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const openGallery = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setDirection(0);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setCurrentImageIndex(0);
  };

  const showImage = (index, nextDirection) => {
    setDirection(nextDirection);
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    showImage((currentImageIndex + 1) % selectedProject.images.length, 1);
  };

  const previousImage = () => {
    if (!selectedProject) return;
    showImage(
      (currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length,
      -1
    );
  };

  const handleGalleryKeyDown = (event) => {
    if (event.key === 'ArrowLeft') previousImage();
    if (event.key === 'ArrowRight') nextImage();
  };

  return (
    <section id="projects" className="p-4">
      <SectionHeading>Projects</SectionHeading>

      <div className="mx-auto mt-8 gap-6 rounded-3xl p-4 text-center shadow-2xl sm:p-8 lg:p-10">
        <Motion.div
          variants={STAGGER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {PROJECTS.map((project) => (
            <Motion.button
              key={project.id}
              type="button"
              variants={MOTION_VARIANTS.slideUp}
              transition={{ duration: 0.5, ease: EASE_OUT }}
              onClick={() => openGallery(project)}
              className="group relative overflow-hidden rounded-xl text-left shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-800"
              aria-label={`Open ${project.title} gallery`}
            >
              <img
                src={project.thumbnail}
                alt=""
                className="h-52 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 sm:h-64"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
                <div className="absolute right-0 bottom-0 left-0 p-4 text-white">
                  <h3 className="mb-1 text-xl font-bold">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.category}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold">
                {project.images.length} photos
              </div>
            </Motion.button>
          ))}
        </Motion.div>
      </div>

      <Dialog
        open={isGalleryOpen}
        onClose={closeGallery}
        onKeyDown={handleGalleryKeyDown}
        className="relative z-50"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/70 transition-opacity duration-200 data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-y-auto p-4">
          <div className="flex min-h-full items-center justify-center">
            {selectedProject && (
              <DialogPanel
                transition
                className="relative w-full max-w-5xl transform text-white transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0"
              >
                <button
                  type="button"
                  onClick={closeGallery}
                  className="absolute top-2 right-2 z-20 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-white sm:-top-12 sm:right-0 sm:bg-transparent sm:hover:bg-white/10"
                  aria-label="Close project gallery"
                >
                  <XMarkIcon aria-hidden="true" className="h-7 w-7" />
                </button>

                <div className="relative flex items-center justify-center">
                  {selectedProject.images.length > 1 && (
                    <button
                      type="button"
                      onClick={previousImage}
                      className="absolute left-1 z-10 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-white sm:left-4 sm:p-3"
                      aria-label="Previous image"
                    >
                      <ChevronLeftIcon aria-hidden="true" className="h-7 w-7" />
                    </button>
                  )}

                  <div className="w-full overflow-hidden rounded-lg">
                    <AnimatePresence initial={false} mode="wait" custom={direction}>
                      <Motion.img
                        key={selectedProject.images[currentImageIndex]}
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title}, image ${currentImageIndex + 1} of ${selectedProject.images.length}`}
                        custom={direction}
                        initial={(nextDirection) => ({ opacity: 0, x: nextDirection * 28 })}
                        animate={{ opacity: 1, x: 0 }}
                        exit={(nextDirection) => ({ opacity: 0, x: nextDirection * -28 })}
                        transition={DIALOG_TRANSITION}
                        className="h-auto max-h-[75vh] w-full bg-black/20 object-contain"
                      />
                    </AnimatePresence>
                  </div>

                  {selectedProject.images.length > 1 && (
                    <button
                      type="button"
                      onClick={nextImage}
                      className="absolute right-1 z-10 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-white sm:right-4 sm:p-3"
                      aria-label="Next image"
                    >
                      <ChevronRightIcon aria-hidden="true" className="h-7 w-7" />
                    </button>
                  )}
                </div>

                <div className="mt-4 text-center">
                  <DialogTitle className="mb-2 text-xl font-bold sm:text-2xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <p className="mb-2 text-gray-300">{selectedProject.description}</p>
                  <p className="text-sm text-gray-400" aria-live="polite">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </p>
                </div>

                {selectedProject.images.length > 1 && (
                  <div className="mt-4 flex max-w-full justify-start gap-2 overflow-x-auto p-2 sm:justify-center">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => showImage(index, index > currentImageIndex ? 1 : -1)}
                        aria-label={`Show image ${index + 1}`}
                        aria-current={index === currentImageIndex ? 'true' : undefined}
                        className={`h-16 w-16 shrink-0 overflow-hidden rounded border-2 transition-all ${
                          index === currentImageIndex
                            ? 'scale-105 border-white'
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={image} alt="" className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </DialogPanel>
            )}
          </div>
        </div>
      </Dialog>
    </section>
  );
}
