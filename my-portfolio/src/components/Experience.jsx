import React from "react";
import { motion } from "framer-motion";
import { TbAsterisk } from "react-icons/tb";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full scroll-mt-[100px] bg-transparent px-5 pb-12 pt-10 text-white sm:px-6 sm:pt-12 md:px-12 md:pt-14"
    >
      {/* EXPERIENCE CONTENT */}
      <div className="mx-auto w-full max-w-7xl md:pl-8 lg:pl-12">
        {/* SECTION HEADING — MATCHES MY SKILLS */}
        <div className="mb-10 flex items-center gap-3 sm:mb-12">
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
            My Experience
          </p>
        </div>

        {/* EXPERIENCE CARD */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
          className="group relative rounded-2xl border border-transparent p-4 transition-all duration-300 ease-out hover:border-green-400/50 hover:bg-green-400/[0.03] hover:shadow-[0_0_25px_rgba(74,222,128,0.14)] sm:p-6 md:p-8"
        >
          {/* SUBTLE GREEN GLOW */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              boxShadow: "inset 0 0 20px rgba(74, 222, 128, 0.04)",
            }}
          />

          <div className="relative">
            {/* ROLE AND COMPANY */}
            <div className="mb-6">
              <p className="mb-2 text-sm font-medium tracking-wide text-green-400 transition-colors duration-300 group-hover:text-green-300 sm:text-base">
                Luminaries · Remote
              </p>

              <h3 className="text-2xl font-semibold leading-tight text-gray-100 transition-colors duration-300 group-hover:text-green-300 sm:text-3xl md:text-4xl lg:text-5xl">
                Freelance Frontend Developer
              </h3>

              <p className="mt-3 text-sm text-gray-400 sm:text-base">
                March 2026 – May 2026
              </p>
            </div>

            {/* CONTRIBUTIONS */}
            <div className="max-w-4xl space-y-5 text-sm leading-relaxed text-gray-300 sm:text-base">
              <div>
                <h4 className="mb-3 font-semibold text-white transition-colors duration-300 group-hover:text-green-300">
                  What I did
                </h4>

                <ul className="list-disc space-y-2 pl-5 marker:text-green-400">
                  <li>
                    Developed the complete web frontend using React.js 
                    and Tailwind CSS, delivering responsive and user-friendly interfaces.
                  </li>

                  <li>
                    Built interactive dashboards and UI components 
                    for student management, faculty management, attendance, 
                    assessments, billing, and academic resources.
                  </li>

                  <li>
                    Built responsive frontend interfaces and
                     streamlined administrative workflows, reducing manual administrative workload by 55%.
                  </li>

                  <li>
                    Integrated frontend components with backend APIs 
                    and implemented reusable UI components to ensure seamless data flow and a consistent user experience.
                  </li>
                </ul>
              </div>

              {/* TECHNOLOGIES */}
              <div>
                <h4 className="mb-3 font-semibold text-white transition-colors duration-300 group-hover:text-green-300">
                  Tools & Technologies
                </h4>

                <ul className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    "React.js",
                    "JavaScript",
                    "Tailwind CSS",
                    "Responsive Design",
                    "Reusable Components",
                    "Git",
                  ].map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-gray-700 bg-gray-800/80 px-3 py-1.5 text-xs text-gray-300 transition-all duration-300 hover:border-green-400/60 hover:bg-green-400/10 hover:text-green-300 sm:text-sm"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
