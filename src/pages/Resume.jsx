import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projects";
import {
  HiArrowLeft,
  HiPrinter,
  HiDownload,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import { FaGithub, FaFacebook, FaGlobe } from "react-icons/fa";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-slate-100/80 dark:bg-gray-950 py-10 px-3 sm:px-6 lg:px-8 text-slate-800 dark:text-gray-200 font-sans print:bg-white print:py-0 print:px-0 transition-colors duration-300"
    >
      {/* Top Action Bar (Screen Only) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-3 sm:gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-gray-300 bg-white dark:bg-gray-900 border border-slate-300 dark:border-gray-800 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-xs hover:bg-slate-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-cyan-400 transition"
        >
          <HiArrowLeft className="text-base" /> Back to Portfolio
        </Link>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Junior Full-Stack Developer • Available Immediately
          </span>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/resume.pdf"
            download="Kamal_Hossan_Resume.pdf"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg transition cursor-pointer"
          >
            <HiDownload className="text-base" /> Download PDF
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-gray-300 bg-white dark:bg-gray-900 border border-slate-300 dark:border-gray-800 hover:bg-slate-50 dark:hover:bg-gray-800 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-xs transition cursor-pointer"
          >
            <HiPrinter className="text-base" /> Print
          </motion.button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <main className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-gray-950/60 border border-slate-200/90 dark:border-gray-800 p-5 sm:p-8 md:p-12 print:shadow-none print:border-none print:p-0 print:rounded-none print:bg-white print:text-black">

        {/* ================= HEADER SECTION ================= */}
        <header className="border-b border-slate-200 dark:border-gray-800 print:border-slate-300 pb-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white print:text-black tracking-tight">
                MD KAMAL HOSSAN
              </h1>
              <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-400 print:text-blue-700 mt-1">
                AI-Driven Full Stack Web Engineer
              </p>
              <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mt-0.5">
                Building Scalable Web Experiences &amp; AI-Powered Solutions
              </p>
              <p className="text-sm text-slate-600 dark:text-gray-400 print:text-slate-700 mt-1 max-w-xl leading-relaxed">
                Passionate web developer studying at Netrokona University who enjoys turning ideas into functional, responsive, and user-friendly digital experiences with modern web technologies and AI workflows.
              </p>
            </div>

            {/* Availability Badge */}
            <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-800 print:border-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                AI-Driven Full Stack Web Engineer
              </span>
              <span className="text-xs text-slate-500 dark:text-gray-400 print:text-slate-600 mt-0.5">Ready for immediate joining</span>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-600 dark:text-gray-300 print:text-slate-700 pt-4 border-t border-slate-100 dark:border-gray-800 print:border-slate-200">
            <a
              href="mailto:mdkamalhossanneu@gmail.com"
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-cyan-400 transition truncate"
            >
              <HiMail className="text-blue-600 dark:text-cyan-400 text-base shrink-0" />
              <span className="truncate">mdkamalhossanneu@gmail.com</span>
            </a>
            <a
              href="https://wa.me/8801721482405"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition truncate"
            >
              <HiPhone className="text-emerald-600 dark:text-emerald-400 text-base shrink-0" />
              <span className="truncate">01721482405</span>
            </a>
            <div className="flex items-center gap-1.5">
              <HiLocationMarker className="text-blue-600 dark:text-cyan-400 text-base shrink-0" />
              <span className="truncate">Netrokona University, BD</span>
            </div>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-cyan-400 transition"
            >
              <FaGithub className="text-slate-800 dark:text-gray-200 text-base shrink-0" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-cyan-400 transition"
            >
              <FaGlobe className="text-blue-600 dark:text-cyan-400 text-base shrink-0" />
              <span>LinkedIn</span>
            </a>
          </div>
        </header>

        {/* ================= CAREER OBJECTIVE / SUMMARY ================= */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white print:text-black uppercase tracking-wider border-b-2 border-slate-200 dark:border-gray-800 print:border-slate-300 pb-1.5 mb-2.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 dark:bg-cyan-400 rounded-xs"></span>
            Career Objective &amp; Professional Summary
          </h2>
          <p className="text-sm text-slate-700 dark:text-gray-300 print:text-slate-700 leading-relaxed text-justify">
            Passionate and dedicated web developer studying at <strong className="text-slate-900 dark:text-white print:text-black">Netrokona University</strong> who enjoys turning ideas into functional, responsive, and user-friendly digital experiences. Particularly interested in full-stack web development and exploring how AI can make web applications smarter, more efficient, and more useful. Open to Junior Web Developer, Full Stack Developer, and internship opportunities to contribute, collaborate with a team, and continue growing while building real-world applications.
          </p>
        </section>

        {/* ================= TECHNICAL SKILLS ================= */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white print:text-black uppercase tracking-wider border-b-2 border-slate-200 dark:border-gray-800 print:border-slate-300 pb-1.5 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 dark:bg-cyan-400 rounded-xs"></span>
            Technical Skills Matrix
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3.5 bg-slate-50/90 dark:bg-gray-800/60 print:bg-slate-50 rounded-xl border border-slate-200/80 dark:border-gray-700/80">
              <span className="font-bold text-slate-900 dark:text-white print:text-black block mb-1 text-xs uppercase tracking-wider text-blue-700 dark:text-cyan-400">
                Frontend Development
              </span>
              <p className="text-slate-700 dark:text-gray-300 print:text-slate-700 leading-relaxed text-xs sm:text-sm">
                Next.js (App Router, SSR, Server/Client Components, Dynamic Routing), React.js, TypeScript (Interfaces, Generics, Type Safety), JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, HeroUI.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50/90 dark:bg-gray-800/60 print:bg-slate-50 rounded-xl border border-slate-200/80 dark:border-gray-700/80">
              <span className="font-bold text-slate-900 dark:text-white print:text-black block mb-1 text-xs uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                Backend &amp; Authentication
              </span>
              <p className="text-slate-700 dark:text-gray-300 print:text-slate-700 leading-relaxed text-xs sm:text-sm">
                Node.js, Express.js (REST APIs, Middleware, Routing), Better Auth (Sign-Up, Sign-In, Session Management, Protected Routes, User Profiles), Asynchronous JavaScript.
              </p>
            </div>

            <div className="p-3.5 bg-slate-50/90 dark:bg-gray-800/60 print:bg-slate-50 rounded-xl border border-slate-200/80 dark:border-gray-700/80">
              <span className="font-bold text-slate-900 dark:text-white print:text-black block mb-1 text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Database Management
              </span>
              <p className="text-slate-700 dark:text-gray-300 print:text-slate-700 leading-relaxed text-xs sm:text-sm">
                MongoDB (CRUD Operations, Collections, Documents, Query Filters), Mongoose (Schema Design, Models, Data Validation, MongoDB Integration).
              </p>
            </div>

            <div className="p-3.5 bg-slate-50/90 dark:bg-gray-800/60 print:bg-slate-50 rounded-xl border border-slate-200/80 dark:border-gray-700/80">
              <span className="font-bold text-slate-900 dark:text-white print:text-black block mb-1 text-xs uppercase tracking-wider text-amber-700 dark:text-amber-400">
                Tools, Workflow &amp; AI Engineering
              </span>
              <p className="text-slate-700 dark:text-gray-300 print:text-slate-700 leading-relaxed text-xs sm:text-sm">
                Git &amp; GitHub, Vite, npm, Postman, Chrome DevTools, Vercel &amp; Netlify Deployment, AI-Assisted Development (Problem Solving, Debugging, Speed Optimization).
              </p>
            </div>
          </div>
        </section>

        {/* ================= FEATURED PROJECTS ================= */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white print:text-black uppercase tracking-wider border-b-2 border-slate-200 dark:border-gray-800 print:border-slate-300 pb-1.5 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 dark:bg-cyan-400 rounded-xs"></span>
            Featured Projects &amp; Applications
          </h2>

          <div className="space-y-4">
            {projects.map((project, index) => {
              const borderColors = [
                "border-blue-600 dark:border-blue-500",
                "border-indigo-600 dark:border-indigo-500",
                "border-teal-600 dark:border-teal-500",
                "border-emerald-600 dark:border-emerald-500",
                "border-purple-600 dark:border-purple-500",
              ];
              const borderColor = borderColors[index % borderColors.length];

              return (
                <div
                  key={project.id}
                  className={`border-l-3 ${borderColor} pl-4 py-1 bg-slate-50/40 dark:bg-gray-800/40 print:bg-slate-50/40 rounded-r-xl border-y border-r border-slate-200/60 dark:border-gray-800/80 p-3 sm:p-4`}
                >
                  {/* Title & Links Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white print:text-black flex flex-wrap items-center gap-2">
                      {project.title}
                      {project.category && (
                        <span className="text-[11px] font-semibold text-blue-700 dark:text-cyan-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800">
                          {project.category}
                        </span>
                      )}
                    </h3>

                    {/* Action Links */}
                    <div className="flex items-center gap-2.5 text-xs font-semibold text-blue-600 dark:text-cyan-400 print:text-slate-700">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline flex items-center gap-1"
                        >
                          Live Demo <HiExternalLink className="print:hidden text-[11px]" />
                        </a>
                      )}
                      {project.github && (
                        <>
                          <span className="text-slate-300 dark:text-gray-600">•</span>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline flex items-center gap-1"
                          >
                            GitHub <HiExternalLink className="print:hidden text-[11px]" />
                          </a>
                        </>
                      )}
                      {!project.live && !project.github && (
                        <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                          (To be added)
                        </span>
                      )}
                      <Link
                        to={`/projects/${project.id}`}
                        className="text-indigo-600 dark:text-indigo-400 hover:underline print:hidden ml-1"
                      >
                        [Details]
                      </Link>
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 my-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium bg-white dark:bg-gray-800 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-gray-700 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Overview */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 print:text-slate-700 leading-relaxed mb-2">
                    {project.description}
                  </p>

                  {/* Key Contributions & Challenges Solved */}
                  {project.challenges && project.challenges.length > 0 && (
                    <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 dark:text-gray-300 print:text-slate-700 space-y-1">
                      {project.challenges.map((challenge, cIdx) => (
                        <li key={cIdx}>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= PRACTICAL EXPERIENCE ================= */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white print:text-black uppercase tracking-wider border-b-2 border-slate-200 dark:border-gray-800 print:border-slate-300 pb-1.5 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 dark:bg-cyan-400 rounded-xs"></span>
            Practical Development Experience
          </h2>

          <div className="p-3.5 sm:p-4 bg-slate-50/60 dark:bg-gray-800/40 print:bg-slate-50/60 rounded-xl border border-slate-200/80 dark:border-gray-800 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between text-sm gap-1">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white print:text-black">
                  Full-Stack Next.js Development — Project-Based Experience
                </h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400">
                  Personal &amp; Academic Projects • Netrokona / Remote, Bangladesh
                </p>
              </div>
              <span className="text-xs font-medium text-slate-500 dark:text-gray-400 print:text-slate-500">
                2026 – Present
              </span>
            </div>

            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 dark:text-gray-300 print:text-slate-700 space-y-1 pt-1">
              <li>Developed responsive web applications using Next.js, React.js, TypeScript, and Tailwind CSS.</li>
              <li>Built reusable UI components and implemented modern UI/UX designs with component-driven architecture.</li>
              <li>Integrated REST APIs and handled application data asynchronously with clean error boundaries.</li>
              <li>Implemented authentication workflows and protected routes using Better Auth.</li>
              <li>Practiced backend development with Node.js, Express.js, MongoDB, and Mongoose.</li>
              <li>Used Git and GitHub for source control, feature branching, and project management.</li>
              <li>Deployed applications using Vercel and Netlify with environment configurations.</li>
              <li>Applied AI-assisted development tools to support debugging, implementation, and problem-solving.</li>
            </ul>

            <div className="pt-2 flex flex-wrap gap-1 text-[11px] text-slate-500 dark:text-gray-400">
              <strong className="text-slate-700 dark:text-gray-300 print:text-slate-700">Tech:</strong> Next.js, React.js, TypeScript, JavaScript, Tailwind CSS, Better Auth, Node.js, Express.js, MongoDB, Mongoose, Git, GitHub, Vercel, Netlify.
            </div>
          </div>
        </section>

        {/* ================= EDUCATIONAL BACKGROUND ================= */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white print:text-black uppercase tracking-wider border-b-2 border-slate-200 dark:border-gray-800 print:border-slate-300 pb-1.5 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 dark:bg-cyan-400 rounded-xs"></span>
            Educational Background
          </h2>

          <div className="space-y-3">
            {/* Degree 1 */}
            <div className="p-3 sm:p-4 bg-slate-50/60 dark:bg-gray-800/40 print:bg-slate-50/60 rounded-xl border border-slate-200/80 dark:border-gray-800">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white print:text-black">
                    Bachelor of Arts (B.A.) — Bengali Language &amp; Literature
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400 print:text-slate-600 text-xs sm:text-sm font-medium">
                    Netrokona University, Netrokona, Bangladesh
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 font-medium mt-1 sm:mt-0 sm:text-right">
                  <span className="inline-block bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-800 px-2 py-0.5 rounded text-xs font-semibold">
                    Bachelor's Degree (Ongoing)
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-gray-400 print:text-slate-600 mt-1.5 leading-relaxed">
                Currently pursuing a Bachelor's degree in Bengali Language &amp; Literature, developing deep understanding of linguistics, literature, and analytical criticism while independently mastering modern Full-Stack Web Development &amp; AI technologies.
              </p>
            </div>

            {/* Degree 2 */}
            <div className="p-3 bg-slate-50/60 dark:bg-gray-800/40 print:bg-slate-50/60 rounded-xl border border-slate-200/80 dark:border-gray-800">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white print:text-black">Higher Secondary Certificate (HSC) — Humanities</h4>
                  <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">Barkhal ML High School and College, Sunamgonj, Bangladesh</p>
                </div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-2 py-0.5 rounded">
                  GPA: 4.50 / 5.00
                </span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-gray-400 mt-1">Session: 2020 – 2021 • Humanities Group</p>
            </div>
          </div>
        </section>

        {/* ================= CONTINUOUS LEARNING ================= */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white print:text-black uppercase tracking-wider border-b-2 border-slate-200 dark:border-gray-800 print:border-slate-300 pb-1.5 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-xs"></span>
            Continuous Learning
          </h2>
          <div className="p-3 sm:p-4 bg-amber-50/60 dark:bg-amber-950/20 rounded-xl border border-amber-200/80 dark:border-amber-800/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white print:text-black">AI-Driven Full-Stack Web Engineering</h3>
                <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">Programming Hero</p>
              </div>
              <span className="text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 px-2 py-0.5 rounded mt-1 sm:mt-0">
                2026 – Present
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-gray-400 mt-1.5 leading-relaxed">
              Enrolled in an intensive AI-Driven Full-Stack Web Engineering course, mastering modern web technologies, AI-assisted development workflows, and production-grade full-stack architecture from industry experts.
            </p>
          </div>
        </section>

        {/* ================= CORE COMPETENCIES & STRENGTHS ================= */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white print:text-black uppercase tracking-wider border-b-2 border-slate-200 dark:border-gray-800 print:border-slate-300 pb-1.5 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 dark:bg-cyan-400 rounded-xs"></span>
            Why Hire Me &amp; Core Competencies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-gray-300 print:text-slate-700">
            <div className="p-3 bg-slate-50/60 dark:bg-gray-800/40 print:bg-slate-50/60 rounded-xl border border-slate-200/80 dark:border-gray-800">
              <span className="font-bold text-slate-900 dark:text-white print:text-black block mb-1">Key Strengths:</span>
              <p>Rapid Learning &amp; Adaptability, Clean Code &amp; Maintainability, Collaboration &amp; Teamwork, Modern AI-Driven Workflows, Growth Mindset.</p>
            </div>
            <div className="p-3 bg-slate-50/60 dark:bg-gray-800/40 print:bg-slate-50/60 rounded-xl border border-slate-200/80 dark:border-gray-800">
              <span className="font-bold text-slate-900 dark:text-white print:text-black block mb-1">Languages &amp; Availability:</span>
              <p>English (Professional Working Proficiency), Bengali (Native). Open to remote or on-site Junior / Entry-Level roles with immediate availability.</p>
            </div>
          </div>
        </section>

        {/* ================= RESUME FOOTER ================= */}
        <footer className="pt-5 border-t-2 border-slate-200 dark:border-gray-800 print:border-slate-300 text-xs text-slate-500 dark:text-gray-400 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="italic">
              <strong>Declaration:</strong> I confirm that the information provided above is accurate to the best of my knowledge.
            </p>
            <p className="shrink-0 font-medium text-slate-600 dark:text-gray-300 print:text-slate-600">
              References: Available upon request
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-[11px] text-slate-400 dark:text-gray-500 pt-1">
            <span>MD KAMAL HOSSAN • Portfolio &amp; Resume • Updated {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
            <span className="print:hidden">Press "Print / Save as PDF" for ATS-compliant copy</span>
          </div>
        </footer>

      </main>

      {/* ================= PAGE LITTLE FOOTER (Screen Only) ================= */}
      <div className="max-w-4xl mx-auto mt-8 text-center text-xs text-slate-500 dark:text-gray-400 print:hidden space-y-2">
        <p>
          Looking to hire an eager, fast-learning full-stack developer?{" "}
          <Link to="/#contact" className="text-blue-600 dark:text-cyan-400 font-semibold hover:underline">
            Get in touch with MD KAMAL HOSSAN directly &rarr;
          </Link>
        </p>
        <p className="text-slate-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} MD KAMAL HOSSAN • Designed with React 19, Framer Motion &amp; Tailwind CSS
        </p>
      </div>

    </motion.div>
  );
};

export default Resume;
