import {
  FeaturedProject,
  CapabilityBlock,
  TechGroup,
  CreativeItem,
  ImpactStat,
  ExperienceItem,
  TestimonialItem
} from '@/types/project';

export const HERO_DATA = {
  headline: "Building digital products that help businesses launch faster, operate smarter, and grow with confidence.",
  subheadline: "I am a Product Builder bridging software engineering, AI workflow automation, UI/UX design, and creative production into high-impact digital experiences.",
  primaryCta: "View My Work",
  secondaryCta: "Let's Build Together",
  badge: "Available for New Projects & Co-Founding Opportunities"
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "mergex-one",
    title: "MergeX One",
    subtitle: "AI-Powered Enterprise Workflow & Collaboration Suite",
    category: "Software & AI Product",
    impactBadge: "3x Operational Velocity Increase",
    thumbnail: "/thumbnail/examinerpro-cs.jpg",
    tags: ["Next.js", "AI Agents", "TypeScript", "n8n", "Tailwind CSS"],
    caseStudy: {
      title: "MergeX One - AI Workflow Suite",
      subtitle: "Unified AI-Driven Operations & Automated Process Execution",
      category: "Software & AI Engineering",
      client: "MergeX Platform",
      role: "Lead Product Builder & Architect",
      timeline: "3 Months",
      impactMetric: "3x Faster Internal Workflows",
      problem: "Cross-department teams spent 40%+ of daily engineering hours manually triaging client data, syncing records, and managing repetitive multi-platform workflows.",
      approach: "Built a central AI-first operations engine integrating LLM agents with custom Webhook pipelines to automate routine data operations and team task assignments.",
      designDecisions: [
        "Created an intuitive high-density dashboard grid focused on real-time task status visibility.",
        "Implemented dark mode glassmorphism to reduce visual fatigue during extended monitoring.",
        "Added zero-latency optimistic UI updates for instant interaction feedback."
      ],
      technicalArchitecture: [
        "Frontend built on Next.js 16 App Router with React 19 server components.",
        "Backend event bus powered by Node.js, Webhooks, and PostgreSQL.",
        "State management using Zustand and Server Actions."
      ],
      aiAutomation: [
        "Autonomous OpenAI function calling for natural language query parsing.",
        "Custom n8n and Make workflows for automated CRM synchronization and notifications."
      ],
      challenges: [
        "Handling concurrent webhook spikes without blocking the main UI thread.",
        "Ensuring 99.9% uptime across asynchronous background AI tasks."
      ],
      results: [
        { metric: "+300%", description: "Increase in automated task throughput per engineer." },
        { metric: "-65%", description: "Reduction in manual data entry error rate." },
        { metric: "1.2s", description: "Average AI agent decision and execution speed." }
      ],
      keyLearnings: [
        "Designing AI integrations requires resilient fallback mechanisms for rate limits and non-deterministic outputs.",
        "Clear visual feedback during background AI processing builds user trust."
      ],
      techStack: ["Next.js", "TypeScript", "OpenAI API", "n8n", "PostgreSQL", "Tailwind CSS"],
      links: [
        { label: "Live Platform Demo", url: "#" },
        { label: "GitHub Architecture Code", url: "https://github.com/smk-manikandan" }
      ]
    }
  },
  {
    id: "cedar-elevator",
    title: "Cedar Elevator",
    subtitle: "Smart Industrial Services & Logistics Platform",
    category: "Web Application & CRM",
    impactBadge: "45% Conversion Increase",
    thumbnail: "/thumbnail/pixeldraft.jpg",
    tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    caseStudy: {
      title: "Cedar Elevator Platform",
      subtitle: "Industrial Service Automation & Direct Client Portal",
      category: "Full-Stack Web App",
      client: "Cedar Elevator Systems",
      role: "Product Builder",
      timeline: "2 Months",
      impactMetric: "45% Boost in Inbound Customer Requests",
      problem: "Industrial elevator clients experienced friction booking maintenance inspections and tracking service requests through fragmented phone calls and emails.",
      approach: "Engineered a streamlined, mobile-first web portal allowing clients to configure maintenance plans, submit emergency service requests, and track field technicians live.",
      designDecisions: [
        "Designed high-contrast typography hierarchy prioritizing critical emergency service buttons.",
        "Built a step-by-step interactive quote calculator to demystify complex industrial pricing."
      ],
      technicalArchitecture: [
        "React SPA with server-rendered landing modules.",
        "RESTful API service connected to a relational database for technician dispatches."
      ],
      aiAutomation: [
        "Automated email and SMS dispatch notifications triggered upon form submission."
      ],
      challenges: [
        "Optimizing heavy high-res machinery media for ultra-fast mobile loading on low 3G networks."
      ],
      results: [
        { metric: "+45%", description: "Increase in qualified digital inspection bookings." },
        { metric: "<2s", description: "Average page load speed across mobile devices." }
      ],
      keyLearnings: [
        "Industrial clients favor transparent step-by-step visual forms over long text explanations."
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      links: [
        { label: "View Live Site", url: "#" }
      ]
    }
  },
  {
    id: "examinerpro",
    title: "ExaminerPro",
    subtitle: "Automated Assessment & Educational Analytics Suite",
    category: "Full-Stack Web Application",
    impactBadge: "90% Reduction in Evaluation Time",
    thumbnail: "/thumbnail/examinerpro-cs.jpg",
    tags: ["Next.js", "TypeScript", "Zod", "Tailwind CSS"],
    caseStudy: {
      title: "ExaminerPro Case Study",
      subtitle: "Next-Gen Online Examination & Analytics System",
      category: "Educational Tech",
      client: "Institutional SaaS",
      role: "Lead Full-Stack Developer & Designer",
      timeline: "3 Months",
      impactMetric: "90% Faster Exam Evaluation",
      problem: "Legacy educational testing tools suffered from cumbersome interfaces, lack of real-time analytics, and slow manual grading workflows.",
      approach: "Architected a secure, full-stack examination system with instant automated grading, anti-cheat detection, and comprehensive performance charts.",
      designDecisions: [
        "Distraction-free dark UI mode designed for high focus during examinations.",
        "Instant visual charts highlighting student weak points by subject module."
      ],
      technicalArchitecture: [
        "Next.js App Router for server-rendered dashboards and client-side exam interfaces.",
        "Strict Schema validation using Zod for tamper-proof submission handling."
      ],
      results: [
        { metric: "-90%", description: "Reduction in total grading and results delivery turnaround." },
        { metric: "98%", description: "Positive usability score from instructors." }
      ],
      keyLearnings: [
        "Strict input validation and deterministic state management are crucial for high-stakes test taking."
      ],
      techStack: ["Next.js", "React", "TypeScript", "Zod", "Tailwind CSS"],
      links: [
        { label: "Explore Platform", url: "#" }
      ]
    }
  },
  {
    id: "heyprodata",
    title: "HeyProData",
    subtitle: "B2B Lead Intelligence & Data Automation Tool",
    category: "AI & Data Product",
    impactBadge: "10K+ Profiles Processed / Hour",
    thumbnail: "/thumbnail/examinerpro-dev.jpg",
    tags: ["Next.js", "AI Agents", "Python API", "Tailwind CSS"],
    caseStudy: {
      title: "HeyProData Intelligence Platform",
      subtitle: "Automated Prospect Enrichment & Sales AI",
      category: "Data & AI Product",
      client: "B2B Sales Teams",
      role: "Product Builder",
      timeline: "6 Weeks",
      impactMetric: "10,000+ Enriched Prospects Daily",
      problem: "Sales teams spent hours manually searching company directories and verifying email addresses before outreach.",
      approach: "Built an AI-driven data enrichment engine that extracts, cleans, and tags company contacts in real-time.",
      designDecisions: [
        "Clean tabular UI with instant filtering, column sorting, and 1-click CSV exports.",
        "Interactive badge system showing confidence score per data point."
      ],
      technicalArchitecture: [
        "Next.js frontend with asynchronous queue processing.",
        "Python data processing microservices."
      ],
      aiAutomation: [
        "LLM-powered company categorizer and prospect intent scoring agent."
      ],
      results: [
        { metric: "10K+", description: "Daily lead records automatically validated." },
        { metric: "5x", description: "Faster prospecting workflow for sales reps." }
      ],
      keyLearnings: [
        "Displaying clear data verification confidence metrics builds user confidence in AI data tools."
      ],
      techStack: ["Next.js", "TypeScript", "Python API", "OpenAI", "Tailwind CSS"],
      links: [
        { label: "Product Overview", url: "#" }
      ]
    }
  },
  {
    id: "neidhal-fc",
    title: "Neidhal FC",
    subtitle: "Sports Brand Experience & Fan Engagement Hub",
    category: "Sports Tech & Creative",
    impactBadge: "+120% Fan Digital Engagement",
    thumbnail: "/thumbnail/rr-miracle-events.jpg",
    tags: ["Next.js", "Motion Graphics", "Tailwind CSS", "Figma"],
    caseStudy: {
      title: "Neidhal FC Official Hub",
      subtitle: "Immersive Sports Branding & Matchday Portal",
      category: "Web & Creative Production",
      client: "Neidhal Football Club",
      role: "Brand Strategist & Frontend Developer",
      timeline: "1 Month",
      impactMetric: "+120% Fan Engagement",
      problem: "The football club lacked a modern visual web identity to engage fans, sell tickets, and present match highlights.",
      approach: "Created a high-energy, motion-filled web experience featuring dynamic match schedules, roster cards, and interactive ticket booking.",
      designDecisions: [
        "High-contrast sports typography and energetic purple/gold accent glows.",
        "Micro-animated player cards with video highlights."
      ],
      technicalArchitecture: [
        "Next.js with Framer Motion animations for fluid 60FPS scroll transitions."
      ],
      results: [
        { metric: "+120%", description: "Increase in fan website traffic on match days." }
      ],
      keyLearnings: [
        "Combining high-energy motion design with fast web performance drives high engagement in sports media."
      ],
      techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "Figma"],
      links: [
        { label: "Visit Platform", url: "#" }
      ]
    }
  },
  {
    id: "dutuk",
    title: "Dutuk",
    subtitle: "Hyperlocal Service Aggregator & Booking Application",
    category: "Mobile & Web App",
    impactBadge: "5,000+ Active Monthly Users",
    thumbnail: "/thumbnail/Unisync thumbnail.mp4",
    isVideo: true,
    tags: ["React Native", "Next.js", "Tailwind CSS", "Supabase"],
    caseStudy: {
      title: "Dutuk Service Booking Engine",
      subtitle: "Hyperlocal On-Demand Service Dispatch Platform",
      category: "Mobile & Web Application",
      client: "Dutuk Inc",
      role: "Co-Product Builder & Frontend Lead",
      timeline: "4 Months",
      impactMetric: "5,000+ Monthly Service Bookings",
      problem: "Local service providers struggled to receive structured customer jobs and manage real-time schedule dispatches.",
      approach: "Built an integrated customer booking app and provider mobile dashboard with live GPS tracking and automated push notifications.",
      designDecisions: [
        "One-tap service booking flow designed for seamless mobile thumb navigation.",
        "Color-coded status indicators for active, pending, and completed jobs."
      ],
      technicalArchitecture: [
        "Cross-platform React application with real-time database subscriptions.",
        "Supabase Auth and Realtime Database for zero-latency status sync."
      ],
      results: [
        { metric: "5,000+", description: "Active monthly completed service transactions." },
        { metric: "4.8★", description: "Average mobile app review rating." }
      ],
      keyLearnings: [
        "Minimal tap depth during checkout increases conversion rates significantly on mobile interfaces."
      ],
      techStack: ["React", "Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
      links: [
        { label: "App Details", url: "#" }
      ]
    }
  }
];

export const CAPABILITY_BLOCKS: CapabilityBlock[] = [
  {
    id: "software",
    title: "Software Engineering",
    subtitle: "Scalable, high-performance web and mobile applications built for security and growth.",
    icon: "code",
    items: [
      "SaaS Platforms",
      "Custom CRM Systems",
      "Content Management Systems (CMS)",
      "Internal Business Tools",
      "Full-Stack Web Applications",
      "Mobile Applications",
      "E-Commerce Solutions"
    ]
  },
  {
    id: "ai",
    title: "AI Engineering",
    subtitle: "Automating repetitive work and augmenting product capabilities with intelligence.",
    icon: "cpu",
    items: [
      "Autonomous AI Agents",
      "Workflow & Business Automation",
      "OpenAI & LLM API Integrations",
      "n8n Automation Pipelines",
      "Make Automation Scenarios",
      "Custom AI Internal Tools"
    ]
  },
  {
    id: "design",
    title: "Product Design",
    subtitle: "User-centered visual systems and interactive prototypes designed for conversion.",
    icon: "layout",
    items: [
      "UX Strategy & Research",
      "UI Design & Art Direction",
      "Scalable Design Systems",
      "Low/High-Fidelity Wireframes",
      "Interactive Prototypes"
    ]
  },
  {
    id: "creative",
    title: "Creative AI Production",
    subtitle: "High-impact visual storytelling and motion creatives that captivate audiences.",
    icon: "video",
    items: [
      "AI Commercials & Promos",
      "Product Demo Videos",
      "Hero & Landing Page Videos",
      "Visual Storyboarding",
      "Motion Graphics & Micro-Animations",
      "Marketing & Social Creatives"
    ]
  }
];

export const WHY_WORK_WITH_ME = [
  {
    number: "01",
    title: "Design-First Engineering",
    description: "I don't just code functionality; I build intuitive, aesthetically stunning interfaces that delight users and elevate brand equity."
  },
  {
    number: "02",
    title: "Business-Focused Thinking",
    description: "Every feature is engineered to drive business value—whether it's increasing conversion rates, saving operational time, or scaling revenue."
  },
  {
    number: "03",
    title: "End-to-End Ownership",
    description: "From concept napkin sketch to Figma design, database schema, code deployment, and AI automation—I own the complete product lifecycle."
  },
  {
    number: "04",
    title: "AI-First Workflow",
    description: "Leveraging cutting-edge AI tools and autonomous scripts to code faster, automate testing, and deliver production features in record time."
  },
  {
    number: "05",
    title: "Faster Product Delivery",
    description: "Skip multi-agency bloat. Working with a versatile product builder speeds up communication, eliminates handover bottlenecks, and cuts launch timelines in half."
  },
  {
    number: "06",
    title: "Startup Mindset",
    description: "Pragmatic, adaptable, and focused on rapid iteration. I help founders build Minimum Viable Products that are scalable from day one."
  }
];

export const PROCESS_STEPS = [
  { step: "01", title: "Discovery", description: "Aligning on business objectives, target audience, and product requirements." },
  { step: "02", title: "Strategy", description: "Mapping technical architecture, user flows, and feature prioritization." },
  { step: "03", title: "Design", description: "Crafting wireframes, UI design tokens, and interactive Figma prototypes." },
  { step: "04", title: "Development", description: "Building clean, type-safe frontend and robust backend application code." },
  { step: "05", title: "AI Integration", description: "Embedding intelligent AI agents, prompts, and automated workflows." },
  { step: "06", title: "Testing", description: "Conducting rigorous cross-browser, security, and performance testing." },
  { step: "07", title: "Launch", description: "Deploying to production infrastructure with domain, SSL, and monitoring." },
  { step: "08", title: "Continuous Improvement", description: "Analyzing user metrics, refining conversion flows, and scaling features." }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    period: "2025 - Present",
    role: "Full Stack Product Developer",
    company: "Dutuk Private Limited",
    description: "Developing the Dutuk web platform with Next.js and the mobile application with React Native. Building production-ready features, reusable components, backend integrations, and responsive user experiences while contributing across the complete product development lifecycle.",
    skills: ["Next.js", "React Native", "TypeScript", "Tailwind CSS", "REST API"]
  },
  {
    period: "2025",
    role: "Web Development Intern",
    company: "SAIC",
    description: "Developed and maintained responsive business websites using WordPress and modern no-code tools. Focused on performance, usability, SEO, and delivering client-ready digital experiences across multiple projects.",
    skills: ["WordPress", "Web Development", "SEO", "UI/UX", "No-Code Tools"]
  },
  {
    period: "Feb 2025 - May 2025",
    role: "UI/UX Design Specialization",
    company: "Zukun Academy",
    description: "Specialized in user-centered product design, design systems, wireframing, interaction design, prototyping, usability principles, and modern design workflows. Built a strong foundation for creating intuitive, scalable digital products that bridge design and engineering.",
    skills: ["Figma", "Design Systems", "Wireframing", "Prototyping", "UI/UX Design"]
  },
  {
    period: "2022 - 2025",
    role: "Bachelor of Computer Applications (BCA)",
    company: "Guru Nanak College, Chennai",
    description: "Built a strong foundation in software development, databases, web technologies, object-oriented programming, algorithms, and computer science principles while developing real-world software products alongside academic studies.",
    skills: ["Computer Science", "Database Systems", "Software Engineering", "OOP", "Algorithms"]
  }
];

export const TECH_GROUPS: TechGroup[] = [
  {
    category: "Frontend",
    tools: [
      { name: "Next.js", badge: "Primary Framework" },
      { name: "React", badge: "UI Library" },
      { name: "TypeScript", badge: "Type Safety" },
      { name: "Tailwind CSS", badge: "Styling" },
      { name: "Framer Motion", badge: "Animations" }
    ]
  },
  {
    category: "Backend",
    tools: [
      { name: "Node.js", badge: "Runtime" },
      { name: "Express", badge: "API Server" },
      { name: "REST API", badge: "Architecture" },
      { name: "Medusa", badge: "E-Commerce" },
      { name: "Supabase", badge: "BaaS & Auth" }
    ]
  },
  {
    category: "Database",
    tools: [
      { name: "Neon", badge: "Serverless Postgres" },
      { name: "PostgreSQL", badge: "Relational DB" },
      { name: "Redis", badge: "Caching" },
      { name: "SQLite", badge: "Embedded" }
    ]
  },
  {
    category: "AI & Automation",
    tools: [
      { name: "OpenAI API", badge: "LLM Intelligence" },
      { name: "n8n", badge: "Workflow Automation" },
      { name: "Make", badge: "Integration" },
      { name: "Prompt Engineering", badge: "AI Logic" },
      { name: "AI Agents", badge: "Autonomous" }
    ]
  },
  {
    category: "Design",
    tools: [
      { name: "Figma", badge: "UI/UX Design" },
      { name: "Claude Design", badge: "AI Iteration" },
      { name: "Stitch", badge: "Prototyping" },
      { name: "Photoshop", badge: "Visual Media" }
    ]
  },
  {
    category: "DevOps & Infrastructure",
    tools: [
      { name: "Git", badge: "Version Control" },
      { name: "GitHub", badge: "CI/CD" },
      { name: "Vercel", badge: "Cloud Deployment" },
      { name: "AWS", badge: "Cloud Infra" },
      { name: "Postman", badge: "API Testing" }
    ]
  }
];

export const CREATIVE_SHOWCASE: CreativeItem[] = [
  {
    id: "ai-commercial",
    title: "AI Product Commercial",
    category: "AI Commercials",
    thumbnail: "/thumbnail/Unisync thumbnail.mp4",
    isVideo: true,
    aspect: "video"
  },
  {
    id: "cinematic-promo",
    title: "Cinematic Product Reveal",
    category: "Cinematic Videos",
    thumbnail: "/thumbnail/examinerpro-cs.jpg",
    aspect: "square"
  },
  {
    id: "football-creative",
    title: "Neidhal FC Matchday Creative",
    category: "Football Creative",
    thumbnail: "/thumbnail/rr-miracle-events.jpg",
    aspect: "square"
  },
  {
    id: "motion-design",
    title: "Micro-Interaction & UI Motion",
    category: "Motion Design",
    thumbnail: "/thumbnail/pixeldraft.jpg",
    aspect: "video"
  },
  {
    id: "storyboards",
    title: "Visual Product Storyboards",
    category: "Storyboards",
    thumbnail: "/thumbnail/examinerpro-dev.jpg",
    aspect: "square"
  },
  {
    id: "scroll-animations",
    title: "Interactive Web Scroll Flow",
    category: "Scroll Animations",
    thumbnail: "/thumbnail/examinerpro-cs.jpg",
    aspect: "square"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Manikandan bridges design and engineering effortlessly. He delivered our platform faster than any traditional development team could.",
    name: "Jane Doe",
    position: "CEO",
    company: "MergeX Startup",
    initials: "JD"
  },
  {
    quote: "Working with Manikandan was transformative. His AI workflow automations saved our team dozens of hours every single week.",
    name: "John Smith",
    position: "CTO",
    company: "Software Systems",
    initials: "JS"
  },
  {
    quote: "His design-first approach completely elevated our brand. The conversion rate increase spoke for itself within the first month.",
    name: "Emily White",
    position: "Product Manager",
    company: "E-Commerce Group",
    initials: "EW"
  }
];

export const IMPACT_STATS: ImpactStat[] = [
  { number: "20+", label: "Projects Delivered", sublabel: "Across Web, AI & Mobile" },
  { number: "10+", label: "AI Workflows Built", sublabel: "Automating Complex Tasks" },
  { number: "5+", label: "Production Software Products", sublabel: "Live SaaS & Client Apps" },
  { number: "3+", label: "Business Platforms", sublabel: "Engineered From Concept to Launch" },
  { number: "1000+", label: "Development Hours", sublabel: "Dedicated Hands-On Building" },
  { number: "Multi", label: "Industries Served", sublabel: "SaaS, EduTech, Sports & E-com" }
];

export const CURRENTLY_BUILDING = {
  status: "Active Building Phase",
  headline: "Building AI-powered software through MergeX while collaborating with startups to create scalable digital products.",
  actionText: "Have a product idea or want to collaborate?"
};
