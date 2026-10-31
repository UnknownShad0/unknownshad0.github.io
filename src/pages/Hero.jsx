import { ArrowRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion as Motion } from 'framer-motion';
import coverImage from '../assets/cover.jpg';
import { EASE_OUT, MOTION_VARIANTS } from '../config/motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-white text-gray-950">
      <img
        src={coverImage}
        alt=""
        width="1560"
        height="1170"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10" />

      <Motion.div
        variants={MOTION_VARIANTS.slideUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.65, ease: EASE_OUT }}
        className="relative max-w-4xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
      >
        <p className="text-accent mb-5 text-sm font-bold tracking-[0.2em] uppercase">
          John Mark Anunciado · Web Developer
        </p>
        <h1 className="font-play text-4xl leading-tight font-bold sm:text-6xl lg:text-7xl">
          I build web systems that turn manual work into clear, reliable workflows.
        </h1>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="bg-accent hover:bg-accent-hover inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-colors"
          >
            See selected work
            <ArrowRightIcon aria-hidden="true" className="h-5 w-5" />
          </a>
          <a
            href="mailto:johnmark.anunciado.dev@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white/70 px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-white"
          >
            <EnvelopeIcon aria-hidden="true" className="h-5 w-5" />
            Discuss a project
          </a>
        </div>
      </Motion.div>
    </section>
  );
}
