import React from "react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen w-full scroll-mt-[100px] bg-transparent px-5 pt-2 pb-16 text-white sm:px-8 sm:pb-20 md:px-12 md:pb-24"
    >
      <div className="mx-auto w-full max-w-none">
        {/* MAIN STATEMENT */}
        <div className="w-full pl-3 sm:pl-5 md:pl-8 lg:pl-10">
          <p className="text-[28px] font-light leading-snug tracking-tight text-white sm:text-[36px] md:text-[50px] lg:text-[56px]">
            I believe great software combines thoughtful design with practical functionality.
             I focus on creating intuitive, responsive, and accessible interfaces that deliver seamless user experiences.
          </p>
        </div>

        {/* ABOUT ME SECTION */}
        <div className="mt-16 sm:mt-20 md:mt-20">
          {/* SECTION LABEL */}
          <div className="pl-3 sm:pl-5 md:pl-8 lg:pl-10">
            <p className="mb-3 text-sm uppercase tracking-widest text-gray-400">
              This is me.
            </p>

            <hr className="mb-8 border-gray-600" />
          </div>

          {/* NAME AND INTRODUCTION */}
          <div className="grid grid-cols-1 items-start gap-6 pl-3 sm:pl-5 md:grid-cols-[0.8fr_1.2fr] md:gap-8 md:pl-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:pl-10">
            {/* LEFT SIDE: NAME */}
            <div>
              <h2 className="w-fit max-w-full text-3xl font-anton leading-tight text-white sm:text-4xl md:text-[40px] lg:text-[44px]">
                Hi, I'm Manvi.
              </h2>
            </div>

            {/* RIGHT SIDE: INTRODUCTION */}
            <div className="w-full max-w-none space-y-4 text-base leading-relaxed text-gray-400 sm:text-lg sm:leading-8">
              <p>
                I enjoy transforming complex ideas into functional web applications using modern
                 frontend technologies and Java-based backend development. My technical experience includes
                  building REST APIs with Java and Spring Boot, implementing JWT authentication and role-based 
                  access control, integrating real-time communication using WebSockets, and connecting applications with
                   databases and external APIs. I also work with tools like Docker and Docker Compose to containerize 
                   applications, while focusing on clean code, maintainable architecture, and reliable application
                    functionality. My goal is to build scalable, 
                efficient solutions that combine strong technical foundations with practical user needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}