// ============================================================
//  ALL PORTFOLIO CONTENT LIVES HERE.
//  Replace every "TODO" value with your real information.
// ============================================================

export const profile = {
  name: "MD KAMAL HOSSAN",
  designation: "AI-Driven Full Stack Web Engineer",
  tagline:
    "Building Scalable Web Experiences & AI-Powered Solutions",
  photo: "/profile.jpg",
  resume: "/Kamal_Hossan_Resume.pdf",
  email: "mdkamalhossanneu@gmail.com",
  phone: "+8801721482405",
  whatsapp: "8801721482405",
  location: "Netrokona University, Netrokona, Bangladesh",
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    facebook: "",
  },
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "Hi! I'm a passionate web developer who loves turning ideas into clean, usable interfaces. My programming journey started with curiosity — I built my first simple HTML page and was instantly hooked. Since then I have been learning every day: JavaScript, React, REST APIs and the tools that make developers productive.", // TODO: write your own journey
    "I enjoy building responsive, user-friendly frontends, working with component-based design, and solving real problems with code. I like clean UI, readable code and projects that feel smooth on every device.", // TODO: type of work you enjoy
    "Outside of coding, you'll find me exploring new places, playing sports and listening to music. I believe curiosity, patience and teamwork are the best tools for growing as a developer.", // TODO: hobbies / personality
  ],
  hobbies: ["🏏 Cricket", "📚 Reading", "✈️ Travelling", "🎧 Music", "📷 Photography"], // TODO
  stats: [
    { value: "3+", label: "Projects built" },
    { value: "1+", label: "Years learning" },
    { value: "10+", label: "Technologies" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3 / Tailwind", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "React.js", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 70 },
      { name: "Firebase", level: 65 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 65 },
      { name: "Vercel / Netlify", level: 80 },
    ],
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering", // TODO
    institute: "Your University Name", // TODO
    period: "2022 — Present", // TODO
    detail: "CGPA: X.XX / 4.00 · Relevant coursework: Data Structures, Algorithms, Databases, Web Technologies.", // TODO
  },
  {
    degree: "Higher Secondary Certificate (HSC)", // TODO
    institute: "Your College Name", // TODO
    period: "2019 — 2021", // TODO
    detail: "Group: Science · GPA: X.XX / 5.00", // TODO
  },
];

// Leave this array empty ([]) if you have no experience yet —
// the Experience section and its navbar link will hide automatically.
export const experience = [
  {
    role: "Frontend Developer Intern", // TODO
    company: "Company Name", // TODO
    period: "Jan 2025 — Jun 2025", // TODO
    points: [
      "Built responsive UI components with React and Tailwind CSS.",
      "Integrated REST APIs and improved page load performance.",
      "Collaborated with designers and backend developers using Git.",
    ], // TODO
  },
];

// TODO: replace names, images (put real screenshots in /public/projects), links and text.
export const projects = [
  {
    slug: "shopease",
    name: "ShopEase — E-commerce App",
    image: "/projects/project-1.svg",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    short: "A modern online store with product filtering, cart and secure checkout.",
    description:
      "ShopEase is a full-featured e-commerce web app where users can browse products, filter by category and price, add items to a cart and place orders. It includes authentication, a responsive layout and an admin-friendly product structure.",
    live: "https://example.com", // TODO
    github: "https://github.com/your-username/shopease-client", // TODO (client repo)
    challenges: [
      "Managing global cart state across many components cleanly.",
      "Keeping product lists fast with filtering and pagination.",
      "Making checkout and forms fully responsive on small screens.",
    ],
    improvements: [
      "Add online payment gateway integration.",
      "Add product reviews and wishlist.",
      "Build an admin dashboard with sales analytics.",
    ],
  },
  {
    slug: "taskflow",
    name: "TaskFlow — Task Manager",
    image: "/projects/project-2.svg",
    stack: ["React", "Vite", "Firebase", "CSS Modules"],
    short: "A clean Kanban-style task manager with drag & drop and real-time sync.",
    description:
      "TaskFlow helps people organize daily work using boards, lists and cards. Tasks can be created, edited, moved between columns and synced in real time across devices with Firebase.",
    live: "https://example.com", // TODO
    github: "https://github.com/your-username/taskflow-client", // TODO
    challenges: [
      "Implementing smooth drag-and-drop with correct ordering.",
      "Real-time updates without unnecessary re-renders.",
      "Designing a simple UX that still supports many features.",
    ],
    improvements: [
      "Add team collaboration and task assignment.",
      "Add reminders and email notifications.",
      "Offline support using a service worker.",
    ],
  },
  {
    slug: "travelmate",
    name: "TravelMate — Tour Booking",
    image: "/projects/project-3.svg",
    stack: ["React", "React Router", "Node.js", "MongoDB", "Stripe"],
    short: "Discover destinations, compare packages and book tours in a few clicks.",
    description:
      "TravelMate is a tour & travel booking platform with destination pages, package comparison, search, and a booking flow. It focuses on beautiful visuals and a fast, mobile-first experience.",
    live: "https://example.com", // TODO
    github: "https://github.com/your-username/travelmate-client", // TODO
    challenges: [
      "Handling image-heavy pages while keeping performance high.",
      "Building a multi-step booking form with validation.",
      "Designing consistent layouts across mobile, tablet and desktop.",
    ],
    improvements: [
      "Add maps and weather integration for destinations.",
      "Multi-language support (Bangla / English).",
      "Personalized recommendations for users.",
    ],
  },
];
