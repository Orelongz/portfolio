import type { PersonalInfo, SkillGroup, Job, EarlierJob, Education } from '@/types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Pelumi Longe',
  firstName: 'Pelumi',
  title: 'Full-Stack Engineer',
  tagline:
    'Building scalable web products with 8+ years of experience in Ruby on Rails, React, and product-led growth.',
  email: 'longe.pelumi.ore@gmail.com',
  github: 'https://github.com/Orelongz/',
  linkedin: 'https://www.linkedin.com/in/pelumi-longe',
};

export const ABOUT_TEXT = `I'm a full-stack engineer with 8+ years of experience building scalable web applications using Ruby on Rails, React.js, and PostgreSQL. In recent years I've focused on product-led growth — driving user retention, streamlining onboarding, and increasing revenue through experimentation and A/B testing.

I have hands-on experience designing database architecture, implementing event instrumentation, and maintaining production systems. I'm a quick thinker who adapts well to fast-paced, agile environments and enjoys collaborating closely with product, design, and cross-functional remote teams to ship things that matter.

I'm also keen to grow my DevOps and platform engineering skills. I've deployed small Rails applications using Heroku, Render, and DigitalOcean, and I'm actively looking for a role where I can deepen that experience — working more closely with infrastructure, deployment pipelines, and cloud platforms.

I'm seeking a product-focused engineering role at a data-driven company where I can lead growth experiments, improve onboarding and retention, and deliver measurable business impact.`;

export const STATS = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Years Remote', value: '7+' },
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Languages & Frameworks',
    skills: ['Ruby', 'Rails', 'JavaScript', 'React', 'TypeScript', 'Next.js', 'Redux', 'TanStack Query', 'Node.js'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git / GitHub', 'Docker', 'Heroku', 'Render', 'DigitalOcean', 'Sidekiq', 'CircleCI', 'Sentry', 'JIRA', 'Linear', 'Confluence', 'Notion', 'Slack', 'Mattermost'],
  },
  {
    category: 'Testing',
    skills: ['RSpec', 'Minitest', 'Jest', 'Enzyme', 'React Testing Library'],
  },
  {
    category: 'Analytics & Monitoring',
    skills: ['Datadog', 'Amplitude'],
  },
  {
    category: 'Methodologies',
    skills: ['A/B Testing', 'Agile / Scrum', 'Product-Led Growth', 'BDD', 'OOP'],
  },
];

export const EXPERIENCE: Job[] = [
  {
    company: 'Homebase',
    location: 'San Francisco, California (Remote via Andela)',
    role: 'Product Growth Engineer',
    period: 'Oct 2023 – Sept 2025',
    description: 'The all-in-one solution designed specifically with small businesses in mind.',
    bullets: [
      'Reduced SMS-related costs by $200K+ annually by leading the implementation to swap out SMS notifications for in-app notifications, leaving SMS for users who specifically opted in.',
      'Reduced friction between new user sign-ups and payroll by 50% fewer steps using AI tools, resulting in a 4% increase in target audience ready for payroll after 6 weeks.',
      'Collaborated with product design and PMs to design and analyze 10+ A/B tests to optimize user onboarding and conversion to paid plans, leveraging analytics to drive improvements.',
      'Developed multi-product checkout experience enabling users to purchase value-added products during self-service upgrade, increasing overall revenue.',
      'Implemented event instrumentation to track user behavior and identify areas for improvement, resulting in increased user engagement.',
      'Monitored feature performance using Datadog and Amplitude to ensure stability post-deployment.',
    ],
  },
  {
    company: 'TradeLink',
    location: 'Munich, Germany (Remote)',
    role: 'Full-Stack Engineer',
    period: 'Jun 2021 – Sept 2023',
    description: 'TradeLink builds the frictionless supply chain collaboration platform.',
    bullets: [
      'Built and maintained web features with React.js (frontend) and Ruby on Rails (backend), using PostgreSQL as the data layer.',
      'Collaborated in agile cross-functional teams, implementing new product features and resolving customer issues.',
      'Developed and maintained API endpoints to facilitate seamless data exchange with external partners.',
      'Collaborated with the team through code reviews, sprint planning, and continuous deployment workflows.',
    ],
  },
  {
    company: 'Conlance',
    location: 'Augsburg, Germany (Remote)',
    role: 'Software Engineer',
    period: 'Jan 2021 – Jun 2021',
    description: 'Conlance helps clients scale and maintain their web products.',
    bullets: [
      'Migrated existing codebase to the latest Ruby on Rails version.',
      'Incremented test coverage while fixing flaky tests, achieving over 95% coverage.',
      'Continuously integrated features and performed code reviews for client web applications.',
    ],
  },
];

export const EARLIER_EXPERIENCE: EarlierJob[] = [
  // Expanded cards — ordered most recent first
  {
    company: 'Fluxx',
    role: 'Software Engineer',
    period: 'Jan 2019 – Jan 2021',
    bullets: [
      'Collaborated on the development of grant-maker — a platform streamlining grant-making processes for nonprofits and philanthropies, used by over 200 organisations.',
      'Expanded existing internationalization features, enabling users to work in native languages with administrator configuration.',
      'Engineered full-stack features using Ruby on Rails, MySQL, Redis, jQuery, and Elasticsearch, enhancing platform capabilities.',
    ],
  },
  // Compact rows — ordered most recent first
  {
    company: 'Andela',
    role: 'Software Engineer',
    period: 'May 2018 – Jan 2021',
  },
  {
    company: 'Distrobird',
    role: 'Full-Stack Engineer (Freelance Contract)',
    period: 'Apr 2020 – Nov 2020',
  },
];

export const EDUCATION: Education[] = [
  {
    institution: 'The Federal University of Technology Akure (FUTA)',
    degree: 'Bachelor of Engineering',
    field: 'Civil Engineering',
    period: '2010 – 2015',
    grade: 'Second Class Upper (3.81 GPA)',
    achievement: 'Recipient of the MTN Foundation Science & Technology Scholarship (2013 – 2015)',
  },
];
