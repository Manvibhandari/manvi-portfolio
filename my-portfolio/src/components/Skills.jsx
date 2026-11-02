import React from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaInfinity,
  FaJava,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiSpring,
  SiHibernate,
  SiGo,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGithubactions,
  SiRender,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbAsterisk } from "react-icons/tb";

const skillCategories = [
  {
    title: "FRONTEND",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Redux", icon: SiRedux, color: "text-purple-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "Framer Motion", icon: SiFramer, color: "text-violet-400" },
      { name: "Vite", icon: SiVite, color: "text-purple-400" },
    ],
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Java", icon: FaJava, color: "text-orange-400" },
      { name: "Spring Boot", icon: SiSpring, color: "text-green-500" },
      { name: "Hibernate", icon: SiHibernate, color: "text-yellow-500" },
      { name: "Go", icon: SiGo, color: "text-cyan-400" },
    ],
  },
  {
    title: "DATABASES",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-sky-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    ],
  },
  {
    title: "DEVOPS & DEPLOYMENT",
    skills: [
      { name: "Docker", icon: SiDocker, color: "text-sky-500" },
      { name: "CI/CD", icon: FaInfinity, color: "text-violet-400" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "text-blue-400" },
      { name: "Render", icon: SiRender, color: "text-white" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
    ],
  },
  {
    title: "TOOLS",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: FaGithub, color: "text-white" },
      { name: "VS Code", icon: VscVscode, color: "text-blue-400" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "MongoDB Compass", icon: SiMongodb, color: "text-green-500" },
    ],
  },
];

export default function Skills() {
  return (
<section
  id="skills"
  className="w-full scroll-mt-[90px] bg-transparent px-5 sm:px-8 md:px-12 lg:px-16 pt-10 pb-8 text-white"
>
      {/* CONTENT: SHIFTED RIGHT TO LEAVE ROOM FOR FIXED EMAIL */}
      <div className="mx-auto w-full max-w-[1500px] pl-5 sm:pl-6 md:pl-8 lg:pl-10">
        {/* SECTION HEADING */}
        <div className="mb-8 md:mb-10">
          <div className="mb-4 flex items-center gap-3">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "linear",
              }}
              className="inline-flex shrink-0"
            >
              <TbAsterisk className="text-2xl text-green-400 sm:text-3xl" />
            </motion.span>

            <p className="text-sm uppercase tracking-[0.2em] text-gray-300 sm:text-base">
              My Skills
            </p>
          </div>

          <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
            A collection of tools and technologies I use to build modern,
            responsive, and efficient applications.
          </p>
        </div>

        {/* SKILL CATEGORIES */}
        <div className="w-full">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="grid grid-cols-1 gap-7 border-b border-gray-800 py-6 last:border-b-0 last:pb-0 md:grid-cols-[220px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10"
            >
              {/* CATEGORY NAME */}
              <div className="flex items-start gap-4">
                <span className="pt-1 text-sm font-medium text-green-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-lg font-medium tracking-wide text-white sm:text-xl">
                    {category.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-400">
                    {index === 0 &&
                      "Building engaging and responsive user interfaces."}

                    {index === 1 &&
                      "Developing server-side applications and backend logic."}

                    {index === 2 &&
                      "Working with structured and document-based data."}

                    {index === 3 &&
                      "Deploying and maintaining applications."}

                    {index === 4 &&
                      "Development tools and everyday workflow."}
                  </p>
                </div>
              </div>

              {/* TECHNOLOGY ICONS */}
              <div className="grid grid-cols-2 items-start gap-x-3 gap-y-7 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {category.skills.map(({ name, icon: Icon, color }) => (
                  <div
                    key={name}
                    className="flex min-w-0 flex-col items-center justify-start gap-3 text-center"
                  >
                    <Icon
                      aria-hidden="true"
                      className={`${color} h-9 w-9 shrink-0 sm:h-10 sm:w-10 md:h-11 md:w-11`}
                    />

                    <span className="max-w-full break-words text-xs leading-relaxed text-gray-200 sm:text-sm">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}