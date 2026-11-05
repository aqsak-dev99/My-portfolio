// Source of truth for all real content on the site.
// AutoHub, MyFitness and LeaseFlow are the featured flagship projects and
// match the CV. Add screenshots to /public/images and set `image` /
// `caseStudy.screenshots` for them when ready.

export const skills = [
  'Java / Spring Boot', 'Spring AI', 'Python / FastAPI / Django', 'React.js', 'Node.js',
  'PostgreSQL / pgvector', 'LangGraph Multi-Agent Systems', 'RAG', 'MCP', 'LLM Evaluation',
  'n8n Automation', 'RESTful APIs', 'CI/CD', 'UI/UX Implementation', 'Cloud Deployment'
];

export const categorizedSkills = {
  frontend: [
    { name: 'React.js', level: 'Advanced', icon: '⚛️' },
    { name: 'HTML', level: 'Advanced', icon: '🌐' },
    { name: 'CSS', level: 'Advanced', icon: '🎨' },
    { name: 'Responsive Design', level: 'Advanced', icon: '📱' },
  ],
  backend: [
    { name: 'Java / Spring Boot', level: 'Intermediate', icon: '☕' },
    { name: 'FastAPI', level: 'Intermediate', icon: '⚡' },
    { name: 'Django', level: 'Intermediate', icon: '🐍' },
    { name: 'Node.js', level: 'Advanced', icon: '🟢' },
    { name: 'PostgreSQL / pgvector', level: 'Intermediate', icon: '🐘' },
    { name: 'RESTful APIs / Swagger', level: 'Advanced', icon: '🔗' },
  ],
  aiAutomation: [
    { name: 'Spring AI Tool-Calling', level: 'Intermediate', icon: '🤖' },
    { name: 'LangGraph Multi-Agent', level: 'Intermediate', icon: '🕸️' },
    { name: 'RAG', level: 'Intermediate', icon: '📚' },
    { name: 'LLM Evaluation', level: 'Intermediate', icon: '🧪' },
  ],
  uiux: [],
  tools: [
    { name: 'CI/CD', level: 'Intermediate', icon: '✅' },
  ]
};

export const services = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Full-stack web applications, built responsive and scalable end-to-end.',
    icon: 'code',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description: 'AI-powered tools and intelligent automation that streamline workflows.',
    icon: 'robot',
  },
  {
    id: 'api-db',
    title: 'Backend & API Engineering',
    description: 'Secure backends, REST APIs, databases, and data-driven applications.',
    icon: 'database',
  },
];

export const detailedSkills = {
  backend: [
    'Spring Boot (MyFitness)',
    'FastAPI (AutoHub)',
    'Django (LeaseFlow)',
    'Node.js and Express (Diana’s Jewelry)',
    'Serverless API functions on Vercel (flowpath contact form, admin, assistant)',
    'REST API design, documented with Swagger/OpenAPI (MyFitness)',
    'Login with sessions, spam honeypot and rate limiting (flowpath)',
  ],
  aiAutomation: [
    'Spring AI with tool-calling agents (MyFitness)',
    'LangGraph supervisor-worker multi-agent system with a verifier agent (LeaseFlow)',
    'RAG with pgvector (MyFitness, LeaseFlow)',
    'MCP tools (LeaseFlow)',
    'LLM evaluation (MyFitness harness, LeaseFlow suite, flowpath’s 29/29 set)',
    'Red-team testing, plus cost and token tracking (LeaseFlow)',
    'Multilingual AI with human-in-the-loop handover (AutoHub)',
    'Grounded answers from live data (Diana’s assistant reads the product catalogue)',
    'Working with several LLM providers: OpenAI, Gemini and Groq, including switching providers, fallback models, retries and timeouts (Diana’s Jewelry)',
    'n8n workflow automation (AutoHub)',
  ],
  databases: [
    'PostgreSQL with pgvector, hosted on Neon (MyFitness, flowpath)',
    'MySQL, hosted on Aiven with SSL (Diana’s Jewelry)',
    'Redis (AutoHub)',
    'Migrating a database and restoring from a SQL dump (Diana’s Jewelry)',
  ],
  devOps: [
    'Git and GitHub, including resolving pull and push problems',
    'CI/CD (MyFitness), GitHub Actions (Email Generator)',
    'Docker (Email Generator)',
    'Render, Vercel, Railway, Aiven and Neon',
    'Environment variables and secrets management',
    'GitHub Codespaces (AutoHub)',
    'Debugging live deployments using server logs',
  ],
  design: [
    'Figma: wireframes, prototypes and design systems (ClassLink, design system prototype)',
    'User personas, task flows and usability heuristics (ClassLink)',
    'Landing pages and brand sites (Gulmohar, MicroVisuals, PixelPulse, flowpath)',
  ],
  dataAutomation: [
    'Pandas (CSV Cleaner)',
    'Python and Node automation scripts (File Organizer, Email Generator)',
  ],
};

export const projects = [
  // --- Featured: the three flagship full-stack + AI projects (match the CV) ---
  {
    id: 'autohub',
    title: 'AutoHub – AI Receptionist & Lead Automation Hub',
    description: 'An AI receptionist for a digital marketing agency that answers leads in English, Roman Urdu, Urdu and Arabic, logs how every lead was handled, and hands over to a human when unsure.',
    tech: ['FastAPI', 'PostgreSQL', 'Redis', 'n8n', 'React'],
    image: '/images/Screenshot 2026-11-05 at 12.18.22 PM.png',
    github: null,
    live: 'https://autohub-0igb.onrender.com',
    category: ['AI', 'Full-Stack'],
    featured: true,
    meta: {
      role: 'Full-Stack & AI Developer',
      type: 'AI Automation Platform'
    },
    caseStudy: {
      overview: 'AutoHub is an automation hub built for flowpath, a digital marketing agency. Its core automation is an AI receptionist that replies to incoming leads in the language they write in, records how each conversation was handled on a dashboard, and escalates to a human team member whenever the AI is not confident.',
      problem: 'Agency leads arrive in several languages, including Roman Urdu, Urdu and Arabic, and need a fast first reply. Fully automated replies risk giving wrong answers, while handling every message manually is slow.',
      solution: 'I built a FastAPI backend with PostgreSQL and Redis, orchestrated the automation workflows in n8n, and added a React dashboard so the agency can see exactly how each lead was handled. A human-in-the-loop step means the AI asks for help instead of guessing.',
      keyFeatures: {
        ai: [
          'Multilingual lead replies: English, Roman Urdu, Urdu and Arabic',
          'Human-in-the-loop escalation when the AI is unsure',
        ],
        automation: [
          'Automation workflows orchestrated in n8n',
          'FastAPI backend with PostgreSQL and Redis',
        ],
        dashboard: [
          'React dashboard showing how every lead was handled',
          'Full visibility of automated conversations for the agency team',
        ],
      },
      techStack: ['FastAPI', 'Python', 'PostgreSQL', 'Redis', 'n8n', 'React', 'GitHub Codespaces'],
      screenshots: [
        '/images/Screenshot 2026-11-05 at 12.18.02 PM.png',
        '/images/Screenshot 2026-11-05 at 12.18.11 PM.png',
        '/images/Screenshot 2026-11-05 at 12.18.22 PM.png',
        '/images/Screenshot 2026-11-05 at 12.18.34 PM.png',
        '/images/Screenshot 2026-11-05 at 12.18.39 PM.png',
        '/images/Screenshot 2026-11-05 at 12.19.12 PM.png'
      ]
    }
  },
  {
    id: 'myfitness',
    title: 'MyFitness – Gym Management System with Spring AI Agent',
    description: 'A full-stack gym management system with a tool-calling AI agent built on Spring AI, grounded with RAG over PostgreSQL + pgvector, and deployed live with demo accounts.',
    tech: ['Java', 'Spring Boot', 'Spring AI', 'PostgreSQL', 'pgvector', 'React'],
    image: '/images/myfitness2.png',
    github: null,
    live: 'https://myfitness-frontend.onrender.com',
    category: ['AI', 'Full-Stack'],
    featured: true,
    meta: {
      role: 'Full-Stack & AI Developer',
      type: 'Full-Stack Web App + AI Agent'
    },
    caseStudy: {
      overview: 'MyFitness started as a Java OOP gym management system and grew into a full-stack Spring Boot application with an AI agent. The agent uses Spring AI tool-calling to act on gym data, and Retrieval-Augmented Generation (RAG) keeps its answers grounded in that data.',
      problem: 'A gym system holds useful information about members and the gym, but getting answers out of it means clicking through screens. An AI assistant can help, but only if its answers are grounded in real data and its behaviour can be tested.',
      solution: 'I rebuilt the system on Spring Boot, added a Spring AI agent with tool-calling, and implemented RAG with PostgreSQL and the pgvector extension. An evaluation harness tests the agent, a CI/CD pipeline checks every change, and the REST API is documented with Swagger/OpenAPI.',
      keyFeatures: {
        ai: [
          'Spring AI agent with tool-calling',
          'RAG over PostgreSQL with pgvector',
          'Evaluation harness for agent behaviour',
        ],
        backend: [
          'Spring Boot REST API documented with Swagger/OpenAPI',
          'CI/CD pipeline',
          'Neon Postgres database',
        ],
        deployment: [
          'Frontend and API deployed separately on Render',
          'Demo admin and member accounts for reviewers',
        ],
      },
      techStack: ['Java', 'Spring Boot', 'Spring AI', 'PostgreSQL', 'pgvector', 'Neon', 'React', 'Swagger/OpenAPI', 'CI/CD', 'Render'],
      screenshots: [
        '/images/myfitness1.png',
        '/images/myfitness2.png',
        '/images/myfitness3.png',
        '/images/myfitness4.png',
        '/images/myfitness5.png'
      ]
    }
  },
  {
    id: 'leaseflow',
    title: 'LeaseFlow – Multi-Agent Rental Management System',
    description: 'A LangGraph supervisor-worker system where specialist agents handle leases, maintenance and payments, with a verifier agent, RAG, MCP tools, cost tracking and red-team testing.',
    tech: ['Python', 'Django', 'LangGraph', 'RAG', 'MCP'],
    image: '/images/lf4.png',
    github: 'https://github.com/aqsak-dev99/leaseflow',
    live: null,
    category: ['AI', 'Full-Stack'],
    featured: true,
    meta: {
      role: 'AI Developer',
      type: 'Multi-Agent LLM System'
    },
    caseStudy: {
      overview: 'LeaseFlow is a rental management system built around a multi-agent architecture. A supervisor agent reads each request and routes it to a specialist agent for leases, maintenance or payments, and a verifier agent checks the result before it is returned.',
      problem: 'Rental management covers very different tasks: lease questions, maintenance requests and payments. A single general-purpose LLM prompt handles all of these poorly and is hard to test, control or trust.',
      solution: 'I used a LangGraph supervisor-worker design so each agent has one job, grounded the agents with RAG, connected external tools through the Model Context Protocol (MCP), and added cost and token tracking for every run. An evaluation suite and red-team tests check how the system behaves with normal, adversarial and out-of-scope inputs.',
      keyFeatures: {
        agents: [
          'Supervisor agent routing to lease, maintenance and payment agents',
          'Verifier agent that checks outputs before responding',
        ],
        grounding: [
          'Retrieval-Augmented Generation (RAG)',
          'Tools integrated through the Model Context Protocol (MCP)',
        ],
        quality: [
          'LLM evaluation suite',
          'Red-team testing against adversarial inputs',
          'Cost and token tracking per agent run',
        ],
      },
      techStack: ['Python', 'Django', 'LangGraph', 'RAG', 'MCP', 'LLM Evaluation'],
      screenshots: [
        '/images/lf3.png',
        '/images/lf4.png',
        '/images/lf5.jpg',
        '/images/lf7.jpg',
        '/images/lf9.jpg'
      ]
    }
  },

  // --- Web design & frontend work (concept sites; business names and content are placeholders) ---
  {
    id: 'flowpath',
    title: 'flowpath – Digital Marketing Studio Website',
    description: 'A multi-page agency website with a backend and a grounded AI assistant that answers visitor questions and captures leads.',
    tech: ['React', 'Vite', 'Neon Postgres', 'Groq', 'Vercel'],
    image: '/images/flowpath-hero.jpg',
    github: null,
    live: 'https://flowpath-sigma.vercel.app',
    category: ['UI/UX', 'Full-Stack', 'AI'],
    featured: false,
    caseStudy: {
      overview: 'flowpath is a concept website for a digital marketing studio. It started as a design and frontend project and grew into a full-stack site with a backend, an admin page and an AI assistant. It is also the agency that AutoHub, my AI receptionist project, is built for.',
      keyFeatures: {
        design: [
          'Multi-page agency site with a consistent visual identity',
          'Responsive layout for desktop and mobile',
          'Animated channel diagram, data-style service cards and a case study with a revenue chart',
          'Floating "Ask flowpath" assistant available on every page',
        ],
        backend: [
          'Contact form and admin page backed by Neon Postgres',
        ],
        ai: [
          'AI assistant with grounded answers and polite refusals for off-topic questions',
          'Lead capture and rate limits',
          'Evaluation set of 29 test cases, all passing against the live model',
        ],
      },
      techStack: ['React', 'Vite', 'Neon Postgres', 'Groq (gpt-oss-120b)', 'Vercel'],
      screenshots: [
        '/images/flowpath-hero.jpg',
        '/images/flowpath-channels.jpg',
        '/images/flowpath-services.jpg',
        '/images/flowpath-case-study.jpg',
        '/images/flowpath-work.jpg',
        '/images/flowpath-remembered.jpg',
        '/images/flowpath-contact.jpg'
      ]
    }
  },
  {
    id: 'gulmohar',
    title: 'Gulmohar – Café Website',
    description: 'A warm, mobile-first website for a courtyard café in Lahore, with a menu, live opening hours and table reservations.',
    tech: ['Responsive Design', 'Accessibility', 'SEO', 'Vercel'],
    image: '/images/gulmohar-hero.jpg',
    github: null,
    live: 'https://gulmohar-site.vercel.app',
    category: ['UI/UX'],
    featured: false,
    caseStudy: {
      overview: 'Gulmohar is a concept website for a courtyard café in Gulberg, Lahore. The design focuses on a calm, nature-inspired feel, with clear calls to action so visitors can check the menu, see whether the café is open and book a table in a few taps.',
      keyFeatures: {
        visitors: [
          'Menu with prices in rupees and featured drinks and bakes',
          'Opening status shown live on the page',
          'Hours, location, map link and parking notes',
          'FAQ covering reservations, Wi-Fi, payment and delivery',
        ],
        bookings: [
          'Table reservation form with date, time, guest count and seating preference',
          'Private events section with an illustrated courtyard layout and WhatsApp enquiries',
        ],
        quality: [
          'Light and dark mode toggle',
          'Hand-drawn flame tree illustration and a weekend promotion banner',
          'Mobile-first layout',
          'Skip-to-content link for accessibility',
          'SEO and social-sharing meta tags',
        ],
      },
      techStack: ['Responsive Design', 'Accessibility', 'SEO', 'Vercel'],
      screenshots: [
        '/images/gulmohar-hero.jpg',
        '/images/gulmohar-events.jpg',
        '/images/gulmohar-hours.jpg'
      ]
    }
  },
  {
    id: 'microvisuals',
    title: 'MicroVisuals – AI Image Tool Landing Page',
    description: 'A landing page for an AI tool that turns written descriptions into images.',
    tech: ['Landing Page Design', 'Responsive Design', 'Vercel'],
    image: '/images/microvisuals-hero.jpg',
    github: null,
    live: 'https://microvisuals-livid.vercel.app',
    category: ['UI/UX'],
    featured: false,
    caseStudy: {
      overview: 'MicroVisuals is a concept landing page for an AI image tool, built around the idea of "describe it, see it". The goal was to explain an AI product visually and make visitors want to try it.',
      keyFeatures: [
        'Full-screen hero with large editorial typography over a background film',
        'Interactive style picker (Natural, Noir and more) that restyles both the preview image and the background film',
        'Gallery and Styles sections to show what the tool can create',
        '"Notes from the studio" blog section with dated articles',
        'Floating pill navigation with a "Get in touch" call to action'
      ],
      techStack: ['Landing Page Design', 'Responsive Design', 'Vercel'],
      screenshots: [
        '/images/microvisuals-hero.jpg',
        '/images/microvisuals-styles.jpg',
        '/images/microvisuals-blog.jpg'
      ]
    }
  },

  // --- Earlier projects ---
  {
    id: '1',
    title: 'AI Todo – Dual AI Mode Task Manager',
    description: 'A production-ready productivity app with AI-powered task suggestions, drag-and-drop organization, and gamification to drive consistent task completion.',
    tech: ['React', 'Vite', 'JavaScript', 'OpenAI API', 'LocalStorage'],
    image: '/images/ai-todo.png',
    github: 'https://github.com/aqsak-dev99/Ai-to-do-app',
    live: 'https://aqsak-dev99.github.io/Ai-to-do-app/',
    category: ['AI'],
    featured: true,
    caseStudy: {
      overview: 'AI Todo is a modern task management application that combines intelligent AI assistance with intuitive UI/UX and gamification elements. Built with React + Vite, it features two operational modes: Demo Mode (no API key required with rule-based suggestions) and Live AI Mode (powered by OpenAI for contextual task recommendations).',
      problem: 'Traditional task management apps often fail to drive consistent engagement due to three key issues: 1) They require manual task creation and prioritization, creating friction for users; 2) They lack personalization, treating all tasks the same regardless of context; and 3) They don\'t leverage behavioral design to keep users motivated over time.',
      solution: 'I built a task manager that addresses these pain points by: 1) Integrating AI to assist with task ideation, prioritization, and breakdown; 2) Designing a frictionless dual-mode system that lets users try the app immediately (Demo Mode) before committing to an API key; and 3) Adding gamification (streaks, XP, celebrations) to reinforce positive task completion habits.',
      keyFeatures: {
        ui: [
          'Glassmorphic dark/light theme with smooth transitions',
          'Responsive layout optimized for desktop and mobile',
          'Visual task grouping by completion status',
          'Micro-interactions and confetti celebrations'
        ],
        functional: [
          'Drag-and-drop task reordering',
          'Task creation, editing, and deletion',
          'LocalStorage persistence across sessions',
          'Streak and XP gamification system'
        ],
        ai: [
          'Dual AI Mode architecture (Demo + Live)',
          'AI-powered task suggestions and breakdowns',
          'Rule-based fallback for Demo Mode (no API key needed)',
          'User-provided OpenAI API key integration for Live Mode'
        ]
      },
      howAiWorks: {
        promptFlow: 'When a user requests AI suggestions, the app sends their current task list and context to the AI (either rule-based engine or OpenAI). The AI responds with prioritized task ideas, breakdowns of large tasks, or time-blocking suggestions.',
        apiIntegration: 'For Live AI Mode, users input their OpenAI API key which is stored locally in their browser (never transmitted to any third-party server except OpenAI itself). The app uses the OpenAI Chat Completions endpoint to generate contextual task recommendations.',
        demoMode: 'To lower the barrier to entry, Demo Mode provides rule-based task suggestions without requiring an API key. This lets users experience the core value proposition immediately before deciding to use their own API key for more powerful AI capabilities.'
      },
      uxUiDecisions: [
        { decision: 'Glassmorphic design language', reason: 'Chosen for its modern, premium feel while maintaining excellent readability. The semi-transparent panels create visual hierarchy without overwhelming the user.' },
        { decision: 'Dual-mode toggle with clear onboarding', reason: 'Critical for reducing adoption friction. Users can start using the app in seconds with Demo Mode, then upgrade to Live AI when they see value.' },
        { decision: 'Gamification elements (streaks, XP, confetti)', reason: 'Leverages behavioral design principles to increase user retention. Small rewards (confetti) for task completion create positive reinforcement loops.' },
        { decision: 'Drag-and-drop interaction', reason: 'Provides an intuitive, tactile way for users to prioritize tasks, which is more natural than manual sorting buttons.' }
      ],
      challengesLearnings: {
        challenges: [
          'Implementing smooth, performant drag-and-drop that works reliably across browsers and devices',
          'Managing conditional state for two different AI modes without code duplication',
          'Designing a fallback system that provides genuine value in Demo Mode',
          'Balancing visual richness (animations, effects) with performance'
        ],
        learnings: [
          'Advanced React state management patterns for complex interactive UIs',
          'How to design for incremental adoption (free tier → premium experience)',
          'API integration best practices (key security, error handling, fallbacks)',
          'The importance of performance optimization even in "small" apps'
        ],
        futureImprovements: [
          'Backend + authentication for cross-device sync',
          'Cloud persistence instead of LocalStorage only',
          'Collaborative task lists for teams',
          'Mobile app version (React Native)',
          'More sophisticated AI features (task dependencies, time estimation)'
        ]
      },
      techStack: ['React', 'Vite', 'JavaScript', 'OpenAI API', 'LocalStorage'],
      video: '/images/to-doapp.mov'
    }
  },
  {
    id: '2',
    title: 'Diana’s Jewelry – Full-Stack E-Commerce',
    description: 'Professional full-stack jewelry e-commerce platform with complete shopping experience.',
    tech: ['Node.js', 'Express', 'MySQL', 'jQuery', 'HTML', 'CSS'],
    image: '/images/dianas-jewelry.png',
    github: 'https://github.com/aqsak-dev99/dianas-jewelry',
    live: 'https://dianas-jewelry.onrender.com',
    category: ['Full-Stack'],
    featured: true,
    meta: {
      role: 'Full-Stack Developer / UI Designer',
      stack: ['Node.js', 'Express', 'MySQL', 'EJS', 'CSS', 'JavaScript'],
      type: 'E-commerce Web Application'
    },
    caseStudy: {
      problem: 'Small jewelry businesses often rely heavily on Instagram or WhatsApp for orders, which creates a fragmented buying experience with no proper storefront, cart, or order management. Diana’s Jewelry needed a more professional online presence where customers could browse products, place orders more easily, and interact with the brand beyond direct messages.',
      whatIBuilt: 'I built a full-stack e-commerce platform using Node.js, Express, and MySQL to create a scalable product catalogue and backend-driven shopping experience. A key UX decision was simplifying the checkout experience into a shorter flow to reduce friction for mobile users. Instead of a long multi-step checkout, I focused on a more direct cart-to-details experience. To improve customer interaction, I integrated AI chat assistant to help users explore products and ask questions, and a custom jewelry designer page where customers can explore and request personalized designs. These features were designed to create a more interactive and modern shopping experience for a smaller business.',
      whatILearned: 'This project helped me better understand full-stack architecture and deployment challenges, especially around environment variables, database connections, production deployment issues, and backend error handling. I also learned that UX improvements are not always visual—small flow decisions such as simplifying checkout steps can significantly improve usability. Future improvements include persistent cart sessions, stronger admin product management, and improved order tracking flow.',
      keyFeatures: [
        'Dynamic product database with categories',
        'Shopping cart with quantity management',
        'AI chat assistant for product exploration',
        'Custom jewelry designer page',
        'Fully responsive mobile-first design'
      ],
      techStack: ['Node.js', 'Express', 'MySQL', 'jQuery', 'HTML', 'CSS'],
      screenshots: [
        '/images/products.png',
        '/images/cart.png',
        '/images/review.png',
        '/images/desginss.png'
      ]
    }
  },
  {
    id: '3',
    title: 'PixelPulse Media – Digital Agency Website',
    description: 'Glassmorphic agency landing focused on storytelling, animations, and testimonials.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/pixelpulse-media.png',
    github: 'https://github.com/aqsak-dev99/pixel_media',
    live: 'https://aqsak-dev99.github.io/pixel_media/',
    category: ['UI/UX'],
    featured: true,
    caseStudy: {
      overview: 'A visually stunning digital agency website with modern glassmorphism design.',
      problem: 'The agency needed a website that stands out and showcases their creative work.',
      solution: 'Created a beautiful, animated landing page with pure HTML, CSS, and JavaScript.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      keyFeatures: [
        'Smooth scroll navigation',
        'Animated hero section with icons',
        'Auto-sliding testimonials',
        'Portfolio showcase with modal popups',
        'Sticky navbar with motion effects'
      ],
      challenges: [
        'Implementing smooth CSS animations',
        'Creating responsive layouts that work on all devices',
        'Optimizing performance with heavy animations'
      ],
      learnings: 'Mastered CSS animations, glassmorphism design, and vanilla JavaScript for interactivity.',
      screenshots: []
    }
  },
  {
    id: '4',
    title: 'Wanderlust Journeys – Travel Landing Page',
    description: 'High-converting travel landing with destinations and itineraries.',
    tech: ['HTML', 'CSS', 'Bootstrap 5', 'JavaScript'],
    image: '/images/wanderlust-journeys.png',
    github: 'https://github.com/aqsak-dev99/aqsa-web-design',
    live: 'https://aqsak-dev99.github.io/aqsa-web-design/',
    category: ['UI/UX'],
    featured: false,
    caseStudy: {
      overview: 'A beautiful travel landing page showcasing destinations and inspiring wanderlust.',
      problem: 'The client needed a high-converting landing page to showcase travel packages.',
      solution: 'Built a responsive Bootstrap-based landing page with carousel galleries.',
      techStack: ['HTML', 'CSS', 'Bootstrap 5', 'JavaScript'],
      keyFeatures: [
        'Fully responsive layout',
        'Carousel destination galleries',
        'Smooth scrolling navigation',
        'Destination cards with hover effects',
        'SEO-optimized structure'
      ],
      challenges: [
        'Creating smooth carousel transitions',
        'Ensuring Bootstrap responsiveness across all breakpoints'
      ],
      learnings: 'Gained expertise in Bootstrap 5 and responsive design patterns.',
      screenshots: []
    }
  },
  {
    id: '11',
    title: 'ClassLink – School Communication App',
    description: 'A mobile app concept designed to streamline parent-teacher communication in primary schools.',
    tech: ['Figma', 'UI/UX Design', 'Mobile Design', 'Prototyping'],
    image: '/images/mainscreen.png',
    github: null,
    live: null,
    figma: 'https://www.figma.com/proto/Wfm9AIz9A3JNOEPVgm0iyH/Class-link-App?node-id=92-331&p=f&t=cmU8IzrbC654UNf1-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=92%3A331',
    category: ['UI/UX'],
    featured: true,
    caseStudy: {
      isDesignOnly: true,
      hero: {
        title: 'ClassLink – School Communication App',
        subtitle: 'A mobile app concept designed to streamline parent-teacher communication in primary schools.',
        metadata: [
          { label: 'Role', value: 'UI/UX Designer' },
          { label: 'Timeline', value: '2 Weeks' },
          { label: 'Tools', value: 'Figma, Prototyping' },
          { label: 'Platform', value: 'Mobile App' }
        ]
      },
      problemStatement: 'School communication is often fragmented across WhatsApp groups, paper notices, emails, and verbal communication through children, causing missed updates and communication anxiety for parents.',
      goalSolution: 'Design a centralized school communication app with role-based access for Parents and Teachers to manage messages, notices, homework, and school updates efficiently.',
      userPersona: {
        name: 'Aisha Khan',
        age: 34,
        role: 'Working mother of two children',
        painPoints: [
          'Missed school notices',
          'Too many communication channels',
          'Difficulty tracking messages'
        ],
        goals: [
          'Quick access to updates',
          'Organized communication',
          'Reduced anxiety'
        ]
      },
      researchInsights: [
        'Parents prefer centralized updates',
        'Communication overload causes missed information',
        'Multi-child households need fast switching',
        'Teachers need efficient messaging workflows'
      ],
      keyFeatures: [
        'Parent & Teacher role selection',
        'Secure login',
        'Parent dashboard',
        'Notice board',
        'Multi-child switching',
        'Teacher dashboard',
        'Compose message',
        'Chat threads',
        'Notifications',
        'Seen receipts'
      ],
      taskFlows: {
        parentFlow: ['Splash', 'Role Selection', 'Parent Login', 'Child Selection', 'Dashboard', 'Inbox', 'Compose Message', 'Message Sent', 'Chat Thread'],
        teacherFlow: ['Teacher Login', 'Dashboard', 'Student List', 'Compose Message', 'Message Sent', 'Chat Thread']
      },
      uiShowcase: ['Onboarding/Login', 'Parent Dashboard', 'Inbox/Chat', 'Teacher Dashboard', 'Compose Message', 'Notifications'],
      designDecisions: [
        'High contrast purple headers',
        'Large touch targets',
        'Bottom navigation',
        'Child-switch toggle',
        'Seen receipts',
        'Card-based dashboard',
        'Visibility of system status',
        'Consistency & standards',
        'Recognition over recall',
        'Accessibility'
      ],
      reflection: 'This project strengthened my understanding of designing role-based systems, mobile communication flows, dashboard hierarchy, and designing for busy parents with limited time.',
      screenshots: [
        '/images/mainscreen.png',
        '/images/dashboard.png',
        '/images/sssss.png'
      ]
    }
  },
  {
    id: '7',
    title: 'Product Survey Form',
    description: 'Responsive, interactive survey form with validation, counters, and glassmorphism.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/product-survey-form.png',
    github: 'https://github.com/aqsak-dev99/ProductSurvey',
    live: 'https://aqsak-dev99.github.io/ProductSurvey/',
    category: ['UI/UX'],
    featured: false,
    caseStudy: {
      overview: 'A beautiful, accessible survey form with modern design.',
      problem: 'Need for a professional, accessible survey form with great UX.',
      solution: 'Built a responsive form with real-time validation and glassmorphic design.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      keyFeatures: [
        'Real-time validation and counters',
        'Keyboard accessibility',
        'Focus and hover feedback',
        'Glassmorphism design',
        'Mobile-friendly layout'
      ],
      challenges: [
        'Implementing robust form validation',
        'Ensuring full accessibility',
        'Creating beautiful glassmorphism effects'
      ],
      learnings: 'Learned form validation, accessibility best practices, and modern CSS techniques.',
      screenshots: []
    }
  },
  {
    id: '8',
    title: 'CSV Cleaner Automation',
    description: 'Automatically cleans and standardizes CSV files using Python.',
    tech: ['Python', 'Pandas'],
    image: '/images/3.jpg',
    github: 'https://github.com/aqsak-dev99/Csv-cleaner',
    live: 'https://github.com/aqsak-dev99/Csv-cleaner',
    category: [],
    featured: false,
    caseStudy: {
      overview: 'A Python script that automates CSV file cleaning and standardization.',
      problem: 'Manually cleaning CSV files is time-consuming and error-prone.',
      solution: 'Created a Python script using Pandas for batch CSV processing.',
      techStack: ['Python', 'Pandas'],
      keyFeatures: [
        'Cleans and standardizes CSV files',
        'Batch processing of multiple files',
        'Removes duplicates and trims whitespace',
        'Simple, dependency-free scripts',
        'Local file output'
      ],
      challenges: [
        'Handling various CSV formats',
        'Ensuring data integrity during cleaning',
        'Making the script flexible for different use cases'
      ],
      learnings: 'Deepened Python skills, learned Pandas for data manipulation, and automation patterns.',
      screenshots: []
    }
  },
  {
    id: '9',
    title: 'File Organizer Automation Script',
    description: 'Automatically organizes files into categorized folders.',
    tech: ['Node.js', 'OS', 'File Management'],
    image: '/images/2.jpg',
    github: 'https://github.com/aqsak-dev99/file_organizer',
    live: 'https://github.com/aqsak-dev99/file_organizer',
    category: [],
    featured: false,
    caseStudy: {
      overview: 'A Node.js script that automatically organizes files into folders by type.',
      problem: 'Disorganized download folders make it hard to find files.',
      solution: 'Created a script that categorizes and moves files automatically.',
      techStack: ['Node.js', 'File System API'],
      keyFeatures: [
        'Categorizes files by type',
        'Batch processing of entire directories',
        'Customizable file type mapping',
        'Safe file operations with error handling'
      ],
      challenges: [
        'Handling file system operations safely',
        'Making the script configurable',
        'Dealing with various file types'
      ],
      learnings: 'Learned Node.js file system operations and automation best practices.',
      screenshots: []
    }
  },
  {
    id: '10',
    title: 'Email Generator Automation Script',
    description: 'Generates professional, template-driven emails automatically.',
    tech: ['Node.js', 'Docker', 'GitHub Actions'],
    image: '/images/1.jpg',
    github: 'https://github.com/aqsak-dev99/Email_generator',
    live: 'https://github.com/aqsak-dev99/Email_generator',
    category: [],
    featured: false,
    caseStudy: {
      overview: 'A tool that generates professional emails from templates.',
      problem: 'Writing similar emails repeatedly is tedious.',
      solution: 'Built an email generator with multiple templates and auto-fill capabilities.',
      techStack: ['Node.js', 'Docker', 'GitHub Actions'],
      keyFeatures: [
        'Professional, friendly, and follow-up templates',
        'Auto-fills date, sender, recipient, and purpose',
        'Saves ready-to-send emails in output folder',
        'Easy to customize templates'
      ],
      challenges: [
        'Creating flexible template system',
        'Making the tool easy to use and extend'
      ],
      learnings: 'Learned template engines, CLI tool development, and Docker.',
      screenshots: []
    }
  },
];

export const site = {
  name: 'Aqsa Khan',
  title: 'Full-Stack & AI Development',
  bio: `Hi, I'm Aqsa Khan, a passionate full-stack developer and automation enthusiast dedicated to creating elegant, high-performing digital solutions. I blend modern web development with intelligent automation to help businesses and individuals save time, streamline workflows, and achieve their goals.

With hands-on experience in Java (Spring Boot, Spring AI), Python (FastAPI, Django), React, PostgreSQL and multi-agent AI systems built with LangGraph, RAG and MCP, I craft websites, apps, and tools that are not only functional but also visually engaging. My approach is grounded in clean code, responsive design, and seamless user experiences, ensuring every project I deliver is professional, efficient, and impactful.

When I'm not coding, I love exploring innovative tech solutions, experimenting with AI-powered tools, and continuously learning to stay ahead in the ever-evolving digital world.

Let's build something amazing together!`,
  skills,
  categorizedSkills,
  services,
  projects,
  certificates: [
    {
      id: 'c7',
      title: 'Responsive Web Design Certification',
      issuer: 'freeCodeCamp',
      date: '2025-08-22',
      hours: '~300 hours',
      image: '/images/packages.jpg',
      verifyLink: 'https://freecodecamp.org/certification/aqsa_khan/responsive-web-design'
    },
    {
      id: 'c8',
      title: 'Scientific Computing with Python Certification',
      issuer: 'freeCodeCamp',
      date: '2025-10-24',
      hours: '~300 hours',
      image: '/images/packages.jpg',
      verifyLink: 'https://freecodecamp.org/certification/aqsakhan_/scientific-computing-with-python-v7'
    },
  ],
  social: {
    github: 'https://github.com/aqsak-dev99',
    linkedin: 'https://www.linkedin.com/in/aqsa-khan-dev/',
    email: 'aqsa.dev99@gmail.com',
  },
  detailedSkills,
};

export const featuredProjects = projects.filter(p => p.featured);
export const projectCategories = ['All', 'Full-Stack', 'AI', 'UI/UX'];

// Flattened skill list (name + level + icon) for the Skills Orbit — sourced
// directly from categorizedSkills above, nothing added or invented.
export const allSkills = Object.values(categorizedSkills).flat();