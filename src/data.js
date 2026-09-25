export const profile = {
  name: "Dhruv Bhambhani",
  email: "dhruvbhambhani@tamu.edu",
  github: "https://github.com/dhruvbhambhani",
  linkedin: "https://www.linkedin.com/in/dhruvbhambhani05",
  updated: "07/06/2026",
}

export const experience = [
  {
    role: "Incoming Software Engineering Intern",
    company: "Bank of America",
    period: "Summer 2027",
    monogram: "BA",
    logo: "/boa-logo.png",
    description: "Incoming (Summer 2027)",
    tags: ["Backend"],
  },
  {
    company: "Powell Industries",
    location: "Houston, TX",
    period: "May 2026 – Present",
    monogram: "PI",
    logo: "/powell-logo.png",
    roles: [
      {
        role: "AI Engineer, Project Lead · Remote",
        period: "Aug 2026 – Present",
        bullets: [
          "Leading development of an AI pipeline that defeatures Autodesk Inventor CAD models for COMSOL simulation.",
          "Led the financial analysis, product development, and proposals to VPs, CFO, and senior leadership.",
        ],
        tags: ["AI Automation", "Autodesk Inventor", "COMSOL", "CAD", "Product Strategy"],
      },
      {
        role: "R&D Software Engineering Intern",
        period: "May 2026 – Aug 2026",
        bullets: [
          "Productionized a multi AI-agent RAG pipeline (5 product-line agents) with proper governance, data security, and agent monitoring, preserving 75 years of institutional knowledge.",
          "Processed 200+ queries a day across 50+ onboarded R&D engineers, managers, directors, and VPs.",
        ],
        tags: ["LangChain", "Ollama", "ChromaDB", "Snowflake", "RAG", "Streamlit"],
      },
    ],
  },
  {
    role: "Lead Applied AI Researcher",
    company: "SUCCESS Lab, Texas A&M",
    period: "Apr 2026 – Present",
    monogram: "SL",
    logo: "/tamu-logo.png",
    bullets: [
      "Currently leading research in embodied AI and AI security in physical environments.",
      "Spearheaded end-to-end development of Open-Claw (agentic framework) + ROS layer for multi-robot coordination.",
    ],
    tags: ["NVIDIA Nemotron", "OpenClaw", "ROS", "micro-ROS", "LLM Security"],
    link: {
      label: "SUCCESS Lab",
      sub: "success.cse.tamu.edu",
      href: "https://success.cse.tamu.edu/",
    },
  },
  {
    role: "Computational AI Researcher",
    company: "DIGIT Lab, Texas A&M",
    period: "Apr 2026 – Present",
    monogram: "DL",
    logo: "/tamu-logo.png",
    description:
      "Co-authoring an NSF-funded ($500K) research paper on interpretable ML for mechanical engineering design rules.",
    tags: ["Interpretable ML", "Symbolic Regression", "PS-Tree", "Python"],
    link: {
      label: "DIGIT Lab",
      sub: "digitlab23.github.io",
      href: "https://digitlab23.github.io/",
    },
  },
  {
    role: "Software Engineering Intern",
    company: "JBB Asset Management LLC · Houston, TX",
    period: "May 2024 – Aug 2024",
    monogram: "JBB",
    bullets: [
      "Architected a document-synthesis pipeline compiling legally-compliant lease agreements.",
      "Built a multi-agent framework for maintenance ticket dispatch based off severity.",
      "Developed a multi-tenant web ecosystem of 5 full-stack apps centralizing operations for a 500+ unit real estate portfolio.",
    ],
    tags: ["Next.js", "Node.js", "Supabase", "Flask", "LangChain", "Redis"],
    link: {
      label: "JBB Asset Management",
      sub: "jbbassetmanagement.com",
      href: "https://www.jbbassetmanagement.com/",
    },
  },
]

export const projects = [
  {
    title: "Canvas MCP for Claude — Open-source MCP server for Canvas LMS",
    period: "May 2026 – Present",
    meta: "Open Source",
    href: "https://github.com/dhruvbhambhani/canvas-mcp",
  },
  {
    title: "CRYOS · TAMUHack26 — Runners-up, USAA Track",
    period: "Jan 2026",
    meta: "Hackathon",
    href: "https://github.com/VedSoni-dev/cryos",
  },
  {
    title: "EDEN Robotics — Humanoid Cognitive Architecture (Funded by Texas A&M)",
    period: "Jan 2026 – Present",
    meta: "Robotics",
    href: "https://github.com/EDEN-robotics",
  },
  {
    title: "Crescent Place Apartments Website",
    period: "Jan 2026 – Present",
    meta: "Real Estate",
    href: "https://www.crescentplaceapartments.com/",
  },
  {
    title: "JBB Asset Management Website",
    period: "Oct 2025 – Present",
    meta: "Web",
    href: "https://www.jbbassetmanagement.com/",
  },
]

export const volunteering = [
  {
    company: "TURTLE Robotics, Texas A&M",
    location: "College Station, TX · On-site",
    period: "Nov 2025 – Present",
    monogram: "TR",
    logo: "/turtle-logo.png",
    roles: [
      {
        role: "Software Engineer / Web Developer",
        period: "Jan 2026 – Present",
        description:
          "EDEN — building AI intelligent humanoid robots.",
        tags: ["Humanoid Robotics", "Applied AI"],
      },
      {
        role: "Web Development Committee",
        period: "Nov 2025 – May 2026",
        description:
          "Developed and maintained the TURTLE website for a 500+ member robotics organization.",
        tags: ["React", "Supabase", "Gemini LLM"],
      },
    ],
  },
  {
    role: "Web Developer",
    company: "Aggie Coding Club, Texas A&M",
    period: "Jan 2025 – May 2025",
    monogram: "AC",
    description:
      "Full-stack development for the NPC Room project — React frontend with a Java, Spring Boot, and MongoDB backend.",
    tags: ["React", "Java", "Spring Boot", "MongoDB"],
  },
  {
    role: "Data Analyst",
    company: "Aggie Data Science Club, Texas A&M",
    period: "Jan 2025 – May 2025",
    monogram: "DS",
    description:
      "Cleaned data and simulated operation efficiency using Random Forest, XGBoost, and KNN regression for the Chemical Plant Simulation & Automation project.",
    tags: ["Python", "Random Forest", "XGBoost", "ML"],
  },
]
