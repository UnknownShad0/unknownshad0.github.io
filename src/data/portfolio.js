import mnlExpressImage from '../assets/mnl-express.webp';
import tolitsBasketballImage from '../assets/tolits-basketball.webp';
import unhubImage from '../assets/unhub.webp';
import usscSsaImage from '../assets/ussc-ssa.webp';
import usscUbsImage from '../assets/ussc-ubs.webp';
import usscWebsiteImage from '../assets/ussc-website.webp';

export const NAVIGATION_ITEMS = [
  { name: 'Selected Work', link: '#projects' },
  { name: 'About', link: '#about' },
  { name: 'Experience', link: '#career' },
  { name: 'Capabilities', link: '#technologies' },
  { name: 'Certifications', link: '#certifications' },
];

export const EDUCATION = [
  {
    year: 'Aug 2020 - Jul 2024',
    title: 'Bachelor of Science in Information Technology (BSIT)',
    institution: 'Bestlink College of the Philippines (College)',
  },
  {
    year: 'Jun 2018 - Apr 2020',
    title: 'Science, Technology, Engineering, and Mathematics (STEM)',
    institution: 'Bestlink College of the Philippines (SHS)',
  },
  {
    year: 'Jun 2014 - Apr 2018',
    institution: 'Sampaguita High School',
  },
];

export const CAREER = [
  {
    year: 'Oct 2024 - Sept 2026',
    title: 'Web Developer',
    institution: 'Clearmind Algorithmics Inc.',
    description: [
      'Contributed to multiple projects, handling both front-end and back-end development using React.js with Tailwind CSS for responsive web and mobile interface, and CodeIgniter for API integrations to support the mobile development team.',
      'Created documentation and user manuals for completed projects, ensuring clarity and usability for end-users and team members.',
      'Gained hands-on experience with Git, Docker, and development servers, strengthening problem-solving skills and adaptability in a collaborative development environment.',
    ],
  },
  {
    year: 'May 2025',
    title: 'DESO Technical Support Staff',
    institution: 'Commission on Elections',
    description: [
      'Provided technical assistance during elections, including troubleshooting voting machines and coordinating with EBs to ensure smooth voting operations.',
      'Documented incidents and maintained accurate records of machine performance and issues for reporting and future reference.',
    ],
  },
  {
    year: 'Apr - Jul 2024',
    title: 'Software Developer Intern',
    institution: 'Makopa Inc. Philippines',
    description: [
      'Independently completed a full project from start to finish, ensuring all requirements assigned by the supervisor were delivered on time.',
      'Gained hands-on experience with HTML, CSS, Bootstrap, JavaScript, jQuery, PHP, Laravel, and MySQL, applying these technologies to develop and maintain web applications.',
    ],
  },
];

export const PROJECTS = [
  {
    id: 'jmark-basketball-league',
    title: 'Basketball League System',
    company: 'Jmark Butcheron',
    year: '2026',
    category: 'Hobby project',
    // workType: 'Full-stack league management',
    link: 'https://community-basketball-league.vercel.app/',
    thumbnail: tolitsBasketballImage,
    images: [tolitsBasketballImage],
    headline:
      'One responsive system for league operations, live scoring, player statistics, and results.',
    challenge:
      'League information can become difficult to manage when teams, players, match records, scores, fouls, and statistics are handled across separate or manual records.',
    solution:
      'I built a responsive league platform with team and player management, match records, leaderboards, a live scoreboard with game and shot timers, a digital scoresheet, secure admin access, and light and dark themes.',
    result:
      'Delivered a deployed web application that automatically determines winners and best players while keeping game results, player statistics, and league records connected.',
    value:
      'Gives organizers one place to run game operations and publish results while giving players and the community clear access to schedules, scores, and performance statistics.',
    disclaimer:
      'This is an unofficial portfolio project and is not affiliated with, sponsored by, or endorsed by Tolit’s Butcheron. The Tolit’s Butcheron name, logo, and related brand assets belong to their respective owner and are used here only to identify the project concept.',
    role: 'Full-stack developer • League workflows, responsive interface, live scoring tools, admin access, statistics, and API integration',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST API'],
  },
  {
    id: 'ussc-mnl-express',
    title: 'USSC MNL Express',
    company: 'USSC',
    year: '2026',
    category: 'Professional work',
    link: 'https://mnlxpress.com/',
    thumbnail: mnlExpressImage,
    images: [mnlExpressImage],
    headline: 'Modernizing legacy forms and interfaces for a more dependable web experience.',
    challenge:
      'The existing customer-facing system had legacy form and interface code that needed corrections, design updates, and continued maintenance.',
    solution:
      'I refactored and improved legacy React and Mantine code, fixed form issues, updated interface designs, coordinated releases, and created technical documentation.',
    result:
      'Improved the maintainability of the existing codebase, resolved form problems, delivered updated screens, and documented the system for future work.',
    value:
      'Supports smoother customer interactions and gives the team clearer documentation for maintaining the platform.',
    role: 'Web developer • Interface fixes, UI updates, documentation, and team coordination',
    technologies: ['JavaScript', 'React', 'Mantine', 'CSS', 'Git', 'VPS'],
  },
  {
    id: 'ussc-ubs',
    title: 'USSC UBS',
    company: 'USSC',
    year: '2026',
    category: 'Professional work',
    link: 'https://ubusiness.ussc.com.ph/',
    thumbnail: usscUbsImage,
    images: [usscUbsImage],
    headline: 'Improving a legacy platform with analytics, responsive behavior, and monitoring.',
    challenge:
      'The existing legacy platform needed cleaner code, usage tracking, responsive behavior across devices, and reliable deployment and monitoring practices.',
    solution:
      'I refactored and improved legacy React code, integrated Google Analytics and Pixel Analytics, implemented responsive interfaces, and handled VPS deployment, monitoring, and documentation.',
    result:
      'Improved the existing codebase while delivering analytics tracking and a responsive mobile and desktop experience with ongoing monitoring support.',
    value:
      'Gives the business visibility into product usage and helps provide customers with a consistent experience across devices.',
    role: 'Web developer • Analytics, responsive UI, deployment, monitoring, and documentation',
    technologies: ['JavaScript', 'React', 'Google Analytics', 'Pixel Analytics', 'Git'],
  },
  {
    id: 'ussc-website',
    title: 'USSC Website',
    company: 'USSC',
    year: '2026',
    category: 'Professional work',
    link: 'https://www.ussc.com.ph/',
    thumbnail: usscWebsiteImage,
    images: [usscWebsiteImage],
    headline: 'Modernizing a legacy customer website with responsive pages and measurable usage.',
    challenge:
      'The legacy website needed code improvements and new Figma designs translated into production-ready pages for mobile and desktop.',
    solution:
      'I refactored and improved existing React and Next.js code, converted Figma designs into responsive Tailwind CSS pages, and integrated Google Analytics.',
    result:
      'Improved the legacy front end, shipped responsive website features, and supported deployment, monitoring, and team coordination.',
    value:
      'Extends the company’s digital presence across devices while analytics provide insight into how visitors use the website.',
    role: 'Web developer • Front-end development, responsive implementation, analytics, and deployment',
    technologies: ['JavaScript', 'Next.js', 'Tailwind CSS', 'Google Analytics', 'Docker', 'Git'],
  },
  {
    id: 'ussc-unhub',
    title: 'USSC Unhub',
    company: 'USSC',
    year: '2025',
    category: 'Professional work',
    link: 'https://cmaidev.ussc.com.ph/ussc-unhub/public/',
    thumbnail: unhubImage,
    images: [unhubImage],
    headline:
      'Improving a legacy system for customer notifications, reporting, and dependable releases.',
    challenge:
      'The legacy Laravel system needed code improvements, push-notification support, exportable reports, API testing, and release monitoring.',
    solution:
      'I refactored and improved legacy PHP and Laravel code, used Firebase for push notifications, generated Excel reports, tested APIs, monitored logs, and deployed updates to a VPS.',
    result:
      'Improved the existing codebase and delivered notification and reporting functionality while supporting testing, documentation, and deployment.',
    value:
      'Helps the business communicate through timely notifications and gives teams usable reports for operational follow-up.',
    role: 'Web developer • Notifications, reporting, testing, monitoring, documentation, and deployment',
    technologies: ['PHP', 'Laravel', 'Firebase', 'Postman', 'CSS', 'Git', 'VPS'],
  },
  {
    id: 'ussc-super-service-app',
    title: 'USSC Super Service App - Mobile App API',
    company: 'USSC',
    year: '2025',
    category: 'Professional work',
    link: 'https://apps.apple.com/ph/app/u-money-app/id1268931947',
    thumbnail: usscSsaImage,
    images: [usscSsaImage],
    headline:
      'Modernizing legacy service APIs and implementing insurance across every transaction.',
    challenge:
      'The legacy backend needed maintainability improvements, transaction-wide insurance handling, and continued support for bills-payment and e-load workflows.',
    solution:
      'I refactored and improved legacy CodeIgniter code, implemented insurance across all transaction flows, worked on bills-payment and e-load modules, integrated APIs, and monitored logs.',
    result:
      'Delivered insurance handling for every transaction while improving legacy service code and supporting API testing, log monitoring, and VPS deployment.',
    value:
      'Adds insurance protection consistently across transactions while maintaining customer access to digital services and improving visibility into API behavior.',
    role: 'Backend web developer • Legacy refactoring, transaction insurance, service modules, API integration, testing, monitoring, and deployment',
    technologies: ['PHP', 'CodeIgniter', 'Firebase', 'Postman', 'Git', 'VPS'],
  },
  {
    id: 'project-management-system',
    title: 'Project Management System',
    category: 'Academic capstone',
    thumbnail: '/pms/1login.jpg',
    images: Array.from(
      { length: 9 },
      (_, index) =>
        `/pms/${index + 1}${
          [
            'login',
            'dashboard',
            'project',
            'task',
            'send',
            'asset',
            'space',
            'incident',
            'contract',
          ][index]
        }.jpg`
    ),
    headline: 'A single workspace for projects, tasks, assets, contracts, and incidents.',
    challenge:
      'Project information can become scattered across separate messages, files, and manual records, making it harder for a team to see what needs attention.',
    solution:
      'I built a centralized system with dashboards and connected workflows for project setup, task assignment, file sending, assets, spaces, contracts, and incident reporting.',
    result:
      'Delivered a working end-to-end prototype covering the project lifecycle—from creating work and assigning tasks to maintaining operational records.',
    value:
      'Gives managers one place to review activity and helps teams spend less time searching across disconnected records.',
    role: 'Full-stack developer • Requirements, interface, workflows, and database',
    technologies: ['Laravel', 'PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
  },
  {
    id: 'voting-management-system',
    title: 'Voting Management System',
    category: 'OJT project',
    thumbnail: '/vms/1login.jpg',
    images: Array.from(
      { length: 9 },
      (_, index) =>
        `/vms/${index + 1}${
          [
            'login',
            'dashboard',
            'results',
            'report',
            'addcand',
            'bargraph',
            'heatmap',
            'info',
            'ballot',
          ][index]
        }.jpg`
    ),
    headline: 'A complete digital voting flow with automatic counting and reporting.',
    challenge:
      'Manual election workflows create extra administrative work across voter records, candidate setup, ballot submission, result counting, and report preparation.',
    solution:
      'I developed a system that connects voter and candidate management with ballot submission, dashboard summaries, result visualizations, and printable reports.',
    result:
      'Delivered a working voting flow that automatically turns submitted ballots into totals, charts, heat maps, and reports.',
    value:
      'Reduces manual counting steps and gives administrators a faster, clearer way to review election results.',
    role: 'Software developer • End-to-end implementation and delivery',
    technologies: ['Laravel', 'PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
  },
];

export const CERTIFICATIONS = [
  { id: 'database-basics', image: '/certs/basic-of-database.png', title: 'Database Basics' },
  { id: 'learn-php', image: '/certs/learn-php.png', title: 'Learn PHP' },
  { id: 'mastering-html', image: '/certs/mastering-html.png', title: 'Mastering HTML' },
  { id: 'laravel-course', image: '/certs/laravel-course.jpg', title: 'Laravel Course' },
];

export const SKILLS = {
  frontend: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Bootstrap',
    'Figma',
  ],
  backend: ['Laravel', 'PHP', 'CodeIgniter', 'SQL', 'REST API', 'Firebase'],
  ai: ['Kiro CLI', 'Claude AI', 'Ollama', 'Codex', 'ChatGPT', 'Gemini'],
  tools: ['Git', 'GitHub', 'Postman', 'Vite', 'Terminal/SSH', 'Docker'],
  platforms: ['Laragon', 'XAMPP', 'Vercel', 'Render', 'Google Analytics', 'VPS Deployment'],
};
