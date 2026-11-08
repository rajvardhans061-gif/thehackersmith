import {
  BrainCircuit,
  ShieldCheck,
  Swords,
  type LucideIcon,
} from "lucide-react";

export type ProgramDomain = "Cybersecurity" | "Ethical Hacking" | "Data Science & AI";
export type ProgramPathway = "Foundation" | "Career Accelerator";

export type ProgramModule = {
  title: string;
  topics: string[];
};

export type CareerSupportService = {
  title: string;
  description: string;
};

export type ProgramDeliveryFormat = {
  mode: string;
  schedule: string;
  approach: string;
};

export type Program = {
  slug: string;
  title: string;
  domain: ProgramDomain;
  pathway: ProgramPathway;
  duration: "8 Weeks" | "6 Months";
  priceUsd: number;
  shortDescription: string;
  fullDescription: string;
  learningOutcomes: string[];
  modules: ProgramModule[];
  practicalActivities: string[];
  projects: string[];
  deliveryFormat: ProgramDeliveryFormat;
  careerSupport?: CareerSupportService[];
  ctaLabel: string;
  icon: LucideIcon;
};

const careerSupport: CareerSupportService[] = [
  {
    title: "Resume Assistance",
    description:
      "Get practical feedback on presenting relevant skills, projects, and experience on your resume.",
  },
  {
    title: "LinkedIn Profile Optimization",
    description:
      "Get guidance on improving your profile so it clearly communicates your technical focus and work.",
  },
  {
    title: "Technical Mock Interviews",
    description:
      "Practice explaining technical concepts and projects in a structured interview setting.",
  },
  {
    title: "Job-Search Guidance",
    description:
      "Receive guidance on role research, applications, and a practical job-search strategy.",
  },
];

const weekendZoomDelivery: ProgramDeliveryFormat = {
  mode: "Live instructor-led online sessions via Zoom",
  schedule: "Saturday and Sunday sessions",
  approach:
    "Hands-on practical learning, guided assignments, instructor feedback, and assessment.",
};

export const programs: Program[] = [
  {
    slug: "cybersecurity",
    title: "Cybersecurity Foundation",
    domain: "Cybersecurity",
    pathway: "Foundation",
    duration: "8 Weeks",
    priceUsd: 399,
    shortDescription:
      "Build essential cybersecurity knowledge through guided labs, foundational security skills, and a beginner project.",
    fullDescription:
      "A practical starting point for learners who want to understand networks, operating systems, security controls, and introductory security analysis. Build confidence through guided exercises, assignments, and a beginner project.",
    learningOutcomes: [
      "Explain core networking and cybersecurity concepts.",
      "Use basic Windows and Linux tools in guided exercises.",
      "Recognize common security controls and introductory ethical hacking concepts.",
      "Perform basic log analysis and inspect network traffic in a lab.",
      "Complete a beginner practical project and course assessment.",
    ],
    modules: [
      {
        title: "Networking Fundamentals",
        topics: ["Network concepts", "Common protocols", "Network traffic basics"],
      },
      {
        title: "Windows and Linux Basics",
        topics: ["Operating system fundamentals", "Files and permissions", "Command-line basics"],
      },
      {
        title: "Cybersecurity Fundamentals",
        topics: ["Core security concepts", "Common threats", "Security controls"],
      },
      {
        title: "Introduction to Ethical Hacking",
        topics: ["Authorized testing principles", "Scope and safety", "Security testing overview"],
      },
      {
        title: "Guided Security Analysis",
        topics: ["Basic log analysis", "Network traffic inspection", "Finding and explaining observations"],
      },
    ],
    practicalActivities: [
      "Complete guided security labs in authorized environments.",
      "Practice basic log analysis and network traffic inspection.",
      "Complete guided assignments with instructor feedback and assessment.",
    ],
    projects: ["Beginner practical cybersecurity project"],
    deliveryFormat: weekendZoomDelivery,
    ctaLabel: "Enquire About This Program",
    icon: ShieldCheck,
  },
  {
    slug: "cybersecurity-career-accelerator",
    title: "Cybersecurity Career Accelerator",
    domain: "Cybersecurity",
    pathway: "Career Accelerator",
    duration: "6 Months",
    priceUsd: 999,
    shortDescription:
      "Develop practical cybersecurity, SOC, SIEM, investigation, and career-readiness skills through a structured six-month pathway.",
    fullDescription:
      "A broad, hands-on pathway covering core IT and security foundations, vulnerability assessment, SOC operations, SIEM tools, incident investigation, and practical projects. The program includes dedicated career support for learners preparing for entry-level cybersecurity roles.",
    learningOutcomes: [
      "Apply networking, Windows, Linux, and Active Directory fundamentals in practical exercises.",
      "Perform guided vulnerability assessment with Nmap and Nessus.",
      "Use SOC workflows and SIEM tools to investigate security events.",
      "Work with Splunk SPL, Microsoft Sentinel, KQL, Windows Event Logs, and Sysmon in labs.",
      "Use MITRE ATT&CK to organize observations and investigation context.",
      "Build practical projects and a capstone while preparing for cybersecurity roles.",
    ],
    modules: [
      {
        title: "IT and Security Foundations",
        topics: ["Networking", "Windows and Linux", "Active Directory", "Security fundamentals"],
      },
      {
        title: "Vulnerability Assessment",
        topics: ["Assessment methodology", "Nmap", "Nessus", "Communicating findings"],
      },
      {
        title: "SOC Operations and SIEM",
        topics: ["SOC workflows", "SIEM concepts", "Splunk", "SPL"],
      },
      {
        title: "Microsoft Security Monitoring",
        topics: ["Microsoft Sentinel", "KQL", "Windows Event Logs", "Sysmon"],
      },
      {
        title: "Threat Investigation",
        topics: ["MITRE ATT&CK", "Blue Team practices", "Ethical Hacking exposure", "Incident investigations"],
      },
      {
        title: "Applied Projects and Career Preparation",
        topics: ["Home SOC lab", "Practical projects", "Capstone", "Career preparation"],
      },
    ],
    practicalActivities: [
      "Practice assessment and monitoring tasks in authorized lab environments.",
      "Investigate events using SIEM searches, Windows logs, and Sysmon data.",
      "Build a home SOC lab and complete guided assignments with instructor feedback.",
    ],
    projects: ["Home SOC lab", "Practical cybersecurity projects", "Capstone project"],
    deliveryFormat: weekendZoomDelivery,
    careerSupport,
    ctaLabel: "Enquire About This Program",
    icon: ShieldCheck,
  },
  {
    slug: "ethical-hacking",
    title: "Ethical Hacking Foundation",
    domain: "Ethical Hacking",
    pathway: "Foundation",
    duration: "8 Weeks",
    priceUsd: 399,
    shortDescription:
      "Learn ethical hacking fundamentals through authorized labs, guided exercises, and a beginner penetration-testing project.",
    fullDescription:
      "An introductory pathway to authorized security testing. Learn networking and Linux fundamentals, reconnaissance, enumeration, web security, and a basic penetration-testing workflow through guided exercises and a beginner project.",
    learningOutcomes: [
      "Explain ethical hacking methodology and authorization boundaries.",
      "Perform guided reconnaissance, Nmap scanning, and enumeration.",
      "Recognize common web application security issues.",
      "Follow a basic penetration-testing workflow in authorized labs.",
      "Complete a beginner project, assignments, and course assessment.",
    ],
    modules: [
      {
        title: "Networking and Linux Fundamentals",
        topics: ["Networking basics", "Linux command line", "Services and ports"],
      },
      {
        title: "Ethical Hacking Methodology",
        topics: ["Authorization and scope", "Testing methodology", "Responsible handling of findings"],
      },
      {
        title: "Reconnaissance and Enumeration",
        topics: ["Reconnaissance", "Nmap", "Service enumeration"],
      },
      {
        title: "Web Application Security",
        topics: ["Web fundamentals", "Common web vulnerabilities", "Basic security testing"],
      },
      {
        title: "Guided Penetration Testing",
        topics: ["Authorized security labs", "Basic testing workflow", "Findings and assessment"],
      },
    ],
    practicalActivities: [
      "Perform reconnaissance and enumeration in authorized training environments.",
      "Practice basic web security testing through guided labs.",
      "Complete assignments and an instructor-reviewed course assessment.",
    ],
    projects: ["Beginner authorized security-testing project"],
    deliveryFormat: weekendZoomDelivery,
    ctaLabel: "Enquire About This Program",
    icon: Swords,
  },
  {
    slug: "ethical-hacking-career-accelerator",
    title: "Ethical Hacking Career Accelerator",
    domain: "Ethical Hacking",
    pathway: "Career Accelerator",
    duration: "6 Months",
    priceUsd: 999,
    shortDescription:
      "Build authorized VAPT and penetration-testing skills with advanced labs, reporting practice, projects, and career preparation.",
    fullDescription:
      "A practical six-month pathway covering reconnaissance, vulnerability assessment, web application penetration testing, exploitation fundamentals, and clear vulnerability reporting. Exercises are designed for authorized labs, with projects and career preparation for VAPT and penetration-testing roles.",
    learningOutcomes: [
      "Conduct structured reconnaissance, enumeration, and vulnerability assessment in authorized labs.",
      "Assess web applications using OWASP guidance and Burp Suite.",
      "Test authentication, access controls, and common web vulnerability classes safely in labs.",
      "Understand Metasploit, exploitation, privilege escalation, and post-exploitation concepts in authorized environments.",
      "Document findings and communicate remediation guidance.",
      "Complete practical projects and a capstone while preparing for VAPT roles.",
    ],
    modules: [
      {
        title: "Advanced Networking and Linux",
        topics: ["Advanced networking", "Linux administration", "Services and enumeration"],
      },
      {
        title: "Reconnaissance and Vulnerability Assessment",
        topics: ["Reconnaissance", "Enumeration", "Vulnerability assessment", "Prioritization"],
      },
      {
        title: "Web Application Penetration Testing",
        topics: ["OWASP Top 10", "Burp Suite", "Authentication testing", "Access-control testing"],
      },
      {
        title: "Web Vulnerabilities and Exploitation",
        topics: ["SQL Injection", "XSS", "Other web vulnerabilities", "Metasploit fundamentals"],
      },
      {
        title: "Authorized Exploitation and Reporting",
        topics: ["Privilege escalation", "Post-exploitation in authorized labs", "Vulnerability reporting", "Remediation"],
      },
      {
        title: "Projects and Career Preparation",
        topics: ["Practical projects", "Capstone", "VAPT role preparation"],
      },
    ],
    practicalActivities: [
      "Test intentionally vulnerable applications and systems in authorized labs.",
      "Practice web application testing, exploitation fundamentals, and remediation reporting.",
      "Complete guided assignments with instructor feedback and assessment.",
    ],
    projects: ["Practical penetration-testing projects", "Capstone project"],
    deliveryFormat: weekendZoomDelivery,
    careerSupport,
    ctaLabel: "Enquire About This Program",
    icon: Swords,
  },
  {
    slug: "data-science-ai",
    title: "Data Science & AI Foundation",
    domain: "Data Science & AI",
    pathway: "Foundation",
    duration: "8 Weeks",
    priceUsd: 399,
    shortDescription:
      "Start with Python, data preparation, visualization, statistics, and introductory machine learning through a beginner project.",
    fullDescription:
      "A beginner-friendly introduction to data science and AI. Build Python and data-handling skills, explore datasets, learn introductory statistics and machine learning, and apply the concepts in a practical project.",
    learningOutcomes: [
      "Describe introductory data science and AI concepts.",
      "Use Python fundamentals, data types, and data structures.",
      "Work with NumPy and Pandas for basic data tasks.",
      "Clean, explore, and visualize data and describe introductory statistical ideas.",
      "Explain basic machine-learning concepts and complete a beginner project.",
    ],
    modules: [
      {
        title: "Introduction and Python Fundamentals",
        topics: ["Data Science and AI overview", "Python fundamentals", "Data types", "Data structures"],
      },
      {
        title: "Working with Data",
        topics: ["NumPy fundamentals", "Pandas fundamentals", "Data cleaning", "Preprocessing"],
      },
      {
        title: "Exploratory Analysis and Visualization",
        topics: ["Exploratory Data Analysis", "Data visualization", "Interpreting patterns"],
      },
      {
        title: "Statistics and Machine Learning Introduction",
        topics: ["Introductory statistics", "Machine Learning concepts", "Modeling overview"],
      },
      {
        title: "Practical Project and Assessment",
        topics: ["Guided project", "Assignments", "Completion assessment"],
      },
    ],
    practicalActivities: [
      "Practice Python and data analysis with guided exercises.",
      "Clean and explore datasets, then communicate findings with visualizations.",
      "Complete assignments with instructor feedback and a completion assessment.",
    ],
    projects: ["Beginner data science practical project"],
    deliveryFormat: weekendZoomDelivery,
    ctaLabel: "Enquire About This Program",
    icon: BrainCircuit,
  },
  {
    slug: "data-science-ai-career-accelerator",
    title: "Data Science & AI Career Accelerator",
    domain: "Data Science & AI",
    pathway: "Career Accelerator",
    duration: "6 Months",
    priceUsd: 999,
    shortDescription:
      "Build applied data science and AI skills with Python, SQL, machine learning, portfolio projects, and dedicated career support.",
    fullDescription:
      "A structured six-month pathway covering data preparation, analysis, visualization, machine learning, and introductory deep learning and generative AI applications. Build portfolio projects and prepare for entry-level Data Science and AI roles with dedicated career support.",
    learningOutcomes: [
      "Use advanced Python, NumPy, Pandas, SQL, and database fundamentals for data work.",
      "Apply statistics, probability, data cleaning, and feature engineering techniques.",
      "Conduct exploratory analysis and communicate findings using visualization tools.",
      "Train, evaluate, and optimize machine-learning models.",
      "Describe introductory deep-learning concepts and apply generative AI tools to practical tasks.",
      "Build portfolio projects and a capstone while preparing for entry-level roles.",
    ],
    modules: [
      {
        title: "Programming and Data Foundations",
        topics: ["Advanced Python", "NumPy", "Pandas", "SQL", "Database fundamentals"],
      },
      {
        title: "Statistics and Data Preparation",
        topics: ["Statistics", "Probability", "Data cleaning", "Feature engineering"],
      },
      {
        title: "Exploratory Analysis and Visualization",
        topics: ["Exploratory Data Analysis", "Data visualization tools", "Communicating insights"],
      },
      {
        title: "Machine Learning",
        topics: ["Machine-learning algorithms", "Model evaluation", "Model optimization"],
      },
      {
        title: "Deep Learning and Generative AI",
        topics: ["Deep-learning introduction", "Generative AI", "Practical AI applications"],
      },
      {
        title: "Portfolio and Career Preparation",
        topics: ["Portfolio projects", "Capstone", "Entry-level role preparation"],
      },
    ],
    practicalActivities: [
      "Work through guided Python, SQL, analysis, and modeling exercises.",
      "Evaluate and improve models using structured practice datasets.",
      "Apply generative AI tools to practical tasks and document appropriate use.",
    ],
    projects: ["Portfolio data science projects", "Capstone project"],
    deliveryFormat: weekendZoomDelivery,
    careerSupport,
    ctaLabel: "Enquire About This Program",
    icon: BrainCircuit,
  },
];

export const featuredPrograms = programs.filter(
  (program) => program.pathway === "Foundation"
);

export function getProgramBySlug(slug: string) {
  return programs.find((program) => program.slug === slug);
}

export function getProgramSlugFromSearch(search: string) {
  const requestedSlug = new URLSearchParams(search).get("program");

  return requestedSlug && getProgramBySlug(requestedSlug)
    ? requestedSlug
    : programs[0].slug;
}
