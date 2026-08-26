export interface MetricItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface LeadershipRole {
  role: string;
  organization: string;
  description: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  domain: string;
  description: string;
  subCompetencies: string[];
}

export interface RecognitionItem {
  year?: string;
  title: string;
  institution: string;
  category: string;
  description?: string;
}

export interface Destination {
  city: string;
  country: string;
  region: string;
  type: string;
  lat: number;
  lng: number;
}

export interface Affiliation {
  acronym: string;
  name: string;
  description: string;
}

export const profileData = {
  name: "Prof. Santhosh Kumar",
  formalTitle: "Prof. Santhosh Kumar",
  designation: "Principal",
  institution: "ASET College of Science & Technology",
  institutionFull: "Aset College of Science and Technology",
  institutionUrl: "https://asetcollege.edu.in",
  email: "principal@asetcollege.edu.in",
  phone: "+91 94440 00000",
  location: "Chennai, Tamil Nadu, India",
  portraitUrl: "/images/prof-santhosh-kumar.jpg",
  portraitDesktopUrl: "/images/prof-santhosh-desktop.png",

  positioningStatement:
    "Academic Leader • Industry Professional • Educator • Professional Trainer",

  heroStats: [
    { value: "15+", label: "Years Experience" },
    { value: "5,000+", label: "Students Guided" },
    { value: "International", label: "Academic Exposure" },
  ],

  corePillars: [
    "Academic Leadership",
    "Institutional Development",
    "Industry–Academia Collaboration",
  ],

  about: {
    heading: "About Prof. Santhosh Kumar",
    tagline: "15+ years across academia & industry",
    lead: "A seasoned academic leader and higher-education administrator driving institutional excellence, outcome-based pedagogy, and sustainable industry partnerships.",
    bioParagraphs: [
      "Serving as the Principal of ASET College of Science and Technology, Prof. Santhosh Kumar spearheads strategic academic initiatives, curriculum advancement, and faculty development. His career bridges rigorous academic governance with senior industry experience.",
      "Recognized globally as a Grade IOSH (UK) professional and authorized international trainer, he has mentored over 5,000 students and professionals across India and abroad, championing safety engineering, management sciences, and career readiness.",
    ],
    experienceSplit: {
      total: "15+",
      totalLabel: "YEARS TOTAL EXPERIENCE",
      academia: "10",
      academiaLabel: "YEARS IN ACADEMIA",
      industry: "5",
      industryLabel: "YEARS IN INDUSTRY",
    },
  },

  leadershipImpact: {
    metrics: [
      {
        value: "15+",
        label: "Years Experience",
        sublabel: "Higher education & industrial operations",
      },
      {
        value: "5,000+",
        label: "Students Guided",
        sublabel: "Undergraduate, postgraduate & executives",
      },
      {
        value: "5",
        label: "International Conferences",
        sublabel: "Keynote, chaired & delegate sessions",
      },
      {
        value: "25+",
        label: "Seminars, Workshops & FDPs",
        sublabel: "Capacity building & faculty enrichment",
      },
    ],
    timeline: [
      {
        role: "Principal",
        organization: "ASET College of Science & Technology",
        description:
          "Leading institutional governance, statutory compliance, faculty advancement, and state-of-the-art campus development.",
      },
      {
        role: "Subject Expert",
        organization: "Board of Studies - MBA & B.Sc. Safety Programs",
        description:
          "Curriculum architect shaping contemporary syllabi aligned with industrial safety, logistics, and management sciences.",
      },
      {
        role: "Resource Person",
        organization: "Career Guidance & Professional Development",
        description:
          "Delivering masterclasses, career orientation, and leadership coaching across universities and industry forums.",
      },
      {
        role: "Conference Leadership",
        organization: "Chairperson & Scrutiny Roles",
        description:
          "Presiding over peer-reviewed technical sessions and scrutinizing academic research papers for international publication.",
      },
    ] as LeadershipRole[],
  },

  expertise: [
    {
      id: "01",
      title: "Academic Governance",
      domain: "Institutional Development & Academic Governance",
      description:
        "Formulating statutory frameworks, accreditation standards, and strategic roadmaps for holistic institutional excellence.",
      subCompetencies: [
        "Curriculum Design & Board of Studies",
        "Faculty Performance & Recruitment",
        "Regulatory & University Compliance",
      ],
    },
    {
      id: "02",
      title: "Strategic Management",
      domain: "Operations & Strategic Management",
      description:
        "Directing complex college operations, budgeting, resource allocation, and continuous institutional growth initiatives.",
      subCompetencies: [
        "Institutional Strategic Planning",
        "Operational Excellence & Infrastructure",
        "Quality Assurance & Audit Oversight",
      ],
    },
    {
      id: "03",
      title: "Industry Collaboration",
      domain: "Industry–Academia Collaboration",
      description:
        "Forging high-value corporate MOUs, industry internships, executive guest lectures, and placement ecosystems.",
      subCompetencies: [
        "Corporate Partnerships & MOUs",
        "Industry-Driven Capstone Projects",
        "Corporate Training Integration",
      ],
    },
    {
      id: "04",
      title: "Safety & Compliance",
      domain: "Health, Safety & Compliance Training",
      description:
        "International-grade HSE frameworks, industrial risk mitigation, and occupational safety management standards.",
      subCompetencies: [
        "Grade IOSH (UK) Best Practices",
        "Industrial Risk & Hazard Control",
        "Regulatory Environmental Compliance",
      ],
    },
    {
      id: "05",
      title: "Career Development",
      domain: "Student Mentorship & Career Development",
      description:
        "Guiding students through industry readiness, executive presence, interview mastery, and career pathway planning.",
      subCompetencies: [
        "5,000+ Students Mentored",
        "Soft Skills & Executive Etiquette",
        "Global Career Opportunities",
      ],
    },
  ] as ExpertiseItem[],

  qualifications: {
    academic: [
      {
        degree: "MBA",
        title: "Master of Business Administration",
        focus: "Operations & Strategic Management",
      },
      {
        degree: "M.Sc.",
        title: "Master of Science",
        focus: "Health, Safety & Environment (HSE)",
      },
      {
        degree: "B.Sc.",
        title: "Bachelor of Science",
        focus: "Applied Sciences & Technical Foundations",
      },
    ],
    certifications: {
      headline: "Grade IOSH - UK",
      subline: "Institution of Occupational Safety and Health (UK)",
      approvedTrainerTitle: "Approved International Trainer",
      approvedBodies: [
        {
          code: "IOSH",
          name: "Institution of Occupational Safety and Health (UK)",
          badge: "UK Certified",
        },
        {
          code: "HABC",
          name: "Highfield Awarding Body for Compliance (UK)",
          badge: "Approved Trainer",
        },
        {
          code: "AOSH",
          name: "Academy of Occupational Safety & Health (USA)",
          badge: "Authorized",
        },
      ],
    },
  },

  recognition: [
    {
      year: "2025",
      title: "Best Faculty Award",
      institution: "Amity Business School, Amity University",
      category: "Teaching & Academic Excellence",
      description:
        "Awarded in recognition of distinguished pedagogical innovation, academic leadership, and outstanding student mentorship.",
    },
    {
      year: "First Rank",
      title: "University First Rank & Gold Medal",
      institution: "HSE Department - Alagappa University",
      category: "Academic Distinction",
      description:
        "Secured the prestigious University First Rank for exceptional academic performance in postgraduate HSE studies.",
    },
    {
      year: "International",
      title: "Best Educator Award",
      institution: "Dwijendra University, Bali, Indonesia",
      category: "International Pedagogical Honor",
      description:
        "Conferred during international academic exchange for pioneering cross-border education and leadership enrichment.",
    },
  ] as RecognitionItem[],

  internationalExposure: {
    summary:
      "Extensive international academic engagements including official university visits, faculty exchange programmes, and international research conferences.",
    destinations: [
      { city: "Singapore", country: "Singapore", region: "Southeast Asia", type: "Academic Delegation & Summit", lat: 1.3521, lng: 103.8198 },
      { city: "Kuala Lumpur", country: "Malaysia", region: "Southeast Asia", type: "Faculty Exchange & Forum", lat: 3.1390, lng: 101.6869 },
      { city: "Bali", country: "Indonesia", region: "Southeast Asia", type: "Keynote & Best Educator Honor", lat: -8.3405, lng: 115.0920 },
      { city: "Abu Dhabi", country: "UAE", region: "Middle East", type: "Institutional Summit & Research", lat: 24.4539, lng: 54.3773 },
      { city: "Dubai", country: "UAE", region: "Middle East", type: "Industry-Academia Collaboration", lat: 25.2048, lng: 55.2708 },
      { city: "Sharjah", country: "UAE", region: "Middle East", type: "Safety & Education Conference", lat: 25.3463, lng: 55.4209 },
      { city: "Ajman", country: "UAE", region: "Middle East", type: "Institutional Visit", lat: 25.4052, lng: 55.5136 },
      { city: "Umm Al Quwain", country: "UAE", region: "Middle East", type: "Academic Delegation", lat: 25.5647, lng: 55.5552 },
      { city: "Ras Al Khaimah", country: "UAE", region: "Middle East", type: "Technical Symposium", lat: 25.6741, lng: 55.9804 },
      { city: "Fujairah", country: "UAE", region: "Middle East", type: "Regional Safety Colloquium", lat: 25.1288, lng: 56.3265 },
    ] as Destination[],
  },

  conferences: {
    stats: [
      { value: "5", label: "International Conferences", desc: "Global research & chair roles" },
      { value: "3", label: "National Conferences", desc: "National symposiums & panels" },
      { value: "25+", label: "Seminars / Workshops / FDPs", desc: "Faculty & professional enrichment" },
    ],
    statement:
      "Academic engagement focused on knowledge exchange, professional development, and institutional collaboration.",
  },

  affiliations: [
    {
      acronym: "CII",
      name: "Confederation of Indian Industry",
      description: "Active engagement in higher education and industry synergy forums.",
    },
    {
      acronym: "NSC",
      name: "National Safety Council",
      description: "Promoting national safety standards, compliance, and industrial awareness.",
    },
    {
      acronym: "ICC",
      name: "Indian Chemical Council",
      description: "Collaboration on process safety, hazardous materials, and environmental health.",
    },
    {
      acronym: "IWPA",
      name: "Indian Wind Power Association",
      description: "Safety frameworks for renewable energy and sustainable engineering.",
    },
    {
      acronym: "LSSC",
      name: "Logistics Sector Skill Council",
      description: "Skill alignment for logistics, supply chain, and warehouse operations.",
    },
    {
      acronym: "SEA",
      name: "Safety Engineers Association",
      description: "Professional networking and technical standards for practicing safety engineers.",
    },
  ] as Affiliation[],

  closing: {
    tagline1: "Academic Leadership.",
    tagline2: "Professional Excellence.",
    tagline3: "Industry-Ready Education.",
    subText:
      "Driving higher education towards measurable student outcomes, institutional prestige, and lifelong professional capability.",
  },
};
