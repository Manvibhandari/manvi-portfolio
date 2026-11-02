import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-10 w-full bg-transparent px-5 pb-8 pt-6 text-white sm:mt-12 sm:px-6 sm:pb-10 md:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* Name */}
        <a
          href="#home"
          className="text-lg font-semibold tracking-wide transition-colors duration-300 hover:text-green-400 sm:text-xl"
        >
          <span className="text-green-400">Manvi</span> Bhandari
        </a>

        {/* Email */}
        <a
          href="mailto:manvibhandari.contact@gmail.com"
          className="mt-3 break-all text-sm text-gray-400 transition-colors duration-300 hover:text-green-400 sm:text-base"
        >
          manvibhandari.contact@gmail.com
        </a>

        {/* Social Links */}
        <div className="mt-5 flex items-center justify-center gap-5">
          <a
            href="https://github.com/Manvibhandari"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:text-green-400"
          >
            <Github size={21} aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/manvi-bhandari-680439258/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:text-green-400"
          >
            <Linkedin size={21} aria-hidden="true" />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-5 text-xs leading-relaxed text-gray-500 sm:text-sm">
          © {currentYear} Manvi Bhandari. All rights reserved.
        </p>

        {/* Design Credit */}
        <p className="mt-2 text-xs text-gray-600">
          Designed &amp; built by Manvi Bhandari
        </p>
      </div>
    </footer>
  );
}