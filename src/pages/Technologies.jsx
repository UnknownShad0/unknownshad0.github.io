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
  FaGithub,
  FaServer,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiPostman,
  SiVite,
  SiNextdotjs,
  SiCodeigniter,
  SiFirebase,
  SiGoogleanalytics,
  SiTypescript,
  SiClaude,
  SiOllama,
  SiOpenai,
  SiGooglegemini,
  SiLaragon,
  SiXampp,
  SiVercel,
  SiRender,
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
  Firebase: <SiFirebase className="text-black" />,
  GitHub: <FaGithub className="text-black" />,
  'Google Analytics': <SiGoogleanalytics className="text-black" />,
  'VPS Deployment': <FaServer className="text-black" />,
  TypeScript: <SiTypescript className="text-black" />,
  'Kiro CLI': <FaTerminal className="text-black" />,
  'Claude AI': <SiClaude className="text-black" />,
  Ollama: <SiOllama className="text-black" />,
  Codex: <SiOpenai className="text-black" />,
  ChatGPT: <SiOpenai className="text-black" />,
  Gemini: <SiGooglegemini className="text-black" />,
  Laragon: <SiLaragon className="text-black" />,
  XAMPP: <SiXampp className="text-black" />,
  Vercel: <SiVercel className="text-black" />,
  Render: <SiRender className="text-black" />,
};

const capabilityGroups = [
  { key: 'frontend', title: 'Frontend', variant: MOTION_VARIANTS.slideLeft },
  { key: 'backend', title: 'Backend', variant: MOTION_VARIANTS.fade },
  { key: 'ai', title: 'AI Tools', variant: MOTION_VARIANTS.slideRight },
  { key: 'tools', title: 'Development Tools', variant: MOTION_VARIANTS.slideLeft },
  { key: 'platforms', title: 'Platforms & Deployment', variant: MOTION_VARIANTS.slideRight },
];

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
      <SectionHeading>Capabilities</SectionHeading>
      <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-gray-600">
        The tools I use to turn requirements into responsive interfaces, connected workflows, and
        maintainable web applications.
      </p>
      <div className="mx-auto mt-8 grid grid-cols-1 gap-6 rounded-3xl border border-gray-200 bg-white p-5 text-center shadow-2xl sm:grid-cols-2 sm:p-8 lg:grid-cols-3 lg:p-10">
        {capabilityGroups.map((group) => (
          <Motion.div
            key={group.key}
            variants={group.variant}
            initial="hidden"
            whileInView="visible"
            viewport={DEFAULT_VIEWPORT}
            transition={{ duration: 0.55, ease: EASE_OUT }}
            className="group"
          >
            <div
              data-mouse-tilt
              className="relative h-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow transition-shadow duration-300 will-change-transform group-hover:shadow-xl sm:p-5"
            >
              <h3 className="mb-5 text-lg font-semibold lg:text-2xl">{group.title}</h3>
              <div className="grid grid-cols-1 gap-1 font-mono sm:grid-cols-2">
                {SKILLS[group.key].map(renderSkill)}
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
