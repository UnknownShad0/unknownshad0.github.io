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
  HTML: FaHtml5,
  Docker: FaDocker,
  CSS: FaCss3Alt,
  React: FaReact,
  JavaScript: SiJavascript,
  'Tailwind CSS': SiTailwindcss,
  Bootstrap: FaBootstrap,
  Laravel: FaLaravel,
  PHP: FaPhp,
  SQL: FaDatabase,
  Git: SiGit,
  'REST API': TbApi,
  Postman: SiPostman,
  Vite: SiVite,
  'Terminal/SSH': FaTerminal,
  Figma: FaFigma,
  'Next.js': SiNextdotjs,
  CodeIgniter: SiCodeigniter,
  Firebase: SiFirebase,
  GitHub: FaGithub,
  'Google Analytics': SiGoogleanalytics,
  'VPS Deployment': FaServer,
  TypeScript: SiTypescript,
  'Kiro CLI': FaTerminal,
  'Claude AI': SiClaude,
  Ollama: SiOllama,
  Codex: SiOpenai,
  ChatGPT: SiOpenai,
  Gemini: SiGooglegemini,
  Laragon: SiLaragon,
  XAMPP: SiXampp,
  Vercel: SiVercel,
  Render: SiRender,
};

const capabilityGroups = [
  { key: 'frontend', title: 'Frontend' },
  { key: 'backend', title: 'Backend' },
  { key: 'ai', title: 'AI tools' },
  { key: 'tools', title: 'Development tools' },
  { key: 'platforms', title: 'Platforms and deployment' },
];

export default function Technologies() {
  const renderSkill = (skill) => {
    const Icon = iconMap[skill];

    return (
      <li key={skill} className="flex min-w-0 items-start gap-2.5 py-1.5 text-sm leading-snug">
        {Icon && (
          <Icon
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-gray-700 dark:text-teal-200"
          />
        )}
        <span className="min-w-0 break-words text-gray-800 dark:text-gray-300">{skill}</span>
      </li>
    );
  };

  return (
    <section id="technologies" className="p-4">
      <SectionHeading>Capabilities</SectionHeading>
      <p className="mx-auto mt-5 max-w-2xl px-2 text-center text-sm leading-relaxed text-gray-600 sm:px-0 sm:text-base dark:text-gray-400">
        The tools I use to turn requirements into responsive interfaces, connected workflows, and
        maintainable web applications.
      </p>

      <div className="mx-auto mt-8 max-w-2xl space-y-8 md:hidden">
        {capabilityGroups.map((group) => (
          <Motion.div
            key={group.key}
            variants={MOTION_VARIANTS.fade}
            initial="hidden"
            whileInView="visible"
            viewport={DEFAULT_VIEWPORT}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            className="min-w-0"
          >
            <h3 className="border-t border-gray-300 pt-3 text-lg font-medium text-gray-900 dark:border-white/15 dark:text-gray-50">
              {group.title}
            </h3>
            <ul className="mt-2 grid grid-cols-1 gap-x-5 min-[360px]:grid-cols-2">
              {SKILLS[group.key].map(renderSkill)}
            </ul>
          </Motion.div>
        ))}
      </div>

      <div className="mx-auto mt-8 hidden max-w-7xl gap-x-10 gap-y-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl md:grid md:grid-cols-3 lg:grid-cols-5 lg:p-10 dark:border-teal-100/10 dark:bg-[#0b1714] dark:shadow-black/30">
        {capabilityGroups.map((group) => (
          <Motion.div
            key={group.key}
            variants={MOTION_VARIANTS.fade}
            initial="hidden"
            whileInView="visible"
            viewport={DEFAULT_VIEWPORT}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="min-w-0"
          >
            <h3 className="border-b border-gray-200 pb-2 text-base font-semibold text-gray-900 sm:text-lg dark:border-white/15 dark:text-gray-50">
              {group.title}
            </h3>
            <ul className="mt-2">{SKILLS[group.key].map(renderSkill)}</ul>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
