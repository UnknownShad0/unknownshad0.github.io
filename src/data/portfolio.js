export const NAVIGATION_ITEMS = [
  { name: 'About', link: '#about' },
  { name: 'Education & Career', link: '#career' },
  { name: 'Technologies', link: '#technologies' },
  { name: 'Projects', link: '#projects' },
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
    year: 'Oct 2024 - Sep 2026',
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
    id: 'project-management-system',
    title: 'Project Management System',
    category: 'Capstone',
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
    description:
      'A comprehensive project management solution with task tracking and team collaboration.',
  },
  {
    id: 'voting-management-system',
    title: 'Voting Management System',
    category: 'OJT',
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
    description:
      'A secure system that manages voter registration, candidate information, vote submission, and automated result counting for efficient and transparent elections.',
  },
];

export const CERTIFICATIONS = [
  { id: 'database-basics', image: '/certs/basic-of-database.png', title: 'Database Basics' },
  { id: 'learn-php', image: '/certs/learn-php.png', title: 'Learn PHP' },
  { id: 'mastering-html', image: '/certs/mastering-html.png', title: 'Mastering HTML' },
  { id: 'laravel-course', image: '/certs/laravel-course.jpg', title: 'Laravel Course' },
];

export const SKILLS = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Figma'],
  backend: ['Laravel', 'PHP', 'CodeIgniter', 'SQL', 'REST API'],
  other: ['Git', 'Postman', 'Vite', 'Terminal/SSH', 'Docker'],
};
