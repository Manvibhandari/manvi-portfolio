import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import profilePicture from "../assets/prof_pic.png";

import Topbar from "./Topbar";
import SidebarMenu from "./SidebarMenu";
import AboutMe from "./AboutMe";
import ScrollProgressBar from "./ScrollProgressBar";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => setIsOpen((prev) => !prev);
  const closePanel = () => setIsOpen(false);

  // Custom cursor animation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  // Track mouse movement
  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  // Smooth scrolling for internal anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a");

      if (anchor && anchor.getAttribute("href")?.startsWith("#")) {
        const id = anchor.getAttribute("href").slice(1);
        const target = document.getElementById(id);

        if (target) {
          e.preventDefault();
          setIsOpen(false);

          setTimeout(() => {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });

            window.history.replaceState(null, "", `#${id}`);
          }, 200);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  // Slower, smoother heading animation
  // The animation runs when the homepage mounts.
  const headingLetters = (text, startingDelay = 0) =>
    Array.from(text).map((letter, index) => (
      <motion.span
        key={`${text}-${index}`}
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          delay: startingDelay + index * 0.1,
          ease: "easeOut",
        }}
        className="inline-block"
        style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ));

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black font-sans text-white">
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="fixed inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/space3.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="pointer-events-none fixed inset-0 z-10 bg-black opacity-80" />

      {/* GLOBAL STYLES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

        body, * {
          cursor: none !important;
        }

        .bebas {
          font-family: 'Bebas Neue', sans-serif;
        }

        .hero-heading {
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          letter-spacing: -0.045em;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Persistent blue-green glow for the resume button */
        .resume-glow {
          box-shadow:
            0 0 12px rgba(34, 197, 94, 0.55),
            0 0 25px rgba(59, 130, 246, 0.35),
            0 0 45px rgba(59, 130, 246, 0.18);
          animation: resumeGlowPulse 2.5s ease-in-out infinite alternate;
        }

        @keyframes resumeGlowPulse {
          from {
            box-shadow:
              0 0 12px rgba(34, 197, 94, 0.45),
              0 0 25px rgba(59, 130, 246, 0.25),
              0 0 40px rgba(59, 130, 246, 0.12);
          }

          to {
            box-shadow:
              0 0 18px rgba(34, 197, 94, 0.65),
              0 0 32px rgba(59, 130, 246, 0.45),
              0 0 55px rgba(59, 130, 246, 0.25);
          }
        }

        @media (hover: none), (max-width: 768px) {
          body, * {
            cursor: auto !important;
          }

          .custom-cursor {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .resume-glow {
            animation: none;
          }
        }
      `}</style>

      {/* MAIN CONTENT */}
      <div className="relative z-20 w-full">
        {/* BLUR BACKGROUND WHEN SIDEBAR IS OPEN */}
        <div
          className={`fixed inset-0 z-30 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          onClick={closePanel}
          aria-hidden="true"
        />

        {/* TOP NAVIGATION */}
        <Topbar isOpen={isOpen} togglePanel={togglePanel} />

        {/* SIDEBAR MENU */}
        {isOpen && (
          <aside
            className="fixed inset-y-0 right-0 z-40 flex w-[85%] max-w-[340px] flex-col justify-between overflow-y-auto overscroll-contain border-l border-white/10 bg-[#080808] p-5 text-white shadow-2xl sm:w-[40%] sm:max-w-[380px] sm:p-6"
            aria-label="Main sidebar"
          >
            <div className="mt-10 flex min-h-0 flex-1 flex-col gap-8">
              {/* SOCIAL LINKS */}
              <div>
                <h3 className="mb-4 ml-2 text-xs font-medium uppercase tracking-[0.22em] text-gray-300">
                  Social
                </h3>

                <ul className="ml-2 space-y-4 text-sm sm:text-base">
                  <li>
                    <a
                      href="https://github.com/Manvibhandari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-green-400"
                    >
                      GitHub
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/in/manvi-bhandari-680439258/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-green-400"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

              {/* SIDEBAR NAVIGATION */}
              <SidebarMenu closePanel={closePanel} />
            </div>

            {/* CONTACT */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-gray-300">
                Get in touch
              </h3>

              <a
                href="mailto:manvibhandari05@gmail.com"
                className="break-all text-sm text-gray-200 transition-colors hover:text-green-400"
              >
                manvibhandari05@gmail.com
              </a>
            </div>
          </aside>
        )}

        {/* EMAIL SIDE LABEL — DESKTOP */}
        <a
          href="mailto:manvibhandari05@gmail.com"
          className={`fixed -left-10 top-1/2 z-10 hidden -translate-y-1/2 -rotate-90 text-sm font-bold tracking-widest transition duration-200 md:block lg:-left-20 ${
            isOpen
              ? "text-gray-300 blur-sm hover:text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          manvibhandari.contact@gmail.com
        </a>

        {/* HOMEPAGE HERO SECTION */}
        <motion.section
          id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex min-h-screen w-full items-center px-5 pb-12 pt-28 sm:px-8 sm:pt-32 lg:px-10 xl:px-16 2xl:px-24"
        >
          {/*
            DESKTOP:
            LEFT   = HEADING, INTRODUCTION AND BUTTON
            MIDDLE = PROFILE PICTURE
            RIGHT  = STATISTICS

            SMALL SCREENS:
            Content stacks vertically to prevent horizontal overflow.
          */}
          <div
            className="mx-auto grid w-full max-w-[1600px] translate-x-0 grid-cols-1 items-center
            gap-10 sm:translate-x-2 sm:gap-12 lg:translate-x-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.75fr)_minmax(125px,0.48fr)]
            lg:gap-6 xl:translate-x-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.75fr)_minmax(150px,0.45fr)] xl:gap-8 2xl:gap-12"
          >
            {/* LEFT COLUMN: HEADING, INTRODUCTION AND BUTTON */}
            <div className="order-1 min-w-0 text-left">
{/* MAIN HEADING */}
<div className="w-full min-w-0">
  <h1 className="hero-heading w-full whitespace-nowrap text-[clamp(1.65rem,5.2vw,4.5rem)] uppercase leading-[1.08] text-green-500 drop-shadow-md">
    {headingLetters("Full Stack")}
  </h1>

  <h2 className="hero-heading ml-0 mt-3 w-full whitespace-nowrap text-[clamp(1.65rem,5.2vw,4.5rem)] uppercase leading-[1.08] text-white drop-shadow-md sm:ml-[24%] sm:mt-5 lg:ml-[28%]">
    {headingLetters("Developer", 1.5)}
  </h2>
</div>

              {/* INTRODUCTION */}
              <p className="mt-6 max-w-xl text-sm leading-7 text-gray-200 sm:mt-8 sm:text-base sm:leading-8 lg:text-base xl:text-lg">
                Hi! I'm{" "}
                <span className="font-semibold text-white">Manvi</span>, a Java
                Full Stack Developer passionate about building responsive web
                applications and reliable backend systems. I work with React.js,
                Java, Spring Boot, Hibernate, and SQL to create database-driven
                applications. I'm eager to apply my skills to real-world
                projects, and continue growing as a software developer.
              </p>

              {/* DOWNLOAD RESUME BUTTON */}
              <a
                href="/Manvi%20Resume.pdf"
                download="Manvi Resume.pdf"
                className="resume-glow mt-6 inline-flex items-center justify-center rounded-full border border-blue-300/70 bg-green-500 px-6 py-3 text-center font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-green-400 hover:shadow-[0_0_22px_rgba(59,130,246,0.65),0_0_45px_rgba(34,197,94,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 sm:mt-7 sm:px-7 sm:py-3.5"
              >
                DOWNLOAD RESUME
              </a>
            </div>

            {/* MIDDLE COLUMN: PROFILE PICTURE */}
            <div className="order-2 flex min-w-0 items-center justify-center lg:-translate-y-8 lg:translate-x-3 xl:-translate-y-10 xl:translate-x-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex w-full max-w-[190px] items-center justify-center sm:max-w-[225px] md:max-w-[250px] lg:max-w-[225px] xl:max-w-[265px] 2xl:max-w-[290px]"
              >
                {/* GREEN GLOW BEHIND THE PICTURE */}
                <div
                  aria-hidden="true"
                  className="absolute inset-[8%] rounded-full bg-green-500/40 blur-[30px] sm:blur-[38px] lg:blur-[42px] xl:blur-[50px]"
                />

                {/* SUBTLE OUTER RING */}
                <div
                  aria-hidden="true"
                  className="absolute inset-1 rounded-full border border-green-400/40 shadow-[0_0_25px_rgba(34,197,94,0.2)] sm:inset-2"
                />

                {/* PROFILE PICTURE — CLOSER TO A CIRCLE */}
                <img
                  src={profilePicture}
                  alt="Manvi Bhandari"
                  className="relative z-10 aspect-square w-full rounded-full border-2 border-green-400/80 object-cover object-[center_25%] shadow-[0_0_25px_rgba(34,197,94,0.25)] sm:border-[3px]"
                  loading="eager"
                  fetchPriority="high"
                />
              </motion.div>
            </div>

            {/* RIGHT COLUMN: STATISTICS */}
            <div
              className="order-3 grid min-w-0 grid-cols-2 gap-5 pt-2 text-center sm:gap-8 sm:pt-3 lg:-translate-y-8
              lg:translate-x-3 lg:grid-cols-1 lg:gap-10 lg:pt-0 xl:-translate-y-10 xl:translate-x-5 xl:gap-12"
            >
              {/* PROJECTS BUILT */}
              <div className="min-w-0">
                <div className="text-3xl font-bold text-green-500 sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                  7+
                </div>

                <p className="mt-2 text-xs leading-5 text-gray-300 sm:text-sm lg:text-xs xl:text-sm 2xl:text-base">
                  Projects Built
                </p>
              </div>

              {/* CORE SKILLS */}
              <div className="min-w-0">
                <div className="text-3xl font-bold text-green-500 sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                  20+
                </div>

                <p className="mt-2 text-xs leading-5 text-gray-300 sm:text-sm lg:text-xs xl:text-sm 2xl:text-base">
                  Core Skills
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SPACER */}
        {/* SPACER */}
<div className="h-4 sm:h-8" />

        {/* SCROLL PROGRESS BAR */}
        <ScrollProgressBar />

        {/* OTHER PORTFOLIO SECTIONS */}
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>

      {/* CUSTOM CURSOR */}
      <motion.div
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-green-500"
        style={{
          translateX: mouseX,
          translateY: mouseY,
        }}
      />

      <motion.div
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 rounded-full border border-green-400"
        style={{
          translateX: springX,
          translateY: springY,
        }}
      />
    </div>
  );
}

export default Home;