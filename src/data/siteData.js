// Source of truth for all real content on the site.
// Transcribed directly from the provided siteData.js / project.js.
// Only additions: `category` (for the Projects filter UI) and `featured`
// (which projects appear in the orbital showcase on Home). No project
// content, copy, links, or fields have been invented or removed.

export const skills = [
  'React.js', 'Node.js', 'JavaScript/ES6+', 'MySQL/MongoDB', 'RESTful API Development',
  'Python Automation', 'AI Integration', 'Responsive Design', 'Full-Stack Development',
  'UI/UX Implementation', 'Git/Version Control', 'Cloud Deployment'
];

export const categorizedSkills = {
  frontend: [
    { name: 'React.js', level: 'Advanced', icon: '⚛️' },
    { name: 'JavaScript/ES6+', level: 'Advanced', icon: '📜' },
    { name: 'HTML5', level: 'Advanced', icon: '🌐' },
    { name: 'CSS3 / Tailwind', level: 'Advanced', icon: '🎨' },
    { name: 'Responsive Design', level: 'Advanced', icon: '📱' },
  ],
  backend: [
    { name: 'Node.js', level: 'Advanced', icon: '🟢' },
    { name: 'Express.js', level: 'Advanced', icon: '🚀' },
    { name: 'MySQL', level: 'Intermediate', icon: '🗄️' },
    { name: 'MongoDB', level: 'Intermediate', icon: '🍃' },
    { name: 'RESTful APIs', level: 'Advanced', icon: '🔗' },
  ],
  aiAutomation: [
    { name: 'Python Automation', level: 'Advanced', icon: '🐍' },
    { name: 'AI Integration', level: 'Intermediate', icon: '🤖' },
    { name: 'Scripting', level: 'Advanced', icon: '⚡' },
  ],
  uiux: [
    { name: 'Figma', level: 'Intermediate', icon: '🎯' },
    { name: 'UI/UX Implementation', level: 'Advanced', icon: '✨' },
    { name: 'Design Systems', level: 'Intermediate', icon: '📐' },
  ],
  tools: [
    { name: 'Git / GitHub', level: 'Advanced', icon: '🔧' },
    { name: 'Docker', level: 'Intermediate', icon: '🐳' },
    { name: 'Cloud Deployment', level: 'Intermediate', icon: '☁️' },
    { name: 'Vercel / Railway', level: 'Advanced', icon: '🚂' },
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

export const projects = [
  {
    id: '1',
    title: 'AI Todo – Dual AI Mode Task Manager',
    description: 'A production-ready productivity app with AI-powered task suggestions, drag-and-drop organization, and gamification to drive consistent task completion.',
    tech: ['React', 'Vite', 'JavaScript', 'OpenAI API', 'LocalStorage'],
    image: '/images/ai-todo.png',
    github: 'https://github.com/aqsak-dev99/Ai-to-do-app',
    live: 'https://aqsak-dev99.github.io/Ai-to-do-app/',
    category: ['Full-Stack', 'AI'],
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
    live: 'https://dianas-jewelry-production.up.railway.app/index.html',
    category: ['Full-Stack', 'AI'],
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
    category: ['Full-Stack', 'UI/UX'],
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
    category: ['Full-Stack'],
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
    id: '5',
    title: 'AI Designing & Automation Suite',
    description: 'AI-powered design tools and automation workflows for creative professionals.',
    tech: ['React', 'Node.js', 'Python', 'AI/ML', 'Automation'],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=AI%20design%20studio%20interface%20dashboard&image_size=landscape_16_9',
    github: 'https://github.com/aqsak-dev99',
    live: null,
    category: ['AI', 'Full-Stack'],
    featured: true,
    caseStudy: {
      overview: 'A comprehensive suite of AI-powered design tools and automation scripts.',
      problem: 'Creative professionals spend too much time on repetitive tasks.',
      solution: 'Built AI design tools and automation workflows to streamline creative processes.',
      techStack: ['React', 'Node.js', 'Python', 'AI/ML'],
      keyFeatures: [
        'AI-powered design suggestions',
        'Automated workflow management',
        'AI Todo app integration',
        'Batch processing capabilities',
        'Intuitive, modern interfaces'
      ],
      challenges: [
        'Integrating AI models with web applications',
        'Creating reliable automation workflows',
        'Ensuring smooth user experience with AI features'
      ],
      learnings: 'Deepened knowledge of AI integration, automation patterns, and modern UI/UX.',
      screenshots: [
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=AI%20design%20tool%20interface&image_size=landscape_16_9',
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=automation%20workflow%20dashboard%20UI&image_size=landscape_16_9',
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=AI%20todo%20app%20interface&image_size=landscape_16_9'
      ]
    }
  },
  {
    id: '6',
    title: 'UI/UX Design System – Figma Prototype',
    description: 'Comprehensive UI/UX design system and prototype built in Figma.',
    tech: ['Figma', 'UI/UX Design', 'Design Systems', 'Prototyping'],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Figma%20design%20system%20UI%20components&image_size=landscape_16_9',
    github: null,
    live: 'https://www.figma.com/proto/Wfm9AIz9A3JNOEPVgm0iyH/Untitled?node-id=92-331&p=f&t=QMRlVCzUel8QQXyK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=92%3A331',
    figma: 'https://www.figma.com/proto/Wfm9AIz9A3JNOEPVgm0iyH/Untitled?node-id=92-331&p=f&t=QMRlVCzUel8QQXyK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=92%3A331',
    category: ['UI/UX'],
    featured: true,
    caseStudy: {
      overview: 'A complete UI/UX design system with reusable components and interactive prototypes.',
      problem: 'Need for consistent, scalable design components across multiple projects.',
      solution: 'Created a comprehensive Figma design system with wireframes, high-fidelity designs, and user flows.',
      techStack: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
      keyFeatures: [
        'Reusable component library',
        'Wireframes and low-fidelity designs',
        'High-fidelity interactive prototypes',
        'Complete user flow documentation',
        'Design tokens and style guide'
      ],
      challenges: [
        'Creating scalable, reusable components',
        'Ensuring consistency across all design elements',
        'Documenting the design system thoroughly'
      ],
      learnings: 'Mastered Figma, design systems, and the complete UI/UX process from research to prototyping.',
      screenshots: [
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Figma%20wireframe%20design%20mobile%20app&image_size=landscape_16_9',
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=high%20fidelity%20UI%20design%20dashboard&image_size=landscape_16_9',
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=user%20flow%20diagram%20UX%20design&image_size=landscape_16_9'
      ]
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
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/images/product-survey-form.png',
    github: 'https://github.com/aqsak-dev99/ProductSurvey',
    live: 'https://aqsak-dev99.github.io/ProductSurvey/',
    category: ['Full-Stack', 'UI/UX'],
    featured: false,
    caseStudy: {
      overview: 'A beautiful, accessible survey form with modern design.',
      problem: 'Need for a professional, accessible survey form with great UX.',
      solution: 'Built a responsive form with real-time validation and glassmorphic design.',
      techStack: ['HTML5', 'CSS3', 'JavaScript'],
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
    category: ['Full-Stack'],
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
    category: ['Full-Stack'],
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
    category: ['Full-Stack'],
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

  // --- In-progress / planned work. No case-study content exists for these
  // yet, so only the title (as given) plus honest placeholders — no
  // invented tech, links, or outcomes. Update in place once real details
  // and screenshots are ready.
  {
    id: '12',
    title: 'Agent Observability & Tracing Dashboard',
    description: 'A dashboard for observability and tracing across AI agent workflows. Case study coming soon.',
    tech: ['TBD'],
    image: null,
    github: null,
    live: null,
    category: ['AI'],
    featured: false,
    caseStudy: {
      overview: 'Full case study coming soon.',
    }
  },
  {
    id: '13',
    title: 'Multi-Agent Rental/Lease Assistant',
    description: 'A multi-agent assistant for rental and lease workflows. Case study coming soon.',
    tech: ['TBD'],
    image: null,
    github: null,
    live: null,
    category: ['AI', 'Full-Stack'],
    featured: false,
    caseStudy: {
      overview: 'Full case study coming soon.',
    }
  },
  {
    id: '14',
    title: 'Reusable Evaluation Harness',
    description: 'A reusable evaluation harness for testing and benchmarking AI systems. Case study coming soon.',
    tech: ['TBD'],
    image: null,
    github: null,
    live: null,
    category: ['AI'],
    featured: false,
    caseStudy: {
      overview: 'Full case study coming soon.',
    }
  },
  {
    id: '15',
    title: 'AI Usage/Cost Monitoring Agent',
    description: 'An agent for monitoring AI usage and cost across projects. Case study coming soon.',
    tech: ['TBD'],
    image: null,
    github: null,
    live: null,
    category: ['AI'],
    featured: false,
    caseStudy: {
      overview: 'Full case study coming soon.',
    }
  },
  {
    id: '16',
    title: 'MyFitness Management System — Tool-calling Spring AI Agent',
    description: 'A gym management system being upgraded with a tool-calling Spring AI agent. Case study coming soon.',
    tech: ['Spring AI'],
    image: null,
    github: null,
    live: null,
    category: ['AI', 'Full-Stack'],
    featured: false,
    caseStudy: {
      overview: 'Full case study coming soon.',
    }
  },
];

export const site = {
  name: 'Aqsa Khan',
  title: 'Full Stack Developer | Automation & AI Integration Expert',
  bio: `Hi, I'm Aqsa Khan, a passionate full-stack developer and automation enthusiast dedicated to creating elegant, high-performing digital solutions. I blend modern web development with intelligent automation to help businesses and individuals save time, streamline workflows, and achieve their goals.

With hands-on experience in React, Node.js, MySQL, Python automation, and AI integration, I craft websites, apps, and tools that are not only functional but also visually engaging. My approach is grounded in clean code, responsive design, and seamless user experiences, ensuring every project I deliver is professional, efficient, and impactful.

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
    linkedin: 'https://www.linkedin.com/in/aqsa-khan-8044763a3/',
    email: 'aqsa.dev99@gmail.com',
  },
};

export const featuredProjects = projects.filter(p => p.featured);
export const projectCategories = ['All', 'Full-Stack', 'AI', 'UI/UX'];

// Flattened skill list (name + level + icon) for the Skills Orbit — sourced
// directly from categorizedSkills above, nothing added or invented.
export const allSkills = Object.values(categorizedSkills).flat();
