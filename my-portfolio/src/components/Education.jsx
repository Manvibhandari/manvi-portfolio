import React from "react";
import { motion } from "framer-motion";
import { TbAsterisk, TbSchool } from "react-icons/tb";

export default function Education() {
  return (
    <section
      id="education"
      className="w-full scroll-mt-[100px] bg-transparent px-5 py-20 text-white sm:px-6 md:px-12"
    >
      <div className="mx-auto w-full max-w-7xl md:pl-8 lg:pl-12">
        {/* SECTION HEADING — ALIGNED WITH EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 flex items-center gap-3 sm:mb-12"
        >
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
            My Education
          </p>
        </motion.div>

        {/* CENTERED EDUCATION CARD */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="group relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-green-500/30 bg-black/50 p-6 shadow-[0_0_25px_rgba(34,197,94,0.06)] backdrop-blur-sm transition-all duration-300 hover:border-green-400/70 hover:shadow-[0_0_35px_rgba(34,197,94,0.12)] sm:p-8 md:p-10"
        >
          {/* SUBTLE TOP ACCENT */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-green-400 to-transparent"
          />

          {/* UNIVERSITY ICON AND DETAILS */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-green-400/30 bg-green-400/10 text-green-400 transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
              <TbSchool aria-hidden="true" className="text-4xl sm:text-5xl" />
            </div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-green-400 sm:text-sm">
              Bachelor's Degree
            </p>

            <h3 className="text-2xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-green-300 sm:text-3xl md:text-4xl">
              Bachelor of Technology
            </h3>

            <p className="mt-2 text-base font-medium text-gray-300 sm:text-lg">
              B.Tech · Information Technology
            </p>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
              HNB Garhwal University, Srinagar
            </p>

            {/* DATE AND GRADE */}
            <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <div className="w-full rounded-xl border border-gray-700/80 bg-white/[0.03] px-5 py-4 sm:w-auto">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Duration
                </p>
                <p className="mt-1 text-sm font-medium text-gray-200 sm:text-base">
                  Nov 2022 – May 2026
                </p>
              </div>

              <div className="w-full rounded-xl border border-green-500/30 bg-green-400/[0.06] px-5 py-4 sm:w-auto">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  CGPA
                </p>
                <p className="mt-1 text-lg font-bold text-green-400 sm:text-xl">
                  6.6
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-8 max-w-2xl border-t border-gray-800 pt-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-400">
                Academic Journey
              </h4>

              <p className="text-sm leading-7 text-gray-400 sm:text-base">
                I pursued my Bachelor's degree in Information Technology at
                HNB Garhwal University, Srinagar, building a foundation in
                programming, software development, and information technology.
                My coursework included Data Structures and Algorithms,
                Object-Oriented Programming, Database Management Systems,
                Web Development, and Software Engineering. My academic journey
                helped strengthen my technical knowledge and problem-solving
                skills.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}