import electromartImg from './assets/electromart.webp';
import notesImg from './assets/notes.webp';

export const profile = {
  name: 'Karan Kumar',
  email: 'karankuma992005@gmail.com',
  github: 'https://github.com/Karan-Prajapati-92',
  linkedin: 'https://www.linkedin.com/in/karan-prajapati-8340ba383/',
  resume: '/resume.pdf',
  // Formspark form id used by the contact form.
  formsparkId: 'u3iDO2NBD',
};

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const highlights = [
  { icon: 'layout', label: 'Modern UI/UX Focus' },
  { icon: 'code', label: 'Clean Code Focus' },
  { icon: 'layers', label: 'MERN Stack Skills' },
];

export const levelWidth = { Strong: 80, Intermediate: 62 };

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'layout',
    tone: 'bg-emerald-500/10 text-emerald-400',
    items: [
      ['React.js', 'Intermediate'],
      ['JavaScript (ES6+)', 'Strong'],
      ['HTML5 & CSS3', 'Strong'],
      ['Tailwind CSS', 'Intermediate'],
      ['Bootstrap', 'Strong'],
    ],
    badges: ['Responsive Web Design'],
  },
  {
    title: 'Backend',
    icon: 'server',
    tone: 'bg-cyan-500/10 text-cyan-400',
    items: [
      ['Node.js', 'Strong'],
      ['Express.js', 'Strong'],
      ['RESTful API Architecture', 'Intermediate'],
    ],
    badges: ['REST', 'JSON', 'Middleware'],
  },
  {
    title: 'Database & Tools',
    icon: 'database',
    tone: 'bg-emerald-500/10 text-emerald-400',
    items: [
      ['MongoDB & Mongoose', 'Strong'],
      ['MySQL', 'Intermediate'],
      ['Git & GitHub', 'Strong'],
      ['Vercel', 'Intermediate'],
    ],
    badges: ['MongoDB', 'MySQL', 'Mongoose ORM'],
  },
];

export const projects = [
  {
    title: 'ElectroMart',
    type: 'Full-Stack / E-commerce Website',
    tags: ['React.js', 'Vite', 'JavaScript', 'CSS'],
    description:
      'A modern electronics shopping website featuring product browsing, search, category filters, shopping cart, wishlist, and a demo checkout experience.',
    image: electromartImg,
    alt: 'ElectroMart home page showing the hero banner and product search',
    demo: 'https://ecommerce-website-ai.vercel.app/',
    code: 'https://github.com/Karan-Prajapati-92/Ecommerce_website_Ai',
  },
  {
    title: 'React Notes',
    type: 'React Learning Project',
    tags: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    description:
      'A collection of React notes covering components, props, state, hooks, event handling, forms, controlled components, two-way data binding, and React Router.',
    image: notesImg,
    alt: 'React Notes app with a form to add notes and a list of saved note cards',
    demo: 'https://notesapp-git-main-karan00.vercel.app/',
    code: 'https://github.com/Karan-Prajapati-92/Notes-App',
  },
];

export const upcoming = {
  title: 'AI Interview Platform',
  status: 'Coming Soon',
  description:
    'An AI-powered interview preparation platform that helps users practice technical and HR interviews, answer questions, receive AI-generated feedback, and improve their interview performance.',
  technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI/LLM API'],
  features: [
    'User registration and login.',
    'AI-generated technical and HR interview questions.',
    'Interactive mock interviews.',
    'AI feedback on answers, strengths, and weaknesses.',
    'Interview performance reports and progress tracking.',
    'Interview categories for frontend, backend, full-stack, and HR.',
  ],
};

export const experience = [
  {
    title: 'Growing into full-stack',
    badge: 'Present',
    place: 'Self-directed',
    text: 'Building on my frontend base with Node.js, Express, MongoDB and MySQL, with an AI Interview Platform planned as the next project.',
    current: true,
  },
  {
    title: 'Frontend projects with React',
    badge: 'Portfolio work',
    place: 'Personal projects',
    text: 'Built and deployed ElectroMart, an electronics store, and React Notes, a collection of React concepts, using React, Vite, Tailwind CSS and Vercel.',
  },
  {
    title: 'Frontend foundations',
    badge: 'Foundation',
    place: 'Independent',
    text: 'Learned HTML, CSS, JavaScript and Bootstrap, and used Git and GitHub to version every project.',
  },
];
