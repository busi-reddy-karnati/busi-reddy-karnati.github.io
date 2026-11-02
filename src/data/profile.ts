export type NavItem = {
  id: string
  label: string
  href?: string
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
  appStore?: string
}

export type ReadingItem = {
  week: number
  start: string
  title: string
  authors: string
  link: string
  learn: string
  helps: string
  hours: number
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
  { id: 'reading-list', label: 'Reading List', href: '/reading-list/' },
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
      'Own backend services and infra workflows powering usage, billing, reporting, and audit pipelines.',
    stack: ['Golang', 'Kubernetes', 'Kafka', 'Redis', 'Terraform', 'PostgreSQL'],
    outcomes: [
      'Designed and shipped microservices for usage, billing, audit, and reporting fed by 12 data planes in 8 regions.',
      'Maintained 99.99% platform uptime by introducing automated testing and reliability guardrails for billing/audit services.',
      'Built distributed ingestion support for up to 10 million audit messages per minute.',
      'Drove Terraform development to extend infrastructure-as-code workflows for zero-trust segmentation.',
      'Built workflows to propagate onboarding errors to the right surfaces, helping customers resolve setup issues faster.',
    ],
    highlights: [
      'Contributed to Illumio Terraform Provider capabilities for zero-trust segmentation using IP lists, rulesets, and application policy workflows.',
      'Led adoption of enterprise LLM coding workflows with MCP integrations for logs, build signals, and PR conversations.',
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
    stack: ['Python', 'Unity', 'Data Analysis'],
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
    stack: ['Java', 'Node.js', 'React', 'AWS', 'Caching', 'API Design'],
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
    title: 'SpotRep',
    roleTag: 'iOS & Full-Stack',
    summary:
      'A voice-first iOS fitness app: speak a set ("bench press, 3 sets of 8 at 135") and an LLM logs it as structured data, then ask an AI coach questions grounded in your own workout history.',
    architecture:
      'SwiftUI + HealthKit client backed by a FastAPI/PostgreSQL service (async SQLAlchemy, Alembic), with Google Gemini 2.5 Flash parsing voice transcripts and powering the assistant; deployed on AWS (EC2 + RDS) with GitHub Actions CI/CD auto-publishing to TestFlight via fastlane.',
    impact:
      'Hands-free logging, cardio/strength progress analytics, Apple Health sync, Sign in with Apple, CSV import, and spotter sharing for accountability — designed and built solo across the app, API, AI, and pipeline.',
    stack: ['Swift', 'SwiftUI', 'FastAPI', 'PostgreSQL', 'Google Gemini', 'AWS'],
    github: 'https://github.com/busi-reddy-karnati/Fitnesswispr',
    appStore: 'https://apps.apple.com/us/app/spotrep/id6780619146',
  },
  {
    title: 'claude-manager',
    roleTag: 'Developer Tools',
    summary:
      'A single-screen terminal dashboard that brings your Claude Code sessions, memory (CLAUDE.md files), and timestamps into one view — and lets you resume any session in your default terminal.',
    architecture:
      'Pure-Python CLI with a numbered, paginated interactive console plus a static overview dashboard; zero dependencies (Python standard library only).',
    impact:
      'A one-line install unifies session, memory, and timestamp context so you can jump back into any Claude Code session instantly.',
    stack: ['Python', 'CLI', 'Terminal', 'Developer Tools'],
    github: 'https://github.com/busi-reddy-karnati/claude-manager',
  },
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
    items: ['Golang', 'Python', 'Java', 'TypeScript', 'SQL'],
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

export const readingList: ReadingItem[] = [
  {
    week: 1,
    start: '2026-11-02',
    title: 'Human-level control through deep reinforcement learning (DQN)',
    authors: 'Mnih et al., 2015',
    link: 'https://www.nature.com/articles/nature14236',
    learn: 'An agent can learn to play Atari games from raw pixels using only trial and error and the game score.',
    helps: 'It shows the core loop that every simulation-trained agent uses: act, get a reward, improve.',
    hours: 4,
  },
  {
    week: 2,
    start: '2026-11-09',
    title: 'Proximal Policy Optimization Algorithms (PPO)',
    authors: 'Schulman et al., 2017',
    link: 'https://arxiv.org/abs/1707.06347',
    learn: 'PPO is a simple, stable training method, and most simulation-trained robots and agents use it.',
    helps: 'A stable method lets long training runs in a simulator finish without collapse.',
    hours: 5,
  },
  {
    week: 3,
    start: '2026-11-16',
    title: 'MuJoCo: A physics engine for model-based control',
    authors: 'Todorov, Erez, and Tassa, 2012',
    link: 'https://homes.cs.washington.edu/~todorov/papers/TodorovIROS12.pdf',
    learn: 'How a physics simulator models contact, friction, and joints, and where it takes shortcuts.',
    helps: 'If you know where a simulator is wrong, you know which learned skills will not transfer.',
    hours: 4,
  },
  {
    week: 4,
    start: '2026-11-23',
    title: 'Domain Randomization for Transferring Deep Neural Networks from Simulation to the Real World',
    authors: 'Tobin et al., 2017',
    link: 'https://arxiv.org/abs/1703.06907',
    learn: 'Random colors, lights, and textures in the simulator make the real world look like one more variation.',
    helps: 'It is the simplest tool to close the gap between simulation and reality.',
    hours: 3,
  },
  {
    week: 5,
    start: '2026-11-30',
    title: 'Sim-to-Real Transfer of Robotic Control with Dynamics Randomization',
    authors: 'Peng et al., 2018',
    link: 'https://arxiv.org/abs/1710.06537',
    learn: 'Random physics (mass, friction, delay) gives a policy that survives real-world physics.',
    helps: 'It extends randomization from how things look to how things move.',
    hours: 4,
  },
  {
    week: 6,
    start: '2026-12-07',
    title: 'Learning Agile and Dynamic Motor Skills for Legged Robots',
    authors: 'Hwangbo et al., 2019',
    link: 'https://arxiv.org/abs/1901.08652',
    learn: 'A small neural network trained on real motor data can replace the least accurate part of a simulator.',
    helps: 'It shows how to fix a simulator with real data, not only add more noise.',
    hours: 5,
  },
  {
    week: 7,
    start: '2026-12-14',
    title: "Solving Rubik's Cube with a Robot Hand",
    authors: 'OpenAI, 2019',
    link: 'https://arxiv.org/abs/1910.07113',
    learn: 'A simulator can make its own randomization harder as the agent gets better.',
    helps: 'An automatic curriculum removes hand-tuning and gives more robust real-world skills.',
    hours: 7,
  },
  {
    week: 8,
    start: '2026-12-21',
    title: 'Learning to Walk in Minutes Using Massively Parallel Deep Reinforcement Learning',
    authors: 'Rudin et al., 2021',
    link: 'https://arxiv.org/abs/2109.11978',
    learn: 'Thousands of simulated robots on one GPU cut training time from days to minutes.',
    helps: 'Fast training lets you test many simulator and reward designs in one day.',
    hours: 4,
  },
  {
    week: 9,
    start: '2026-12-28',
    title: 'Mastering Diverse Domains through World Models (DreamerV3)',
    authors: 'Hafner et al., 2023',
    link: 'https://arxiv.org/abs/2301.04104',
    learn: 'An agent can learn its own model of the world and practice inside that learned "dream".',
    helps: 'When no hand-built simulator exists, a learned one can take its place.',
    hours: 7,
  },
  {
    week: 10,
    start: '2027-01-04',
    title: 'Eureka: Human-Level Reward Design via Coding Large Language Models',
    authors: 'Ma et al., 2023',
    link: 'https://arxiv.org/abs/2310.12931',
    learn: 'A large language model can write and improve reward functions for simulated tasks.',
    helps: 'Reward design is often the slowest part of simulation training, and this automates it.',
    hours: 4,
  },
]
