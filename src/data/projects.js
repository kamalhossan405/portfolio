import bazardorImg from "../assets/projects/bazardor.svg";
import devstackImg from "../assets/projects/devstack.svg";
import fitlogImg from "../assets/projects/fitlog.svg";

// ৩টি প্রজেক্টের স্লট পরবর্তীতে যোগ করার জন্য প্রস্তুত রাখা হলো
const projects = [
  {
    id: 1,
    title: "Project 01 — (To be added)",
    image: bazardorImg,
    category: "Full-Stack Application",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    description:
      "This project slot is reserved. Project details, technology stack, live link, and GitHub repository will be updated soon.",
    live: "",
    github: "",
    isPlaceholder: true,
    challenges: [
      "Application architecture and data modeling",
      "Building responsive and accessible UI components",
      "Full-stack REST API and authentication workflows"
    ],
    future: [
      "Advanced features and production deployment",
      "Continuous optimization and testing"
    ],
  },
  {
    id: 2,
    title: "Project 02 — (To be added)",
    image: devstackImg,
    category: "Frontend Web Application",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs"
    ],
    description:
      "This project slot is reserved. Project details, technology stack, live link, and GitHub repository will be updated soon.",
    live: "",
    github: "",
    isPlaceholder: true,
    challenges: [
      "Type-safe component design and state management",
      "Interactive UI and smooth user experiences",
      "API data fetching and error boundaries"
    ],
    future: [
      "Feature enhancements and performance tuning",
      "Real-time updates and notification system"
    ],
  },
  {
    id: 3,
    title: "Project 03 — (To be added)",
    image: fitlogImg,
    category: "Full-Stack Web App",
    technologies: [
      "Next.js",
      "JavaScript",
      "Express.js",
      "MongoDB",
      "AI Tools"
    ],
    description:
      "This project slot is reserved. Project details, technology stack, live link, and GitHub repository will be updated soon.",
    live: "",
    github: "",
    isPlaceholder: true,
    challenges: [
      "Scalable backend architecture and database modeling",
      "Mobile-first responsive design and cross-device testing",
      "Integrating AI-assisted modern workflows"
    ],
    future: [
      "PWA and offline persistence support",
      "Cloud deployment and automated CI/CD pipeline"
    ],
  },
];

export default projects;
