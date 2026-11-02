import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbAsterisk } from "react-icons/tb";

import UberImage from "../assets/Uber.png";
import JobFinderImage from "../assets/Jobfinder.png";
import TripPlannerImage from "../assets/Tripplanner.png";

const projects = [
  {
    id: "01",
    title: "Uber Clone",
    subtitle: "Ride Booking Platform",
    description:
      "A ride-booking platform featuring REST APIs, JWT authentication, role-based access control, real-time ride updates, location tracking, and fare estimation.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "MongoDB",
      "JWT",
      "WebSockets",
      "Docker",
      "Ola Maps API",
    ],
    image: UberImage,
  },
  {
    id: "02",
    title: "Job Finder",
    subtitle: "Job Search Platform",
    description:
      "A responsive job-finding website built with React.js, enabling users to explore job listings through an intuitive interface. Integrated API data to support job-related information, with a focus on responsive design and a smooth user experience.",
    tech: [
      "HTML",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "API Integration",
    ],
    image: JobFinderImage,
  },
  {
    id: "03",
    title: "Trip Planner",
    subtitle: "Trip Management System · Backend Development",
    description:
      "Contributed to the backend of a trip management application using Java and Spring Boot. Developed REST APIs, implemented role-based access for Admin, Planner, and User roles, and optimized JPA/Hibernate queries to improve data-handling performance. Designed a normalized MySQL database to support reliable and efficient data management.",
    tech: [
      "Java",
      "Spring Boot",
      "MySQL",
      "JPA/Hibernate",
      "REST APIs",
      "JWT",
      "Role-Based Access Control",
    ],
    image: TripPlannerImage,
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const showProject = (index) => {
    setActiveProject(index);
  };

  const hideProject = () => {
    setActiveProject(null);
  };

  const toggleProject = (index) => {
    setActiveProject((current) => (current === index ? null : index));
  };

  return (
    <section
      id="projects"
      className="w-full scroll-mt-[100px] overflow-x-hidden bg-transparent px-5 pb-16 pt-10 text-white sm:px-6 sm:pb-20 sm:pt-12 md:px-12"
    >
      <div className="mx-auto w-full max-w-7xl md:pl-8 lg:pl-12">
        {/* SECTION HEADING */}
        <div className="mb-8 sm:mb-10 md:mb-12">
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
              <TbAsterisk
                aria-hidden="true"
                className="text-2xl text-green-400 sm:text-3xl"
              />
            </motion.span>

            <p className="text-sm uppercase tracking-[0.2em] text-gray-300 sm:text-base">
              My Projects
            </p>
          </div>

          <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
            Things I&apos;ve built
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
            A selection of projects showcasing my development skills and
            the technologies I work with.
          </p>
        </div>

        {/* PROJECT LIST */}
        <div>
          {projects.map((project, index) => {
            const isActive = activeProject === index;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                viewport={{ once: true, amount: 0.15 }}
                onMouseEnter={() => showProject(index)}
                onMouseLeave={hideProject}
                className={`group relative border-b border-gray-800 py-7 transition-colors duration-300 sm:py-9 md:py-10 ${
                  isActive
                    ? "border-green-400/40"
                    : "hover:border-green-400/30"
                }`}
              >
                {/* PROJECT DETAILS AND IMAGE */}
                <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.85fr)] md:gap-8 lg:gap-12">
                  {/* LEFT: PROJECT DETAILS */}
                  <div className="min-w-0">
                    <button
                      type="button"
                      onClick={() => toggleProject(index)}
                      onFocus={() => showProject(index)}
                      onBlur={hideProject}
                      aria-expanded={isActive}
                      aria-label={`${
                        isActive ? "Hide" : "Show"
                      } preview for ${project.title}`}
                      className="w-full cursor-pointer rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                    >
                      {/* NUMBER AND TITLE */}
                      <div className="flex items-center gap-3 sm:gap-5">
                        <span className="shrink-0 text-base font-medium leading-none text-gray-500 transition-colors duration-300 group-hover:text-green-400 sm:text-lg md:text-xl">
                          .{project.id}
                        </span>

                        <div className="min-w-0">
                          <h3 className="text-2xl font-semibold leading-tight tracking-tight text-gray-200 transition-colors duration-300 group-hover:text-green-300 sm:text-3xl md:text-4xl lg:text-5xl">
                            {project.title}
                          </h3>

                          <p className="mt-2 text-sm text-gray-400 transition-colors duration-300 group-hover:text-green-300 sm:text-base">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>
                    </button>

                    {/* DESCRIPTION */}
                    <p className="ml-8 mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:ml-12 sm:text-base">
                      {project.description}
                    </p>

                    {/* TECHNOLOGIES */}
                    {project.tech.length > 0 && (
                      <ul className="ml-8 mt-4 flex flex-wrap gap-2 sm:ml-12 sm:gap-2.5">
                        {project.tech.map((technology) => (
                          <li
                            key={technology}
                            className="rounded-full border border-gray-800 bg-gray-900/70 px-3 py-1 text-xs text-gray-300 transition-all duration-300 group-hover:border-green-400/30 group-hover:bg-green-400/[0.06] group-hover:text-green-200 sm:text-sm"
                          >
                            {technology}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* MOBILE PREVIEW BUTTON */}
                    <button
                      type="button"
                      onClick={() => toggleProject(index)}
                      aria-expanded={isActive}
                      className="ml-8 mt-4 rounded-sm text-sm text-green-400 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 sm:ml-12 md:hidden"
                    >
                      {isActive ? "Hide preview" : "View preview"}
                    </button>
                  </div>

                  {/* RIGHT: DESKTOP IMAGE PREVIEW */}
                  <div className="hidden min-w-0 md:block">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={`preview-${project.id}`}
                          initial={{
                            opacity: 0,
                            x: 18,
                            scale: 0.97,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            x: 12,
                            scale: 0.98,
                          }}
                          transition={{
                            duration: 0.25,
                            ease: "easeOut",
                          }}
                          className="relative overflow-hidden rounded-2xl border border-green-400/30 bg-gray-950 shadow-[0_0_25px_rgba(74,222,128,0.10)]"
                        >
                          <img
                            src={project.image}
                            alt={`${project.title} project preview`}
                            className="aspect-[16/10] w-full object-contain"
                            loading="lazy"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* MOBILE IMAGE PREVIEW */}
                <div className="md:hidden">
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                          y: 8,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          y: 8,
                        }}
                        transition={{ duration: 0.25 }}
                        className="mt-5 overflow-hidden"
                      >
                        <div className="overflow-hidden rounded-xl border border-green-400/30 bg-gray-950">
                          <img
                            src={project.image}
                            alt={`${project.title} project preview`}
                            className="h-auto max-h-80 w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}