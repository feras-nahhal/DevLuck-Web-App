export type ContractStatus = "Running" | "Completed" | "Dispute";

export type OpportunityStatus =
  | "Applied"
  | "Upcoming Interview"
  | "Rejected";

export interface Contract {
  id: number;
  applicantId: number;
  contractTitle: string;
  startDate: string;
  endDate: string;
  status: ContractStatus;

  /** ✅ NEW */
  opportunityStatus: OpportunityStatus;
  deadline: string; // e.g. "2025-07-30"
  salary: string;

  jobDescription: string;
  keyResponsibilities: string[];
  whyYoullLoveWorkingHere: string[];
  jobType: "Full-time" | "Part-time" | "Contract";
  location: string;
  company: string;
  workProgress: number; // 0 → 100
}

export const mockContracts: Contract[] = [
  {
    id: 1,
    applicantId: 201,
    contractTitle: "Frontend Developer",
    startDate: "2024-01-10",
    endDate: "2024-07-10",
    status: "Running",

    opportunityStatus: "Applied",
    deadline: "2025-07-30",
    salary: "$2,500", 

    jobDescription:
      "Build and maintain modern user interfaces using React and Tailwind CSS. You will be responsible for creating intuitive and dynamic front-end experiences, implementing best practices for performance and accessibility, and collaborating closely with cross-functional teams to deliver high-quality software solutions.",
    keyResponsibilities: [
      "Develop responsive UI components",
      "Collaborate with designers and backend engineers",
      "Optimize application performance",
      "Write reusable and maintainable code",
      "Conduct code reviews and mentor junior developers",
      "Participate in sprint planning and agile ceremonies"
    ],
    whyYoullLoveWorkingHere: [
      "Flexible working hours",
      "Supportive engineering team",
      "Modern tech stack",
      "Opportunities for career growth",
      "Regular team events and hackathons",
      "Learning-friendly environment with mentorship"
    ],
    jobType: "Full-time",
    location: "Remote",
    company: "DevLuck",
    workProgress: 45,
  },
  {
    id: 2,
    applicantId: 202,
    contractTitle: "Backend Node.js Engineer",
    startDate: "2023-11-01",
    endDate: "2024-05-01",
    status: "Completed",

    opportunityStatus: "Upcoming Interview",
    deadline: "2025-07-30",
    salary: "$4,000",

    jobDescription:
      "Design scalable APIs and services using Node.js and PostgreSQL.",
    keyResponsibilities: [
      "Build RESTful APIs",
      "Database schema design",
      "Ensure system security",
    ],
    whyYoullLoveWorkingHere: [
      "Impactful work",
      "Learning opportunities",
      "Competitive compensation",
    ],
    jobType: "Contract",
    location: "Berlin, Germany",
    company: "TechNova",
    workProgress: 100,
  },
  {
    id: 3,
    applicantId: 203,
    contractTitle: "UI/UX Designer",
    startDate: "2024-02-01",
    endDate: "2024-08-01",
    status: "Running",
     opportunityStatus: "Rejected",
    deadline: "2025-07-30",
    salary: "$1,800",
    jobDescription:
      "Create intuitive user experiences and polished visual designs.",
    keyResponsibilities: [
      "Design wireframes and prototypes",
      "Conduct user research",
      "Collaborate with product managers",
    ],
    whyYoullLoveWorkingHere: [
      "Creative freedom",
      "Design-driven culture",
      "Cross-functional collaboration",
    ],
    jobType: "Full-time",
    location: "Cairo, Egypt",
    company: "PixelWorks",
    workProgress: 60,
  },
  {
    id: 4,
    applicantId: 204,
    contractTitle: "Mobile App Developer",
    startDate: "2023-09-15",
    endDate: "2024-03-15",
    status: "Dispute",
    opportunityStatus: "Applied",
    deadline: "2025-07-30",
    salary: "$3,500",
    jobDescription:
      "Develop and maintain cross-platform mobile applications.",
    keyResponsibilities: [
      "Implement mobile UI components",
      "Fix bugs and improve performance",
      "Publish apps to stores",
    ],
    whyYoullLoveWorkingHere: [
      "Fast-growing startup",
      "Ownership of features",
      "Remote-friendly environment",
    ],
    jobType: "Contract",
    location: "Remote",
    company: "AppForge",
    workProgress: 80,
  },
  {
    id: 5,
    applicantId: 205,
    contractTitle: "Data Analyst",
    startDate: "2024-03-01",
    endDate: "2024-09-01",
    status: "Running",
    opportunityStatus: "Applied",
    deadline: "2025-07-30",
    salary: "$3,000",
    jobDescription:
      "Analyze business data to generate insights and reports.",
    keyResponsibilities: [
      "Data cleaning and analysis",
      "Dashboard creation",
      "Present insights to stakeholders",
    ],
    whyYoullLoveWorkingHere: [
      "Data-driven decisions",
      "Career growth",
      "Collaborative team",
    ],
    jobType: "Full-time",
    location: "London, UK",
    company: "Insightly",
    workProgress: 30,
  },
  {
    id: 6,
    applicantId: 206,
    contractTitle: "DevOps Engineer",
    startDate: "2023-10-01",
    endDate: "2024-04-01",
    status: "Completed",
    opportunityStatus: "Upcoming Interview",
    deadline: "2025-07-30",
    salary: "$4,500",
    jobDescription:
      "Manage CI/CD pipelines and cloud infrastructure.",
    keyResponsibilities: [
      "Automate deployments",
      "Monitor system health",
      "Ensure high availability",
    ],
    whyYoullLoveWorkingHere: [
      "Cutting-edge cloud tech",
      "Autonomy",
      "Strong engineering culture",
    ],
    jobType: "Full-time",
    location: "Amsterdam, NL",
    company: "Cloudify",
    workProgress: 100,
  },
  {
    id: 7,
    applicantId: 207,
    contractTitle: "QA Automation Engineer",
    startDate: "2024-01-20",
    endDate: "2024-06-20",
    status: "Running",
    opportunityStatus: "Rejected",
    deadline: "2025-07-30",
    salary: "$3000",
    jobDescription:
      "Ensure product quality through automated testing.",
    keyResponsibilities: [
      "Write automated test scripts",
      "Identify and report bugs",
      "Collaborate with developers",
    ],
    whyYoullLoveWorkingHere: [
      "Quality-first mindset",
      "Agile environment",
      "Friendly team",
    ],
    jobType: "Contract",
    location: "Remote",
    company: "TestLab",
    workProgress: 55,
  },
  {
    id: 8,
    applicantId: 208,
    contractTitle: "Product Manager",
    startDate: "2023-08-01",
    endDate: "2024-02-01",
    status: "Completed",
     opportunityStatus: "Applied",
    deadline: "2025-07-30",
    salary: "$6,000",
    jobDescription:
      "Lead product strategy and roadmap execution.",
    keyResponsibilities: [
      "Define product vision",
      "Gather requirements",
      "Coordinate cross-team delivery",
    ],
    whyYoullLoveWorkingHere: [
      "Leadership role",
      "Direct user impact",
      "Strategic influence",
    ],
    jobType: "Full-time",
    location: "San Francisco, USA",
    company: "LaunchPad",
    workProgress: 100,
  },
  {
    id: 9,
    applicantId: 209,
    contractTitle: "Cybersecurity Specialist",
    startDate: "2024-02-15",
    endDate: "2024-08-15",
    status: "Dispute",
    opportunityStatus: "Upcoming Interview",
    deadline: "2025-07-30",
    salary: "$5,000",
    jobDescription:
      "Protect systems and data from security threats.",
    keyResponsibilities: [
      "Conduct security audits",
      "Monitor vulnerabilities",
      "Implement security policies",
    ],
    whyYoullLoveWorkingHere: [
      "High-impact role",
      "Advanced security tools",
      "Critical responsibility",
    ],
    jobType: "Contract",
    location: "Remote",
    company: "SecureNet",
    workProgress: 70,
  },
  {
    id: 10,
    applicantId: 210,
    contractTitle: "AI Research Assistant",
    startDate: "2024-03-10",
    endDate: "2024-09-10",
    status: "Running",
     opportunityStatus: "Applied",
    deadline: "2025-07-30",
    salary: "$2500",
    jobDescription:
      "Assist in AI model research and experimentation.",
    keyResponsibilities: [
      "Run ML experiments",
      "Analyze model performance",
      "Document findings",
    ],
    whyYoullLoveWorkingHere: [
      "Work with AI experts",
      "Research-focused environment",
      "Future-oriented projects",
    ],
    jobType: "Part-time",
    location: "Remote",
    company: "NeuroLabs",
    workProgress: 25,
  },
];
