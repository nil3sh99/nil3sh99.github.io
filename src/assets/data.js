// ─────────────────────────────────────────────────────────────────────────────
// data.js — single source of truth for ALL portfolio content.
// To add/update content, edit the relevant section below.
// No component changes required — everything is data-driven.
// ─────────────────────────────────────────────────────────────────────────────

const data = {
  // ── Hero ────────────────────────────────────────────────────────────────────
  name: "Nilesh Aggarwal",
  title: "Cloud & AI Platform Engineer",
  tagline:
    "Building enterprise-scale AI systems and cloud platforms that reduce costs, accelerate delivery, and scale globally — currently GCP Admin at ATCO Ltd.",
  location: "Alberta, CA",
  social: {
    github: "https://github.com/nil3sh99",
    linkedin: "https://www.linkedin.com/in/nilesh-dev/",
    email: "agnilesh8199@gmail.com",
  },
  // Place your resume PDF at public/resume/nilesh_aggarwal.pdf
  resumeUrl: process.env.PUBLIC_URL + "/resume/nilesh_aggarwal.pdf",

  // ── Impact Stats ────────────────────────────────────────────────────────────
  // number: the integer to count up to
  // prefix/suffix: text prepended/appended to the number (e.g. "$", "+", "%")
  // label: short description shown below the number
  impactStats: [
    { number: 15,  prefix: "$", suffix: "K+", label: "CAD Annual Cloud Savings" },
    { number: 75,  prefix: "",  suffix: "%",  label: "Faster RFP Proposals" },
    { number: 400, prefix: "",  suffix: "%",  label: "Faster CI/CD Pipelines" },
    { number: 150, prefix: "",  suffix: "+",  label: "Enterprise AI Users" },
    { number: 50,  prefix: "",  suffix: "+",  label: "EOL Servers Automated" },
    { number: 100, prefix: "",  suffix: "%",  label: "Security Compliance" },
  ],

  // ── Domain Category Cards ────────────────────────────────────────────────────
  // Each category opens a modal listing its projects.
  // To add a new category: append an entry to this array.
  // To add a project to an existing category: append to its `projects` array.
  categories: [
    {
      id: "ai",
      icon: "🤖",
      title: "AI & Intelligent Systems",
      subtitle: "RAG Agents · Gemini Enterprise · ML Pipelines · CCAI",
      color: "from-purple-600 to-violet-700",
      projects: [
        {
          title: "RAG-Based Search Agent for atco.com",
          company: "ATCO Ltd.",
          year: "2025",
          tags: ["RAG", "Gemini", "Python", "GCP", "Cloud Run", "Vector Search"],
          description:
            "Built and deployed a Retrieval-Augmented Generation (RAG) search agent for atco.com, dramatically improving search accuracy and unstructured data retrieval across public-facing websites. Replaced keyword-based search with semantic, context-aware retrieval.",
          impact: "Improved enterprise search accuracy across public web properties",
        },
        {
          title: "AI Agent for RFP Proposals",
          company: "ATCO Ltd.",
          year: "2025",
          tags: ["LLM", "Python Flask", "Multi-Agent", "GCP", "REST API"],
          description:
            "Developed a multi-agent AI system for RFP (Request for Proposal) generation, integrating a custom Python web app with LLM backends. The system drafts structured enterprise proposals by pulling from historical RFP data and company knowledge bases.",
          impact: "75% reduction in proposal drafting time",
        },
        {
          title: "Gemini Enterprise Productivity App",
          company: "ATCO Ltd.",
          year: "2025",
          tags: ["Gemini Enterprise", "Outlook API", "SharePoint", "OneDrive", "OAuth2"],
          description:
            "Created a personal-productivity AI app powered by Gemini Enterprise and rolled it out company-wide. Enables secure API connections to Outlook, SharePoint, and OneDrive — giving employees a governed alternative to Microsoft CoPilot.",
          impact: "150+ active users in the first month of rollout",
        },
        {
          title: "EOL Server ML Monitoring Pipeline",
          company: "ATCO Ltd.",
          year: "2025",
          tags: ["BindPlane", "Gemini", "ServiceNow", "ML", "Log Analysis", "Pub/Sub"],
          description:
            "Engineered a cross-vendor log ingestion and ML analysis pipeline using BindPlane and Gemini Enterprise to monitor 50+ End-of-Life Windows Server 2008 assets. Bypassed Dynatrace agent limitations to auto-create incidents in ServiceNow.",
          impact: "Reduced MTTD on critical infrastructure; 50+ EOL servers now fully monitored",
        },
      ],
    },
    {
      id: "cloud",
      icon: "☁️",
      title: "Cloud Platform Engineering",
      subtitle: "GCP · AWS · Landing Zones · Networking · DR",
      color: "from-blue-600 to-sky-500",
      projects: [
        {
          title: "Hub-and-Spoke Landing Zone Architecture",
          company: "Bell Canada",
          year: "2023–2025",
          tags: ["GCP", "AWS AFT", "Shared VPC", "Transit Gateway", "RAM", "Terraform"],
          description:
            "Built a hub-and-spoke landing zone reference architecture for both AWS and GCP alongside Enterprise Architects, establishing a scalable multi-account/project cloud foundation with centralized networking and governance.",
          impact: "50% reduction in cloud environment delivery time",
        },
        {
          title: "Cross-Platform Disaster Recovery Architecture",
          company: "ATCO Ltd.",
          year: "2025",
          tags: ["GCP", "Microsoft 365", "Google Workspace", "DR", "HA", "Failover"],
          description:
            "Designed a highly resilient cross-platform DR architecture using Google Workspace as an automated failover for Microsoft 365, protecting critical communication services during severe outages.",
          impact: "Protects 400 critical users from communication-layer outages",
        },
        {
          title: "GCP VPC Networking & Palo Alto Integration",
          company: "ATCO Ltd.",
          year: "2025",
          tags: ["GCP VPC", "Palo Alto", "Private Service Access", "Cloud DNS", "KMS"],
          description:
            "Diagnosed and fixed critical routing and bottleneck issues between GCP VPCs and Palo Alto networks, restoring broken Windows KMS licensing and Domain Controller synchronisation across the enterprise network.",
          impact: "Restored enterprise-critical services; zero further network-related outages",
        },
        {
          title: "GCP Cost Optimisation & FinOps",
          company: "ATCO Ltd.",
          year: "2025",
          tags: ["GCP Billing", "FinOps", "Cloud Governance", "Resource Cleanup"],
          description:
            "Led a GCP resource cleanup initiative across business units — decommissioning stale resources, migrating workloads, and restructuring billing accounts with proper labels and budget alerts.",
          impact: "$15K CAD annual savings in year one",
        },
        {
          title: "AWS Account Factory for Terraform (AFT)",
          company: "Bell Canada",
          year: "2023–2025",
          tags: ["AWS AFT", "Control Tower", "Terraform", "Landing Zone", "EC2"],
          description:
            "Implemented AWS Account Factory for Terraform as part of the enterprise cloud landing zone, enabling repeatable, governed, and policy-compliant AWS account provisioning at scale.",
          impact: "Self-serve governed cloud account delivery for internal engineering teams",
        },
      ],
    },
    {
      id: "devops",
      icon: "⚙️",
      title: "DevOps & Automation",
      subtitle: "Terraform · Ansible · CI/CD · Serverless · IaC",
      color: "from-emerald-600 to-teal-500",
      projects: [
        {
          title: "CI/CD Pipeline Restructure",
          company: "Bell Canada",
          year: "2023–2025",
          tags: ["TeamCity", "GitLab CI/CD", "GitHub Actions", "Pipeline Optimization"],
          description:
            "Collaborated with the central tools team to restructure CI/CD pipelines across the platform engineering org, eliminating redundant stages, parallelising jobs, and introducing caching strategies.",
          impact: "400% decrease in pipeline execution time",
        },
        {
          title: "GCP Onboarding & VM Provisioning Automation",
          company: "ATCO Ltd.",
          year: "2025",
          tags: ["ServiceNow", "Terraform", "GCP", "Workflow Automation", "Python"],
          description:
            "Collaborated with the ServiceNow team to build automated workflows for GCP user onboarding and VM provisioning, replacing a previously manual multi-step request process.",
          impact: "10+ hours of administrative overhead eliminated per request",
        },
        {
          title: "AWS Serverless Application Platform",
          company: "Bell Canada",
          year: "2023–2025",
          tags: ["AWS Step Functions", "Lambda", "CloudFormation", "SAM", "TeamCity"],
          description:
            "Built SAM-based serverless applications using AWS Step Functions, Lambdas, and CloudFormation, enabling fully automated serverless deployments via TeamCity and retiring a large volume of legacy procedural code.",
          impact: "100% legacy deployment code eliminated; fully serverless delivery on AWS",
        },
        {
          title: "Automated Change Management via Jira & Ansible",
          company: "Bell Canada",
          year: "2023–2025",
          tags: ["Jira API", "Python", "Ansible", "GCP", "AWS", "ServiceNow"],
          description:
            "Created an automated Change Management process using the Jira API, Python, and Ansible for GCP and AWS deployments, replacing manually created change tickets with auto-generated, context-rich records.",
          impact: "50+ minutes per developer per week saved",
        },
        {
          title: "Operational Alerts & Monitoring Automation",
          company: "ATCO Ltd.",
          year: "2025",
          tags: ["Power Automate", "Cloud Run", "Pub/Sub", "MS Teams"],
          description:
            "Built serverless automations connecting GCP Pub/Sub, Cloud Run, and Power Automate to push real-time operational alerts to MS Teams channels, replacing on-call manual monitoring.",
          impact: "40+ hours per month of manual monitoring time eliminated",
        },
      ],
    },
    {
      id: "security",
      icon: "🔐",
      title: "Security & Compliance",
      subtitle: "HashiCorp Vault · IAM · SOC 1/2 · Zero-Trust",
      color: "from-amber-500 to-orange-600",
      projects: [
        {
          title: "HashiCorp Vault Dynamic Credential Rotation",
          company: "Bell Canada",
          year: "2023–2025",
          tags: ["HashiCorp Vault", "Dynamic Secrets", "GCP", "AWS", "IaC Security"],
          description:
            "Implemented HashiCorp Vault dynamic credential rotation across the hybrid cloud (GCP + AWS) environment, replacing all long-lived static service account keys with short-lived, auto-rotated credentials in CI/CD pipelines.",
          impact: "All static service account keys eliminated from CI/CD pipelines",
        },
        {
          title: "Enterprise Security Patching Program",
          company: "ATCO Ltd.",
          year: "2025",
          tags: ["Windows Server", "Linux", "Patch Management", "Compliance"],
          description:
            "Managed monthly security patching cycles for all Windows and Linux servers, coordinating planned downtime windows across multiple business units and tracking remediation status to audit readiness.",
          impact: "100% compliance posture maintained across all managed servers",
        },
        {
          title: "Azure AD Identity & Access Management",
          company: "Bell Canada",
          year: "2023–2025",
          tags: ["Azure Active Directory", "IAM", "Identity Center", "Access Control"],
          description:
            "Managed user access controls via Azure Active Directory for the Bell Entry Access Point, maintaining identity governance and enforcing least-privilege access across GCP and AWS cloud environments.",
          impact: "Centralised identity management for all cloud platform access",
        },
        {
          title: "SOC 1 & SOC 2 IT Controls Testing",
          company: "Ernst & Young",
          year: "2020–2021",
          tags: ["SOC 1", "SOC 2", "IT Audit", "FAIT", "Risk Management", "RCM"],
          description:
            "Designed and executed IT general controls (ITGC) and application controls testing for SOC 1/2 audit engagements. Formulated Risk Control Matrices, tested Design and Operating Effectiveness, and delivered Financial Audit IT Integration (FAIT) assessments.",
          impact: "Multiple SOC 1/2 audit engagements delivered on time for enterprise clients",
        },
      ],
    },
    {
      id: "projects",
      icon: "🚀",
      title: "Open Source & Projects",
      subtitle: "React · Python · Java · Personal Builds",
      color: "from-pink-600 to-rose-500",
      projects: [
        {
          title: "Movie Search Application",
          company: "Personal Project",
          year: "2022",
          tags: ["React", "OMDB API", "Netlify", "JavaScript"],
          description:
            "An open-source movie search application built with React and the OMDB API, featuring real-time search, movie details, and a responsive layout hosted on Netlify.",
          impact: "Publicly accessible and live",
          link: "https://jovial-noyce-a00687.netlify.app/",
        },
        {
          title: "Non-Contact Heart Rate Detection",
          company: "Academic Research",
          year: "2022",
          tags: ["Python", "Image Processing", "rPPG", "JavaScript"],
          description:
            "Application that detects a user's heart rate via webcam using remote photoplethysmography (rPPG) — no wearable device required. Built as an academic project exploring computer vision for health monitoring.",
          impact: "Demonstrated heart rate detection without any physical sensors",
        },
        {
          title: "TCP Port Scanner",
          company: "Nakisa Inc.",
          year: "2022",
          tags: ["Java", "Spring Boot", "Networking", "Admin Dashboard"],
          description:
            "Built a TCP Port Scanner feature for Nakisa's internal admin dashboard, scanning the open/closed port status across 100+ customer accounts and surfacing results in a summary view.",
          impact: "Admin visibility of 100+ customer network port statuses",
        },
        {
          title: "AWS DB Cleanup Automation",
          company: "Nakisa Inc.",
          year: "2022",
          tags: ["Linux", "CRON", "REST API", "AWS RDS", "Bash"],
          description:
            "Automated the deletion of revoked connector instances from an AWS RDS MySQL database by writing 4 Linux CRON jobs that call the internal REST API on a schedule, fully replacing a manual admin-dashboard process.",
          impact: "80% reduction in manual database cleanup effort",
        },
      ],
    },
  ],

  // ── Work Experience Timeline ─────────────────────────────────────────────────
  // To add a new role: append an entry to this array.
  // `color` is a Tailwind gradient (from-X to-Y) for the timeline dot.
  // `icon` is an emoji shown inside the dot.
  experience: [
    {
      role: "Google Cloud Platform Admin",
      company: "ATCO Ltd.",
      location: "Alberta, CA",
      period: "April 2025 – Present",
      type: "Full Time",
      color: "from-blue-500 to-cyan-500",
      icon: "⚡",
      highlights: [
        "Built and deployed a RAG-based search agent for atco.com, improving search accuracy across public-facing websites.",
        "Developed an AI agent system for RFP proposals, reducing drafting time by 75% using LLM backends.",
        "Rolled out a Gemini Enterprise productivity app company-wide to 150+ active users in the first month.",
        "Optimised GCP cloud spend and achieved $15K CAD annual savings in year one.",
      ],
    },
    {
      role: "Cloud Automation Engineer",
      company: "Bell Canada",
      location: "Alberta, CA",
      period: "December 2022 – April 2025",
      type: "Full Time",
      color: "from-indigo-500 to-purple-500",
      icon: "📡",
      highlights: [
        "Built hub-and-spoke landing zone reference architecture for AWS and GCP, cutting environment delivery time by 50%.",
        "Implemented HashiCorp Vault dynamic credential rotation, eliminating all static service account keys.",
        "Restructured CI/CD pipelines with the central tools team, decreasing execution time by 400%.",
        "Automated change management via Jira API and Ansible, saving developers 50+ minutes per week.",
      ],
    },
    {
      role: "Cloud Engineer",
      company: "Nakisa Inc.",
      location: "Montreal, CA",
      period: "May 2022 – December 2022",
      type: "Internship",
      color: "from-emerald-500 to-teal-500",
      icon: "💼",
      highlights: [
        "Deployed micro-services using Java Spring Boot with Prometheus & Grafana health dashboards.",
        "Built a TCP Port Scanner for 100+ customer accounts in the internal admin dashboard.",
        "Automated AWS RDS cleanup via Linux CRON jobs, reducing manual effort by 80%.",
        "Resolved Apache Kafka and Kubernetes ACL/SSL issues before they escalated to production.",
      ],
    },
    {
      role: "Technical Analyst",
      company: "Ernst & Young",
      location: "India",
      period: "September 2020 – February 2021",
      type: "Full Time",
      color: "from-amber-500 to-orange-500",
      icon: "📊",
      highlights: [
        "Executed SOC 1 & SOC 2 IT controls testing (ITGC + application controls) for enterprise audit engagements.",
        "Tested access management, change management, DR, and job scheduling controls.",
        "Formulated Risk Control Matrices and assessed Design and Operating Effectiveness of controls.",
      ],
    },
  ],

  // ── Certifications & Awards ──────────────────────────────────────────────────
  // `color` is a Tailwind gradient used for the date badge.
  certifications: [
    {
      name: "Google Cloud Certified Generative AI Leader",
      issuer: "Google Cloud",
      date: "Feb 2026",
      icon: "🤖",
      color: "from-purple-600 to-indigo-600",
    },
    {
      name: "Bell Excellence & Innovation Award",
      issuer: "Bell Canada",
      date: "Feb 2025",
      icon: "🏆",
      color: "from-blue-600 to-sky-600",
    },
    {
      name: "GCP Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "Jan 2025",
      icon: "☁️",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "HashiCorp Terraform Associate",
      issuer: "HashiCorp",
      date: "Jan 2024",
      icon: "🔧",
      color: "from-violet-600 to-purple-600",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "May 2023",
      icon: "🌩️",
      color: "from-amber-500 to-orange-500",
    },
    {
      name: "GSA Academic Excellence Award",
      issuer: "Concordia University",
      date: "April 2022",
      icon: "🎓",
      color: "from-emerald-600 to-teal-600",
    },
  ],

  // ── Tech Stack ───────────────────────────────────────────────────────────────
  // Add or remove items; `category` controls which row they appear in.
  techStack: [
    { name: "Google Cloud Platform", category: "Cloud",      icon: "☁️" },
    { name: "Amazon Web Services",   category: "Cloud",      icon: "🌩️" },
    { name: "Terraform",             category: "IaC",        icon: "🔧" },
    { name: "Terragrunt",            category: "IaC",        icon: "🏗️" },
    { name: "Ansible",               category: "IaC",        icon: "⚙️" },
    { name: "GitHub Actions",         category: "CI/CD",     icon: "🔄" },
    { name: "GitLab CI/CD",          category: "CI/CD",     icon: "🦊" },
    { name: "TeamCity",              category: "CI/CD",     icon: "🚀" },
    { name: "Gemini Enterprise",     category: "AI / ML",   icon: "🤖" },
    { name: "RAG / LLM Systems",     category: "AI / ML",   icon: "🧠" },
    { name: "BindPlane",             category: "AI / ML",   icon: "📡" },
    { name: "Python",                category: "Languages", icon: "🐍" },
    { name: "Java (Spring Boot)",    category: "Languages", icon: "☕" },
    { name: "GoLang",                category: "Languages", icon: "🔹" },
    { name: "Docker",                category: "DevOps",    icon: "🐋" },
    { name: "Kubernetes",            category: "DevOps",    icon: "☸️" },
    { name: "Cloud Run",             category: "DevOps",    icon: "▶️" },
    { name: "HashiCorp Vault",       category: "Security",  icon: "🔐" },
    { name: "Palo Alto Networks",    category: "Security",  icon: "🛡️" },
    { name: "Azure Active Directory",category: "Security",  icon: "🪪" },
    { name: "ServiceNow",            category: "Platforms", icon: "🎫" },
    { name: "Jira",                  category: "Platforms", icon: "📋" },
    { name: "Power Automate",        category: "Platforms", icon: "⚡" },
  ],
};

export default data;
