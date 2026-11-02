import { ArrowRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion as Motion } from 'framer-motion';
import coverImage from '../assets/cover.jpg';
import { EASE_OUT, scaleMotionTime, useIsDesktop } from '../config/motion';

export default function Hero() {
  const isDesktop = useIsDesktop();
  const itemVariants = {
    hidden: { opacity: 0, y: isDesktop ? 24 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: scaleMotionTime(isDesktop ? 0.58 : 0.38),
        ease: EASE_OUT,
      },
    },
  };
  const contentVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: scaleMotionTime(isDesktop ? 0.08 : 0.04),
        staggerChildren: scaleMotionTime(isDesktop ? 0.1 : 0.05),
      },
    },
  };
  const actionGroupVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: scaleMotionTime(isDesktop ? 0.1 : 0.06),
      },
    },
  };
  const actionItemVariants = {
    hidden: { opacity: 0, y: isDesktop ? 20 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: scaleMotionTime(isDesktop ? 0.48 : 0.34),
        ease: EASE_OUT,
      },
    },
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-white text-gray-950 dark:bg-[#0b1714] dark:text-gray-50">
      <Motion.div
        initial={{ opacity: 0, scale: isDesktop ? 1.02 : 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: scaleMotionTime(isDesktop ? 0.85 : 0.42),
          ease: EASE_OUT,
        }}
        className="absolute inset-0"
      >
        <img
          src={coverImage}
          alt=""
          width="1560"
          height="1170"
          className="h-full w-full object-cover dark:opacity-65"
        />
      </Motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10 dark:from-[#07110f] dark:via-[#07110f]/90 dark:to-[#07110f]/25" />

      <Motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
      >
        <Motion.p
          variants={itemVariants}
          className="text-accent mb-5 text-sm font-bold tracking-[0.2em] uppercase dark:text-teal-300"
        >
          John Mark Anunciado <span className="text-accent hidden lg:inline">-</span>{' '}
          <span className="block lg:inline">Web Developer</span>
        </Motion.p>
        <Motion.h1
          variants={itemVariants}
          className="font-play text-4xl leading-tight font-bold sm:text-6xl lg:text-7xl"
        >
          I build web systems that turn manual work into clear, reliable workflows.
        </Motion.h1>
        <Motion.div variants={actionGroupVariants} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Motion.a
            variants={actionItemVariants}
            href="#projects"
            className="bg-accent hover:bg-accent-hover inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-colors dark:bg-teal-400 dark:text-teal-950 dark:hover:bg-teal-300"
          >
            See selected work
            <ArrowRightIcon aria-hidden="true" className="h-5 w-5" />
          </Motion.a>
          <Motion.a
            variants={actionItemVariants}
            href="mailto:johnmark.anunciado.dev@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white/70 px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-white dark:border-teal-100/20 dark:bg-[#10201c]/80 dark:text-gray-100 dark:hover:bg-[#17312a]"
          >
            <EnvelopeIcon aria-hidden="true" className="h-5 w-5" />
            Discuss a project
          </Motion.a>
        </Motion.div>
      </Motion.div>
    </section>
  );
}
