export type NavItem = {
  id: string
  label: string
}

export type ExperienceItem = {
  id: string
  company: string
  role: string
  period: string
  location: string
  summary: string
  stack: string[]
  outcomes: string[]
  highlights: string[]
}

export type ProjectItem = {
  title: string
  roleTag: string
  summary: string
  architecture: string
  impact: string
  stack: string[]
  github: string
}

export const profile = {
  name: 'Busi Reddy Karnati',
  location: 'Sunnyvale, California',
  email: 'busisatya@gmail.com',
  phone: '+1 (206) 353-0461',
  linkedin: 'https://www.linkedin.com/in/busi-reddy-karnati/',
  github: 'https://github.com/busi-reddy-karnati',
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'digital-resume', label: 'Digital Resume' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const experiences: ExperienceItem[] = [
  {
    id: 'illumio',
    company: 'Illumio',
    role: 'Senior Member of Technical Staff',
    period: 'Feb 2024 - Present',
    location: 'Sunnyvale, California',
    summary:
      'Own backend services and infra workflows powering usage, billing, reporting, and audit pipelines across global data planes.',
    stack: ['Golang', 'Kubernetes', 'Kafka', 'Redis', 'Terraform', 'Azure OpenAI'],
    outcomes: [
      'Designed and shipped microservices for usage, billing, audit, and reporting fed by 12 data planes in 8 regions.',
      'Maintained 99.99% platform uptime by introducing automated testing and reliability guardrails for billing/audit services.',
      'Built distributed ingestion support for up to 10 million audit messages per minute.',
    ],
    highlights: [
      'Contributed to Illumio Terraform Provider capabilities for zero-trust segmentation using IP lists, rulesets, and application policy workflows.',
      'Built an end-to-end PR review assistant powered by Azure Foundry LLMs that evaluates PR comments against repository standards.',
      'Led adoption of enterprise LLM coding workflows with MCP integrations for logs, build signals, and PR conversations.',
      'Drove a 37% reduction in Sev-2 incidents by introducing SLO-backed alerting and dependency-level error budgets.',
      'Reduced cloud spend by 18% by right-sizing compute pools and implementing queue-aware autoscaling policies.',
      'Cut median audit pipeline latency from 2.8s to 1.1s through partition strategy redesign and cache warmups.',
    ],
  },
  {
    id: 'pitt',
    company: 'Voice Research Lab, University of Pittsburgh',
    role: 'Systems Programmer',
    period: 'Jul 2023 - Feb 2024',
    location: 'Pittsburgh, Pennsylvania',
    summary:
      'Built simulation and data-collection workflows for stress-response research using physiological and voice signal features.',
    stack: ['Python', 'Unity', 'Signal Processing', 'Data Analysis'],
    outcomes: [
      'Collected EKG, glottal angle, and PEP metrics and analyzed behavior patterns between baseline and stress conditions.',
      'Built 3D Unity simulations to model scenario variance and capture high-quality participant response data.',
    ],
    highlights: [
      'Improved experiment repeatability by standardizing simulation scenarios and instrumentation checkpoints.',
      'Partnered with researchers to convert raw sensor data into actionable feature sets for modeling.',
      'Created an automated data-quality validation pipeline that reduced unusable samples by 42%.',
      'Accelerated experiment-to-analysis turnaround by 30% with scripted preprocessing and feature extraction.',
    ],
  },
  {
    id: 'oscar-health',
    company: 'Oscar Health',
    role: 'Software Engineer Intern',
    period: 'May 2022 - Aug 2022',
    location: 'New York City, New York',
    summary:
      'Developed backend tools and shadow testing systems for insurance claims adjudication at scale.',
    stack: ['Python', 'Flask', 'SQL', 'Distributed Systems'],
    outcomes: [
      'Built a claims navigation and statistics system that significantly reduced engineering overhead.',
      'Designed a scalable shadow-testing framework capable of handling over 300,000 claims per month.',
      'Redesigned claim-processing data flow to reduce cross-layer data exchange and improve extraction precision.',
    ],
    highlights: [
      'Designed a data distribution mechanism that accelerated shadow testing by 90% using forms-pattern analysis.',
      'Partnered with stakeholders to validate adjudication outcomes against production parity checks.',
      'Reduced false-positive mismatch alerts by 45% by introducing deterministic comparison heuristics.',
      'Improved API p95 latency by 34% with query plan tuning and selective materialization.',
    ],
  },
  {
    id: 'nyu',
    company: 'New York University',
    role: 'Course Assistant & Research Assistant',
    period: "Spring '22, Fall '22, Spring '23",
    location: 'New York City, New York',
    summary:
      'Supported computer science teaching and NLP research across engineering and business school programs.',
    stack: ['Python', 'NLP', 'Teaching', 'Mentorship'],
    outcomes: [
      'Supported Foundations of Computer Science and Big Data Systems courses across multiple semesters.',
      'Assisted NLP lab initiatives in Stern Business School with research and implementation tasks.',
    ],
    highlights: [
      'Mentored students through office hours and project reviews focused on algorithmic and systems thinking.',
      'Helped design practical assignments that connected theory to production-grade engineering patterns.',
      'Built lightweight grading automation that cut turnaround times by 50% during peak submission windows.',
      'Improved student project quality by introducing architecture review checklists and debugging playbooks.',
    ],
  },
  {
    id: 'lti',
    company: 'Larsen and Toubro Infotech',
    role: 'Software Engineer',
    period: 'Nov 2020 - Aug 2021',
    location: 'Mumbai, India',
    summary:
      'Delivered frontend and backend improvements for public-sector and enterprise systems with high user volume.',
    stack: ['Node.js', 'React', 'AWS', 'Caching', 'API Design'],
    outcomes: [
      'Redesigned the MoSPI website with React to improve responsiveness and reduce latency by 20%.',
      'Reworked performance indicator APIs with caching, reducing turnaround times by 30%.',
      'Delivered an internal query-escalation system adopted by over 40,000 users.',
    ],
    highlights: [
      'Coordinated with cross-functional stakeholders to deliver reliable releases under tight timelines.',
      'Improved maintainability by documenting service interfaces and failure-handling conventions.',
      'Increased production deployment frequency by 2.2x by streamlining CI checks and release approvals.',
      'Lowered support ticket volume by 28% through proactive telemetry and API contract validation.',
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'Global Audit Ingestion Fabric',
    roleTag: 'Infrastructure Engineering',
    summary:
      'Designed a fault-tolerant ingestion pipeline for distributed audit updates from global data planes.',
    architecture:
      'Partitioned stream processing with idempotent consumers, retry queues, and region-aware failover.',
    impact:
      'Scaled to 10M messages/minute while keeping near-real-time audit visibility for downstream systems.',
    stack: ['Golang', 'Kafka', 'Redis', 'Kubernetes'],
    github: 'https://github.com/busi-reddy-karnati',
  },
  {
    title: 'Policy-Aware Terraform Extensions',
    roleTag: 'Systems Engineering',
    summary:
      'Extended Terraform provider capabilities to support zero-trust segmentation primitives.',
    architecture:
      'Provider schema enhancements, lifecycle-safe plan/apply workflows, and validation hooks.',
    impact:
      'Accelerated secure network policy rollout with repeatable infrastructure-as-code workflows.',
    stack: ['Terraform', 'Golang', 'Policy Engines'],
    github: 'https://github.com/busi-reddy-karnati',
  },
  {
    title: 'LLM-Powered PR Review Assistant',
    roleTag: 'Software Engineering',
    summary:
      'Built an intelligent PR review pipeline that evaluates changes against repository coding standards.',
    architecture:
      'Webhook-driven pipeline with context retrieval, prompt orchestration, and reviewer-facing summaries.',
    impact:
      'Improved review consistency and reduced manual feedback turnaround during high-volume release cycles.',
    stack: ['TypeScript', 'Azure OpenAI', 'Webhooks', 'CI Integrations'],
    github: 'https://github.com/busi-reddy-karnati',
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Golang', 'Python', 'TypeScript', 'SQL'],
  },
  {
    title: 'Backend & Data',
    items: ['Microservices', 'REST APIs', 'Kafka', 'Redis', 'PostgreSQL'],
  },
  {
    title: 'Infrastructure',
    items: ['Kubernetes', 'Docker', 'Terraform', 'Linux', 'CI/CD'],
  },
  {
    title: 'Systems & Reliability',
    items: ['Distributed Systems', 'SLOs', 'Observability', 'Fault Tolerance'],
  },
]
