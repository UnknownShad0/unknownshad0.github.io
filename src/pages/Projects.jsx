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
    return (
      <Motion.button
        key={project.id}
        type="button"
        onClick={() => openGallery(project)}
        className="group relative h-full w-full rounded-2xl text-left transition-all duration-300 hover:-translate-y-1 md:w-[calc(50%-0.75rem)]"
        aria-label={`View ${project.title} case study`}
      >
        <div
          data-mouse-tilt
          className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow transition-shadow duration-300 will-change-transform group-hover:shadow-2xl"
        >
          <div className="relative overflow-hidden">
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt=""
                width="1917"
                height="1067"
                loading="lazy"
                decoding="async"
                className="h-52 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 sm:h-64"
              />
            ) : (
              <div className="flex h-40 items-end bg-gradient-to-br from-gray-950 via-teal-950 to-teal-700 p-6 text-white sm:h-48">
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-teal-200 uppercase">
                    {project.company}
                  </p>
                  <p className="font-play mt-1 text-3xl font-bold">{project.title}</p>
                </div>
              </div>
            )}
            <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold">
              {project.year ?? project.category}
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h4 className="text-2xl font-bold text-gray-900">{project.title}</h4>
            {project.workType && (
              <p className="mt-3 w-fit rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800">
                {project.workType}
              </p>
            )}
            <p className="mt-2 leading-relaxed text-gray-600">{project.headline}</p>

            <div className="mt-5 border-l-4 border-teal-600 pl-4">
              <p className="text-xs font-bold tracking-wider text-gray-500 uppercase">
                Business value
              </p>
              <p className="mt-1 text-sm leading-relaxed text-gray-800">{project.value}</p>
            </div>

            <span className="text-accent mt-6 inline-flex items-center gap-2 text-sm font-bold">
              View case study
              <ChevronRightIcon aria-hidden="true" className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Motion.button>
    );
  };

  return (
    <section id="projects" className="p-4">
      <SectionHeading>Selected Work</SectionHeading>
      <p className="mx-auto mt-5 max-w-3xl text-center leading-relaxed text-gray-600">
        Professional work first, followed by selected academic projects. Each case study explains
        the problem, my contribution, and the practical value of the solution.
      </p>

      <div className="mx-auto mt-8 rounded-3xl border border-white/70 bg-white/75 p-4 shadow-2xl backdrop-blur-sm sm:p-8 lg:p-10">
        <h3 className="font-play text-2xl font-bold text-gray-900 sm:text-3xl">
          Professional Projects
        </h3>
        <Motion.div className="mt-6 flex flex-wrap justify-center gap-6">
          {professionalProjects.map(renderProject)}
        </Motion.div>

        <h3 className="font-play mt-12 text-2xl font-bold text-gray-900 sm:text-3xl">
          Supporting Projects
        </h3>
        <Motion.div className="mt-6 flex flex-wrap justify-center gap-6">
          {supportingProjects.map(renderProject)}
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
                className="relative w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white text-gray-900 shadow-2xl transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0"
              >
                <button
                  type="button"
                  onClick={closeGallery}
                  className="absolute top-3 right-3 z-20 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black/80"
                  aria-label="Close project gallery"
                >
                  <XMarkIcon aria-hidden="true" className="h-7 w-7" />
                </button>

                {selectedProject.images?.length > 0 && (
                  <div className="relative flex items-center justify-center bg-gray-950">
                    {selectedProject.images.length > 1 && (
                      <button
                        type="button"
                        onClick={previousImage}
                        className="absolute left-1 z-10 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60 sm:left-4 sm:p-3"
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
                        className="absolute right-1 z-10 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/60 sm:right-4 sm:p-3"
                        aria-label="Next image"
                      >
                        <ChevronRightIcon aria-hidden="true" className="h-7 w-7" />
                      </button>
                    )}
                  </div>
                )}

                <div className="p-5 sm:p-8">
                  <p className="text-accent text-xs font-bold tracking-widest uppercase">
                    {selectedProject.category}
                    {selectedProject.workType && ` · ${selectedProject.workType}`}
                  </p>
                  <DialogTitle className="mt-2 text-2xl font-bold sm:text-3xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <p className="mt-2 text-lg leading-relaxed text-gray-600">
                    {selectedProject.headline}
                  </p>

                  <dl className="mt-7 grid gap-5 sm:grid-cols-2">
                    <div className="rounded-xl bg-gray-50 p-5">
                      <dt className="text-sm font-bold text-gray-900">The challenge</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-gray-600">
                        {selectedProject.challenge}
                      </dd>
                    </div>
                    <div className="rounded-xl bg-gray-50 p-5">
                      <dt className="text-sm font-bold text-gray-900">What I built</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-gray-600">
                        {selectedProject.solution}
                      </dd>
                    </div>
                    <div className="rounded-xl bg-teal-50 p-5">
                      <dt className="text-sm font-bold text-teal-900">Working result</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-teal-900/80">
                        {selectedProject.result}
                      </dd>
                    </div>
                    <div className="rounded-xl bg-teal-50 p-5">
                      <dt className="text-sm font-bold text-teal-900">Operational value</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-teal-900/80">
                        {selectedProject.value}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 border-t border-gray-200 pt-5 text-sm text-gray-600">
                    <p>
                      <span className="font-bold text-gray-900">My role:</span>{' '}
                      {selectedProject.role}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedProject.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-accent hover:bg-accent-hover mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white transition-colors"
                    >
                      Visit project
                      <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4" />
                    </a>
                  )}

                  {selectedProject.images?.length > 0 && (
                    <p className="mt-5 text-center text-sm text-gray-500" aria-live="polite">
                      Screenshot {currentImageIndex + 1} of {selectedProject.images.length}
                    </p>
                  )}
                </div>

                {selectedProject.images?.length > 1 && (
                  <div className="flex max-w-full justify-start gap-2 overflow-x-auto border-t border-gray-200 p-4 sm:justify-center">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => showImage(index, index > currentImageIndex ? 1 : -1)}
                        aria-label={`Show image ${index + 1}`}
                        aria-current={index === currentImageIndex ? 'true' : undefined}
                        className={`h-16 w-16 shrink-0 overflow-hidden rounded border-2 transition-all ${
                          index === currentImageIndex
                            ? 'scale-105 border-teal-600'
                            : 'border-gray-200 opacity-60 hover:opacity-100'
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
              </DialogPanel>
            )}
          </div>
        </div>
      </Dialog>
    </section>
  );
}
