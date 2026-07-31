import { Project, CasestudyType } from '@/types/project';

export const PROJECTS_DATA: (Project & { casestudy: CasestudyType })[] = [
  {
    _id: 'unisync-thumbnail',
    title: 'Unisync',
    slug: 'unisync-thumbnail',
    projectType: 'Video & Motion Design',
    position: 1,
    thumbnail: '/thumbnail/Unisync thumbnail.mp4',
    casestudy: {
      title: 'Unisync Motion & UI Showcase',
      subtitle: 'Dynamic Video & Motion Design Showcase',
      category: 'Video & Motion',
      timeline: '2 Weeks',
      role: 'Motion Designer & Frontend Developer',
      projectType: 'Motion Showcase',
      thumbnail: '/thumbnail/Unisync thumbnail.mp4',
      summary: [
        'Unisync is an interactive motion design and video showcase highlighting dynamic UI interactions and seamless digital storytelling.',
        'Designed to present complex web synchronization features through engaging motion visuals and responsive interfaces.'
      ],
      contribution: 'Concept development, motion design, video editing, and interactive web presentation.',
      problem: [
        'Traditional static image portfolios fail to capture fluid motion dynamics, micro-interactions, and real-time interface behavior.'
      ],
      solution: [
        'Created a high-fidelity video motion showcase combined with interactive cards to demonstrate dynamic UI state transitions in real time.'
      ],
      techStack: [
        { name: 'After Effects' },
        { name: 'Framer Motion' },
        { name: 'Next.js' },
        { name: 'Tailwind CSS' }
      ],
      features: [
        {
          title: 'Fluid Video Preview',
          description: 'High-definition video loop showcasing interactive elements with minimal load overhead.',
          imageUrl: '/thumbnail/examinerpro-cs.jpg'
        },
        {
          title: 'Interactive Timeline',
          description: 'Smooth keyframe animations highlighting motion transition stages.',
          imageUrl: '/thumbnail/pixeldraft.jpg'
        }
      ],
      processPhases: [
        {
          phase: 'Phase 1: Storyboarding',
          description: 'Drafted visual frames and micro-interaction flows for key UI components.'
        },
        {
          phase: 'Phase 2: Animation & Rendering',
          description: 'Rendered web-optimized MP4 media and integrated Framer Motion UI transitions.'
        }
      ],
      results: [
        {
          metric: 'Engagement',
          value: '+45%',
          description: 'Increased visual engagement on portfolio landing cards.'
        },
        {
          metric: 'Performance',
          value: '60 FPS',
          description: 'Butter-smooth animation playback on all modern web browsers.'
        }
      ],
      links: [
        {
          type: 'GitHub Repository',
          url: 'https://github.com/smk-manikandan',
          icon: { type: 'library', libraryIcon: 'github' }
        },
        {
          type: 'Live Demo',
          url: 'https://github.com/smk-manikandan',
          icon: { type: 'library', libraryIcon: 'external-link' }
        }
      ]
    }
  },
  {
    _id: 'examinerpro-cs',
    title: 'ExaminerPro Case Study',
    slug: 'examinerpro-cs',
    projectType: 'Web Development & UI/UX',
    position: 2,
    thumbnail: '/thumbnail/examinerpro-cs.jpg',
    casestudy: {
      title: 'ExaminerPro Case Study',
      subtitle: 'Comprehensive Online Examination & Analytics System',
      category: 'Web Application',
      timeline: '3 Months',
      role: 'UI/UX Designer & Lead Developer',
      projectType: 'Full-Stack Web App',
      thumbnail: '/thumbnail/examinerpro-cs.jpg',
      heroImage: '/thumbnail/examinerpro-cs.jpg',
      summary: [
        'ExaminerPro is an intelligent online examination platform designed for educational institutions to conduct secure, automated, and analytical assessments.',
        'Features real-time test proctoring, detailed score analytics, intuitive question bank creation, and seamless student evaluation workflows.'
      ],
      contribution: 'End-to-end product architecture, UI/UX wireframing, database schema design, and frontend implementation.',
      problem: [
        'Legacy examination systems suffered from clunky interfaces, vulnerable online test environments, and slow, manual evaluation processes.'
      ],
      solution: [
        'Designed a streamlined examination platform with instant automated grading, intuitive timer controls, and detailed performance analytics dashboards.'
      ],
      techStack: [
        { name: 'Next.js' },
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
        { name: 'Node.js' }
      ],
      features: [
        {
          title: 'Automated Grading Engine',
          description: 'Instant verification and scoring of multiple-choice and short-answer questions.',
          imageUrl: '/thumbnail/examinerpro-dev.jpg'
        },
        {
          title: 'Analytics Dashboard',
          description: 'Visual representations of student performance metrics, class averages, and progress trends.',
          imageUrl: '/thumbnail/examinerpro-cs.jpg'
        }
      ],
      processPhases: [
        {
          phase: 'Phase 1: User Research',
          description: 'Conducted interviews with educators and students to identify key friction points in online testing.'
        },
        {
          phase: 'Phase 2: UI Design & Prototyping',
          description: 'Built high-fidelity Figma prototypes focusing on distraction-free examination views.'
        },
        {
          phase: 'Phase 3: Development & Deployment',
          description: 'Implemented frontend with Next.js and deployed to production with robust security rules.'
        }
      ],
      results: [
        {
          metric: 'Grading Time',
          value: '-90%',
          description: 'Reduction in time required for test assessment and result delivery.'
        },
        {
          metric: 'User Satisfaction',
          value: '98%',
          description: 'Positive feedback rating from participating students and instructors.'
        }
      ],
      links: [
        {
          type: 'Live Application',
          url: 'https://github.com/smk-manikandan',
          icon: { type: 'library', libraryIcon: 'external-link' }
        },
        {
          type: 'GitHub Repository',
          url: 'https://github.com/smk-manikandan',
          icon: { type: 'library', libraryIcon: 'github' }
        }
      ]
    }
  },
  {
    _id: 'examinerpro-dev',
    title: 'ExaminerPro Developer Portal',
    slug: 'examinerpro-dev',
    projectType: 'Developer Tools & API',
    position: 3,
    thumbnail: '/thumbnail/examinerpro-dev.jpg',
    casestudy: {
      title: 'ExaminerPro Dev Portal',
      subtitle: 'Developer Documentation & API Control Panel',
      category: 'Web Development',
      timeline: '1 Month',
      role: 'Frontend Engineer',
      projectType: 'Developer Dashboard',
      thumbnail: '/thumbnail/examinerpro-dev.jpg',
      heroImage: '/thumbnail/examinerpro-dev.jpg',
      summary: [
        'A comprehensive developer dashboard and documentation portal for integrating ExaminerPro assessment APIs into third-party Learning Management Systems (LMS).'
      ],
      contribution: 'API documentation portal layout, interactive API playground, and authentication management UI.',
      problem: [
        'Third-party developers needed a clean, interactive environment to test examination webhooks and integration APIs.'
      ],
      solution: [
        'Built a modern developer portal equipped with code snippet generation, API key management, and real-time response previews.'
      ],
      techStack: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
        { name: 'Zod' }
      ],
      features: [
        {
          title: 'Interactive API Explorer',
          description: 'Test API endpoints with live request/response inspection directly in the browser.',
          imageUrl: '/thumbnail/examinerpro-dev.jpg'
        }
      ],
      processPhases: [
        {
          phase: 'Phase 1: API Specification',
          description: 'Defined OpenAPI specifications and endpoint documentation.'
        },
        {
          phase: 'Phase 2: Frontend Implementation',
          description: 'Constructed responsive developer dashboard with dark mode UI.'
        }
      ],
      results: [
        {
          metric: 'Integration Speed',
          value: '3x Faster',
          description: 'Accelerated third-party LMS integration turnaround times.'
        }
      ],
      links: [
        {
          type: 'Documentation',
          url: 'https://github.com/smk-manikandan',
          icon: { type: 'library', libraryIcon: 'file-text' }
        }
      ]
    }
  },
  {
    _id: 'pixeldraft',
    title: 'Pixeldraft Design System',
    slug: 'pixeldraft',
    projectType: 'UI/UX Design',
    position: 4,
    thumbnail: '/thumbnail/pixeldraft.jpg',
    casestudy: {
      title: 'Pixeldraft Design System',
      subtitle: 'Modular UI Kit & Design Token Architecture',
      category: 'Design System',
      timeline: '1 Month',
      role: 'UI/UX Designer',
      projectType: 'Design System',
      thumbnail: '/thumbnail/pixeldraft.jpg',
      heroImage: '/thumbnail/pixeldraft.jpg',
      summary: [
        'Pixeldraft is a scalable design system crafted to standardize UI component libraries, typography scale, and color tokens across web applications.'
      ],
      contribution: 'Component library design, token specification, accessibility standards, and documentation.',
      problem: [
        'Inconsistent UI components across different product features caused visual fragmentation and bloated CSS styling.'
      ],
      solution: [
        'Created a unified design token architecture with reusable Figma components and Tailwind CSS configuration.'
      ],
      techStack: [
        { name: 'Figma' },
        { name: 'Tailwind CSS' },
        { name: 'Storybook' }
      ],
      features: [
        {
          title: 'Design Token Suite',
          description: 'Synchronized colors, spacing, and typography across design and code.',
          imageUrl: '/thumbnail/pixeldraft.jpg'
        }
      ],
      processPhases: [
        {
          phase: 'Phase 1: Component Audit',
          description: 'Cataloged existing UI elements and identified common patterns.'
        },
        {
          phase: 'Phase 2: Systemization',
          description: 'Built accessible, reusable Figma component library.'
        }
      ],
      results: [
        {
          metric: 'Design Consistency',
          value: '100%',
          description: 'Unified visual experience across all application modules.'
        }
      ],
      links: [
        {
          type: 'Figma Community',
          url: 'https://figma.com',
          icon: { type: 'library', libraryIcon: 'figma' }
        }
      ]
    }
  },
  {
    _id: 'rr-miracle-events',
    title: 'RR Miracle Events',
    slug: 'rr-miracle-events',
    projectType: 'Web Development',
    position: 5,
    thumbnail: '/thumbnail/rr-miracle-events.jpg',
    casestudy: {
      title: 'RR Miracle Events Web Platform',
      subtitle: 'Premium Event Management & Booking Experience',
      category: 'Web Development',
      timeline: '3 Weeks',
      role: 'Web Developer & Designer',
      projectType: 'Client Project',
      thumbnail: '/thumbnail/rr-miracle-events.jpg',
      heroImage: '/thumbnail/rr-miracle-events.jpg',
      summary: [
        'A sleek, high-converting event management website for RR Miracle Events, showcasing event portfolios, booking inquiries, and customer testimonials.'
      ],
      contribution: 'Full website design, responsive layout engineering, contact form integration, and SEO optimization.',
      problem: [
        'The client lacked a modern online presence to showcase past event productions and receive structured booking leads.'
      ],
      solution: [
        'Built a fast-loading Next.js site featuring elegant image galleries, smooth scroll animations, and direct contact inquiry routing.'
      ],
      techStack: [
        { name: 'Next.js' },
        { name: 'React' },
        { name: 'Tailwind CSS' },
        { name: 'TypeScript' }
      ],
      features: [
        {
          title: 'Event Showcase Gallery',
          description: 'High-resolution image grid with instant modal previews.',
          imageUrl: '/thumbnail/rr-miracle-events.jpg'
        }
      ],
      processPhases: [
        {
          phase: 'Phase 1: Layout & Branding',
          description: 'Designed a luxurious dark layout aligned with event branding.'
        },
        {
          phase: 'Phase 2: Development & Optimization',
          description: 'Optimized image delivery and implemented contact form API.'
        }
      ],
      results: [
        {
          metric: 'Inquiries',
          value: '+65%',
          description: 'Increase in direct online booking inquiries within the first month.'
        }
      ],
      links: [
        {
          type: 'Live Website',
          url: 'https://github.com/smk-manikandan',
          icon: { type: 'library', libraryIcon: 'external-link' }
        }
      ]
    }
  }
];

export function getProjectBySlug(slug: string) {
  return PROJECTS_DATA.find((p) => p.slug === slug || p.casestudy?.slug === slug || p._id === slug);
}
