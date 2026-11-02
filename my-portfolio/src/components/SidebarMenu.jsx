import React from "react";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

const menuItems = [
  { name: "Home", color: "bg-green-500", href: "#home" },
  { name: "About Me", color: "bg-green-500", href: "#about" },
  { name: "Skills", color: "bg-green-500", href: "#skills" },
  { name: "Experience", color: "bg-green-500", href: "#experience" },
  { name: "Projects", color: "bg-green-500", href: "#projects" },
  { name: "Education", color: "bg-green-500", href: "#education" },
  { name: "Contact", color: "bg-green-500", href: "#contact" },
];

function SidebarMenu({ closePanel = () => {} }) {
  const handleClick = (href) => {
    closePanel();

    window.setTimeout(() => {
      const element = document.querySelector(href);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(null, "", href);
      }
    }, 180);
  };

  return (
    <nav
      aria-label="Sidebar navigation"
      className="flex min-h-0 flex-col"
    >
      {/* Navigation Links */}
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.name}>
            <button
              type="button"
              onClick={() => handleClick(item.href)}
              className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium text-gray-300 transition-colors duration-200 hover:bg-white/5 hover:text-green-400 sm:text-base"
            >
              <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
                <span
                  className={`${item.color} h-2 w-2 rounded-full transition-transform duration-200 group-hover:scale-125`}
                />

                <ArrowUpRight
                  aria-hidden="true"
                  className="absolute h-4 w-4 text-green-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
              </span>

              <span className="transition-colors duration-200 group-hover:text-green-400">
                {item.name}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Social Links */}
      <div className="mt-6 border-t border-gray-800 pt-5">
        <p className="mb-4 px-3 text-xs uppercase tracking-[0.2em] text-gray-500">
          Connect with me
        </p>

        <div className="flex items-center gap-5 px-3">
          <a
            href="https://github.com/Manvibhandari"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:text-green-400"
          >
            <Github size={22} aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/manvi-bhandari-680439258/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:text-green-400"
          >
            <Linkedin size={22} aria-hidden="true" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default SidebarMenu;