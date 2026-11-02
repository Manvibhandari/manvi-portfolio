import React, { useEffect, useState } from "react";

function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { name: "About", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Manvibhandari",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-full w-full"
          aria-hidden="true"
        >
          <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.5-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.76 1.98 3.55 1.4.1-.73.4-1.23.72-1.52-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.33-2.63 5.28-5.14 5.56.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/manvi-bhandari-680439258/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-full w-full"
          aria-hidden="true"
        >
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.96V9.35h2.97v9.55ZM6.45 8.05a1.72 1.72 0 1 1 .02-3.44 1.72 1.72 0 0 1-.02 3.44Zm12.48 10.85h-2.96v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.67V9.35h2.84v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.58 1.97 3.58 4.53v5.26Z" />
        </svg>
      ),
    },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const handleNavigation = (href) => {
    closeMenu();

    window.setTimeout(() => {
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(null, "", href);
      }
    }, 200);
  };

  return (
    <>
      {/* Fixed top navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/85 shadow-lg shadow-black/10 backdrop-blur-md">
        <nav
          className="relative mx-auto flex h-[60px] w-full items-center justify-between gap-3 px-3 sm:h-[64px] sm:px-5 md:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Name */}
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              handleNavigation("#home");
            }}
            className="shrink-0 whitespace-nowrap text-base font-medium tracking-wide text-white transition-colors duration-300 hover:text-green-400 sm:text-lg lg:text-xl"
          >
            <span className="text-green-500">Manvi</span> Bhandari
          </a>

          {/* Desktop navigation */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-3 md:flex lg:gap-4 xl:gap-6">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigation(link.href);
                }}
                className="whitespace-nowrap text-xs font-medium text-gray-300 transition-colors duration-200 hover:text-green-400 lg:text-sm xl:text-base"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop social icons */}
          <div className="hidden shrink-0 items-center gap-4 md:flex lg:gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Manvi's ${social.name} profile`}
                title={social.name}
                className="h-6 w-6 text-gray-300 transition-all duration-300 hover:scale-110 hover:text-green-400"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Hamburger button: mobile and tablet */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-gray-200 transition-colors hover:bg-white/10 hover:text-green-400 md:hidden"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile and tablet sidebar */}
      <div
        className={`fixed inset-0 z-[60] md:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Dark overlay */}
        <button
          type="button"
          tabIndex={isMenuOpen ? 0 : -1}
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className={`absolute inset-0 h-full w-full bg-black/65 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Sidebar panel */}
        <aside
          id="mobile-navigation"
          className={`absolute right-0 top-0 flex h-[100dvh] w-[78vw] max-w-[320px] flex-col overflow-hidden border-l border-white/10 bg-[#080808] shadow-2xl transition-transform duration-300 ease-in-out sm:w-[40vw] sm:max-w-[360px] ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile navigation"
          inert={!isMenuOpen}
        >
          {/* Close button */}
          <div className="flex shrink-0 justify-end border-b border-white/10 px-4 py-3">
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-md text-gray-300 transition-colors hover:bg-white/10 hover:text-green-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          {/* Scrollable navigation area */}
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-5">
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavigation(link.href);
                    }}
                    className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-gray-300 transition-colors duration-200 hover:bg-white/5 hover:text-green-400 sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 shrink-0 rounded-full bg-green-500 transition-transform duration-200 group-hover:scale-125"
                    />

                    <span className="transition-colors duration-200 group-hover:text-green-400">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="shrink-0 border-t border-white/10 px-4 pb-6 pt-5 sm:px-5">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-gray-200 sm:text-sm">
              Connect with me
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Manvi's ${social.name} profile`}
                  title={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-200 transition-colors hover:border-green-500/50 hover:text-green-400"
                >
                  <span className="h-6 w-6">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Topbar;