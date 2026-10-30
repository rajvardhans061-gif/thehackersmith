import {
  ShieldCheck,
  FlaskConical,
  BrainCircuit,
} from "lucide-react";

export const programs = [
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    shortTitle: "Cybersecurity",
    description:
      "Build practical skills in security operations, network defense, incident response and modern cybersecurity practices.",
    icon: ShieldCheck,
    category: "Security",
    level: "Beginner to Advanced",
    format: "Live Instructor-Led",
    featured: true,

    overview:
      "A practical cybersecurity learning path designed to build the technical foundation and hands-on skills required to understand, monitor and defend modern technology environments.",

    topics: [
      "Cybersecurity Fundamentals",
      "Network Security",
      "SOC Operations",
      "Security Monitoring",
      "Incident Response",
      "Threat Detection",
      "SIEM Fundamentals",
      "Windows & Linux Security",
    ],

    outcomes: [
      "Understand modern cybersecurity concepts",
      "Analyze security events and logs",
      "Work with practical security tools",
      "Understand SOC workflows",
      "Investigate common security incidents",
      "Build practical cybersecurity projects",
    ],
  },

  {
    slug: "ethical-hacking",
    title: "Ethical Hacking",
    shortTitle: "Ethical Hacking",
    description:
      "Learn penetration testing, vulnerability assessment and web security through practical, authorized hands-on training.",
    icon: FlaskConical,
    category: "Offensive Security",
    level: "Beginner to Advanced",
    format: "Hands-On Training",
    featured: true,

    overview:
      "A hands-on ethical hacking path focused on understanding vulnerabilities, security testing methodologies and authorized penetration testing techniques.",

    topics: [
      "Ethical Hacking Fundamentals",
      "Reconnaissance & OSINT",
      "Network Security Testing",
      "Vulnerability Assessment",
      "Web Application Security",
      "Burp Suite",
      "Nmap",
      "Metasploit",
    ],

    outcomes: [
      "Understand penetration testing methodologies",
      "Perform authorized security assessments",
      "Identify common vulnerabilities",
      "Analyze web application security issues",
      "Use industry-standard security tools",
      "Build practical security testing projects",
    ],
  },

  {
    slug: "data-science-ai",
    title: "Data Science & AI",
    shortTitle: "Data Science & AI",
    description:
      "Develop practical skills in data analysis, machine learning, AI tools and real-world technology applications.",
    icon: BrainCircuit,
    category: "Data & AI",
    level: "Beginner to Advanced",
    format: "Practical Learning",
    featured: true,

    overview:
      "A practical learning path covering data analysis, machine learning and modern AI technologies with a focus on real-world applications.",

    topics: [
      "Python for Data Science",
      "Data Analysis",
      "Data Visualization",
      "Statistics Fundamentals",
      "Machine Learning",
      "AI Fundamentals",
      "Generative AI",
      "Real-World AI Applications",
    ],

    outcomes: [
      "Work with real-world datasets",
      "Perform practical data analysis",
      "Build machine learning models",
      "Understand modern AI concepts",
      "Use AI tools effectively",
      "Build portfolio-ready data and AI projects",
    ],
  },
];

export const featuredPrograms = programs.filter(
  (program) => program.featured
);

export function getProgramBySlug(slug: string) {
  return programs.find((program) => program.slug === slug);
}