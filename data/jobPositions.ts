// Job position data for careers page
export interface JobPosition {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}

export const jobPositions: JobPosition[] = [
  {
    id: "senior-frontend-developer",
    title: "Senior Frontend Developer",
    location: "Remote",
    type: "Full-time",
    description: "Join our team to create cutting-edge web applications using React, Next.js, and TypeScript.",
    requirements: [
      "5+ years of experience with JavaScript and modern frameworks",
      "Strong understanding of React and state management",
      "Experience with TypeScript and Next.js",
      "Knowledge of modern CSS and responsive design",
      "Ability to write clean, maintainable code"
    ],
    responsibilities: [
      "Design and implement new features and functionality",
      "Collaborate with designers, backend engineers, and product managers",
      "Write clean, maintainable, and well-tested code",
      "Optimize applications for maximum speed and scalability",
      "Stay up-to-date with emerging trends and technologies"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work schedule and remote options",
      "Professional development budget",
      "Modern equipment and tools"
    ]
  },
  {
    id: "backend-engineer",
    title: "Backend Engineer",
    location: "New York, NY",
    type: "Full-time",
    description: "Design and develop scalable backend systems and APIs to power our applications.",
    requirements: [
      "3+ years of experience in backend development",
      "Proficiency with Node.js, Python, or similar technologies",
      "Experience with RESTful and GraphQL APIs",
      "Knowledge of database systems (SQL and NoSQL)",
      "Understanding of cloud infrastructure"
    ],
    responsibilities: [
      "Design, build, and maintain efficient, reusable, and reliable server-side code",
      "Implement security and data protection measures",
      "Integrate data storage solutions and optimize database performance",
      "Debug production issues and optimize application performance",
      "Collaborate with frontend developers and other team members"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work schedule and remote options",
      "Professional development budget",
      "Modern equipment and tools"
    ]
  },
  {
    id: "ux-ui-designer",
    title: "UX/UI Designer",
    location: "Remote",
    type: "Full-time",
    description: "Create beautiful and intuitive user experiences for our digital products.",
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency with design tools like Figma or Sketch",
      "Understanding of user-centered design principles",
      "Experience with interactive prototyping",
      "Ability to collaborate with developers and stakeholders"
    ],
    responsibilities: [
      "Create user flows, wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with product managers and engineers",
      "Design visually appealing interfaces that follow brand guidelines",
      "Stay up-to-date with design trends and best practices"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work schedule and remote options",
      "Professional development budget",
      "Modern equipment and tools"
    ]
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Optimize our development workflow and ensure reliable infrastructure for our applications.",
    requirements: [
      "3+ years of experience in DevOps or SRE roles",
      "Experience with CI/CD pipelines",
      "Knowledge of cloud platforms (AWS, GCP, Azure)",
      "Containerization experience (Docker, Kubernetes)",
      "Infrastructure as code (Terraform, CloudFormation)"
    ],
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage and optimize cloud infrastructure",
      "Monitor system health and performance",
      "Improve development workflows and tooling",
      "Implement security best practices and ensure compliance"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work schedule and remote options",
      "Professional development budget",
      "Modern equipment and tools"
    ]
  },
]; 