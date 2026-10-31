import {
  FaReact,
  FaPhp,
  FaLaravel,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaTerminal,
  FaFigma,
  FaDocker,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiPostman,
  SiVite,
  SiNextdotjs,
  SiCodeigniter,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { motion as Motion } from 'framer-motion';
import { SectionHeading } from '../components';
import { SKILLS } from '../data/portfolio';
import { MOTION_VARIANTS, DEFAULT_VIEWPORT, EASE_OUT } from '../config/motion';

const iconMap = {
  HTML: <FaHtml5 className="text-black" />,
  Docker: <FaDocker className="text-black" />,
  CSS: <FaCss3Alt className="text-black" />,
  React: <FaReact className="text-black" />,
  JavaScript: <SiJavascript className="text-black" />,
  'Tailwind CSS': <SiTailwindcss className="text-black" />,
  Bootstrap: <FaBootstrap className="text-black" />,
  Laravel: <FaLaravel className="text-black" />,
  PHP: <FaPhp className="text-black" />,
  SQL: <FaDatabase className="text-black" />,
  Git: <SiGit className="text-black" />,
  'REST API': <TbApi className="text-black" />,
  Postman: <SiPostman className="text-black" />,
  Vite: <SiVite className="text-black" />,
  'Terminal/SSH': <FaTerminal className="text-black" />,
  Figma: <FaFigma className="text-black" />,
  'Next.js': <SiNextdotjs className="text-black" />,
  CodeIgniter: <SiCodeigniter className="text-black" />,
};

export default function Technologies() {
  const renderSkill = (skill) => (
    <div
      key={skill}
      className="flex items-center justify-center gap-2 rounded-xl bg-white p-4 text-center text-3xl font-medium"
    >
      {iconMap[skill]}
      <span className="text-xs text-black">{skill}</span>
    </div>
  );

  return (
    <section id="technologies" className="p-4">
      <SectionHeading>Technologies</SectionHeading>
      <div className="mx-auto mt-8 grid grid-cols-1 gap-6 rounded-3xl p-5 text-center shadow-2xl sm:grid-cols-2 sm:p-8 lg:grid-cols-3 lg:p-10">
        <Motion.div
          variants={MOTION_VARIANTS.slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="group"
        >
          <div
            data-mouse-tilt
            className="mouse-spotlight relative h-full overflow-hidden rounded-3xl p-4 shadow transition-shadow duration-300 will-change-transform group-hover:shadow-xl sm:p-5"
          >
            <h3 className="mb-5 text-lg font-semibold lg:text-2xl">Frontend</h3>
            <div className="grid grid-cols-1 gap-1 font-mono sm:grid-cols-2">
              {SKILLS.frontend.map(renderSkill)}
            </div>
          </div>
        </Motion.div>
        <Motion.div
          variants={MOTION_VARIANTS.fade}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="group"
        >
          <div
            data-mouse-tilt
            className="mouse-spotlight relative h-full overflow-hidden rounded-3xl p-4 shadow transition-shadow duration-300 will-change-transform group-hover:shadow-xl sm:p-5"
          >
            <h3 className="mb-5 text-lg font-semibold lg:text-2xl">Backend</h3>
            <div className="grid grid-cols-1 gap-1 font-mono sm:grid-cols-2">
              {SKILLS.backend.map(renderSkill)}
            </div>
          </div>
        </Motion.div>
        <Motion.div
          variants={MOTION_VARIANTS.slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="group sm:col-span-2 lg:col-span-1"
        >
          <div
            data-mouse-tilt
            className="mouse-spotlight relative h-full overflow-hidden rounded-3xl p-4 shadow transition-shadow duration-300 will-change-transform group-hover:shadow-xl sm:p-5"
          >
            <h3 className="mb-5 text-lg font-semibold lg:text-2xl">Others</h3>
            <div className="grid grid-cols-1 gap-1 font-mono sm:grid-cols-2">
              {SKILLS.other.map(renderSkill)}
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
