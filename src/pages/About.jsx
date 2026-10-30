import profile from '../assets/profile.jpg';
import { FaDownload } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import { motion as Motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from '../components';
import { MOTION_VARIANTS, DEFAULT_VIEWPORT, EASE_OUT } from '../config/motion';

const aboutCopy = `<div class="space-y-4 text-base leading-relaxed text-gray-700">
  <p><strong class="font-semibold text-black">Motivated</strong> and <strong class="font-semibold text-black">resourceful</strong> with a strong commitment to <strong class="font-semibold text-black">professional growth</strong>. Experienced in balancing coursework with part-time employment, demonstrating exceptional <strong class="font-semibold text-black">time management</strong> and <strong class="font-semibold text-black">organizational skills</strong>.</p>
  <p>Have a <strong class="font-semibold text-black">proactive mindset</strong> and actively look for opportunities to <strong class="font-semibold text-black">learn and contribute</strong> in the workplace. <strong class="font-semibold text-black">Adaptable</strong> and <strong class="font-semibold text-black">quick to learn</strong>, consistently achieving goals and <strong class="font-semibold text-black">exceeding expectations</strong>.</p>
  <p>Seeking a position that allows for continued <strong class="font-semibold text-black">growth</strong> and <strong class="font-semibold text-black">development</strong> while making a meaningful <strong class="font-semibold text-black">contribution</strong> to the organization.</p>
</div>`;

function AboutDescription() {
  return (
    <div className="space-y-4 text-base leading-relaxed text-gray-700">
      <p>
        <strong className="font-semibold text-black">Motivated</strong> and{' '}
        <strong className="font-semibold text-black">resourceful</strong> with a strong commitment
        to <strong className="font-semibold text-black">professional growth</strong>. Experienced in
        balancing coursework with part-time employment, demonstrating exceptional{' '}
        <strong className="font-semibold text-black">time management</strong> and{' '}
        <strong className="font-semibold text-black">organizational skills</strong>.
      </p>
      <p>
        Have a <strong className="font-semibold text-black">proactive mindset</strong> and actively
        look for opportunities to{' '}
        <strong className="font-semibold text-black">learn and contribute</strong> in the workplace.{' '}
        <strong className="font-semibold text-black">Adaptable</strong> and{' '}
        <strong className="font-semibold text-black">quick to learn</strong>, consistently achieving
        goals and <strong className="font-semibold text-black">exceeding expectations</strong>.
      </p>
      <p>
        Seeking a position that allows for continued{' '}
        <strong className="font-semibold text-black">growth</strong> and{' '}
        <strong className="font-semibold text-black">development</strong> while making a meaningful{' '}
        <strong className="font-semibold text-black">contribution</strong> to the organization.
      </p>
    </div>
  );
}

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="p-4">
      <SectionHeading>About</SectionHeading>
      <div className="mx-auto mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <Motion.div
          variants={MOTION_VARIANTS.fade}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          transition={{ duration: 0.65, ease: EASE_OUT }}
          className="grid min-w-0 grid-cols-1 gap-6 rounded-lg p-4 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center lg:gap-8"
        >
          <div className="min-w-0">
            <img
              src={profile}
              alt="John Mark Anunciado"
              className="mx-auto h-auto w-full max-w-sm rounded-lg object-cover"
            />
          </div>
          <div className="flex min-w-0 items-center py-1">
            <dl className="min-w-0 space-y-4">
              <div className="space-y-1">
                <dt className="text-sm font-semibold">Name:</dt>
                <dd>John Mark B. Anunciado</dd>
              </div>
              <div className="space-y-1">
                <dt className="text-sm font-semibold">Position:</dt>
                <dd>Web Developer</dd>
              </div>
              <div className="min-w-0 space-y-1">
                <dt className="text-sm font-semibold">Email:</dt>
                <dd>
                  <a
                    href="mailto:johnmark.anunciado.dev@gmail.com"
                    className="break-words hover:underline"
                  >
                    johnmark.anunciado.dev@gmail.com
                  </a>
                </dd>
              </div>
              <div className="space-y-1">
                <dt className="text-sm font-semibold">Address:</dt>
                <dd>City of San Jose del Monte, Bulacan.</dd>
              </div>
              <div className="pt-1">
                <a
                  href="/CV-Anunciado-March-2026.pdf"
                  download="Anunciado-CV-2026.pdf"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                >
                  <span>Download CV</span>
                  <FaDownload aria-hidden="true" className="text-lg" />
                </a>
              </div>
            </dl>
          </div>
        </Motion.div>
        <Motion.div
          variants={MOTION_VARIANTS.slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          transition={{ duration: 0.65, delay: 0.1, ease: EASE_OUT }}
          className="flex h-full items-center px-1 py-4 sm:px-6 sm:py-8 lg:p-10"
        >
          {shouldReduceMotion ? (
            <AboutDescription />
          ) : (
            <ReactTyped strings={[aboutCopy]} typeSpeed={5} showCursor={false} loop={false} />
          )}
        </Motion.div>
      </div>
    </section>
  );
}
