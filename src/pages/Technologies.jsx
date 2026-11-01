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
  HTML: <FaHtml5 className="text-gray-950 dark:text-teal-200" />,
  Docker: <FaDocker className="text-gray-950 dark:text-teal-200" />,
  CSS: <FaCss3Alt className="text-gray-950 dark:text-teal-200" />,
  React: <FaReact className="text-gray-950 dark:text-teal-200" />,
  JavaScript: <SiJavascript className="text-gray-950 dark:text-teal-200" />,
  'Tailwind CSS': <SiTailwindcss className="text-gray-950 dark:text-teal-200" />,
  Bootstrap: <FaBootstrap className="text-gray-950 dark:text-teal-200" />,
  Laravel: <FaLaravel className="text-gray-950 dark:text-teal-200" />,
  PHP: <FaPhp className="text-gray-950 dark:text-teal-200" />,
  SQL: <FaDatabase className="text-gray-950 dark:text-teal-200" />,
  Git: <SiGit className="text-gray-950 dark:text-teal-200" />,
  'REST API': <TbApi className="text-gray-950 dark:text-teal-200" />,
  Postman: <SiPostman className="text-gray-950 dark:text-teal-200" />,
  Vite: <SiVite className="text-gray-950 dark:text-teal-200" />,
  'Terminal/SSH': <FaTerminal className="text-gray-950 dark:text-teal-200" />,
  Figma: <FaFigma className="text-gray-950 dark:text-teal-200" />,
  'Next.js': <SiNextdotjs className="text-gray-950 dark:text-teal-200" />,
  CodeIgniter: <SiCodeigniter className="text-gray-950 dark:text-teal-200" />,
  Firebase: <SiFirebase className="text-gray-950 dark:text-teal-200" />,
  GitHub: <FaGithub className="text-gray-950 dark:text-teal-200" />,
  'Google Analytics': <SiGoogleanalytics className="text-gray-950 dark:text-teal-200" />,
  'VPS Deployment': <FaServer className="text-gray-950 dark:text-teal-200" />,
  TypeScript: <SiTypescript className="text-gray-950 dark:text-teal-200" />,
  'Kiro CLI': <FaTerminal className="text-gray-950 dark:text-teal-200" />,
  'Claude AI': <SiClaude className="text-gray-950 dark:text-teal-200" />,
  Ollama: <SiOllama className="text-gray-950 dark:text-teal-200" />,
  Codex: <SiOpenai className="text-gray-950 dark:text-teal-200" />,
  ChatGPT: <SiOpenai className="text-gray-950 dark:text-teal-200" />,
  Gemini: <SiGooglegemini className="text-gray-950 dark:text-teal-200" />,
  Laragon: <SiLaragon className="text-gray-950 dark:text-teal-200" />,
  XAMPP: <SiXampp className="text-gray-950 dark:text-teal-200" />,
  Vercel: <SiVercel className="text-gray-950 dark:text-teal-200" />,
  Render: <SiRender className="text-gray-950 dark:text-teal-200" />,
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
      className="flex items-center justify-center gap-2 rounded-xl bg-white p-4 text-center text-3xl font-medium dark:bg-white/[0.035]"
    >
      {iconMap[skill]}
      <span className="text-xs text-black dark:text-gray-300">{skill}</span>
    </div>
  );

  return (
    <section id="technologies" className="p-4">
      <SectionHeading>Capabilities</SectionHeading>
      <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-gray-600 dark:text-gray-400">
        The tools I use to turn requirements into responsive interfaces, connected workflows, and
        maintainable web applications.
      </p>
      <div className="mx-auto mt-8 flex flex-wrap justify-center gap-6 rounded-3xl border border-gray-200 bg-white p-5 text-center shadow-2xl sm:p-8 lg:p-10 dark:border-teal-100/10 dark:bg-[#0b1714] dark:shadow-black/30">
        {capabilityGroups.map((group) => (
          <Motion.div
            key={group.key}
            variants={group.variant}
            initial="hidden"
            whileInView="visible"
            viewport={DEFAULT_VIEWPORT}
            transition={{ duration: 0.55, ease: EASE_OUT }}
            className="group w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <div
              data-mouse-tilt
              className="relative h-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow transition-shadow duration-300 will-change-transform group-hover:shadow-xl sm:p-5 dark:border-teal-100/10 dark:bg-[#0e1c18] dark:shadow-black/20 dark:group-hover:shadow-black/40"
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
