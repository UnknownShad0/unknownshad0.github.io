import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import {
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { SectionHeading } from '../components';
import { PROJECTS } from '../data/portfolio';
import { DIALOG_TRANSITION } from '../config/motion';

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
    if (!selectedProject?.images?.length) return;
    showImage((currentImageIndex + 1) % selectedProject.images.length, 1);
  };

  const previousImage = () => {
    if (!selectedProject?.images?.length) return;
    showImage(
      (currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length,
      -1
    );
  };

  const handleGalleryKeyDown = (event) => {
    if (event.key === 'ArrowLeft') previousImage();
    if (event.key === 'ArrowRight') nextImage();
  };

  const professionalProjects = PROJECTS.filter(
    (project) => project.category === 'Professional work' || project.category === 'Deployed project'
  );
  const supportingProjects = PROJECTS.filter(
    (project) => project.category !== 'Professional work' && project.category !== 'Deployed project'
  );

  const renderProject = (project) => {
    const meta = [project.year ?? project.category, project.workType].filter(Boolean).join(' · ');

    return (
      <button
        key={project.id}
        type="button"
        onClick={() => openGallery(project)}
        className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600 dark:focus-visible:outline-teal-300"
        aria-label={`View ${project.title} case study`}
      >
        {project.thumbnail ? (
          <img
            data-mouse-tilt
            src={project.thumbnail}
            alt=""
            width="1917"
            height="1067"
            loading="lazy"
            decoding="async"
            className="aspect-[16/9] w-full rounded border border-gray-200 object-cover dark:border-white/10"
          />
        ) : (
          <div
            data-mouse-tilt
            className="flex aspect-[16/9] items-end rounded bg-gray-900 p-5 text-white dark:bg-[#12241f]"
          >
            <p className="font-play text-2xl font-bold">{project.title}</p>
          </div>
        )}

        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{meta}</p>

        <h4 className="mt-1 text-xl font-semibold text-gray-900 decoration-gray-400 underline-offset-4 group-hover:underline dark:text-gray-50 dark:decoration-gray-500">
          {project.title}
        </h4>

        <p className="mt-2 leading-relaxed text-gray-600 dark:text-gray-400">{project.headline}</p>

        <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <span className="font-semibold text-gray-900 dark:text-gray-100">Result:</span>{' '}
          {project.value}
        </p>
      </button>
    );
  };

  return (
    <section id="projects" className="p-4">
      <SectionHeading>Selected Work</SectionHeading>
      <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-gray-600 dark:text-gray-400">
        Professional work first, followed by selected academic projects. Each case study covers the
        problem, what I did, and what changed as a result.
      </p>

      <div className="mx-auto mt-12 max-w-5xl">
        {/* <h3 className="border-t border-gray-300 pt-3 text-lg font-medium text-gray-900 dark:border-white/15 dark:text-gray-50">
          Professional projects
        </h3> */}
        <div className="mt-8 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {professionalProjects.map(renderProject)}
        </div>

        {supportingProjects.length > 0 && (
          <>
            <h3 className="mt-16 border-t border-gray-300 pt-3 text-lg font-medium text-gray-900 dark:border-white/15 dark:text-gray-50">
              Supporting projects
            </h3>
            <div className="mt-8 grid gap-x-8 gap-y-12 md:grid-cols-2">
              {supportingProjects.map(renderProject)}
            </div>
          </>
        )}
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
                className="relative w-full max-w-4xl transform overflow-hidden rounded-lg bg-white text-gray-900 shadow-xl transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0 dark:bg-[#0b1714] dark:text-gray-100 dark:ring-1 dark:ring-white/10"
              >
                <button
                  type="button"
                  onClick={closeGallery}
                  className="absolute top-3 right-3 z-20 rounded bg-black/60 p-1.5 text-white transition-colors hover:bg-black/80"
                  aria-label="Close project gallery"
                >
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                {selectedProject.images?.length > 0 && (
                  <div className="relative flex items-center justify-center bg-gray-950">
                    {selectedProject.images.length > 1 && (
                      <button
                        type="button"
                        onClick={previousImage}
                        className="absolute left-2 z-10 rounded bg-black/40 p-2 text-white transition hover:bg-black/60 sm:left-4"
                        aria-label="Previous image"
                      >
                        <ChevronLeftIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    )}

                    <div className="w-full overflow-hidden">
                      <AnimatePresence initial={false} mode="wait" custom={direction}>
                        <Motion.img
                          key={selectedProject.images[currentImageIndex]}
                          src={selectedProject.images[currentImageIndex]}
                          alt={`${selectedProject.title}, image ${currentImageIndex + 1} of ${selectedProject.images.length}`}
                          width="1917"
                          height="1067"
                          loading="lazy"
                          decoding="async"
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
                        className="absolute right-2 z-10 rounded bg-black/40 p-2 text-white transition hover:bg-black/60 sm:right-4"
                        aria-label="Next image"
                      >
                        <ChevronRightIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    )}
                  </div>
                )}

                {selectedProject.images?.length > 1 && (
                  <div className="flex max-w-full justify-start gap-2 overflow-x-auto border-b border-gray-200 p-3 sm:justify-center dark:border-white/10">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => showImage(index, index > currentImageIndex ? 1 : -1)}
                        aria-label={`Show image ${index + 1}`}
                        aria-current={index === currentImageIndex ? 'true' : undefined}
                        className={`h-14 w-14 shrink-0 overflow-hidden rounded-sm border-2 transition-opacity ${
                          index === currentImageIndex
                            ? 'border-gray-900 dark:border-gray-100'
                            : 'border-transparent opacity-50 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={image}
                          alt=""
                          width="64"
                          height="64"
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                <div className="p-5 sm:p-8">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {selectedProject.category}
                    {selectedProject.workType && ` · ${selectedProject.workType}`}
                  </p>
                  <DialogTitle className="mt-1 text-2xl font-semibold sm:text-3xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <p className="mt-2 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                    {selectedProject.headline}
                  </p>

                  <dl className="mt-6">
                    {[
                      ['The challenge', selectedProject.challenge],
                      ['What I built', selectedProject.solution],
                      ['Working result', selectedProject.result],
                      ['Operational value', selectedProject.value],
                    ].map(([label, text]) => (
                      <div
                        key={label}
                        className="border-t border-gray-200 py-4 dark:border-white/10"
                      >
                        <dt className="font-semibold text-gray-900 dark:text-gray-100">{label}</dt>
                        <dd className="mt-1 leading-relaxed text-gray-600 dark:text-gray-400">
                          {text}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="border-t border-gray-200 pt-4 text-sm text-gray-600 dark:border-white/10 dark:text-gray-400">
                    <p>
                      <span className="font-semibold text-gray-900 dark:text-gray-100">
                        My role:
                      </span>{' '}
                      {selectedProject.role}
                    </p>
                    <p className="mt-2">{selectedProject.technologies.join(', ')}</p>
                  </div>

                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent mt-5 inline-flex items-center gap-1.5 font-medium underline underline-offset-4 hover:no-underline dark:text-teal-300"
                    >
                      <span>Visit project</span>
                      <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4" />
                    </a>
                  )}

                  {selectedProject.images?.length > 0 && (
                    <p
                      className="mt-6 text-sm text-gray-500 dark:text-gray-500"
                      aria-live="polite"
                    >
                      Screenshot {currentImageIndex + 1} of {selectedProject.images.length}
                    </p>
                  )}
                </div>
              </DialogPanel>
            )}
          </div>
        </div>
      </Dialog>
    </section>
  );
}
